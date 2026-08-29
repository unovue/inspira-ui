<script setup lang="ts">
import { useDialKit } from "dialkit/vue";
import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  { cellSize: range(8, 5, 40, 1) },
  { id: "html-ascii", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <HtmlAsciiDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
