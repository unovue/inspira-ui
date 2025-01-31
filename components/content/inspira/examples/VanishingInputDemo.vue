<template>
  <div class="flex h-[40rem] flex-col items-center justify-center px-4">
    <h2 class="mb-10 text-center text-xl text-black sm:mb-20 sm:text-5xl dark:text-white">
      Ask Anything Silly
    </h2>
    <VanishingInput
      v-model="text"
      :placeholders="placeholders"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const placeholders = [
  "Why is my code always broken?",
  "What does 'undefined' even mean?",
  "How to center a div (for real this time)",
  "Am I smarter than a compiler?",
  "Do loops ever get dizzy?",
];
const text = ref("");
</script>
