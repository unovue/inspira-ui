<script setup lang="ts">
import { Motion } from "motion-v";
import { ParallaxFloat, ParallaxFloatElement } from "../../ui/parallax-float";

interface Props {
  sensitivity?: number;
  easingFactor?: number;
}

const props = withDefaults(defineProps<Props>(), {
  sensitivity: -1,
  easingFactor: 0.05,
});

const images = [
  [
    "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop",
    "Black and white portrait",
  ],
  [
    "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop",
    "Neon palm",
  ],
  [
    "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop",
    "Blurry crowd",
  ],
  [
    "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop",
    "Blue water",
  ],
  [
    "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop",
    "Portrait under a blue sky",
  ],
  [
    "https://images.unsplash.com/photo-1689553079282-45df1b35741b?q=80&w=3087&auto=format&fit=crop",
    "Flower crown portrait",
  ],
  [
    "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=2728&auto=format&fit=crop",
    "White flowers",
  ],
  [
    "https://images.unsplash.com/photo-1677338354108-223e807fb1bd?q=80&w=3087&auto=format&fit=crop",
    "Wine glasses",
  ],
] as const;

const placements = [
  { depth: 0.5, class: "top-[8%] left-[11%]", image: "w-16 h-16 md:w-24 md:h-24" },
  { depth: 1, class: "top-[10%] left-[32%]", image: "w-20 h-20 md:w-28 md:h-28" },
  { depth: 2, class: "top-[2%] left-[53%]", image: "w-28 h-40 md:w-40 md:h-52" },
  { depth: 1, class: "top-0 left-[83%]", image: "w-24 h-24 md:w-32 md:h-32" },
  { depth: 1, class: "top-[40%] left-[2%]", image: "w-28 h-28 md:w-36 md:h-36" },
  { depth: 2, class: "top-[70%] left-[77%]", image: "w-28 h-28 md:w-36 md:h-48" },
  { depth: 4, class: "top-[73%] left-[15%]", image: "w-40 h-full md:w-52" },
  { depth: 1, class: "top-[80%] left-[50%]", image: "w-24 h-24 md:w-32 md:h-32" },
] as const;
</script>

<template>
  <div
    class="relative flex h-full min-h-160 w-full items-center justify-center overflow-hidden bg-black"
  >
    <Motion
      as="div"
      class="z-50 flex flex-col items-center space-y-4 text-center"
      :initial="{ opacity: 0, y: 10 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.88, delay: 1.5 }"
    >
      <p class="text-5xl text-white italic md:text-7xl">Inspira UI.</p>
      <button
        type="button"
        class="w-20 rounded-full bg-white py-2 text-xs text-black transition-transform duration-200 hover:scale-110"
      >
        Download
      </button>
    </Motion>

    <ParallaxFloat
      :sensitivity="props.sensitivity"
      :easing-factor="props.easingFactor"
      class="overflow-hidden"
    >
      <ParallaxFloatElement
        v-for="(placement, index) in placements"
        :key="images[index][0]"
        :depth="placement.depth"
        :class="placement.class"
      >
        <Motion
          as="img"
          :src="images[index][0]"
          :alt="images[index][1]"
          class="cursor-pointer object-cover transition-transform duration-200 hover:scale-105"
          :class="placement.image"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.5, delay: 0.15 * index }"
        />
      </ParallaxFloatElement>
    </ParallaxFloat>
  </div>
</template>
