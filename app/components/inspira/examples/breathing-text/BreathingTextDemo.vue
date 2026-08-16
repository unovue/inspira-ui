<script setup lang="ts">
import type { Transition } from "motion-v";

type StaggerOrigin = "first" | "last" | "center" | number;

interface Props {
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  duration?: number;
  staggerDuration?: number;
  staggerFrom?: StaggerOrigin;
  repeatDelay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  fromFontVariationSettings: "'wght' 100, 'slnt' 0",
  toFontVariationSettings: "'wght' 800, 'slnt' -10",
  duration: 1.5,
  staggerDuration: 0.08,
  staggerFrom: "first" as StaggerOrigin,
  repeatDelay: 0.1,
});

const transition = computed<Transition>(() => ({
  duration: props.duration,
  ease: "easeInOut",
}));
</script>

<template>
  <div
    class="font-variable bg-background text-foreground flex h-full w-full flex-row items-center justify-center gap-12 text-3xl sm:text-4xl md:text-5xl"
  >
    <div class="flex flex-col items-center justify-center">
      <BreathingText
        text="overused grotesk"
        :stagger-duration="props.staggerDuration"
        :stagger-from="props.staggerFrom"
        :from-font-variation-settings="props.fromFontVariationSettings"
        :to-font-variation-settings="props.toFontVariationSettings"
        :transition="transition"
        :repeat-delay="props.repeatDelay"
      />
    </div>
  </div>
</template>
