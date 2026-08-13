<script setup lang="ts">
import { useDialKit } from "dialkit/vue";
import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    scaleMultiplier: range(0.03, 0, 0.1, 0.005),
  },
  { id: "card-stack", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <CardStackDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
