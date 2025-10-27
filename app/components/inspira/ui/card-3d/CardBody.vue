<script setup lang="ts">
interface Props {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="h-96 w-96"
    :class="[props.class]"
    style="transform-style: preserve-3d"
  >
    <slot />
  </div>
</template>
