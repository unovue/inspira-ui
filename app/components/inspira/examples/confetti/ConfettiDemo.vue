<script setup lang="ts">
import { ref } from "vue";

const confettiRef = ref(null);

// Function to trigger confetti
function fireConfetti() {
  confettiRef.value?.fire({});
}
</script>

<template>
  <div
    class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
  >
    <span
      class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10"
    >
      Confetti
    </span>

    <!-- Confetti component with ref -->
    <Confetti
      ref="confettiRef"
      class="absolute top-0 left-0 z-0 size-full"
      @mouseenter="fireConfetti"
    />
  </div>
</template>
