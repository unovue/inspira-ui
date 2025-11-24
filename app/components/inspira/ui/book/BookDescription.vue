<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

interface BookDescriptionProps {
  class?: HTMLAttributes["class"];
}

defineProps<BookDescriptionProps>();
</script>

<template>
  <p
    class="text-xs/relaxed select-none"
    :class="[$props.class]"
  >
    <slot />
  </p>
</template>
