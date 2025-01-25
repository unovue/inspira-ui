<template>
  <h1 :class="cn('font-bold select-none mt-3 mb-1 text-balance', $props.class)">
    <slot />
  </h1>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface BookTitleProps {
  class?: HTMLAttributes["class"];
}

defineProps<BookTitleProps>();
</script>
