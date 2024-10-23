<script setup lang="ts">
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_MASK,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from "../../ui/pattern-background";
</script>

<template>
  <PatternBackground
    :animate="true"
    :direction="PATTERN_BACKGROUND_DIRECTION.Bottom"
    :variant="PATTERN_BACKGROUND_VARIANT.BigDot"
    class="h-[36rem] w-full flex items-center justify-center"
    :speed="PATTERN_BACKGROUND_SPEED.Slow"
    :mask="PATTERN_BACKGROUND_MASK.EllipseTop"
  >
    <p
      className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
    >
      Big Dot Background
    </p>
  </PatternBackground>
</template>
