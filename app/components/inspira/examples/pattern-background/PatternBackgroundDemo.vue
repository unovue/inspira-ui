<script setup lang="ts">
import type { BaseProps } from "../../ui/pattern-background";
import { PATTERN_BACKGROUND_SPEED } from "../../ui/pattern-background";

const {
  animate = true,
  direction = "bottom",
  variant = "big-dot",
  size = "md",
  mask = "ellipse-top",
  speed = PATTERN_BACKGROUND_SPEED.Slow,
} = defineProps<BaseProps>();
</script>

<template>
  <PatternBackground
    class="flex h-144 w-full items-center justify-center"
    :animate
    :direction
    :variant
    :speed
    :mask
    :size
  >
    <p
      class="relative z-20 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-5xl"
    >
      Pattern Background
    </p>
  </PatternBackground>
</template>
