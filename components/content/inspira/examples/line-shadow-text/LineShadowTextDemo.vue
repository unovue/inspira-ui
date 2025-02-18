<template>
  <div class="flex h-56 w-full flex-col items-center justify-center gap-2">
    <h1 class="text-balance text-8xl font-extrabold leading-none tracking-tighter">
      Ship
      <LineShadowText
        class="italic"
        :shadow-color="shadowColor"
      >
        Fast
      </LineShadowText>
    </h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";

const isDark = computed(() => useColorMode().value == "dark");
const shadowColor = computed(() => (isDark.value ? "white" : "black"));
</script>
