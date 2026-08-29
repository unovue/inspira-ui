<script setup lang="ts">
import { useDialKit } from "dialkit/vue";
import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    strength: range(1.25, 0.25, 3, 0.05),
    mouseDamping: range(0.9, 0.5, 0.98, 0.01),
    mouseEnabled: false,
  },
  { id: "html-drag", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <HtmlDragDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
