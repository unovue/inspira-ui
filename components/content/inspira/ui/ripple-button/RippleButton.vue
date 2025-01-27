<template>
  <button
    ref="rippleButtonRef"
    :class="
      cn(
        'relative flex cursor-pointer items-center justify-center overflow-hidden',
        'rounded-lg border-2 bg-background px-4 py-2 text-center text-primary',
        $props.class,
      )
    "
    :style="{ '--duration': $props.duration + 'ms' }"
    @click="handleClick"
  >
    <div class="relative z-10">
      <slot />
    </div>

    <span class="pointer-events-none absolute inset-0">
      <span
        v-for="ripple in buttonRipples"
        :key="ripple.key"
        class="ripple-animation absolute rounded-full bg-background opacity-30"
        :style="{
          width: ripple.size + 'px',
          height: ripple.size + 'px',
          top: ripple.y + 'px',
          left: ripple.x + 'px',
          backgroundColor: $props.rippleColor,
          transform: 'scale(0)',
          animationDuration: $props.duration + 'ms',
        }"
      />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { ref, watchEffect, type HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface RippleButtonProps {
  class?: HTMLAttributes["class"];
  rippleColor?: string;
  duration?: number;
}

const props = withDefaults(defineProps<RippleButtonProps>(), {
  rippleColor: "#ADD8E6",
  duration: 600,
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const rippleButtonRef = ref<HTMLButtonElement | null>(null);
const buttonRipples = ref<Array<{ x: number; y: number; size: number; key: number }>>([]);

function handleClick(event: MouseEvent) {
  createRipple(event);
  emit("click", event);
}

function createRipple(event: MouseEvent) {
  const button = rippleButtonRef.value;
  if (!button) return;

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  const newRipple = { x, y, size, key: Date.now() };
  buttonRipples.value.push(newRipple);
}

watchEffect(() => {
  if (buttonRipples.value.length > 0) {
    const lastRipple = buttonRipples.value[buttonRipples.value.length - 1];
    setTimeout(() => {
      buttonRipples.value = buttonRipples.value.filter((ripple) => ripple.key !== lastRipple.key);
    }, props.duration);
  }
});
</script>

<style scoped>
@keyframes rippling {
  0% {
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.ripple-animation {
  animation: rippling var(--duration) ease-out;
}
</style>
