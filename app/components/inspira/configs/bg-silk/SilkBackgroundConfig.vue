<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { shaderToyControls } from "../dialkit-controls";
import DialKitConfigPanel from "../DialKitConfigPanel.vue";

const config = useDialKit("", shaderToyControls(), {
  id: "bg-silk",
  persist: false,
});
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <SilkBackgroundDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
