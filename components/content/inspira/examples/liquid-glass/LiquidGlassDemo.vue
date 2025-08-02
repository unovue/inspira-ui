<template>
  <div class="relative overflow-hidden w-full h-96 flex items-center justify-center">
    <PatternBackground
      :animate="true"
      :direction="PATTERN_BACKGROUND_DIRECTION.Bottom"
      :variant="PATTERN_BACKGROUND_VARIANT.BigDot"
      class="flex h-[36rem] w-full items-center justify-center"
      :speed="PATTERN_BACKGROUND_SPEED.Slow"
      :mask="PATTERN_BACKGROUND_MASK.EllipseTop"
    >
    </PatternBackground>
    <LiquidGlass container-class="fixed top-1/2 z-[999999]">
      <div class="w-full min-h-16 py-4 px-12 flex items-center justify-center">
        Enjoy the Liquid Glass. Try scrolling through the page.
      </div>
    </LiquidGlass>
    <div class="absolute inset-0 bg-dot-secondary"></div>
  </div>
</template>

<script setup lang="ts">
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_MASK,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from "../../ui/pattern-background";
</script>
