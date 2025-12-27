<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3"
    :class="[props.class]"
  >
    <slot />
  </div>
</template>
