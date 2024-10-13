<template>
  <div>
    <ImagesSlider :images="images" autoplay>
      <div
        class="w-full h-full flex justify-center items-end p-8 bg-gradient-to-b from-transparent via-transparent to-black/80"
      >
        <div class="max-w-prose text-center">
          <h1 class="text-5xl mb-8 max-md:text-2xl">
            The hero section slide-show nobody asked for
          </h1>
          <button
            class="rounded-full backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white px-4 py-2 text-sm"
          >
            Join Now
          </button>
        </div>
      </div>
    </ImagesSlider>
  </div>
</template>

<script lang="ts" setup>
const images = [
  "https://picsum.photos/seed/waiting/1920/1080",
  "https://picsum.photos/seed/full-collapse/1920/1080",
  "https://picsum.photos/seed/five-stories-falling/1920/1080",
  "https://picsum.photos/seed/war-all-the-time/1920/1080",
  "https://picsum.photos/seed/a-city-by-the-light-divided/1920/1080",
  "https://picsum.photos/seed/common-existence/1920/1080",
  "https://picsum.photos/seed/no-devolucion/1920/1080",
];
</script>
