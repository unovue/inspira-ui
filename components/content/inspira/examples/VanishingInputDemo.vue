<template>
  <div class="h-[40rem] flex flex-col justify-center items-center px-4">
    <h2 class="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
      Ask Anything Silly
    </h2>
    <VanishingInput
      v-model="text"
      :placeholders="placeholders"
      @change="handleChange"
      @submit="onSubmit"
    />
  </div>
</template>

<script setup lang="ts">
const placeholders = [
  "Why is my code always broken?",
  "What does 'undefined' even mean?",
  "How to center a div (for real this time)",
  "Am I smarter than a compiler?",
  "Do loops ever get dizzy?",
];
const text = ref("");

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
};

const onSubmit = (value: string) => {
  console.log("submitted");
};
</script>
