<script setup lang="ts">
import { useDialKit } from "dialkit/vue";
import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    strength: range(0.03, 0, 0.1, 0.001),
    mouseDamping: range(0.9, 0.5, 0.98, 0.01),
  },
  { id: "html-chromatic", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <HtmlChromaticDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
