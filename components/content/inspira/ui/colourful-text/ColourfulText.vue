<template>
  <span
    v-for="(char, index) in props.text"
    :key="`${char}-${count}-${index}`"
    v-motion
    class="inline-block whitespace-pre font-sans tracking-tight"
    :initial="{
      y: -3,
      opacity: 0.2,
      color: props.startColor,
      scale: 1,
      filter: 'blur(5px)',
      transition: {
        duration: props.duration,
        delay: index * 50,
      },
    }"
    :enter="{
      y: 0,
      opacity: 1,
      scale: 1.01,
      filter: 'blur(0px)',
      color: currentColors[index % currentColors.length],
      transition: {
        duration: props.duration,
        delay: index * 50,
      },
    }"
    :leave="{
      y: -3,
      opacity: 1,
      scale: 1,
      filter: 'blur(5px)',
      color: props.startColor,
      transition: {
        duration: props.duration,
        delay: index * 50,
      },
    }"
  >
    {{ char }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  colors?: string[];
  startColor?: string;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  startColor: "rgb(255,255,255)",
  duration: 500,
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

// eslint-disable-next-line no-undef
let intervalId: undefined | NodeJS.Timeout = undefined;
onMounted(() => {
  intervalId = setInterval(() => {
    const shuffled = [...props.colors].sort(() => 0.5 - Math.random());
    currentColors.value = shuffled;
    count.value++;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped></style>
