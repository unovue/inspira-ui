<script lang="ts" setup>
import { useDialKit } from "dialkit/vue";
import { range, select } from "../../../common/dial-kit/dialkit-controls";

const config = useDialKit(
  "",
  {
    radius: range(120, 40, 240, 10),
    duration: range(10, 4, 60, 1),
    easing: select("linear", ["linear", "ease-in", "ease-out", "ease-in-out"]),
    direction: select("normal", ["normal", "reverse"]),
    pauseOnHover: true,
  },
  { id: "circular-gallery", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <CircularGalleryDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
