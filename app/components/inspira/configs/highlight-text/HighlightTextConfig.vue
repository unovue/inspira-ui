<script setup lang="ts">
import { useDialKit } from "dialkit/vue";
import { range } from "../../../common/dial-kit/dialkit-controls";

const config = useDialKit(
  "",
  {
    highlightColor: { type: "color", default: "#f2ad91" },
    duration: range(1, 0.2, 2, 0.05),
    delay: range(0.4, 0, 1.5, 0.05),
  },
  { id: "highlight-text", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <HighlightTextDemo
        :key="JSON.stringify(config)"
        v-bind="config as any"
      />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
