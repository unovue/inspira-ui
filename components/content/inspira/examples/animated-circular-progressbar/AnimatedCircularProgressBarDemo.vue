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

let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  value.value = handleIncrement(value.value);
  interval = setInterval(() => {
    value.value = handleIncrement(value.value);
  }, 2000);
});

onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>
