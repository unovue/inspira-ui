<script lang="ts" setup>
import type { Props } from "../../ui/dither-shader/DitherShader.vue";
import { DitherShader } from "../../ui/dither-shader";

export interface DemoProps extends Omit<Props, "class" | "src"> {}

const {
  gridSize = 4,
  ditherMode = "bayer",
  colorMode = "original",
  invert = false,
  pixelRatio = 1,
  primaryColor = "#000000",
  secondaryColor = "#ffffff",
  customPalette = ["#000000", "#ffffff"],
  brightness = 0,
  contrast = 1,
  backgroundColor = "transparent",
  objectFit = "cover",
  threshold = 0.5,
  animated = false,
  animationSpeed = 0.02,
} = defineProps<DemoProps>();
</script>

<template>
  <div class="relative flex flex-col items-center gap-6 overflow-hidden p-8">
    <DitherShader
      src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      :invert
      :contrast
      :brightness
      :animated
      :grid-size="gridSize"
      :threshold="threshold"
      :color-mode="colorMode"
      :object-fit="objectFit"
      :dither-mode="ditherMode"
      :pixel-ratio="pixelRatio"
      :primary-color="primaryColor"
      :custom-palette="customPalette"
      :secondary-color="secondaryColor"
      :animation-speed="animationSpeed"
      :background-color="backgroundColor"
      class="h-72 w-100 sm:h-80 sm:w-125"
    />
  </div>
</template>
