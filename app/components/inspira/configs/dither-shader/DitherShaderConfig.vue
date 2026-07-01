<script setup lang="ts">
import type { DemoProps } from "../../examples/dither-shader/DitherShaderDemo.vue";

import { useDialKit } from "dialkit/vue";
import DitherShaderDemo from "../../examples/dither-shader/DitherShaderDemo.vue";

import { range, select } from "../dialkit-controls";
import DialKitConfigPanel from "../DialKitConfigPanel.vue";

const controls = useDialKit(
  "",
  {
    gridSize: range(4, 1, 16),
    ditherMode: select("bayer", ["bayer", "halftone", "noise", "crosshatch"]),
    colorMode: select("original", ["original", "grayscale", "duotone"]),
    invert: false,
    pixelRatio: range(1, 0.25, 4, 0.25),
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    backgroundColor: "#00000000",
    brightness: range(0, -1, 1, 0.01),
    contrast: range(1, 0, 2, 0.01),
    objectFit: select("cover", ["cover", "contain", "fill", "none"]),
    threshold: range(0.5, 0, 1, 0.01),
    animated: false,
    animationSpeed: range(0.02, 0, 0.2, 0.01),
  },
  { id: "dither-shader", persist: false },
);

const config = computed<Required<DemoProps>>(() => ({
  ...controls.value,
  ditherMode: controls.value.ditherMode as Required<DemoProps>["ditherMode"],
  colorMode: controls.value.colorMode as Required<DemoProps>["colorMode"],
  objectFit: controls.value.objectFit as Required<DemoProps>["objectFit"],
  customPalette: [controls.value.primaryColor, controls.value.secondaryColor],
}));
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <DitherShaderDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
