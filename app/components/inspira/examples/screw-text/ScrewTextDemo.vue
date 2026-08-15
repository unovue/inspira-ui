<script setup lang="ts">
import type { Transition } from "motion-v";

type RotateDirection = "top" | "right" | "bottom" | "left";
type StaggerOrigin = "first" | "last" | "center" | "random" | number;

interface Props {
  rotateDirection?: RotateDirection;
  staggerDuration?: number;
  staggerFrom?: StaggerOrigin;
  stiffness?: number;
  damping?: number;
}

const props = withDefaults(defineProps<Props>(), {
  rotateDirection: "top" as RotateDirection,
  staggerDuration: 0.03,
  staggerFrom: "first" as StaggerOrigin,
  stiffness: 160,
  damping: 25,
});

const transition = computed<Transition>(() => ({
  type: "spring",
  stiffness: props.stiffness,
  damping: props.damping,
}));
</script>

<template>
  <div class="bg-background relative flex h-full w-full flex-col items-center justify-center p-8">
    <div class="flex w-full flex-col items-center">
      <ScrewText
        label="SET YOUR MIND TO IT"
        :rotate-direction="props.rotateDirection"
        :stagger-duration="props.staggerDuration"
        :stagger-from="props.staggerFrom"
        :transition="transition"
        class="font-serif text-xl lowercase sm:text-5xl md:text-7xl"
        front-face-class="bg-background text-foreground"
        second-face-class="bg-background text-foreground"
      />
    </div>
  </div>
</template>
