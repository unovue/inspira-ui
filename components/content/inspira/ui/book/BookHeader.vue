<template>
  <div :class="cn('flex gap-2 flex-wrap', $props.class)">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface BookHeaderProps {
  class?: HTMLAttributes["class"];
}

defineProps<BookHeaderProps>();
</script>
