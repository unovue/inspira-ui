<template>
  <div
    :class="cn('flex scale-100 cursor-default overflow-hidden py-2', $props.class)"
    @mouseenter="triggerAnimation"
  >
    <div class="flex">
      <Motion
        v-for="(letter, i) in displayText"
        :key="i"
        as="span"
        :class="cn(letter === ' ' ? 'w-3' : '', $props.class)"
        class="inline-block font-mono"
        :initial="{ opacity: 0, y: -10 }"
        :animate="{ opacity: 1, y: 0 }"
        :delay="i * (duration / (text.length * 10))"
      >
        {{ letter.toUpperCase() }}
      </Motion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, type HTMLAttributes } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { cn } from "@/lib/utils";
import { Motion } from "motion-v";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    text: string;
    duration?: number;
    animateOnLoad: boolean;
  }>(),
  {
    duration: 800,
  },
);

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const displayText = ref(props.text.split(""));
const iterations = ref(0);

function getRandomLetter() {
  return alphabets[Math.floor(Math.random() * alphabets.length)];
}
function triggerAnimation() {
  iterations.value = 0;
  startAnimation();
}

const { pause, resume } = useIntervalFn(
  () => {
    if (iterations.value < props.text.length) {
      displayText.value = displayText.value.map((l, i) =>
        l === " " ? l : i <= iterations.value ? props.text[i] : getRandomLetter(),
      );
      iterations.value += 0.1;
    } else {
      pause();
    }
  },
  computed(() => props.duration / (props.text.length * 10)),
);

function startAnimation() {
  pause();
  resume();
}

watch(
  () => props.text,
  (newText) => {
    displayText.value = newText.split("");
    triggerAnimation();
  },
);

if (props.animateOnLoad) {
  triggerAnimation();
}
</script>
