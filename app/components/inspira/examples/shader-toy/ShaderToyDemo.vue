<script setup lang="ts">
interface Props {
  hue?: number;
  saturation?: number;
  brightness?: number;
  speed?: number;
  mouseSensitivity?: number;
  damping?: number;
  noise?: {
    opacity: number;
    scale: number;
  };

  shaderCode: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex h-96 w-full flex-col items-center justify-center gap-4">
    <ShaderToy
      :key="shaderCode"
      class="h-full w-full"
      v-bind="props"
    />
  </div>
</template>
