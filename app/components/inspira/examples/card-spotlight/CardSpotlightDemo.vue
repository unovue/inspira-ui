<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

const isDark = computed(() => useColorMode().value == "dark");
</script>

<template>
  <div class="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
    <CardSpotlight
      class="cursor-pointer flex-col items-center justify-center text-4xl whitespace-nowrap shadow-2xl"
      :gradient-color="isDark ? '#363636' : '#C9C9C9'"
    >
      Card Spotlight
    </CardSpotlight>
  </div>
</template>
