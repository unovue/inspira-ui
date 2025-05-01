<template>
  <div class="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
    <Motion
      as="img"
      src="https://assets.aceternity.com/linear-demo.webp"
      class="pointer-events-none absolute inset-0 size-full object-cover [mask-image:radial-gradient(circle,transparent,black_80%)]"
      :initial="{ opacity: 0 }"
      :while-in-view="{
        opacity: 0.5,
      }"
      :transition="{
        duration: 1,
      }"
    />
    <div>
      <h1
        class="z-2 relative text-center font-sans text-2xl font-bold text-white lg:text-7xl md:text-5xl"
      >
        The best <ColourfulText text="components" />
        <br />
        you will ever find
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";
</script>
