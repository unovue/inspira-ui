<template>
  <div :class="cn('absolute shadow-xl', 'animate-ripple-circle', props.class)" />
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";

interface Props {
  size?: number;
  class?: string;
  opacity?: number;
  animationDelay?: number;
  borderStyle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 210,
  opacity: 0.24,
});
</script>

<style scoped>
.animate-ripple-circle {
  animation: ripple-effect var(--duration, 2s) ease-in-out calc(var(--i, 0) * 0.2s) infinite;
  border-width: 1px;
  top: 50%;
  left: 50%;
  width: v-bind('props.size + "px"');
  height: v-bind('props.size + "px"');
  animation-delay: v-bind('props.animationDelay + "ms"');
  opacity: v-bind("props.opacity");
  transform: translate(-50%, -50%) scale(1);
  border-style: v-bind("props.borderStyle");
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
