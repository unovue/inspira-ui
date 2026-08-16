<script setup lang="ts">
import { Motion } from "motion-v";

interface Props {
  speed?: number;
  timeOffset?: number;
}

const props = withDefaults(defineProps<Props>(), {
  speed: 0.5,
  timeOffset: 0,
});

const imageUrl =
  "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
</script>

<template>
  <div
    class="bg-background text-foreground flex h-full min-h-112 w-full flex-col items-center justify-center"
  >
    <div class="flex h-full w-full flex-col items-center justify-center">
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.25, delay: 0.5, ease: 'easeOut' }"
      >
        <Float
          :speed="props.speed"
          :time-offset="props.timeOffset"
        >
          <div
            class="relative size-32 cursor-pointer overflow-hidden shadow-2xl transition-transform duration-200 hover:scale-105 sm:size-40 md:size-48"
          >
            <img
              :src="imageUrl"
              alt="Portrait under a blue sky"
              class="absolute inset-0 size-full object-cover"
            />
          </div>
        </Float>
      </Motion>

      <Motion
        as="h2"
        class="pt-8 text-xl uppercase sm:pt-12 sm:text-3xl md:pt-16 md:text-4xl"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.25, delay: 0.7, ease: 'easeOut' }"
      >
        Album of the week
      </Motion>
    </div>
  </div>
</template>
