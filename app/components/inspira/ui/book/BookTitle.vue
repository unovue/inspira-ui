<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

interface BookTitleProps {
  class?: HTMLAttributes["class"];
}

defineProps<BookTitleProps>();
</script>

<template>
  <h1
    class="mt-3 mb-1 font-bold text-balance select-none"
    :class="[$props.class]"
  >
    <slot />
  </h1>
</template>
