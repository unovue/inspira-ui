<script lang="ts" setup>
interface Props {
  hue: number;
  saturation: number;
  brightness: number;
  speed: number;
  mouseSensitivity: number;
  damping: number;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="relative h-96 w-full">
    <ThunderstormBackground v-bind="props" />
  </div>
</template>
