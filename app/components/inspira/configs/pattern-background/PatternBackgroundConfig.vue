<script setup lang="ts">
import type { BaseProps } from "../../ui/pattern-background";

import { useDialKit } from "dialkit/vue";
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_MASK,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from "../../ui/pattern-background";

import { range, select } from "../dialkit-controls";
import DialKitConfigPanel from "../DialKitConfigPanel.vue";

const controls = useDialKit(
  "",
  {
    animate: true,
    direction: select("bottom", Object.values(PATTERN_BACKGROUND_DIRECTION)),
    variant: select("big-dot", Object.values(PATTERN_BACKGROUND_VARIANT)),
    size: select("md", ["xs", "sm", "md", "lg", "xl"]),
    mask: select("ellipse-top", Object.values(PATTERN_BACKGROUND_MASK)),
    speed: range(PATTERN_BACKGROUND_SPEED.Slow, 1000, 30000, 1000),
  },
  { id: "pattern-background", persist: false },
);

const config = computed<Omit<BaseProps, "class">>(() => ({
  animate: controls.value.animate,
  direction: controls.value.direction as NonNullable<BaseProps["direction"]>,
  variant: controls.value.variant as NonNullable<BaseProps["variant"]>,
  size: controls.value.size as NonNullable<BaseProps["size"]>,
  mask: controls.value.mask as NonNullable<BaseProps["mask"]>,
  speed: controls.value.speed as NonNullable<BaseProps["speed"]>,
}));
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <PatternBackgroundDemo v-bind="config" />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
