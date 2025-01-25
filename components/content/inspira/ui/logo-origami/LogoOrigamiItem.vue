<template>
  <div
    :class="
      cn(
        'grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50',
        $props.class,
      )
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";

defineProps({
  class: String,
});
</script>
