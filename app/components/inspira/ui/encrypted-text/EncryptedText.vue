<script setup lang="ts">
import { Motion, useInView } from "motion-v";
import { computed, onUnmounted, ref, watch } from "vue";

const props = withDefaults(defineProps<Props>(), {
  revealDelayMs: 50,
  charset:
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?",
  flipDelayMs: 50,
});

interface Props {
  text: string;
  class?: string;
  revealDelayMs?: number;
  charset?: string;
  flipDelayMs?: number;
  encryptedClass?: string;
  revealedClass?: string;
}

const containerRef = ref<HTMLElement>();
const isInView = useInView(containerRef, { once: true });

const revealCount = ref(0);
const animationFrameId = ref<number | null>(null);
const startTime = ref<number>(0);
const lastFlipTime = ref<number>(0);
const scrambleChars = ref<string[]>([]);

const textArray = computed(() => props.text.split(""));

function generateRandomCharacter(charset: string): string {
  const index = Math.floor(Math.random() * charset.length);
  return charset.charAt(index);
}

function generateGibberishPreservingSpaces(original: string, charset: string): string {
  if (!original) return "";
  let result = "";
  for (let i = 0; i < original.length; i += 1) {
    const ch = original[i];
    result += ch === " " ? " " : generateRandomCharacter(charset);
  }
  return result;
}

function getCharClass(index: number): string {
  const isRevealed = index < revealCount.value;
  const baseClass = props.class || "";
  const stateClass = isRevealed ? props.revealedClass : props.encryptedClass;

  return [baseClass, stateClass].filter(Boolean).join(" ");
}

function displayChar(index: number): string {
  const isRevealed = index < revealCount.value;
  const char = props.text[index];

  if (isRevealed) {
    return char || "";
  }

  if (char === " ") {
    return " ";
  }

  return scrambleChars.value[index] || generateRandomCharacter(props.charset);
}

function resetAnimation() {
  const initial = props.text ? generateGibberishPreservingSpaces(props.text, props.charset) : "";
  scrambleChars.value = initial.split("");
  startTime.value = performance.now();
  lastFlipTime.value = startTime.value;
  revealCount.value = 0;
}

function updateAnimation(now: number) {
  const elapsedMs = now - startTime.value;
  const totalLength = props.text.length;
  const currentRevealCount = Math.min(
    totalLength,
    Math.floor(elapsedMs / Math.max(1, props.revealDelayMs)),
  );

  revealCount.value = currentRevealCount;

  if (currentRevealCount >= totalLength) {
    return;
  }

  const timeSinceLastFlip = now - lastFlipTime.value;
  if (timeSinceLastFlip >= Math.max(0, props.flipDelayMs)) {
    const newScrambleChars = [...scrambleChars.value];
    for (let index = 0; index < totalLength; index += 1) {
      if (index >= currentRevealCount) {
        if (props.text[index] !== " ") {
          newScrambleChars[index] = generateRandomCharacter(props.charset);
        } else {
          newScrambleChars[index] = " ";
        }
      }
    }
    scrambleChars.value = newScrambleChars;
    lastFlipTime.value = now;
  }

  animationFrameId.value = requestAnimationFrame(updateAnimation);
}

function startAnimation() {
  if (!props.text) return;

  resetAnimation();

  const animate = () => {
    animationFrameId.value = requestAnimationFrame((now) => {
      updateAnimation(now);
      if (revealCount.value < props.text.length) {
        animate();
      }
    });
  };

  animate();
}

function stopAnimation() {
  if (animationFrameId.value !== null) {
    cancelAnimationFrame(animationFrameId.value);
    animationFrameId.value = null;
  }
}

// Watch for view changes
watch(isInView, (newVal) => {
  if (newVal) {
    startAnimation();
  } else {
    stopAnimation();
    revealCount.value = 0;
  }
});

// Watch for text changes
watch(
  () => props.text,
  () => {
    if (isInView.value) {
      startAnimation();
    }
  },
  { immediate: true },
);

onUnmounted(() => {
  stopAnimation();
});
</script>

<template>
  <Motion
    ref="containerRef"
    as="span"
    :class="props.class"
    :aria-label="text"
    role="text"
  >
    <template
      v-for="(char, index) in textArray"
      :key="index"
    >
      <span :class="getCharClass(index)">
        {{ displayChar(index) }}
      </span>
    </template>
  </Motion>
</template>
