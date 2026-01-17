<script lang="ts" setup>
interface Props {
  direction?: "top" | "right" | "left" | "bottom";
  blurLayers?: number;
  blurIntensity?: number;
}

const { direction = "bottom", blurLayers = 8, blurIntensity = 0.25 } = defineProps<Props>();
</script>

<template>
  <div class="relative h-96 w-full overflow-clip rounded-lg">
    <img
      src="https://cdn.inspira-ui.com/images/shadow-monarch-of-code-throne.png"
      alt="Shadow Monarch Of Code"
      class="absolute inset-0"
    />
    <ProgressiveBlur
      class="pointer-events-none absolute bottom-0 left-0 h-[50%] w-full"
      :direction
      :blur-layers
      :blur-intensity
    />
    <div class="absolute bottom-0 left-0">
      <div class="flex flex-col items-start gap-0 px-5 py-4">
        <p class="text-base font-medium text-white">Core</p>
        <span class="mb-2 text-base text-zinc-300">Shadow Monarch Of Code</span>
        <p class="text-base text-white">Followed by Igris</p>
      </div>
    </div>
  </div>
</template>
