<template>
  <button @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import confetti from "canvas-confetti";
import type { Options as ConfettiOptions } from "canvas-confetti";
import { inject } from "vue";

type ConfettiButtonProps = {
  options?: ConfettiOptions & { canvas?: HTMLCanvasElement };
};

const props = defineProps<ConfettiButtonProps>();
const confettiContext = inject<{ fire: (opts?: ConfettiOptions) => void }>("ConfettiContext");

// Handle click event
function handleClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const rect = target.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  confetti({
    ...props.options,
    origin: {
      x: x / window.innerWidth,
      y: y / window.innerHeight,
    },
  });

  if (confettiContext) {
    confettiContext.fire({ ...props.options });
  }
}
</script>
