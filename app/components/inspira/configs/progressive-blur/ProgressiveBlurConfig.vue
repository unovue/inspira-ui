<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range, select } from "../dialkit-controls";
import DialKitConfigPanel from "../DialKitConfigPanel.vue";

interface Props {
  direction: "top" | "right" | "left" | "bottom";
  blurLayers: number;
  blurIntensity: number;
}

const rawConfig = useDialKit(
  "",
  {
    direction: select("bottom", ["top", "right", "left", "bottom"]),
    blurLayers: range(8, 0, 50),
    blurIntensity: range(6, 0, 10, 0.01),
  },
  { id: "progressive-blur", persist: false },
);

const config = computed<Props>(() => ({
  direction: rawConfig.value.direction as Props["direction"],
  blurLayers: rawConfig.value.blurLayers,
  blurIntensity: rawConfig.value.blurIntensity,
}));
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <ProgressiveBlurDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
