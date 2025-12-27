<script setup lang="ts">
import type { VNode } from "vue";
import { useSlots } from "vue";

interface LineShadowTextProps {
  shadowColor?: string;
  as?: keyof HTMLElement;
  class?: string;
}

const props = withDefaults(defineProps<LineShadowTextProps>(), {
  shadowColor: "black",
  as: "span" as keyof HTMLElement,
});

const slots = useSlots() as Record<string, () => VNode[]>;
const children = slots?.default ? slots.default()[0]?.children : null;

const content = typeof children === "string" ? children : null;

if (!content) {
  throw new Error("LineShadowText only accepts string content");
}
</script>

<template>
  <component
    :is="as"
    class="shadow-color animate-line-shadow relative z-0 inline-flex after:absolute after:top-[0.04em] after:left-[0.04em] after:-z-10 after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)] after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent after:content-[attr(data-text)]"
    :class="[props.class]"
    :data-text="content"
  >
    <slot />
  </component>
</template>

<style scoped>
.shadow-color {
  --shadow-color: v-bind(props.shadowColor);
}

.animate-line-shadow::after {
  animation: line-shadow 15s linear infinite;
}

@keyframes line-shadow {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% -100%;
  }
}
</style>
