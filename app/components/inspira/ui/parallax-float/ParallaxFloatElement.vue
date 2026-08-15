<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { inject, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { PARALLAX_FLOAT_KEY } from "./ParallaxFloatContext";

interface Props {
  class?: HTMLAttributes["class"];
  depth?: number;
}

const props = withDefaults(defineProps<Props>(), {
  depth: 1,
});

const elementRef = ref<HTMLElement | null>(null);
const context = inject(PARALLAX_FLOAT_KEY, null);

onMounted(() => {
  if (elementRef.value) context?.registerElement(elementRef.value, props.depth);
});

watch(
  () => props.depth,
  (depth) => {
    if (elementRef.value) context?.updateElement(elementRef.value, depth);
  },
);

onBeforeUnmount(() => {
  if (elementRef.value) context?.unregisterElement(elementRef.value);
});
</script>

<template>
  <div
    ref="elementRef"
    :class="cn('absolute will-change-transform', props.class)"
  >
    <slot />
  </div>
</template>
