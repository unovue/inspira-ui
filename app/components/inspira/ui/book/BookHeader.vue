<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

interface BookHeaderProps {
  class?: HTMLAttributes["class"];
}

defineProps<BookHeaderProps>();
</script>

<template>
  <div
    class="flex flex-wrap gap-2"
    :class="[$props.class]"
  >
    <slot />
  </div>
</template>
