<script setup lang="ts">
import type { HTMLAttributes, VNode } from "vue";
import { cn } from "@inspira-ui/plugins";
import {
  cloneVNode,
  Comment,
  computed,
  Fragment,
  isVNode,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  useId,
  useSlots,
  watch,
} from "vue";

export type PreserveAspectRatioAlign =
  | "none"
  | "xMinYMin"
  | "xMidYMin"
  | "xMaxYMin"
  | "xMinYMid"
  | "xMidYMid"
  | "xMaxYMid"
  | "xMinYMax"
  | "xMidYMax"
  | "xMaxYMax";

export type PreserveAspectRatio =
  | PreserveAspectRatioAlign
  | `${Exclude<PreserveAspectRatioAlign, "none">} ${"meet" | "slice"}`;

export interface CSSVariableInterpolation {
  property: string;
  from: number | string;
  to: number | string;
}

interface SpringConfig {
  damping?: number;
  stiffness?: number;
}

interface PathItem {
  childIndex: number;
  itemIndex: number;
  key: string;
  repeatIndex: number;
}

export interface Props {
  path: string;
  pathId?: string;
  preserveAspectRatio?: PreserveAspectRatio;
  showPath?: boolean;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  baseVelocity?: number;
  direction?: "normal" | "reverse";
  easing?: (value: number) => number;
  slowdownOnHover?: boolean;
  slowDownFactor?: number;
  slowDownSpringConfig?: SpringConfig;
  useScrollVelocity?: boolean;
  scrollAwareDirection?: boolean;
  scrollSpringConfig?: SpringConfig;
  scrollContainer?: HTMLElement | null;
  repeat?: number;
  draggable?: boolean;
  dragSensitivity?: number;
  dragVelocityDecay?: number;
  dragAwareDirection?: boolean;
  grabCursor?: boolean;
  enableRollingZIndex?: boolean;
  zIndexBase?: number;
  zIndexRange?: number;
  cssVariableInterpolation?: CSSVariableInterpolation[];
  responsive?: boolean;
  class?: HTMLAttributes["class"];
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  preserveAspectRatio: "xMidYMid meet" as PreserveAspectRatio,
  showPath: false,
  width: "100%",
  height: "100%",
  viewBox: "0 0 100 100",
  baseVelocity: 5,
  direction: "normal",
  slowdownOnHover: false,
  slowDownFactor: 0.3,
  slowDownSpringConfig: () => ({ damping: 50, stiffness: 400 }),
  useScrollVelocity: false,
  scrollAwareDirection: false,
  scrollSpringConfig: () => ({ damping: 50, stiffness: 400 }),
  repeat: 3,
  draggable: false,
  dragSensitivity: 0.2,
  dragVelocityDecay: 0.96,
  dragAwareDirection: false,
  grabCursor: false,
  enableRollingZIndex: true,
  zIndexBase: 1,
  zIndexRange: 10,
  cssVariableInterpolation: () => [],
  responsive: false,
});

const numericPrefix = /^[+-]?(?:\d+\.?\d*|\.\d+)/;

const slots = useSlots();
const generatedId = useId();
const containerRef = ref<HTMLElement | null>(null);
const marqueeContainerRef = ref<HTMLElement | null>(null);
const itemElements = new Map<string, HTMLElement>();
const isHovered = ref(false);
const isDragging = ref(false);
let baseOffset = 0;
let dragVelocity = 0;
let scrollVelocity = 0;
let directionFactor = props.direction === "normal" ? 1 : -1;

const pathIdentifier = computed(() => props.pathId || `path-marquee-${generatedId}`);

function flattenSlotNodes(nodes: VNode[]): VNode[] {
  return nodes.flatMap((node) => {
    if (node.type === Comment) return [];

    if (node.type === Fragment && Array.isArray(node.children)) {
      return flattenSlotNodes(node.children.filter(isVNode));
    }

    return [node];
  });
}

const childNodes = computed(() => flattenSlotNodes(slots.default?.() ?? []));
const items = computed<PathItem[]>(() => {
  const repeat = Math.max(1, Math.floor(props.repeat));

  return Array.from({ length: repeat }).flatMap((_, repeatIndex) =>
    childNodes.value.map((_, childIndex) => ({
      childIndex,
      repeatIndex,
      itemIndex: repeatIndex * childNodes.value.length + childIndex,
      key: `${repeatIndex}-${childIndex}`,
    })),
  );
});

