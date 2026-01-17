<script lang="ts" setup>
interface Props {
  hue: number;
  saturation: number;
  brightness: number;
  speed: number;
  mouseSensitivity: number;
  damping: number;
  noise?: {
    opacity: number;
    scale: number;
  };
}

const props = defineProps<Props>();
</script>

<template>
  <div class="relative h-96 w-full">
    <SingularityBackground v-bind="props" />
  </div>
</template>
