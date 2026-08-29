<script setup lang="ts">
import { useDialKit } from "dialkit/vue";
import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    strength: range(0.03, 0, 0.08, 0.001),
    scale: range(6, 2, 12, 0.1),
    speed: range(1, 0.1, 3, 0.1),
  },
  { id: "html-cloth", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <HtmlClothDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
