<template>
  <div
    :style="{ transform: `translateY(${translate}px)` }"
    class="mx-auto max-w-5xl text-center"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  translate: Number,
});
</script>
