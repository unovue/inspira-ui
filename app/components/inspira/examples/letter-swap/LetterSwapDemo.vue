<script setup lang="ts">
import type { Transition } from "motion-v";

interface Props {
  random?: boolean;
  duration?: number;
  staggerDuration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  random: false,
  duration: 0.7,
  staggerDuration: 0.03,
});

const transition = computed<Transition>(() => ({
  type: "spring",
  duration: props.duration,
}));
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-white text-xl text-black md:text-3xl"
  >
    <div class="flex flex-col gap-y-1 p-12 md:gap-y-2">
      <LetterSwap
        label="Hover me chief!"
        :random="props.random"
        :transition="transition"
        :stagger-duration="props.staggerDuration"
        class="italic"
      />
      <LetterSwap
        label="{awesome}"
        :random="props.random"
        :reverse="false"
        :transition="transition"
        :stagger-duration="props.staggerDuration"
        class="font-bold"
      />
      <LetterSwap
        label="Good day!"
        :random="props.random"
        stagger-from="center"
        :transition="transition"
        :stagger-duration="props.staggerDuration"
        class="font-mono"
      />
      <LetterSwap
        label="More text?"
        animation="pingpong"
        :random="props.random"
        :reverse="false"
        stagger-from="center"
        :transition="transition"
        :stagger-duration="props.staggerDuration"
        class="font-sans font-bold"
      />
      <LetterSwap
        label="oh, seriously?!"
        animation="pingpong"
        :random="props.random"
        stagger-from="last"
        :transition="transition"
        :stagger-duration="props.staggerDuration"
      />
    </div>
  </div>
</template>
