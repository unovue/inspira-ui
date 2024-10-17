<template>
  <div class="absolute inset-0">
    <Motion
      v-for="i in 130"
      :key="`star-${i}`"
      is="span"
      :initial="{
        top: `calc(${random() * 100}% + ${randomMove()}px)`,
        left: `calc(${random() * 100}% + ${randomMove()}px)`,
      }"
      :enter="{
        top: `calc(${random() * 100}% + ${randomMove()}px)`,
        left: `calc(${random() * 100}% + ${randomMove()}px)`,
        opacity: randomOpacity(),
        scale: [1, 1.2, 0],
        transition: {
          opacity: {
            duration: 1000,
            repeat: Infinity,
            type: 'tween',
          },
          scale: {
            duration: 1000,
            repeat: Infinity,
            type: 'tween',
          },
          repeat: Infinity,
          ease: 'linear',
        },
      }"
      :duration="random() * 10000 + 20000"
      class="inline-block absolute w-0.5 h-0.5 bg-white rounded-full z-[1]"
    />
  </div>
</template>

<script setup lang="ts">
const randomMove = () => Math.random() * 4 - 2;
const randomOpacity = () => Math.random();
const random = () => Math.random();
</script>
