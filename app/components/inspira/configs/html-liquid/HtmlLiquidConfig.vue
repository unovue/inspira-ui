<script setup lang="ts">
import { useDialKit } from "dialkit/vue";
import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    strength: range(0.03, 0, 0.08, 0.001),
    frequency: range(18, 4, 32, 1),
    speed: range(3, 0.5, 8, 0.1),
    mouseDamping: range(0.9, 0.5, 0.98, 0.01),
  },
  { id: "html-liquid", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <HtmlLiquidDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
