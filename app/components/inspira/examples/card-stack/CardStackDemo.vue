<script setup lang="ts">
import { cn } from "@inspira-ui/plugins";
import { ref } from "vue";
import { CardStack, CardStackItem } from "../../ui/card-stack";

interface Props {
  scaleMultiplier?: number;
}

const props = withDefaults(defineProps<Props>(), {
  scaleMultiplier: 0.03,
});

const containerRef = ref<HTMLElement | null>(null);

const cards = [
  {
    bgColor: "bg-[#f97316]",
    title: "The Guiding Light",
    description:
      "Lighthouses have stood as beacons of hope for centuries, guiding sailors safely through treacherous waters. Their glowing light and towering presence serve as a reminder of humanity’s connection to the sea.",
    image:
      "https://plus.unsplash.com/premium_vector-1739262161806-d954eb02427c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
  },
  {
    bgColor: "bg-[#0015ff]",
    title: "Life Beneath the Waves",
    description:
      "From shimmering schools of fish to solitary hunters, the ocean is home to an incredible variety of marine life. Each species plays a vital role in maintaining the balance of underwater ecosystems.",
    image:
      "https://plus.unsplash.com/premium_vector-1739200616200-69a138d91627?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
  },
  {
    bgColor: "bg-[#ff5941]",
    title: "Alone on the Open Sea",
    description:
      "Drifting across the endless horizon, traveling alone on the sea is a test of courage and resilience. With nothing but the waves and the sky, solitude becomes both a challenge and a source of deep reflection.",
    image:
      "https://plus.unsplash.com/premium_vector-1738597190290-a3b571590b9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
  },
  {
    bgColor: "bg-[#1f464d]",
    title: "The Art of Sailing",
    description:
      "Harnessing the power of the wind, sailing is both a skill and an adventure. Whether racing across the waves or leisurely cruising, it’s a timeless way to explore the vast blue expanse.",
    image:
      "https://plus.unsplash.com/premium_vector-1738935247245-97940c74cced?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D",
  },
  {
    bgColor: "bg-[#0015ff]",
    title: "The Era of Whaling",
    description:
      "Once a thriving industry, whale hunting shaped economies and cultures across the world. Today, efforts to protect these majestic creatures highlight the shift toward conservation and respect for marine life.",
    image:
      "https://plus.unsplash.com/premium_vector-1738935247692-1c2f2c924fd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D",
  },
];
</script>

<template>
  <div
    ref="containerRef"
    class="h-[620px] w-full overflow-auto bg-white text-white"
  >
    <CardStack
      :total-cards="cards.length"
      :scale-multiplier="props.scaleMultiplier"
      :scroll-options="{ container: containerRef }"
    >
      <div
        class="relative z-10 flex h-[620px] w-full items-center justify-center text-2xl font-bold whitespace-pre text-[#ff5941] uppercase md:text-7xl"
      >
        Scroll down ↓
      </div>

      <CardStackItem
        v-for="(card, index) in cards"
        :key="card.title"
        :index="index"
        class="h-[620px]"
      >
        <div
          :class="
            cn(
              card.bgColor,
              'relative mx-auto flex aspect-video h-[80%] w-11/12 flex-col px-8 py-10 sm:h-[70%] sm:flex-row',
            )
          "
        >
          <div class="flex flex-1 flex-col justify-center">
            <h2 class="mb-5 text-2xl font-bold">
              {{ card.title }}
            </h2>
            <p>
              {{ card.description }}
            </p>
          </div>

          <div class="relative aspect-video w-full overflow-hidden rounded-xl sm:w-1/2">
            <img
              :src="card.image"
              :alt="card.title"
              width="800"
              height="450"
              class="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </CardStackItem>
    </CardStack>
  </div>
</template>
