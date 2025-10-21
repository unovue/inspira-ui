<script lang="ts" setup>
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

const isDark = computed(() => useColorMode().value == "dark");
const rightColor = computed(() => (isDark.value ? "#FFFFFF" : "#000000"));
const indicatorColor = computed(() => (isDark.value ? "#FFFFFF" : "#000000"));
</script>

<template>
  <div class="w-full p-4">
    <BalanceSlider
      :right-color="rightColor"
      left-content="COFFEE"
      right-content="MILK"
      :indicator-color="indicatorColor"
    />
  </div>
</template>
