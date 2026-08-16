<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { Motion, useAnimationFrame, useMotionValue } from "motion-v";

interface Props {
  speed?: number;
  amplitude?: [number, number, number];
  rotationRange?: [number, number, number];
  timeOffset?: number;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  speed: 0.5,
  amplitude: () => [10, 30, 30] as [number, number, number],
  rotationRange: () => [15, 15, 7.5] as [number, number, number],
  timeOffset: 0,
});

const x = useMotionValue(0);
const y = useMotionValue(0);
const z = useMotionValue(0);
const rotateX = useMotionValue(0);
const rotateY = useMotionValue(0);
const rotateZ = useMotionValue(0);

let time = 0;

useAnimationFrame(() => {
  time += props.speed * 0.02;

  x.set(Math.sin(time * 0.7 + props.timeOffset) * props.amplitude[0]);
  y.set(Math.sin(time * 0.6 + props.timeOffset) * props.amplitude[1]);
  z.set(Math.sin(time * 0.5 + props.timeOffset) * props.amplitude[2]);
  rotateX.set(Math.sin(time * 0.5 + props.timeOffset) * props.rotationRange[0]);
  rotateY.set(Math.sin(time * 0.4 + props.timeOffset) * props.rotationRange[1]);
  rotateZ.set(Math.sin(time * 0.3 + props.timeOffset) * props.rotationRange[2]);
});
</script>

<template>
  <Motion
    :class="cn('will-change-transform', props.class)"
    :style="{
      x,
      y,
      z,
      rotateX,
      rotateY,
      rotateZ,
      transformStyle: 'preserve-3d',
    }"
  >
    <slot />
  </Motion>
</template>
