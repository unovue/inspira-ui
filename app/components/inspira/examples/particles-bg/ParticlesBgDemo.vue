<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

const isDark = computed(() => useColorMode().value === "dark");
</script>

<template>
  <div
    class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl"
  >
    <span
      class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10"
    >
      Particles
    </span>
    <ParticlesBg
      :key="isDark.toString()"
      class="absolute inset-0"
      :quantity="100"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
  </div>
</template>
