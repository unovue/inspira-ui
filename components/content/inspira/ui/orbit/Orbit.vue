<template>
  <svg v-if="path" class="pointer-events-none absolute inset-0 size-full">
    <circle class="stroke-1 stroke-foreground/20" cx="50%" cy="50%" :r="radius" fill="none" />
  </svg>
  <div
    :style="{
      '--duration': duration,
      '--radius': radius,
      '--delay': -delay,
      '--direction': reverse ? 'reverse' : 'normal',
    }"
    :class="cn('absolute flex size-full transform-gpu animate-orbit', props.class)"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";

interface Props {
  class?: string;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false,
  duration: 20,
  delay: 10,
  radius: 50,
  path: true,
});
</script>

<style scoped>
@keyframes orbit {
  0% {
    transform: rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg);
  }
}

.animate-orbit {
  animation: orbit calc(var(--duration) * 1s) linear infinite;
  animation-delay: calc(var(--delay) * 1s);
  animation-direction: var(--direction);
}
</style>
