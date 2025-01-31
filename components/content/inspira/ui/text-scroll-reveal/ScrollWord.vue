<template>
  <span class="xl:lg-3 relative mx-1 lg:mx-2.5">
    <span class="absolute opacity-30 dark:opacity-70">{{ word }}</span>
    <span
      :style="{ opacity: computedOpacity }"
      class="text-black dark:text-white"
    >
      {{ word }}
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  word: string;
  progress: number;
  range: Array<number>;
}

const props = defineProps<Props>();

const computedOpacity = computed(() => {
  const [start, end] = props.range;
  const progress = props.progress;

  // Calculate opacity based on the progress and range
  if (progress < start) return 0;
  if (progress > end) return 1;

  // Linear interpolation for opacity between 0 and 1
  return (progress - start) / (end - start);
});
</script>
