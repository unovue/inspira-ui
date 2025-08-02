<template>
  <div
    ref="containerRef"
    :class="['shadertoy-container', props.class]"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, type HTMLAttributes } from "vue";
import { InspiraShaderToy, type MouseMode, type ShaderConfig } from "./InspiraShaderToy";

interface Props extends ShaderConfig {
  mouseMode?: MouseMode;
  class?: HTMLAttributes["class"];
  shaderCode?: string;
}

const props = withDefaults(defineProps<Props>(), {
  mouseMode: "click",
});

const containerRef = ref<HTMLElement>();
let shader: InspiraShaderToy | undefined = undefined;

onMounted(() => {
  if (!containerRef.value) return;

  shader = new InspiraShaderToy(containerRef.value, props.mouseMode);

  shader.setImage({
    source: props.shaderCode,
  });

  shader.play();
});

onUnmounted(() => {
  shader?.dispose();
});
</script>

<style scoped>
.shadertoy-container {
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
}

.shadertoy-container canvas {
  display: block;
  max-width: 100%;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