let animationFrame = 0;
let lastFrameTime = 0;
let resizeObserver: ResizeObserver | undefined;
let scrollTarget: HTMLElement | Window | undefined;
let lastScrollPosition = 0;
let lastPointerPosition = { x: 0, y: 0 };

function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

function setItemRef(key: string, element: Element | null) {
  if (element instanceof HTMLElement) {
    itemElements.set(key, element);
    element.style.setProperty("offset-path", `path('${props.path}')`);
    element.style.setProperty("will-change", "offset-distance");
    element.style.setProperty("backface-visibility", "hidden");
  } else {
    itemElements.delete(key);
  }
}

function calculateZIndex(offsetDistance: number) {
  if (!props.enableRollingZIndex) return undefined;

  return Math.floor(props.zIndexBase + (offsetDistance / 100) * props.zIndexRange);
}

function interpolateValue(from: number | string, to: number | string, progress: number) {
  if (typeof from === "number" && typeof to === "number") {
    return String(from + (to - from) * progress);
  }

  const fromString = String(from);
  const toString = String(to);
  const fromMatch = numericPrefix.exec(fromString);
  const toMatch = numericPrefix.exec(toString);

  if (fromMatch && toMatch) {
    const fromUnit = fromString.slice(fromMatch[0].length);
    const toUnit = toString.slice(toMatch[0].length);

    if (fromUnit === toUnit) {
      const value = Number(fromMatch[0]) + (Number(toMatch[0]) - Number(fromMatch[0])) * progress;
      return `${value}${fromUnit}`;
    }
  }

  return progress < 0.5 ? String(from) : String(to);
}

function updateItemStyles() {
  const itemCount = items.value.length;
  if (!itemCount) return;

  items.value.forEach((item) => {
    const element = itemElements.get(item.key);
    if (!element) return;

    const position = (item.itemIndex * 100) / itemCount;
    const wrappedValue = wrap(0, 100, baseOffset + position);
    const progress = props.easing ? props.easing(wrappedValue / 100) : wrappedValue / 100;
    const offsetDistance = progress * 100;

    element.style.setProperty("offset-distance", `${offsetDistance}%`);

    const zIndex = calculateZIndex(offsetDistance);
    if (zIndex === undefined) element.style.removeProperty("z-index");
    else element.style.setProperty("z-index", String(zIndex));

    props.cssVariableInterpolation.forEach(({ property, from, to }) => {
      element.style.setProperty(property, interpolateValue(from, to, offsetDistance / 100));
    });
  });
}

function updateResponsiveScale() {
  if (!props.responsive || !containerRef.value || !marqueeContainerRef.value) return;

  const [, , viewBoxWidth = 100, viewBoxHeight = 100] = props.viewBox.split(" ").map(Number);
  const scale = Math.min(
    containerRef.value.clientWidth / viewBoxWidth,
    containerRef.value.clientHeight / viewBoxHeight,
  );
  const scaledWidth = viewBoxWidth * scale;
  const scaledHeight = viewBoxHeight * scale;
  const offsetX = (containerRef.value.clientWidth - scaledWidth) / 2;
  const offsetY = (containerRef.value.clientHeight - scaledHeight) / 2;

  marqueeContainerRef.value.style.width = `${viewBoxWidth}px`;
  marqueeContainerRef.value.style.height = `${viewBoxHeight}px`;
  marqueeContainerRef.value.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
  marqueeContainerRef.value.style.transformOrigin = "top left";
}

function getScrollPosition() {
  if (props.scrollContainer) return props.scrollContainer.scrollTop;
  if (containerRef.value) return containerRef.value.scrollTop;
  return window.scrollY;
}

function updateScrollVelocity() {
  const position = getScrollPosition();
  scrollVelocity = position - lastScrollPosition;
  lastScrollPosition = position;
}

