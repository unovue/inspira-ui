<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import {
  animate,
  Motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion-v";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

export interface CubeCarouselItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
}

export type CubeCarouselDirection = "top" | "bottom" | "left" | "right";

export interface CubeCarouselSpringConfig {
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export interface CubeCarouselRef {
  next: () => void;
  prev: () => void;
  getCurrentItemIndex: () => number;
}

interface Props {
  items: CubeCarouselItem[];
  width: number;
  height: number;
  class?: HTMLAttributes["class"];
  debug?: boolean;
  perspective?: number;
  direction?: CubeCarouselDirection;
  transition?: Record<string, unknown>;
  snapTransition?: Record<string, unknown>;
  dragSpring?: CubeCarouselSpringConfig;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  onIndexChange?: (index: number) => void;
  enableDrag?: boolean;
  dragSensitivity?: number;
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  debug: false,
  perspective: 600,
  direction: "left",
  transition: () => ({ duration: 1.25, ease: [0.953, 0.001, 0.019, 0.995] }),
  snapTransition: () => ({ type: "spring", damping: 30, stiffness: 200 }),
  dragSpring: () => ({ stiffness: 200, damping: 30 }),
  autoPlay: false,
  autoPlayInterval: 3000,
  enableDrag: true,
  dragSensitivity: 0.5,
});

const carouselRef = ref<HTMLElement | null>(null);
const currentItemIndex = ref(0);
const currentFrontFaceIndex = ref(1);
const prevIndex = ref(Math.max(props.items.length - 1, 0));
const currentIndex = ref(0);
const nextIndex = ref(props.items.length > 1 ? 1 : 0);
const afterNextIndex = ref(props.items.length > 2 ? 2 : 0);
const currentRotation = ref(0);
const isDragging = ref(false);
const startPosition = ref({ x: 0, y: 0 });
const startRotation = ref(0);
const pendingIndexChange = ref<number | null>(null);
const isRotating = ref(false);

const baseRotateX = useMotionValue(0);
const baseRotateY = useMotionValue(0);
const springRotateX = useSpring(baseRotateX, props.dragSpring);
const springRotateY = useSpring(baseRotateY, props.dragSpring);
const prefersReducedMotion = useReducedMotion();
const activeAnimation = ref<{ stop: () => void } | null>(null);

const itemCount = computed(() => props.items.length);
const depth = computed(() =>
  props.direction === "top" || props.direction === "bottom" ? props.height : props.width,
);
const effectiveTransition = computed(() =>
  prefersReducedMotion.value ? { duration: 0 } : props.transition,
);

const cubeTransform = useTransform(
  [springRotateX, springRotateY],
  ([x, y]) => `translateZ(-${depth.value / 2}px) rotateX(${x}deg) rotateY(${y}deg)`,
);

function normalizeIndex(index: number) {
  if (!itemCount.value) return 0;
  return ((index % itemCount.value) + itemCount.value) % itemCount.value;
}

function itemAt(index: number) {
  return props.items[normalizeIndex(index)];
}

const faceTransforms = computed(() => {
  switch (props.direction) {
    case "top":
      return [
        `rotateX(90deg) translateZ(${props.height / 2}px)`,
        `rotateY(0deg) translateZ(${depth.value / 2}px)`,
        `rotateX(-90deg) translateZ(${props.height / 2}px)`,
        `rotateY(180deg) translateZ(${depth.value / 2}px) rotateZ(180deg)`,
      ];
    case "right":
      return [
        `rotateY(90deg) translateZ(${props.width / 2}px)`,
        `rotateY(0deg) translateZ(${depth.value / 2}px)`,
        `rotateY(-90deg) translateZ(${props.width / 2}px)`,
        `rotateY(180deg) translateZ(${depth.value / 2}px)`,
      ];
    case "bottom":
      return [
        `rotateX(-90deg) translateZ(${props.height / 2}px)`,
        `rotateY(0deg) translateZ(${depth.value / 2}px)`,
        `rotateX(90deg) translateZ(${props.height / 2}px)`,
        `rotateY(180deg) translateZ(${depth.value / 2}px) rotateZ(180deg)`,
      ];
    default:
      return [
        `rotateY(-90deg) translateZ(${props.width / 2}px)`,
        `rotateY(0deg) translateZ(${depth.value / 2}px)`,
        `rotateY(90deg) translateZ(${props.width / 2}px)`,
        `rotateY(180deg) translateZ(${depth.value / 2}px)`,
      ];
  }
});

