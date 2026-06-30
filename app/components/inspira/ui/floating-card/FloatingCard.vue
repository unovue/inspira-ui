<script lang="ts" setup>
import { cn } from "@inspira-ui/plugins";
import { useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion-v";
import { onBeforeUnmount, onMounted } from "vue";

export interface Props {
  rotateDepth?: number;
  translateDepth?: number;
  class?: string;
}

const { rotateDepth = 17.5, translateDepth = 20, ...props } = defineProps<Props>();

const floatingCardRef = useTemplateRef<HTMLElement>("floatingCardRef");
const cardRef = useTemplateRef<HTMLElement>("cardRef");
const glareRef = useTemplateRef<HTMLElement>("glareRef");

const x = useMotionValue(0);
const y = useMotionValue(0);
const scaleTarget = useMotionValue(1);
const zTarget = useMotionValue(0);
const glareOpacityTarget = useMotionValue(0);

const mouseXSpring = useSpring(x);
const mouseYSpring = useSpring(y);
const scale = useSpring(scaleTarget, { damping: 22, stiffness: 260 });
const z = useSpring(zTarget, { damping: 22, stiffness: 260 });
const glareOpacity = useSpring(glareOpacityTarget, { damping: 24, stiffness: 220 });

const rotateX = useTransform(
  mouseYSpring,
  [-0.5, 0.5],
  [`-${rotateDepth}deg`, `${rotateDepth}deg`],
);
const rotateY = useTransform(
  mouseXSpring,
  [-0.5, 0.5],
  [`${rotateDepth}deg`, `-${rotateDepth}deg`],
);

const translateX = useTransform(
  mouseXSpring,
  [-0.5, 0.5],
  [`-${translateDepth}px`, `${translateDepth}px`],
);
const translateY = useTransform(
  mouseYSpring,
  [-0.5, 0.5],
  [`${translateDepth}px`, `-${translateDepth}px`],
);

const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)`;
const cardTransform = useMotionTemplate`translateX(${translateX}) translateY(${translateY}) translateZ(${z}px) rotateX(${rotateX}) rotateY(${rotateY}) scale(${scale})`;

const cleanupFns: Array<() => void> = [];

function bindMotionValue<T>(
  value: { get: () => T; on: (event: "change", handler: (latest: T) => void) => () => void },
  handler: (latest: T) => void,
) {
  handler(value.get());
  cleanupFns.push(value.on("change", handler));
}

onMounted(() => {
  if (cardRef.value) {
    bindMotionValue(cardTransform, (latest) => {
      cardRef.value!.style.transform = latest;
    });
  }

  if (glareRef.value) {
    bindMotionValue(glareBackground, (latest) => {
      glareRef.value!.style.background = latest;
    });
    bindMotionValue(glareOpacity, (latest) => {
      glareRef.value!.style.opacity = String(latest);
    });
  }
});

onBeforeUnmount(() => {
  cleanupFns.forEach((cleanup) => cleanup());
});

function handlePointerMove(e: PointerEvent) {
  if (e.pointerType === "touch" || !floatingCardRef.value) return;

  const rect = floatingCardRef.value.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;

  if (!width || !height) return;

  const xPct = (e.clientX - rect.left) / width - 0.5;
  const yPct = (e.clientY - rect.top) / height - 0.5;

  x.set(xPct);
  y.set(yPct);
}

function handlePointerEnter(e: PointerEvent) {
  if (e.pointerType === "touch") return;

  scaleTarget.set(1.05);
  zTarget.set(50);
  glareOpacityTarget.set(0.6);
}

function resetCard() {
  x.set(0);
  y.set(0);
  scaleTarget.set(1);
  zTarget.set(0);
  glareOpacityTarget.set(0);
}
</script>

<template>
  <div
    ref="floatingCardRef"
    :class="cn('perspective-distant transform-3d', props.class)"
    @pointerenter="handlePointerEnter"
    @pointermove="handlePointerMove"
    @pointerleave="resetCard"
    @pointercancel="resetCard"
  >
    <div
      ref="cardRef"
      :style="{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        boxShadow: `rgba(0, 0, 0, 0.01) 0px 520px 146px 0px, rgba(0, 0, 0, 0.04) 0px 333px 133px 0px, rgba(0, 0, 0, 0.26) 0px 83px 83px 0px, rgba(0, 0, 0, 0.29) 0px 21px 46px 0px`,
      }"
      class="relative rounded-2xl"
    >
      <slot />
      <div
        ref="glareRef"
        class="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay"
      />
    </div>
  </div>
</template>
