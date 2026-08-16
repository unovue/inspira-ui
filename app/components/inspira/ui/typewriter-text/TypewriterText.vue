<script setup lang="ts">
import type { VariantType } from "motion-v";
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { Motion } from "motion-v";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

interface CursorAnimationVariants {
  initial: VariantType;
  animate: VariantType;
}

interface Props {
  text: string | string[];
  as?: string;
  speed?: number;
  initialDelay?: number;
  waitTime?: number;
  deleteSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  hideCursorOnType?: boolean;
  cursorChar?: string;
  cursorAnimationVariants?: CursorAnimationVariants;
  cursorClass?: HTMLAttributes["class"];
  class?: HTMLAttributes["class"];
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  as: "div",
  speed: 50,
  initialDelay: 0,
  waitTime: 2000,
  deleteSpeed: 30,
  loop: true,
  showCursor: true,
  hideCursorOnType: false,
  cursorChar: "|",
  cursorClass: "ml-1",
  cursorAnimationVariants: () => ({
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.01,
        repeat: Infinity,
        repeatDelay: 0.4,
        repeatType: "reverse",
      },
    },
  }),
});

const texts = computed(() => (Array.isArray(props.text) ? props.text : [props.text]));
const displayText = ref("");
const currentIndex = ref(0);
const currentTextIndex = ref(0);
const isDeleting = ref(false);
let timeoutId: ReturnType<typeof setTimeout> | undefined;

const currentText = computed(() => texts.value[currentTextIndex.value] ?? "");
const hideCursor = computed(
  () =>
    props.hideCursorOnType && (currentIndex.value < currentText.value.length || isDeleting.value),
);

function clearTypingTimeout() {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = undefined;
  }
}

function scheduleTyping(delay: number) {
  clearTypingTimeout();
  timeoutId = setTimeout(typeNextCharacter, Math.max(0, delay));
}

function typeNextCharacter() {
  if (isDeleting.value) {
    if (!displayText.value) {
      isDeleting.value = false;

      if (currentTextIndex.value === texts.value.length - 1 && !props.loop) return;

      currentTextIndex.value = (currentTextIndex.value + 1) % texts.value.length;
      currentIndex.value = 0;
      scheduleTyping(props.waitTime);
      return;
    }

    displayText.value = displayText.value.slice(0, -1);
    currentIndex.value = displayText.value.length;
    scheduleTyping(props.deleteSpeed);
    return;
  }

  if (currentIndex.value < currentText.value.length) {
    displayText.value += currentText.value[currentIndex.value];
    currentIndex.value += 1;
    scheduleTyping(props.speed);
    return;
  }

  if (texts.value.length > 1) {
    isDeleting.value = true;
    scheduleTyping(props.waitTime);
  }
}

function resetTyping() {
  clearTypingTimeout();
  displayText.value = "";
  currentIndex.value = 0;
  currentTextIndex.value = 0;
  isDeleting.value = false;
  scheduleTyping(props.initialDelay);
}

onMounted(resetTyping);
onBeforeUnmount(clearTypingTimeout);

watch(() => props.text, resetTyping, { deep: true });
</script>

<template>
  <component
    :is="props.as"
    v-bind="$attrs"
    :class="cn('inline tracking-tight whitespace-pre-wrap', props.class)"
  >
    <span>{{ displayText }}</span>

    <Motion
      v-if="props.showCursor"
      as="span"
      :variants="props.cursorAnimationVariants"
      initial="initial"
      animate="animate"
      :class="cn(props.cursorClass, hideCursor && 'hidden')"
    >
      {{ props.cursorChar }}
    </Motion>
  </component>
</template>
