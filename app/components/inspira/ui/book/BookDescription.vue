<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface BookDescriptionProps {
  class?: HTMLAttributes["class"];
}

defineProps<BookDescriptionProps>();
</script>

<template>
  <p :class="cn('text-xs/relaxed select-none', $props.class)">
    <slot />
  </p>
</template>
