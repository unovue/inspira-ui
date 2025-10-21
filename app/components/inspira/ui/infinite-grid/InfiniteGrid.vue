<script setup lang="ts">
import type { CardData, InfiniteGridOptions } from "./types";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { InfiniteGridClass } from "./InfiniteGridClass";

interface Props {
  cardData: CardData[];
  options?: Partial<InfiniteGridOptions>;
  onTilesLoaded?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});

const emit = defineEmits(["tileClicked"]);

// Define default options for the infinite grid
const defaultOptions: InfiniteGridOptions = {
  gridCols: 4,
  gridRows: 4,
  gridGap: 0,
  tileSize: 3,
  baseCameraZ: 10,
  enablePostProcessing: true,
  postProcessParams: {
    distortionIntensity: -0.2,
    vignetteOffset: 0.0,
    vignetteDarkness: 0.0,
  },
};

// Merge default options with passed options
const mergedOptions = computed(() => ({
  ...defaultOptions,
  ...props.options,
  postProcessParams: {
    ...defaultOptions.postProcessParams,
    ...props.options?.postProcessParams,
  },
}));

const infiniteGridContainer = ref<HTMLElement | null>(null);
let infiniteGridInstance: InfiniteGridClass | null = null;

function handleTileClicked(event: Event) {
  const customEvent = event as CustomEvent;
  emit("tileClicked", customEvent.detail);
}

onMounted(async () => {
  if (infiniteGridContainer.value) {
    infiniteGridInstance = new InfiniteGridClass(
      infiniteGridContainer.value,
      props.cardData,
      mergedOptions.value,
    );
    await infiniteGridInstance.init();

    props.onTilesLoaded?.();

    infiniteGridContainer.value.addEventListener("tileClicked", handleTileClicked);
  }
});

onBeforeUnmount(() => {
  if (infiniteGridInstance) {
    if (infiniteGridContainer.value) {
      infiniteGridContainer.value.removeEventListener("tileClicked", handleTileClicked);
    }
    infiniteGridInstance.dispose();
    infiniteGridInstance = null;
  }
});

watch(
  () => [props.cardData, mergedOptions.value],
  async ([newCardData, newOptions]) => {
    if (infiniteGridInstance) {
      infiniteGridInstance.dispose();
      infiniteGridInstance = null;
    }

    if (infiniteGridContainer.value) {
      infiniteGridInstance = new InfiniteGridClass(
        infiniteGridContainer.value,
        newCardData as CardData[],
        newOptions as InfiniteGridOptions,
      );
      await infiniteGridInstance.init();
      infiniteGridContainer.value.addEventListener("tileClicked", handleTileClicked);
    }
  },
  { deep: true },
);
</script>

<template>
  <div
    ref="infiniteGridContainer"
    class="infinite-grid-container"
  />
</template>

<style scoped>
.infinite-grid-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #000;
}

.infinite-grid-container > canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
}

.vignette-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.8) 90%,
    rgba(0, 0, 0, 1) 100%
  );
}

.blur-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  pointer-events: none;
  mask-image: radial-gradient(
    ellipse at center,
    transparent 50%,
    rgba(0, 0, 0, 0.1) 70%,
    rgba(0, 0, 0, 0.8) 90%,
    rgba(0, 0, 0, 1) 100%
  );
  -webkit-mask-image: radial-gradient(
    ellipse at center,
    transparent 60%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.8) 90%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
