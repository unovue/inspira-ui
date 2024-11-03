<template>
  <div
    class="flex scale-100 cursor-default overflow-hidden py-2"
    @mouseenter="triggerAnimation"
  >
    <div class="flex">
      <span
        v-for="(letter, i) in displayText"
        :key="i"
        v-motion
        :class="cn(letter === ' ' ? 'w-3' : '', $props.class)"
        class="inline-block font-mono"
        :initial="{ opacity: 0, y: -10 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="i * (duration / (text.length * 10))"
      >
        {{ letter.toUpperCase() }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { cn } from "~/lib/utils";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 800,
  },
  class: {
    type: String,
    default: "",
  },
  animateOnLoad: {
    type: Boolean,
    default: true,
  },
});

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