const faces = computed(() => [
  { key: "prev", item: itemAt(prevIndex.value), color: "#ff9999" },
  { key: "current", item: itemAt(currentIndex.value), color: "#99ff99" },
  { key: "next", item: itemAt(nextIndex.value), color: "#9999ff" },
  { key: "after-next", item: itemAt(afterNextIndex.value), color: "#ffff99" },
]);

function stopAnimation() {
  activeAnimation.value?.stop();
  activeAnimation.value = null;
}

function finishRotation(triggeredBy: "next" | "prev") {
  if (!isRotating.value || pendingIndexChange.value === null) return;

  const nextFrontFaceIndex =
    triggeredBy === "next"
      ? (currentFrontFaceIndex.value + 1) % 4
      : (currentFrontFaceIndex.value - 1 + 4) % 4;
  const backFaceIndex =
    triggeredBy === "next" ? (nextFrontFaceIndex + 2) % 4 : (nextFrontFaceIndex + 3) % 4;
  const indexOffset = triggeredBy === "next" ? 2 : -1;
  const resolvedIndex = pendingIndexChange.value;

  currentItemIndex.value = resolvedIndex;
  props.onIndexChange?.(resolvedIndex);

  const replacementIndex = normalizeIndex(resolvedIndex + indexOffset);
  if (backFaceIndex === 0) prevIndex.value = replacementIndex;
  if (backFaceIndex === 1) currentIndex.value = replacementIndex;
  if (backFaceIndex === 2) nextIndex.value = replacementIndex;
  if (backFaceIndex === 3) afterNextIndex.value = replacementIndex;

  pendingIndexChange.value = null;
  currentFrontFaceIndex.value = nextFrontFaceIndex;
  isRotating.value = false;
  activeAnimation.value = null;
}

function animateRotation(
  axis: ReturnType<typeof useMotionValue<number>>,
  target: number,
  triggeredBy: "next" | "prev",
) {
  stopAnimation();
  activeAnimation.value = animate(axis, target, {
    ...(effectiveTransition.value as object),
    onComplete: () => {
      currentRotation.value = target;
      finishRotation(triggeredBy);
    },
  } as never) as { stop: () => void };
}

function next() {
  if (!itemCount.value || isRotating.value) return;

  isRotating.value = true;
  pendingIndexChange.value = normalizeIndex(currentItemIndex.value + 1);
  const amount = props.direction === "top" || props.direction === "right" ? 90 : -90;
  const axis =
    props.direction === "top" || props.direction === "bottom" ? baseRotateX : baseRotateY;
  animateRotation(axis, currentRotation.value + amount, "next");
}

function prev() {
  if (!itemCount.value || isRotating.value) return;

  isRotating.value = true;
  pendingIndexChange.value = normalizeIndex(currentItemIndex.value - 1);
  const amount = props.direction === "top" || props.direction === "right" ? -90 : 90;
  const axis =
    props.direction === "top" || props.direction === "bottom" ? baseRotateX : baseRotateY;
  animateRotation(axis, currentRotation.value + amount, "prev");
}

function handlePointerDown(event: PointerEvent) {
  if (
    !props.enableDrag ||
    isRotating.value ||
    (event.pointerType === "mouse" && event.button !== 0)
  ) {
    return;
  }

  isDragging.value = true;
  startPosition.value = { x: event.clientX, y: event.clientY };
  startRotation.value = currentRotation.value;
  carouselRef.value?.setPointerCapture(event.pointerId);
  event.preventDefault();
}

function handlePointerMove(event: PointerEvent) {
  if (!isDragging.value || isRotating.value) return;

  const deltaX = event.clientX - startPosition.value.x;
  const deltaY = event.clientY - startPosition.value.y;
  const isVertical = props.direction === "top" || props.direction === "bottom";
  const delta = isVertical ? deltaY : deltaX;
  const rotationDelta = (delta * props.dragSensitivity) / 2;
  const signedDelta =
    props.direction === "top" || props.direction === "right" ? rotationDelta : -rotationDelta;
  const nextRotation = Math.max(
    startRotation.value - 120,
    Math.min(startRotation.value + 120, startRotation.value + signedDelta),
  );

  if (isVertical) baseRotateX.set(nextRotation);
  else baseRotateY.set(nextRotation);
}

