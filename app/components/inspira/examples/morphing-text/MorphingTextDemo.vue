<script lang="ts" setup>
const texts = [
  "Hello",
  "Morphing",
  "Text",
  "Animation",
  "Vue",
  "Component",
  "Smooth",
  "Transition",
  "Engaging",
];
</script>

<template>
  <ClientOnly>
    <MorphingText :texts="texts" />
  </ClientOnly>
</template>

<style></style>
