<template>
  <svg v-if="path" class="pointer-events-none absolute inset-0 size-full">
    <circle
      class="stroke-black/10 stroke-1 dark:stroke-white/10"
      cx="50%"
      cy="50%"
      :r="radius"
      fill="none"
    />
  </svg>
  <div
    :style="{
      '--duration': duration,
      '--radius': radius,
      '--delay': -delay,
      '--direction': reverse ? 'reverse' : 'normal',
    }"
    :class="
      cn(
        'absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 dark:bg-white/10',
        $props.class
      )
    "
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";

const props = defineProps({
  class: String,
  reverse: { type: Boolean, default: false },
  duration: { type: Number, default: 20 },
  delay: { type: Number, default: 10 },
  radius: { type: Number, default: 50 },
  path: { type: Boolean, default: true },
});
</script>

<style scoped>
@keyframes orbit {
  0% {
    transform: rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateY(calc(var(--radius) * 1px))
      rotate(-360deg);
  }
}

.animate-orbit {
  animation: orbit calc(var(--duration) * 1s) linear infinite;
  animation-delay: calc(var(--delay) * 1s);
  animation-direction: var(--direction);
}
</style>
