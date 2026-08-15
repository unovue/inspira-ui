<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range, select } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    random: false,
    radius: range(200, 50, 400, 10),
    falloff: select("linear", ["linear", "exponential", "gaussian"]),
    staggerDuration: range(0.03, 0, 0.1, 0.005),
  },
  { id: "variable-text", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <VariableTextDemo
        :key="JSON.stringify(config)"
        v-bind="config as any"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
