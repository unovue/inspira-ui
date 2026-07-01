<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import SingularityBackgroundDemo from "@/components/inspira/examples/bg-singularity/SingularityBackgroundDemo.vue";

import { shaderToyControls } from "../dialkit-controls";
import DialKitConfigPanel from "../DialKitConfigPanel.vue";

const config = useDialKit("", shaderToyControls(), {
  id: "bg-singularity",
  persist: false,
});
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <SingularityBackgroundDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
