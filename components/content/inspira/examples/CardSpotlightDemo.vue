<template>
  <div class="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
    <CardSpotlight
      class="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
      :gradient-color="isDark ? '#363636' : '#C9C9C9'"
    >
      Card Spotlight
    </CardSpotlight>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";

const isDark = computed(() => useColorMode().value == "dark");
</script>