function updateFrame(time: number) {
  const delta = Math.min(time - lastFrameTime, 64);
  lastFrameTime = time;

  const targetHoverFactor = isHovered.value && props.slowdownOnHover ? props.slowDownFactor : 1;
  const spring = props.slowDownSpringConfig.stiffness ?? 400;
  const springProgress = 1 - Math.exp((-spring * delta) / 100000);
  const currentHoverFactor = Number(containerRef.value?.dataset.hoverFactor ?? 1);
  const hoverFactor =
    currentHoverFactor + (targetHoverFactor - currentHoverFactor) * springProgress;
  containerRef.value?.dataset && (containerRef.value.dataset.hoverFactor = String(hoverFactor));

  if (isDragging.value && props.draggable) {
    baseOffset += dragVelocity;
    dragVelocity *= props.dragVelocityDecay;
  } else {
    if (props.scrollAwareDirection && Math.abs(scrollVelocity) > 0.01) {
      directionFactor = Math.sign(scrollVelocity);
    }

    const scrollFactor = props.useScrollVelocity
      ? Math.max(-5, Math.min(5, scrollVelocity / 200))
      : 0;
    const moveBy =
      directionFactor * props.baseVelocity * (delta / 1000) * hoverFactor * (1 + scrollFactor);

    baseOffset += moveBy + (props.draggable ? dragVelocity : 0);

    if (props.draggable) dragVelocity *= props.dragVelocityDecay;
  }

  scrollVelocity *= 0.9;
  updateItemStyles();
  animationFrame = requestAnimationFrame(updateFrame);
}

function handlePointerDown(event: PointerEvent) {
  if (!props.draggable || !containerRef.value) return;

  containerRef.value.setPointerCapture(event.pointerId);
  isDragging.value = true;
  dragVelocity = 0;
  lastPointerPosition = { x: event.clientX, y: event.clientY };
}

function handlePointerMove(event: PointerEvent) {
  if (!props.draggable || !isDragging.value) return;

  const deltaX = event.clientX - lastPointerPosition.x;
  const deltaY = event.clientY - lastPointerPosition.y;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  dragVelocity = (deltaX > 0 ? distance : -distance) * props.dragSensitivity;
  lastPointerPosition = { x: event.clientX, y: event.clientY };

  if (props.dragAwareDirection && Math.abs(dragVelocity) > 0.1) {
    directionFactor = Math.sign(dragVelocity);
  }
}

function handlePointerUp(event: PointerEvent) {
  if (!props.draggable || !containerRef.value) return;

  if (containerRef.value.hasPointerCapture(event.pointerId)) {
    containerRef.value.releasePointerCapture(event.pointerId);
  }
  isDragging.value = false;
}

function setHovered(value: boolean) {
  isHovered.value = value;
}

onMounted(async () => {
  await nextTick();
  updateResponsiveScale();
  updateItemStyles();

  if (props.responsive && containerRef.value) {
    resizeObserver = new ResizeObserver(updateResponsiveScale);
    resizeObserver.observe(containerRef.value);
  }

  scrollTarget = props.scrollContainer ?? containerRef.value ?? window;
  scrollTarget.addEventListener("scroll", updateScrollVelocity, { passive: true });
  lastScrollPosition = getScrollPosition();
  animationFrame = requestAnimationFrame(updateFrame);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame);
  resizeObserver?.disconnect();
  scrollTarget?.removeEventListener("scroll", updateScrollVelocity);
  itemElements.clear();
});

watch(
  () => [props.path, props.viewBox, props.responsive, props.repeat] as const,
  async () => {
    await nextTick();
    itemElements.forEach((element) =>
      element.style.setProperty("offset-path", `path('${props.path}')`),
    );
    updateResponsiveScale();
    updateItemStyles();
  },
);

watch(
  () => props.direction,
  (value) => {
    directionFactor = value === "normal" ? 1 : -1;
  },
);
</script>

<template>
  <div
    ref="containerRef"
    v-bind="$attrs"
    :class="
      cn(
        'relative',
        props.draggable && 'touch-none',
        props.draggable && props.grabCursor && (isDragging ? 'cursor-grabbing' : 'cursor-grab'),
        props.class,
      )
    "
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp"
  >
    <div
      ref="marqueeContainerRef"
      class="relative"
      style="contain: layout style"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="props.width"
        :height="props.height"
        :viewBox="props.viewBox"
        :preserveAspectRatio="props.preserveAspectRatio"
        class="h-full w-full"
      >
        <path
          :id="pathIdentifier"
          :d="props.path"
          :stroke="props.showPath ? 'currentColor' : 'none'"
          fill="none"
        />
      </svg>

      <div
        v-for="item in items"
        :key="item.key"
        :ref="(element) => setItemRef(item.key, element)"
        class="absolute top-0 left-0"
        :aria-hidden="item.repeatIndex > 0 ? 'true' : undefined"
        @mouseenter="setHovered(true)"
        @mouseleave="setHovered(false)"
      >
        <component :is="cloneVNode(childNodes[item.childIndex] as VNode, { key: item.key })" />
      </div>
    </div>
  </div>
</template>