function handlePointerUp(event: PointerEvent) {
  if (!isDragging.value) return;

  isDragging.value = false;
  if (carouselRef.value?.hasPointerCapture(event.pointerId)) {
    carouselRef.value.releasePointerCapture(event.pointerId);
  }

  const isVertical = props.direction === "top" || props.direction === "bottom";
  const axis = isVertical ? baseRotateX : baseRotateY;
  const currentValue = axis.get();
  const snappedRotation = Math.round(currentValue / 90) * 90;
  const steps = Math.round((snappedRotation - currentRotation.value) / 90);

  if (!steps) {
    activeAnimation.value = animate(axis, currentRotation.value, props.snapTransition as never) as {
      stop: () => void;
    };
    return;
  }

  isRotating.value = true;
  let nextItemIndex = currentItemIndex.value;
  for (let index = 0; index < Math.abs(steps); index += 1) {
    nextItemIndex = normalizeIndex(nextItemIndex + (steps > 0 ? 1 : -1));
  }
  pendingIndexChange.value = nextItemIndex;
  stopAnimation();
  activeAnimation.value = animate(axis, snappedRotation, {
    ...(props.snapTransition as object),
    onComplete: () => {
      currentRotation.value = snappedRotation;
      finishRotation(steps > 0 ? "next" : "prev");
    },
  } as never) as { stop: () => void };
}

function handleKeyDown(event: KeyboardEvent) {
  if (isRotating.value) return;

  const horizontal = props.direction === "left" || props.direction === "right";
  if (horizontal && event.key === "ArrowLeft") {
    event.preventDefault();
    prev();
  }
  if (horizontal && event.key === "ArrowRight") {
    event.preventDefault();
    next();
  }
  if (!horizontal && event.key === "ArrowUp") {
    event.preventDefault();
    prev();
  }
  if (!horizontal && event.key === "ArrowDown") {
    event.preventDefault();
    next();
  }
}

let autoplayTimer: number | null = null;

function clearAutoplay() {
  if (autoplayTimer !== null) window.clearInterval(autoplayTimer);
  autoplayTimer = null;
}

function setupAutoplay() {
  clearAutoplay();
  if (props.autoPlay && itemCount.value) {
    autoplayTimer = window.setInterval(next, props.autoPlayInterval);
  }
}

watch(() => [props.autoPlay, props.autoPlayInterval, itemCount.value], setupAutoplay);

onMounted(setupAutoplay);
onBeforeUnmount(() => {
  clearAutoplay();
  stopAnimation();
});

defineExpose<CubeCarouselRef>({ next, prev, getCurrentItemIndex: () => currentItemIndex.value });
</script>

<template>
  <div
    ref="carouselRef"
    v-bind="$attrs"
    :class="
      cn('relative focus:outline-0', props.enableDrag && 'cursor-move touch-none', props.class)
    "
    :style="{
      width: `${props.width}px`,
      height: `${props.height}px`,
      perspective: `${props.perspective}px`,
    }"
    tabindex="0"
    :aria-label="`3D carousel with ${itemCount} items`"
    aria-describedby="cube-carousel-instructions"
    aria-live="polite"
    aria-atomic="true"
    @keydown="handleKeyDown"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp"
  >
    <div
      id="cube-carousel-instructions"
      class="sr-only"
      aria-live="assertive"
    >
      Showing item {{ currentItemIndex + 1 }} of {{ itemCount }}:
      {{ itemAt(currentItemIndex)?.alt || `Item ${currentItemIndex + 1}` }}
    </div>

    <Motion
      class="relative size-full [transform-style:preserve-3d]"
      :style="{ transform: cubeTransform }"
    >
      <div
        v-for="(face, index) in faces"
        :key="face.key"
        :class="cn('absolute overflow-hidden', props.debug && 'opacity-50')"
        :style="{
          width: `${props.width}px`,
          height: `${props.height}px`,
          transform: faceTransforms[index],
          backgroundColor: props.debug ? face.color : undefined,
        }"
      >
        <div
          v-if="props.debug"
          class="flex size-full items-center justify-center border text-2xl"
        >
          {{ face.item?.id || index + 1 }}
        </div>
        <video
          v-else-if="face.item?.type === 'video'"
          :src="face.item.src"
          :poster="face.item.poster"
          class="size-full object-cover"
          muted
          loop
          autoplay
          playsinline
        />
        <img
          v-else-if="face.item"
          :src="face.item.src"
          :alt="face.item.alt || ''"
          draggable="false"
          class="size-full object-cover"
        />
      </div>
    </Motion>
  </div>
</template>
