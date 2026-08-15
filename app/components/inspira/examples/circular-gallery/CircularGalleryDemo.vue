<script setup lang="ts">
import type { CircularGalleryDirection } from "../../ui/circular-gallery";
import { useMediaQuery } from "@vueuse/core";
import { computed } from "vue";
import { CircularGallery } from "../../ui/circular-gallery";

interface Props {
  radius?: number;
  duration?: number;
  easing?: string;
  direction?: CircularGalleryDirection;
  pauseOnHover?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  radius: 120,
  duration: 10,
  easing: "linear",
  direction: "normal",
  pauseOnHover: true,
});

const isMobile = useMediaQuery("(max-width: 767px)");
const radius = computed(() => (isMobile.value ? Math.min(props.radius, 80) : props.radius));

const exampleImages = [
  [
    "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop",
    "A black and white portrait",
  ],
  [
    "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop",
    "Neon palm",
  ],
  [
    "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop",
    "A blurry crowd",
  ],
  [
    "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop",
    "Rippling blue water",
  ],
  [
    "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop",
    "Portrait under a blue sky",
  ],
  [
    "https://images.unsplash.com/photo-1689553079282-45df1b35741b?q=80&w=3087&auto=format&fit=crop",
    "A flower crown portrait",
  ],
  [
    "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=2728&auto=format&fit=crop",
    "White flowers in a field",
  ],
  [
    "https://images.unsplash.com/photo-1677338354108-223e807fb1bd?q=80&w=3087&auto=format&fit=crop",
    "A table with wine glasses",
  ],
];
</script>

<template>
  <div class="flex h-full min-h-112 w-full items-center justify-center bg-[#efefef]">
    <CircularGallery
      :radius="radius"
      :duration="props.duration"
      :easing="props.easing"
      :direction="props.direction"
      :pause-on-hover="props.pauseOnHover"
    >
      <div
        v-for="([src, alt], index) in exampleImages"
        :key="src"
        class="size-20 cursor-pointer overflow-hidden transition-transform duration-200 ease-out hover:scale-125 md:size-28"
      >
        <img
          :src="src"
          :alt="alt"
          :aria-label="alt"
          :data-index="index"
          class="size-full object-cover"
          loading="lazy"
        />
      </div>
    </CircularGallery>
  </div>
</template>
