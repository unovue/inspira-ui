<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { MouseMode, ShaderUniforms } from "./InspiraShaderToy";
import { cn } from "@inspira-ui/plugins";
import { computed, onMounted, onUnmounted, shallowRef, watch } from "vue";
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
  frameRate?: number;
  pixelRatio?: number;
  paused?: boolean;
  autoPause?: boolean;
  interactive?: boolean;
  noise?: NoiseConfig;
  uniforms?: ShaderUniforms;
}

const props = withDefaults(defineProps<Props>(), {
  mouseMode: "click",
  hue: 0,
  saturation: 1,
  brightness: 1,
  speed: 1,
  mouseSensitivity: 1,
  damping: 0,
  frameRate: 60,
  pixelRatio: 1,
  paused: false,
  autoPause: true,
  interactive: true,
});

const emit = defineEmits<{
  ready: [];
  error: [message: string];
}>();

const containerRef = useTemplateRef("containerRef");
const isInViewport = shallowRef(true);
const isDocumentVisible = shallowRef(true);

let shader: InspiraShaderToy | undefined;
let intersectionObserver: IntersectionObserver | undefined;

const backgroundSize = computed(() => `${(props.noise?.scale || 0) * 200}%`);
const noiseOpacity = computed(() => Math.min(1, Math.max(0, (props.noise?.opacity ?? 0) / 2)));
const shouldPlay = computed(
  () => !props.paused && (!props.autoPause || (isInViewport.value && isDocumentVisible.value)),
);

function updatePlayback() {
  if (!shader) return;

  if (shouldPlay.value) {
    shader.play();
  } else {
    shader.pause();
  }
}

function setShaderSource(source: string) {
  if (!shader) return;

  const success = shader.setShader({ source, uniforms: props.uniforms });

  if (!success) {
    emit("error", "Failed to compile shader");
    return;
  }

  emit("ready");
  updatePlayback();
}

function handleVisibilityChange() {
  isDocumentVisible.value = document.visibilityState === "visible";
}

onMounted(() => {
  if (!containerRef.value) return;

  try {
    shader = new InspiraShaderToy(
      containerRef.value,
      props.mouseMode,
      props.frameRate,
      props.pixelRatio,
    );
  } catch (error) {
    emit("error", error instanceof Error ? error.message : "Failed to initialize WebGL");
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
  setShaderSource(props.shaderCode);

  if (props.autoPause) {
    intersectionObserver = new IntersectionObserver(([entry]) => {
      isInViewport.value = entry?.isIntersecting ?? true;
    });
    intersectionObserver.observe(containerRef.value);
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);
  handleVisibilityChange();
  updatePlayback();
});

onUnmounted(() => {
  document.removeEventListener("visibilitychange", handleVisibilityChange);
  intersectionObserver?.disconnect();
  shader?.dispose();
  shader = undefined;
});

watch(
  () => props.shaderCode,
  (v) => setShaderSource(v),
);

watch(
  () => props.uniforms,
  (v) => shader?.setUniforms(v ?? {}),
  { deep: true },
);

watch(
  () => props.mouseMode,
  (v) => {
    if (shader) {
      shader.mouseMode = v;
    }
  },
);

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

watch(
  () => props.frameRate,
  (v) => {
    if (v !== undefined && shader) {
      shader.setFrameRate(v);
    }
  },
);

watch(
  () => props.pixelRatio,
  (v) => {
    if (v !== undefined && shader) {
      shader.setPixelRatio(v);
    }
  },
);

watch(shouldPlay, updatePlayback);
</script>

<template>
  <div
    ref="containerRef"
    :class="
      cn(
        'relative isolate block h-full w-full overflow-hidden [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full [&>canvas]:max-w-full',
        props.interactive ? '[&>canvas]:cursor-pointer' : 'pointer-events-none',
        props.class,
      )
    "
  >
    <div
      v-if="props.noise && props.noise.opacity > 0"
      class="pointer-events-none absolute inset-0 z-10 bg-[url(https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png)] bg-repeat"
      :style="{
        backgroundSize,
        backgroundPosition: 'center',
        opacity: noiseOpacity,
      }"
    />
  </div>
</template>
