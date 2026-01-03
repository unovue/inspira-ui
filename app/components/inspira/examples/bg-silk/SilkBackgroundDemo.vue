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
  <div class="relative min-h-96 w-full">
    <SilkBackground v-bind="props" />
  </div>
</template>
