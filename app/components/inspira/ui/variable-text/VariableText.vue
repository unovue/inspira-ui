<script lang="ts" setup>
import type { MaybeComputedElementRef } from "@vueuse/core";
import type { Transition } from "motion-v";
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { unrefElement, useMouseInElement, useRafFn } from "@vueuse/core";
import { useAnimate } from "motion-v";

import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

type Falloff = "linear" | "exponential" | "gaussian";

interface FontAxis {
  axis: string;
  fromValue: number;
  toValue: number;
}

interface Props {
  label: string;
  as?: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef: MaybeComputedElementRef;
  radius?: number;
  falloff?: Falloff;
  random?: boolean;
  transition?: Transition;
  staggerDuration?: number;
  class?: HTMLAttributes["class"];
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  as: "span",
  radius: 50,
  falloff: "linear" as Falloff,
  random: false,
  transition: () => ({ type: "spring", duration: 0.7 }),
  staggerDuration: 0.03,
});

const FONT_VARIATION_PATTERN = /['"]?([A-Z0-9]{4})['"]?\s+(-?\d*\.?\d+)/gi;

const [scope, animate] = useAnimate();
const letterRefs = ref<(HTMLElement | null)[]>([]);
const shuffledIndices = ref<number[]>([]);
const letters = computed(() => [...props.label]);
const containerTarget = computed(() => props.containerRef);

const { elementX, elementY, isOutside } = useMouseInElement(containerTarget);

function parseFontVariationSettings(settings: string): Map<string, number> {
  const axes = new Map<string, number>();

  for (const match of settings.matchAll(FONT_VARIATION_PATTERN)) {
    axes.set(match[1], Number(match[2]));
  }

  return axes;
}

const parsedSettings = computed<FontAxis[]>(() => {
  const fromSettings = parseFontVariationSettings(props.fromFontVariationSettings);
  const toSettings = parseFontVariationSettings(props.toFontVariationSettings);

  return Array.from(fromSettings.entries(), ([axis, fromValue]) => ({
    axis,
    fromValue,
    toValue: toSettings.get(axis) ?? fromValue,
  }));
});

function getFontVariationSettings(strength: number): string {
  return parsedSettings.value
    .map(({ axis, fromValue, toValue }) => {
      const value = fromValue + (toValue - fromValue) * strength;
      return `'${axis}' ${value}`;
    })
    .join(", ");
}

function calculateFalloff(distance: number): number {
  const normalizedDistance = Math.min(Math.max(1 - distance / props.radius, 0), 1);

  switch (props.falloff) {
    case "exponential":
      return normalizedDistance ** 2;
    case "gaussian":
      return Math.exp(-((distance / (props.radius / 2)) ** 2) / 2);
    default:
      return normalizedDistance;
  }
}

function resetLetters() {
  const settings = props.fromFontVariationSettings;

  letterRefs.value.forEach((letter) => {
    if (letter) letter.style.fontVariationSettings = settings;
  });
}

function updateProximity() {
  if (props.random || isOutside.value) {
    resetLetters();
    return;
  }

  const container = props.containerRef ? unrefElement(props.containerRef) : null;
  if (!container) return;

  const containerRect = container.getBoundingClientRect();

  letterRefs.value.forEach((letter) => {
    if (!letter) return;

    const rect = letter.getBoundingClientRect();
    const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
    const letterCenterY = rect.top + rect.height / 2 - containerRect.top;
    const distance = Math.hypot(elementX.value - letterCenterX, elementY.value - letterCenterY);
    const settings =
      distance >= props.radius
        ? props.fromFontVariationSettings
        : getFontVariationSettings(calculateFalloff(distance));

    if (letter.style.fontVariationSettings !== settings) {
      letter.style.fontVariationSettings = settings;
    }
  });
}

const { pause, resume } = useRafFn(updateProximity, { immediate: false });

function shuffleIndices() {
  const indices = letters.value.map((_, index) => index);

  for (let index = indices.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [indices[index], indices[randomIndex]] = [indices[randomIndex], indices[index]];
  }

  shuffledIndices.value = indices;
}

function transitionWithDelay(index: number): Transition {
  return {
    ...props.transition,
    delay: index * props.staggerDuration,
  };
}

function animateRandom(settings: string) {
  if (!shuffledIndices.value.length) shuffleIndices();

  shuffledIndices.value.forEach((letterIndex, animationIndex) => {
    animate(
      `.variable-font-letter-${letterIndex}`,
      { fontVariationSettings: settings },
      transitionWithDelay(animationIndex),
    );
  });
}

function handleMouseEnter() {
  if (props.random) animateRandom(props.toFontVariationSettings);
}

function handleMouseLeave() {
  if (props.random) animateRandom(props.fromFontVariationSettings);
}

function setLetterRef(index: number, element: Element | null) {
  letterRefs.value[index] = element instanceof HTMLElement ? element : null;
}

onMounted(() => {
  shuffleIndices();
  if (!props.random) resume();
});

watch(
  () => [props.label, props.random, props.fromFontVariationSettings] as const,
  async () => {
    await nextTick();
    shuffleIndices();
    resetLetters();

    if (props.random) pause();
    else resume();
  },
);

onBeforeUnmount(() => pause());
</script>

<template>
  <component
    :is="props.as"
    ref="scope"
    v-bind="$attrs"
    :class="cn(props.class)"
    :data-text="props.label"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span class="sr-only">{{ props.label }}</span>

    <span
      v-for="(letter, index) in letters"
      :key="`${index}-${letter}`"
      :ref="(element) => setLetterRef(index, element as Element | null)"
      :class="cn('inline-block whitespace-pre', `variable-font-letter-${index}`)"
      :style="{ fontVariationSettings: props.fromFontVariationSettings }"
      aria-hidden="true"
    >{{ letter }}</span>
  </component>
</template>
