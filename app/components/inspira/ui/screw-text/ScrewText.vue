<script setup lang="ts">
import type { Transition } from "motion-v";
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { stagger, useAnimate } from "motion-v";

type RotateDirection = "top" | "right" | "bottom" | "left";
type StaggerOrigin = "first" | "last" | "center" | "random" | number;

interface Props {
  label: string;
  as?: string;
  class?: HTMLAttributes["class"];
  frontFaceClass?: HTMLAttributes["class"];
  secondFaceClass?: HTMLAttributes["class"];
  staggerDuration?: number;
  staggerFrom?: StaggerOrigin;
  transition?: Transition;
  rotateDirection?: RotateDirection;
}

interface Word {
  characters: string[];
  needsSpace: boolean;
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  as: "p",
  staggerDuration: 0.05,
  staggerFrom: "first" as StaggerOrigin,
  transition: () => ({ type: "spring", damping: 30, stiffness: 300 }),
  rotateDirection: "right" as RotateDirection,
});

const [scope, animate] = useAnimate();
const isAnimating = ref(false);
const isHovering = ref(false);
const shuffledIndices = ref<number[]>([]);

function splitIntoCharacters(text: string) {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }

  return [...text];
}

const words = computed<Word[]>(() => {
  const values = props.label.split(" ");

  return values.map((word, index) => ({
    characters: splitIntoCharacters(word),
    needsSpace: index !== values.length - 1,
  }));
});

const characterCount = computed(() =>
  words.value.reduce((total, word) => total + word.characters.length, 0),
);

const rotationTransform = computed(() => {
  switch (props.rotateDirection) {
    case "top":
      return "rotateX(90deg)";
    case "right":
      return "rotateY(90deg)";
    case "bottom":
      return "rotateX(-90deg)";
    case "left":
      return "rotateY(90deg)";
    default:
      return "rotateY(90deg)";
  }
});

const initialTransform = computed(() => {
  if (props.rotateDirection === "top" || props.rotateDirection === "bottom") {
    return "translateZ(-0.5lh)";
  }

  return "rotateY(90deg) translateX(50%) rotateY(-90deg)";
});

const frontFaceTransform = computed(() => {
  if (props.rotateDirection === "top" || props.rotateDirection === "bottom") {
    return "translateZ(0.5lh)";
  }

  return props.rotateDirection === "left"
    ? "rotateY(90deg) translateX(50%) rotateY(-90deg)"
    : "rotateY(-90deg) translateX(50%) rotateY(90deg)";
});

const secondFaceTransform = computed(() => {
  switch (props.rotateDirection) {
    case "top":
      return "rotateX(-90deg) translateZ(0.5lh)";
    case "right":
      return "rotateY(90deg) translateX(50%) rotateY(-90deg) translateX(-50%) rotateY(-90deg) translateX(50%)";
    case "bottom":
      return "rotateX(90deg) translateZ(0.5lh)";
    case "left":
      return "rotateY(90deg) translateX(50%) rotateY(-90deg) translateX(50%) rotateY(-90deg) translateX(50%)";
    default:
      return "rotateY(90deg) translateZ(1ch)";
  }
});

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

function getCharacterIndex(wordIndex: number, characterIndex: number) {
  return (
    words.value.slice(0, wordIndex).reduce((total, word) => total + word.characters.length, 0) +
    characterIndex
  );
}

function shuffleIndices() {
  shuffledIndices.value = Array.from({ length: characterCount.value }, (_, index) => index).sort(
    () => Math.random() - 0.5,
  );
}

async function resetCharacters() {
  await animate(
    ".screw-text-char-box",
    { transform: initialTransform.value },
    { duration: 0.3, ease: "easeOut" },
  );
}

async function handleHoverStart() {
  if (isAnimating.value || isHovering.value) return;

  isHovering.value = true;
  isAnimating.value = true;

  if (props.staggerFrom === "random") {
    shuffleIndices();

    await Promise.all(
      shuffledIndices.value.map((characterIndex, animationIndex) =>
        animate(
          `.screw-text-char-box-${characterIndex}`,
          { transform: rotationTransform.value },
          transitionWithDelay(animationIndex),
        ),
      ),
    );
  } else {
    await animate(
      ".screw-text-char-box",
      { transform: rotationTransform.value },
      transitionWithStagger(),
    );
  }

  isAnimating.value = false;
}

async function handleHoverEnd() {
  isHovering.value = false;
  isAnimating.value = true;
  await resetCharacters();
  isAnimating.value = false;
}
</script>

<template>
  <component
    :is="props.as"
    ref="scope"
    v-bind="$attrs"
    :class="cn('relative flex flex-wrap perspective-[1000px] transform-3d', props.class)"
    @mouseenter="handleHoverStart"
    @mouseleave="handleHoverEnd"
  >
    <span class="sr-only">{{ props.label }}</span>

    <span
      v-for="(word, wordIndex) in words"
      :key="wordIndex"
      class="inline-flex"
      aria-hidden="true"
    >
      <span
        v-for="(character, characterIndex) in word.characters"
        :key="`${wordIndex}-${characterIndex}`"
        :class="
          cn(
            'screw-text-char-box inline-block transform-3d will-change-transform',
            `screw-text-char-box-${getCharacterIndex(wordIndex, characterIndex)}`,
          )
        "
        :style="{ transform: initialTransform }"
      >
        <span
          :class="cn('relative block h-lh backface-hidden', props.frontFaceClass)"
          :style="{ transform: frontFaceTransform }"
        >
          {{ character }}
        </span>
        <span
          :class="cn('absolute top-0 left-0 block h-lh backface-hidden', props.secondFaceClass)"
          :style="{ transform: secondFaceTransform }"
        >
          {{ character }}
        </span>
      </span>
      <span v-if="word.needsSpace" class="whitespace-pre">&nbsp;</span>
    </span>
  </component>
</template>
