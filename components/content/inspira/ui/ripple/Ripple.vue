<template>
  <div
    :class="
      cn(
        'absolute inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]',
        props.class,
      )
    "
  >
    <div
      v-for="(_, i) in numberOfCircles"
      :key="i"
    >
      <div
        :key="i"
        :class="
          cn('absolute rounded-full bg-[#0000]/25 dark:bg-[#fff]/25 shadow-xl', 'animate-ripple')
        "
        :style="{
          width: `${props.circleSize + i * 70}px`,
          height: `${props.circleSize + i * 70}px`,
          opacity: props.circleOpacity - i * 0.03,
          animationDelay: `${i * 0.06}s`,
          borderStyle: i === props.count - 1 ? 'dashed' : 'solid',
          borderWidth: '1px',
          borderColor: `hsl(var(--foreground), ${5 + (i * 5) / 100})`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(1)',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";

interface RippleProps {
  circleSize?: number;
  circleOpacity?: number;
  count?: number;
  class?: string;
}

const props = withDefaults(defineProps<RippleProps>(), {
  circleSize: 210,
  circleOpacity: 0.24,
  count: 8,
});

const numberOfCircles = computed(() => {
  return Array.from({ length: props.count });
});
</script>

<style scoped>
.animate-ripple {
  animation: ripple-effect var(--duration, 2s) ease-in-out calc(var(--i, 0) * 0.2s) infinite;
}

@keyframes ripple-effect {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }

  50% {
    transform: translate(-50%, -50%) scale(0.9);
  }
}
</style>
