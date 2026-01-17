<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { MouseMode } from "./InspiraShaderToy";
import { onMounted, onUnmounted, watch } from "vue";
import { InspiraShaderToy } from "./InspiraShaderToy";

interface NoiseConfig {
  opacity: number;
  scale: number;
}

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
  noise?: NoiseConfig;
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

const containerRef = useTemplateRef("containerRef");
let shader: InspiraShaderToy | undefined;

const backgroundSize = computed(() => `${(props.noise?.scale || 0) * 200}%`);

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

<template>
  <div
    ref="containerRef"
    class="shadertoy-container isolate"
    :class="[props.class]"
  >
    <div
      v-if="props.noise && props.noise.opacity > 0"
      :key="props.noise.toString()"
      class="absolute inset-0 z-10 bg-[url(https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png)] bg-repeat"
      :style="{
        backgroundSize,
        backgroundPosition: 'center',
        opacity: props.noise.opacity / 2,
      }"
    />
  </div>
</template>

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
  z-index: 0;
}
</style>
