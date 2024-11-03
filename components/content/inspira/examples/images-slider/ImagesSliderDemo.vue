<template>
  <div>
    <ImagesSlider
      :images="images"
      autoplay
    >
      <div
        class="flex size-full items-end justify-center bg-gradient-to-b from-transparent via-transparent to-black/80 p-8"
      >
        <div class="max-w-prose text-center">
          <h1 class="mb-8 text-5xl max-md:text-2xl">
            The hero section slide-show nobody asked for
          </h1>
          <button
            class="rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
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
