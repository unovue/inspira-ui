<template>
  <PatternBackground
    :animate="true"
    :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
    :variant="PATTERN_BACKGROUND_VARIANT.Dot"
    class="flex h-[36rem] w-full items-center justify-center"
    :speed="PATTERN_BACKGROUND_SPEED.Slow"
  >
    <p
      class="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
    >
      Dot Background
    </p>
  </PatternBackground>
</template>

<script setup lang="ts">
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from "../../ui/pattern-background";
</script>
