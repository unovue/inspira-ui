<template>
  <PatternBackground
    v-bind="$props"
    class="dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
  >
    <slot />
  </PatternBackground>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

type Direction =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

defineProps({
  class: String,
  animate: {
    type: Boolean,
    default: () => false,
  },
  direction: {
    type: String as PropType<Direction>,
    default: () => "top",
  },
});
</script>
