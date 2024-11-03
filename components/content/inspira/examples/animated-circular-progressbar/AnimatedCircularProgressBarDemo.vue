<template>
  <div class="flex items-center justify-center py-1">
    <AnimatedCircularProgressBar
      :max="100"
      :min="0"
      :value="value"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const value = ref(0);

function handleIncrement(prev: number) {
  return prev === 100 ? 0 : prev + 10;
}

onMounted(() => {
  value.value = handleIncrement(value.value);
  const interval = setInterval(() => {
    value.value = handleIncrement(value.value);
  }, 2000);

  onBeforeUnmount(() => clearInterval(interval));
});
</script>
