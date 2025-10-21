<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface BookTitleProps {
  class?: HTMLAttributes["class"];
}

defineProps<BookTitleProps>();
</script>

<template>
  <h1 :class="cn('mt-3 mb-1 font-bold text-balance select-none', $props.class)">
    <slot />
  </h1>
</template>
