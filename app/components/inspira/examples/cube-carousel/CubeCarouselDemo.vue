<script setup lang="ts">
import type { CubeCarouselDirection, CubeCarouselRef } from "../../ui/cube-carousel";
import { useMediaQuery } from "@vueuse/core";
import { computed, ref, watch } from "vue";
import CubeCarousel from "../../ui/cube-carousel/CubeCarousel.vue";

interface Props {
  width?: number;
  height?: number;
  perspective?: number;
  direction?: CubeCarouselDirection;
  debug?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  enableDrag?: boolean;
  dragSensitivity?: number;
}

const props = withDefaults(defineProps<Props>(), {
  perspective: 1000,
  direction: "right",
  debug: false,
  autoPlay: false,
  autoPlayInterval: 3000,
  enableDrag: true,
  dragSensitivity: 0.5,
});

const isMobile = useMediaQuery("(max-width: 767px)");
const carouselRef = ref<CubeCarouselRef | null>(null);
const debugEnabled = ref(props.debug);

const carouselItems = [
  {
    id: "1",
    type: "image" as const,
    src: "https://cdn.cosmos.so/778d0640-d4b8-45b4-8bbe-862e759c231d?format=jpeg",
    alt: "Blurry poster",
  },
  {
    id: "2",
    type: "image" as const,
    src: "https://cdn.cosmos.so/27ac2696-1f2b-498e-8d3d-11f2dd358ab9?format=jpeg",
    alt: "Abstract blurry figure",
  },
  {
    id: "3",
    type: "image" as const,
    src: "https://cdn.cosmos.so/c48b739d-202d-4340-ab6b-afa34f0d7142?format=jpeg",
    alt: "Long exposure photo of a person",
  },
  {
    id: "4",
    type: "image" as const,
    src: "https://cdn.cosmos.so/5332f9ac-7823-4635-871d-d4b3032e1c62?format=jpeg",
    alt: "Blurry portrait photo of a person",
  },
  {
    id: "5",
    type: "image" as const,
    src: "https://cdn.cosmos.so/d9ed937e-7c3b-4f64-a4f3-708d639f13a1?format=jpeg",
    alt: "Long exposure shots with multiple people",
  },
  {
    id: "6",
    type: "image" as const,
    src: "https://cdn.cosmos.so/33b43e2a-da66-42d9-a0b1-08165d80b0aa?format=jpeg",
    alt: "Close up blurry photo of a person poster",
  },
  {
    id: "7",
    type: "image" as const,
    src: "https://cdn.cosmos.so/40342df7-2ea2-4297-add2-fe17cdc62551?format=jpeg",
    alt: "Long exposure shot of a motorcyclist",
  },
];

const carouselWidth = computed(() => {
  const configured = props.width ?? (isMobile.value ? 200 : 350);
  return isMobile.value ? Math.min(configured, 260) : configured;
});
const carouselHeight = computed(() => {
  const configured = props.height ?? (isMobile.value ? 150 : 250);
  return isMobile.value ? Math.min(configured, 190) : configured;
});

function handleIndexChange(index: number) {
  void index;
}

function toggleDebug() {
  debugEnabled.value = !debugEnabled.value;
}

watch(
  () => props.debug,
  (value) => {
    debugEnabled.value = value;
  },
);
</script>

<template>
  <div
    class="text-muted-foreground relative flex h-full min-h-136 w-full max-w-4xl items-center justify-center bg-[#fefefe] p-6"
  >
    <button
      type="button"
      class="absolute top-4 left-4 grid size-8 cursor-pointer place-items-center rounded-full border border-black text-black transition-all duration-300 ease-out hover:bg-gray-100 active:scale-95"
      :title="debugEnabled ? 'Debug Mode: ON' : 'Debug Mode: OFF'"
      :aria-label="debugEnabled ? 'Debug mode enabled' : 'Debug mode disabled'"
      @click="toggleDebug"
    >
      <Icon
        :name="debugEnabled ? 'lucide:bug' : 'lucide:bug-off'"
        class="size-2.5"
      />
    </button>

    <div class="space-y-24">
      <div class="flex justify-center pt-20">
        <CubeCarousel
          ref="carouselRef"
          :items="carouselItems"
          :width="carouselWidth"
          :height="carouselHeight"
          :direction="props.direction"
          :on-index-change="handleIndexChange"
          :debug="debugEnabled"
          :enable-drag="props.enableDrag"
          :drag-sensitivity="props.dragSensitivity"
          :perspective="props.perspective"
          :auto-play="props.autoPlay"
          :auto-play-interval="props.autoPlayInterval"
        />
      </div>

      <div class="flex justify-center gap-2">
        <button
          type="button"
          class="cursor-pointer rounded-full border border-black px-2 py-0.5 text-xs text-black transition-all duration-300 ease-out hover:bg-gray-100 active:scale-95"
          @click="carouselRef?.prev()"
        >
          Prev
        </button>
        <button
          type="button"
          class="cursor-pointer rounded-full border border-black px-2 py-0.5 text-xs text-black transition-all duration-300 ease-out hover:bg-gray-100 active:scale-95"
          @click="carouselRef?.next()"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
