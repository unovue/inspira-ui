<template>
  <motion.span
    v-for="(char, index) in props.text"
    :key="`${char}-${count}-${index}`"
    :initial="{
      y: 0,
      opacity: 0.2,
      color: props.startColor,
      scale: 1,
      filter: 'blur(5px)',
    }"
    :transition="{
      duration: props.duration,
      delay: index * 0.05,
    }"
    :animate="{
      y: [0, -3, 0],
      opacity: [1, 0.8, 1],
      scale: [1, 1.01, 1],
      filter: ['blur(0px)', 'blur(5px)', 'blur(0px)'],
      color: currentColors[index % currentColors.length],
    }"
    :exit="{
      y: -3,
      opacity: 1,
      scale: 1,
      filter: 'blur(5px)',
      color: props.startColor,
    }"
  >
    {{ char }}
  </motion.span>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import { ref, onMounted, onUnmounted } from "vue";

interface Props {
  text: string;
  colors?: string[];
  startColor?: string;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  startColor: "rgb(255,255,255)",
  duration: 0.5,
  colors: () => [
    "rgb(131, 179, 32)",
    "rgb(47, 195, 106)",
    "rgb(42, 169, 210)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(218, 0, 171)",
    "rgb(230, 64, 92)",
    "rgb(232, 98, 63)",
    "rgb(249, 129, 47)",
  ],
});

const currentColors = ref(props.colors);
const count = ref(0);
const lastHidden = ref(0);

// eslint-disable-next-line no-undef
let intervalId: undefined | NodeJS.Timeout = undefined;
onMounted(() => {
  intervalId = setInterval(() => {
    const shuffled = [...props.colors].sort(() => 0.5 - Math.random());
    currentColors.value = shuffled;

    if (document.visibilityState === "visible") {
      if (Date.now() - lastHidden.value > 500) {
        count.value++;
      }
    } else {
      lastHidden.value = Date.now();
    }
  }, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped></style>
