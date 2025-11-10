<script lang="ts" setup>
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

const isDark = computed(() => useColorMode().value == "dark");
const bgColor = computed(() => (isDark.value ? "#000" : "#fff"));
</script>

<template>
  <div class="z-10 flex h-56 w-full flex-col items-center justify-center">
    <GradientButton :bg-color="bgColor">Zooooooooooom 🚀</GradientButton>
  </div>
</template>
