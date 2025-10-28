<script setup lang="ts">
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_MASK,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from "../../ui/pattern-background";
</script>

<template>
  <div class="relative flex h-96 w-full items-center justify-center overflow-hidden">
    <PatternBackground
      :animate="true"
      :direction="PATTERN_BACKGROUND_DIRECTION.Bottom"
      :variant="PATTERN_BACKGROUND_VARIANT.BigDot"
      class="flex h-[36rem] w-full items-center justify-center"
      :speed="PATTERN_BACKGROUND_SPEED.Slow"
      :mask="PATTERN_BACKGROUND_MASK.EllipseTop"
    />
    <LiquidGlass container-class="fixed top-1/2 z-[999999]">
      <div class="flex min-h-16 w-full items-center justify-center px-12 py-4">
        Enjoy the Liquid Glass. Try scrolling through the page.
      </div>
    </LiquidGlass>
    <div class="bg-dot-secondary absolute inset-0" />
  </div>
</template>
