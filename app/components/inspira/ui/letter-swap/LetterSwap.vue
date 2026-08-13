<script lang="ts" setup>
import type { Transition } from "motion-v";
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { stagger, useAnimate } from "motion-v";

type AnimationMode = "forward" | "pingpong";
type StaggerOrigin = "first" | "last" | "center" | number;

interface Props {
  label: string;
  animation?: AnimationMode;
  random?: boolean;
  reverse?: boolean;
  transition?: Transition;
  staggerDuration?: number;
  staggerFrom?: StaggerOrigin;
  class?: HTMLAttributes["class"];
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  animation: "forward" as AnimationMode,
  random: false,
  reverse: true,
  transition: () => ({ type: "spring", duration: 0.7 }),
  staggerDuration: 0.03,
  staggerFrom: "first" as StaggerOrigin,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const [scope, animate] = useAnimate();
const letters = computed(() => props.label.split(""));
const blocked = ref(false);
const isHovered = ref(false);
const shuffledIndices = ref<number[]>([]);

const secondaryStart = computed(() => (props.reverse ? "-100%" : "100%"));
const outgoingY = computed(() => (props.reverse ? "100%" : "-100%"));

function shuffleIndices() {
  shuffledIndices.value = letters.value.map((_, index) => index).sort(() => Math.random() - 0.5);
}

function transitionWithStagger(): Transition {
  return {
    ...props.transition,
    delay: stagger(props.staggerDuration, { from: props.staggerFrom }),
  };
}

function transitionWithDelay(index: number): Transition {
  return {
    ...props.transition,
    delay: index * props.staggerDuration,
  };
}

async function resetForwardAnimation() {
  await Promise.all([
    animate(".letter", { y: 0 }, { duration: 0 }),
    animate(".letter-secondary", { top: secondaryStart.value }, { duration: 0 }),
  ]);
}

async function runForwardAnimation() {
  if (blocked.value) return;

  blocked.value = true;

  await Promise.all([
    animate(".letter", { y: outgoingY.value }, transitionWithStagger()),
    animate(".letter-secondary", { top: "0%" }, transitionWithStagger()),
  ]);

  await resetForwardAnimation();
  blocked.value = false;
}

async function runRandomForwardAnimation() {
  if (blocked.value) return;

  blocked.value = true;
  shuffleIndices();

  await Promise.all(
    shuffledIndices.value.map((letterIndex, animationIndex) =>
      Promise.all([
        animate(
          `.letter-${letterIndex}`,
          { y: outgoingY.value },
          transitionWithDelay(animationIndex),
        ),
        animate(
          `.letter-secondary-${letterIndex}`,
          { top: "0%" },
          transitionWithDelay(animationIndex),
        ),
      ]),
    ),
  );

  await resetForwardAnimation();
  blocked.value = false;
}

function runPingPongAnimation() {
  if (isHovered.value) return;

  isHovered.value = true;

  if (props.random) {
    shuffleIndices();
    shuffledIndices.value.forEach((letterIndex, animationIndex) => {
      animate(
        `.letter-${letterIndex}`,
        { y: outgoingY.value },
        transitionWithDelay(animationIndex),
      );
      animate(
        `.letter-secondary-${letterIndex}`,
        { top: "0%" },
        transitionWithDelay(animationIndex),
      );
    });
    return;
  }

  animate(".letter", { y: outgoingY.value }, transitionWithStagger());
  animate(".letter-secondary", { top: "0%" }, transitionWithStagger());
}

function resetPingPongAnimation() {
  isHovered.value = false;

  if (props.random) {
    shuffledIndices.value.forEach((letterIndex, animationIndex) => {
      animate(`.letter-${letterIndex}`, { y: 0 }, transitionWithDelay(animationIndex));
      animate(
        `.letter-secondary-${letterIndex}`,
        { top: secondaryStart.value },
        transitionWithDelay(animationIndex),
      );
    });
    return;
  }

  animate(".letter", { y: 0 }, transitionWithStagger());
  animate(".letter-secondary", { top: secondaryStart.value }, transitionWithStagger());
}

function handleMouseEnter() {
  if (props.animation === "pingpong") {
    runPingPongAnimation();
    return;
  }

  if (props.random) {
    runRandomForwardAnimation();
    return;
  }

  runForwardAnimation();
}
</script>

<template>
  <span
    ref="scope"
    v-bind="$attrs"
    :class="cn('relative flex items-center justify-center overflow-hidden', props.class)"
    @click="emit('click', $event)"
    @mouseenter="handleMouseEnter"
    @mouseleave="props.animation === 'pingpong' ? resetPingPongAnimation() : undefined"
  >
    <span class="sr-only">{{ props.label }}</span>

    <span
      v-for="(letter, index) in letters"
      :key="`${index}-${letter}`"
      class="relative flex whitespace-pre"
      aria-hidden="true"
    >
      <span
        :class="`letter relative letter-${index}`"
        style="top: 0"
      >
        {{ letter }}
      </span>
      <span
        :class="`letter-secondary absolute letter-secondary-${index}`"
        :style="{ top: secondaryStart }"
      >
        {{ letter }}
      </span>
    </span>
  </span>
</template>
