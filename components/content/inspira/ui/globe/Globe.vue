<template>
  <div :class="cn('absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]', $props.class)">
    <canvas
      ref="globeCanvasRef"
      class="size-full opacity-0 transition-opacity duration-1000 ease-in-out [contain:layout_paint_size]"
      @pointerdown="(e) => updatePointerInteraction(e.clientX)"
      @pointerup="updatePointerInteraction(null)"
      @pointerout="updatePointerInteraction(null)"
      @mousemove="(e) => updateMovement(e.clientX)"
      @touchmove="(e) => e.touches[0] && updateMovement(e.touches[0].clientX)"
    ></canvas>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";
import createGlobe, { type COBEOptions } from "cobe";
import { useSpring } from "vue-use-spring";
import { ref, onMounted, onBeforeUnmount } from "vue";

type GlobeProps = {
  class?: string;
  config?: Partial<COBEOptions>;
  mass?: number;
  tension?: number;
  friction?: number;
  precision?: number;
};

const DEFAULT_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1.2, 1.2, 1.2],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

const props = withDefaults(defineProps<GlobeProps>(), {
  mass: 1,
  tension: 280,
  friction: 100,
  precision: 0.001,
});

const globeCanvasRef = ref<HTMLCanvasElement>();
const phi = ref(0);
const width = ref(0);
const pointerInteracting = ref();
const pointerInteractionMovement = ref();

let globe: ReturnType<typeof createGlobe> | null = null;

const spring = useSpring(
  {
    r: 0,
  },
  {
    mass: props.mass,
    tension: props.tension,
    friction: props.friction,
    precision: props.precision,
  },
);

function updatePointerInteraction(clientX: number | null) {
  if (clientX !== null) {
    pointerInteracting.value = clientX - (pointerInteractionMovement.value ?? clientX);
  } else {
    pointerInteracting.value = null;
  }

  if (globeCanvasRef.value) {
    globeCanvasRef.value.style.cursor = clientX ? "grabbing" : "grab";
  }
}

function updateMovement(clientX: number) {
  if (pointerInteracting.value !== null) {
    const delta = clientX - (pointerInteracting.value ?? clientX);
    pointerInteractionMovement.value = delta;
    spring.r = delta / 200;
  }
}

function onRender(state: Record<string, unknown>) {
  if (!pointerInteracting.value) {
    phi.value += 0.005;
  }

  state.phi = phi.value + spring.r;
  state.width = width.value * 2;
  state.height = width.value * 2;
}

function onResize() {
  if (globeCanvasRef.value) {
    width.value = globeCanvasRef.value.offsetWidth;
  }
}

function createGlobeOnMounted() {
  const config = { ...DEFAULT_CONFIG, ...props.config };

  globe = createGlobe(globeCanvasRef.value!, {
    ...config,
    width: width.value * 2,
    height: width.value * 2,
    onRender,
  });
}

onMounted(() => {
  window.addEventListener("resize", onResize);
  onResize();
  createGlobeOnMounted();

  setTimeout(() => (globeCanvasRef.value!.style.opacity = "1"));
});

onBeforeUnmount(() => {
  globe?.destroy();
  window.removeEventListener("resize", onResize);
});
</script>
