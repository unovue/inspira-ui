<script setup lang="ts">
import type { Transition } from "motion-v";
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { Motion } from "motion-v";
import { computed, useSlots } from "vue";

type StaggerOrigin = "first" | "last" | "center" | number;

interface Props {
  text?: string;
  as?: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  transition?: Transition;
  staggerDuration?: number;
  staggerFrom?: StaggerOrigin;
  repeatDelay?: number;
  class?: HTMLAttributes["class"];
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  as: "span",
  transition: () => ({ duration: 1.5, ease: "easeInOut" }),
  staggerDuration: 0.1,
  staggerFrom: "first" as StaggerOrigin,
  repeatDelay: 0.1,
});

const slots = useSlots();

function extractText(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(extractText).join("");

  if (typeof value === "object" && "children" in value) {
    return extractText(value.children);
  }

  return "";
}

const label = computed(() => props.text ?? extractText(slots.default?.()));
const letters = computed(() => [...label.value]);

function getStaggerIndex(index: number) {
  if (typeof props.staggerFrom === "number") return Math.abs(index - props.staggerFrom);

  switch (props.staggerFrom) {
    case "last":
      return letters.value.length - 1 - index;
    case "center":
      return Math.abs(index - Math.floor(letters.value.length / 2));
    default:
      return index;
  }
}

function getLetterTransition(index: number): Transition {
  return {
    ...props.transition,
    repeat: Infinity,
    repeatType: "mirror",
    delay: getStaggerIndex(index) * props.staggerDuration,
    repeatDelay: props.repeatDelay,
  };
}
</script>

<template>
  <component
    :is="props.as"
    v-bind="$attrs"
    :class="
      cn(
        'relative after:pointer-events-none after:invisible after:absolute after:h-0 after:overflow-hidden after:font-black after:content-[attr(data-text)] after:select-none',
        props.class,
      )
    "
    :data-text="label"
  >
    <Motion
      v-for="(letter, index) in letters"
      :key="`${index}-${letter}`"
      as="span"
      class="inline-block whitespace-pre"
      aria-hidden="true"
      :initial="{ fontVariationSettings: props.fromFontVariationSettings }"
      :animate="{ fontVariationSettings: props.toFontVariationSettings }"
      :transition="getLetterTransition(index)"
    >
      {{ letter }}
    </Motion>

    <span class="sr-only">{{ label }}</span>
  </component>
</template>
