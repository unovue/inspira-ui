<template>
  <div class="w-full h-56 flex flex-col items-center justify-center z-10">
    <GradientButton :bg-color="bgColor">Zooooooooooom 🚀</GradientButton>
  </div>
</template>

<script lang="ts" setup>
const isDark = computed(() => useColorMode().value == "dark");
const bgColor = computed(() => (isDark.value ? "#000" : "#fff"));
</script>
