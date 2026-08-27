<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range, select } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    effect: select("liquid", [
      { label: "Liquid", value: "liquid" },
      { label: "Cloth", value: "cloth" },
      { label: "Blaze", value: "blaze" },
    ]),
    frequency: range(18, 4, 32, 1),
    mouseDamping: range(0.9, 0.5, 0.98, 0.01),
    scale: range(6, 2, 12, 0.1),
    speed: range(1, 0.1, 3, 0.1),
    strength: range(0.03, 0, 0.06, 0.001),
    waveSpeed: range(3, 0.5, 8, 0.1),
  },
  { id: "html-in-canvas", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <HtmlInCanvasDemo v-bind="config" />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
