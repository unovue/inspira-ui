<script setup lang="ts">
import { computed } from "vue";

interface Props {
  quantity?: number;
  ease?: number;
  staticity?: number;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  quantity: 100,
  ease: 100,
  staticity: 10,
});

const colorMode = useColorMode();
const particleColor = computed(
  () => props.color || (colorMode.value === "dark" ? "#ffffff" : "#000000"),
);
</script>

<template>
  <div
    class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl"
  >
    <span
      class="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10"
    >
      Particles
    </span>
    <ParticlesBg
      :key="props.quantity"
      class="absolute inset-0"
      :quantity="props.quantity"
      :ease="props.ease"
      :color="particleColor"
      :staticity="props.staticity"
      refresh
    />
  </div>
</template>
