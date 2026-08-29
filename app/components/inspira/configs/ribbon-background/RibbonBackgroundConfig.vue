<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    color1: { type: "color", default: "#2563eb" },
    color2: { type: "color", default: "#06b6d4" },
    color3: { type: "color", default: "#14b8a6" },
    color4: { type: "color", default: "#f97316" },
    color5: { type: "color", default: "#fb7185" },
    backgroundColor: { type: "color", default: "#282828" },
    transparent: true,
    enableShadows: true,
    angle: range(30, -180, 180),
    offsetX: range(0.25, -1, 1, 0.01),
    offsetY: range(0, -1, 1, 0.01),
    speed: range(0.85, 0, 4, 0.05),
  },
  { id: "ribbon-background", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <RibbonBackgroundDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
