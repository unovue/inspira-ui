<template>
  <div
    class="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-white dark:bg-black"
  >
    <div class="absolute inset-0 h-screen w-full">
      <Sparkles
        background="transparent"
        :min-size="0.8"
        :max-size="2"
        :particle-density="800"
        class="size-full"
        :particle-color="particlesColor"
      />
    </div>
    <h1
      class="relative z-20 text-center text-3xl font-bold text-black lg:text-6xl md:text-7xl dark:text-white"
    >
      Build great products
    </h1>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";

const particlesColor = computed(() => (useColorMode().value === "dark" ? "#FFFFFF" : "#000000"));
</script>
