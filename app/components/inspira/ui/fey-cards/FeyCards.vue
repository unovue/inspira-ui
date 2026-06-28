<script lang="ts" setup>
import { cn } from "@inspira-ui/plugins";
import { motion } from "motion-v";

export interface HeroCard {
  activeSrc: string;
  left: string;
  showIdleSwap?: boolean;
  cardClass?: string;
}

export interface SpringConfig {
  type: "spring";
  bounce?: number;
  visualDuration?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export interface Props {
  cardSpacing?: number;
  spring?: SpringConfig;
  shiftDistance?: number;
  swapDuration?: number;
  entranceStagger?: number;
  imgSrc?: Array<string>;
  mainImg?: string;
  idleImg?: string;
  class?: string;
}

const {
  cardSpacing = 32,
  spring = {
    type: "spring",
    visualDuration: 0.5,
    bounce: 0.2,
  },
  shiftDistance = 60,
  swapDuration = 0.5,
  entranceStagger = 0.2,
  imgSrc = [],
  mainImg,
  idleImg,
  class: slotClass,
} = defineProps<Props>();

const cards = computed<HeroCard[]>(() => {
  return imgSrc.map((src, index) => {
    if (index === imgSrc.length - 1) {
      return {
        activeSrc: src,
        left: `${(index + 1) * cardSpacing}`,
        showIdleSwap: false,
        cardClass: "transition-opacity duration-300",
      };
    }

    return {
      activeSrc: src,
      left: `${(index + 1) * cardSpacing}`,
    };
  });
});

const activeIndex = ref<number | null>(null);

const isHovered = computed(() => activeIndex.value !== null);

const swapStyle = computed(() => ({
  transitionDuration: `${swapDuration}s`,
}));

const headingClass = [
  "absolute top-1/2 left-1/2 z-50 mx-auto w-fit -translate-x-1/2 -translate-y-1/2",
  "text-center text-xl font-bold tracking-tight whitespace-nowrap md:text-5xl",
  "bg-clip-text py-4 transition-all duration-500",
];

const toggleActiveIndex = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div :class="cn('flex h-dvh w-full items-center justify-center', slotClass)">
    <div>
      <motion.h1
        key="solid"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: isHovered ? 1 : 0 }"
        :class="
          cn(
            'bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_60%,rgba(255,255,255,0.2)_80%,white_100%)]',
            ...headingClass,
            'text-transparent',
          )
        "
      >
        <slot />
      </motion.h1>

      <motion.h1
        key="gradient"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: isHovered ? 0 : 1 }"
        :class="cn('bg-[linear-gradient(to_right,white,white)]', ...headingClass, 'text-inherit')"
      >
        <slot />
      </motion.h1>

      <div class="relative flex h-120 w-96 mask-b-from-10%">
        <img
          :src="mainImg"
          alt="Hero"
          width="1000"
          height="1000"
          class="absolute inset-y-0 left-0 h-120 w-40 object-contain"
        />

        <motion.div
          v-for="(card, index) in cards"
          :key="card.activeSrc"
          :class="cn('group absolute -bottom-2 z-20 h-120 w-40 cursor-pointer', card.cardClass)"
          :initial="{ x: -index * cardSpacing }"
          :style="{ left: `${card.left}px` }"
          :animate="{ x: 0 }"
          :transition="{
            ...spring,
            delay: (cards.length - 1 - index) * entranceStagger,
          }"
          @mouseenter="activeIndex = index"
          @mouseleave="activeIndex = null"
          @click="toggleActiveIndex(index)"
        >
          <motion.div
            class="relative h-full w-full"
            :animate="{
              x: activeIndex !== null && index > activeIndex ? shiftDistance : 0,
            }"
            :transition="spring"
          >
            <template v-if="card.showIdleSwap !== false">
              <img
                :src="card.activeSrc"
                alt="Hero"
                width="1000"
                height="1000"
                :style="swapStyle"
                :class="
                  cn(
                    'absolute inset-0 aspect-9/16 h-full w-full object-contain opacity-0 transition-opacity group-hover:opacity-100',
                    activeIndex === index && 'opacity-100',
                  )
                "
              />

              <img
                :src="idleImg"
                alt="Hero idle"
                width="1000"
                height="1000"
                :style="swapStyle"
                :class="
                  cn(
                    'absolute inset-0 aspect-9/16 h-full w-full object-contain opacity-100 transition-opacity group-hover:opacity-0',
                    activeIndex === index && 'opacity-0',
                  )
                "
              />

              <div class="absolute top-8 left-2 z-50 h-full w-4 blur-md" />
            </template>

            <img
              v-else
              :src="card.activeSrc"
              alt="Hero"
              width="1000"
              height="1000"
              :style="swapStyle"
              class="absolute inset-0 aspect-9/16 h-full w-full object-contain transition-opacity"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
</template>
