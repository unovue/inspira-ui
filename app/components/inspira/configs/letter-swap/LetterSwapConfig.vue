<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    random: false,
    duration: range(0.7, 0.2, 1.5, 0.05),
    staggerDuration: range(0.03, 0, 0.1, 0.005),
  },
  { id: "letter-swap", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <LetterSwapDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
