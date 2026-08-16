<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    speed: range(0.5, 0.05, 2, 0.05),
    timeOffset: range(0, 0, 6.28, 0.1),
  },
  { id: "float", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <FloatDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
