<template>
  <div
    :class="
      cn('text-3d flex items-center justify-center', animate ? 'animate-text-3d' : '', props.class)
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, type HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  textColor?: string;
  letterSpacing?: number;
  strokeColor?: string;
  shadowColor?: string;
  strokeSize?: number;
  shadow1Size?: number;
  shadow2Size?: number;
  class?: HTMLAttributes["class"];
  animate?: boolean;
  animationDuration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  textColor: "white",
  letterSpacing: -0.1,
  strokeColor: "black",
  shadowColor: "yellow",
  strokeSize: 20,
  shadow1Size: 7,
  shadow2Size: 10,
  animate: true,
  animationDuration: 1500,
});

const letterSpacingInCh = computed(() => {
  return `${props.letterSpacing}ch`;
});

const strokeSizeInPx = computed(() => {
  return `${props.strokeSize}px`;
});

const shadow1SizeInPx = computed(() => {
  return `${props.shadow1Size}px`;
});

const shadow2SizeInPx = computed(() => {
  return `${props.shadow2Size}px`;
});

const animationDurationInMs = computed(() => {
  return `${props.animationDuration}ms`;
});
</script>

<style scoped>
.text-3d {
  paint-order: stroke fill;
  letter-spacing: v-bind(letterSpacingInCh);
  -webkit-text-stroke: v-bind(strokeSizeInPx) v-bind(strokeColor);
  text-shadow:
    v-bind(shadow1SizeInPx) v-bind(shadow1SizeInPx) 0px v-bind(strokeColor),
    v-bind(shadow2SizeInPx) v-bind(shadow2SizeInPx) 0px v-bind(shadowColor);
  color: v-bind(textColor);
}

.animate-text-3d {
  animation: wiggle v-bind(animationDurationInMs) ease-in-out infinite alternate;
  animation-timing-function: ease-in-out;
  transform-origin: center;
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  12% {
    transform: rotate(5deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  38% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
