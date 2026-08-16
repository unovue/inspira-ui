<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { useResizeObserver } from "@vueuse/core";
import { Motion, useAnimationControls } from "motion-v";
import { computed, onMounted, ref } from "vue";

export type UnderlineTextVariant = "center" | "comes-in-goes-out" | "goes-out-comes-in";
export type UnderlineTextDirection = "left" | "right";

interface Props {
  as?: string;
  variant?: UnderlineTextVariant;
  direction?: UnderlineTextDirection;
  transition?: Record<string, unknown>;
  underlineHeightRatio?: number;
  underlinePaddingRatio?: number;
  class?: HTMLAttributes["class"];
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  as: "span",
  variant: "center",
  direction: "left",
  transition: () => ({ duration: 0.25, ease: "easeInOut" }),
  underlineHeightRatio: 0.1,
  underlinePaddingRatio: 0.01,
});

const textRef = ref<HTMLElement | null>(null);
const fontSize = ref(16);
const controls = useAnimationControls();
const blocked = ref(false);
const isHovered = ref(false);

const underlineMetrics = computed(() => ({
  "--underline-height": `${fontSize.value * props.underlineHeightRatio}px`,
  "--underline-padding": `${fontSize.value * props.underlinePaddingRatio}px`,
  height: "var(--underline-height)",
  bottom:
    props.variant === "comes-in-goes-out"
      ? "var(--underline-padding)"
      : "calc(-1 * var(--underline-padding))",
}));

const initialWidth = computed(() => (props.variant === "goes-out-comes-in" ? "100%" : "0%"));

const centerVariants = computed(() => ({
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: props.transition,
  },
}));

function updateUnderlineStyles() {
  if (textRef.value) {
    fontSize.value = Number.parseFloat(getComputedStyle(textRef.value).fontSize) || 16;
  }
}

useResizeObserver(textRef, updateUnderlineStyles);
onMounted(updateUnderlineStyles);

async function animateSideVariant() {
  if (props.variant === "center" || blocked.value) return;

  blocked.value = true;

  if (props.variant === "comes-in-goes-out") {
    await controls.start({
      width: "100%",
      transition: props.transition,
      transitionEnd: {
        left: props.direction === "left" ? "auto" : 0,
        right: props.direction === "left" ? 0 : "auto",
      },
    });

    await controls.start({
      width: 0,
      transition: props.transition,
      transitionEnd: {
        left: props.direction === "left" ? 0 : "auto",
        right: props.direction === "left" ? "auto" : 0,
      },
    });
  } else {
    await controls.start({
      width: 0,
      transition: props.transition,
      transitionEnd: {
        left: props.direction === "left" ? "auto" : 0,
        right: props.direction === "left" ? 0 : "auto",
      },
    });

    await controls.start({
      width: "100%",
      transition: props.transition,
      transitionEnd: {
        left: props.direction === "left" ? 0 : "auto",
        right: props.direction === "left" ? "auto" : 0,
      },
    });
  }

  blocked.value = false;
}

function handleMouseEnter() {
  isHovered.value = true;
  void animateSideVariant();
}

function handleMouseLeave() {
  isHovered.value = false;
}
</script>

<template>
  <component
    :is="props.as"
    ref="textRef"
    v-bind="$attrs"
    :class="cn('relative inline-block cursor-pointer', props.class)"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span>
      <slot />
    </span>

    <Motion
      v-if="props.variant === 'center'"
      as="span"
      aria-hidden="true"
      class="absolute left-1/2 -translate-x-1/2 bg-current"
      :style="underlineMetrics"
      :variants="centerVariants"
      initial="hidden"
      :animate="isHovered ? 'visible' : 'hidden'"
    />
    <Motion
      v-else
      as="span"
      aria-hidden="true"
      :class="cn('absolute bg-current', props.direction === 'left' ? 'left-0' : 'right-0')"
      :style="{ ...underlineMetrics, width: initialWidth }"
      :animate="controls"
    />
  </component>
</template>
