<template>
  <div class="relative w-full overflow-hidden rounded-lg bg-black/[0.96]">
    <div
      class="absolute flex w-full flex-col items-center justify-center gap-2 p-8 text-center font-heading text-white"
    >
      <span class="text-4xl font-semibold"> Inspira UI </span>
      <span class="font-sans font-light">Build spline animations with style.</span>
    </div>
    <div class="flex">
      <Spline
        :scene="sceneUrl"
        class="mt-24 size-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
</script>
