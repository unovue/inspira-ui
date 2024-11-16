<template>
  <div :class="cn('group h-72 w-56 [perspective:1000px]', props.class)">
    <div
      :class="
        cn(
          'relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]',
          rotation[0],
        )
      "
    >
      <!-- Front -->
      <div class="absolute size-full [backface-visibility:hidden]">
        <img
          :src="props.image"
          alt="image"
          class="size-full rounded-2xl object-cover shadow-2xl shadow-black/40"
        />
        <div class="absolute bottom-4 left-4 text-xl font-bold text-white">
          {{ props.title }}
        </div>
      </div>

      <!-- Back -->
      <div
        :class="
          cn(
            'absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]',
            rotation[1],
          )
        "
      >
        <div class="flex min-h-full flex-col gap-2">
          <h1 class="text-xl font-bold text-white">{{ props.subtitle }}</h1>
          <p
            class="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100"
          >
            {{ props.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";

interface FlipCardProps {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  rotate?: "x" | "y";
  class?: string;
}

const props = withDefaults(defineProps<FlipCardProps>(), {
  rotate: "y",
});
const rotationClass = {
  x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
  y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
};

const rotation = computed(() => rotationClass[props.rotate]);
</script>
