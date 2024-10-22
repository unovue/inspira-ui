<script setup lang="ts">
import { PATTERN_BACKGROUND_DIRECTION, PATTERN_BACKGROUND_VARIANT } from '../../ui/pattern-background';
import PatternBackground from '../../ui/pattern-background/PatternBackground.vue';
</script>

<template>
  <PatternBackground :direction="PATTERN_BACKGROUND_DIRECTION.TopRight" :variant="PATTERN_BACKGROUND_VARIANT.Grid" class="h-[36rem] w-full flex items-center justify-center">
    <p
      className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
    >
      Grid Background
    </p>
  </PatternBackground>
</template>
