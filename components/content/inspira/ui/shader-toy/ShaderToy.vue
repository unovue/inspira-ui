<template>
  <div
    ref="containerRef"
    :class="['shadertoy-container', props.class]"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, type HTMLAttributes } from "vue";
import { InspiraShaderToy, type MouseMode } from "./InspiraShaderToy";

interface Props {
  mouseMode?: MouseMode;
  class?: HTMLAttributes["class"];
  shaderCode: string;
  hue?: number;
  saturation?: number;
  brightness?: number;
  speed?: number;
  mouseSensitivity?: number;
  damping?: number;
}

const props = withDefaults(defineProps<Props>(), {
  mouseMode: "click",
  hue: 0,
  saturation: 1,
  brightness: 1,
  speed: 1,
  mouseSensitivity: 1,
  damping: 0,
});

const containerRef = ref<HTMLElement>();
let shader: InspiraShaderToy | undefined = undefined;

onMounted(() => {
  if (!containerRef.value) return;

  shader = new InspiraShaderToy(containerRef.value, props.mouseMode);

  const success = shader.setShader({
    source: props.shaderCode,
  });

  if (!success) {
    console.error("Failed to compile shader");
    return;
  }

  shader.setHSV({
    hue: props.hue,
    saturation: props.saturation,
    brightness: props.brightness,
  });

  shader.setSpeed(props.speed);

  shader.setMouseSensitivity(props.mouseSensitivity);
  shader.setMouseDamping(props.damping);

  shader.play();
});

onUnmounted(() => {
  shader?.dispose();
});

watch(
  () => props.hue,
  (v) => {
    if (v !== undefined && shader) {
      shader.setHue(v);
    }
  },
);

watch(
  () => props.saturation,
  (v) => {
    if (v !== undefined && shader) {
      shader.setSaturation(v);
    }
  },
);

watch(
  () => props.brightness,
  (v) => {
    if (v !== undefined && shader) {
      shader.setBrightness(v);
    }
  },
);

watch(
  () => props.speed,
  (v) => {
    if (v !== undefined && shader) {
      shader.setSpeed(v);
    }
  },
);

watch(
  () => props.mouseSensitivity,
  (v) => {
    if (v !== undefined && shader) {
      shader.setMouseSensitivity(v);
    }
  },
);

watch(
  () => props.damping,
  (v) => {
    if (v !== undefined && shader) {
      shader.setMouseDamping(v);
    }
  },
);
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
