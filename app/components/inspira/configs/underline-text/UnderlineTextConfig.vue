<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range, select } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    variant: select("center", ["center", "comes-in-goes-out", "goes-out-comes-in"]),
    direction: select("left", ["left", "right"]),
    underlineHeightRatio: range(0.1, 0.04, 0.25, 0.01),
    underlinePaddingRatio: range(0.01, 0, 0.1, 0.01),
  },
  { id: "underline-text", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <UnderlineTextDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
