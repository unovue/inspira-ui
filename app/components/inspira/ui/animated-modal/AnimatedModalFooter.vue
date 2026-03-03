<script setup lang="ts">
import { cn } from "@inspira-ui/plugins";
interface Props {
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: "",
});
</script>

<template>
  <div :class="cn(`flex justify-end bg-gray-100 p-4 dark:bg-neutral-900`, props.class)">
    <slot />
  </div>
</template>
