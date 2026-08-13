<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    stiffness: range(200, 50, 500, 10),
    damping: range(30, 5, 100, 1),
    mass: range(1, 0.1, 5, 0.1),
  },
  { id: "scroll-swap-text", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <ScrollSwapTextDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
