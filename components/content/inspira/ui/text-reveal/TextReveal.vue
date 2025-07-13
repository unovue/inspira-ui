<template>
  <div :class="['overflow-hidden', props.containerClass]">
    <div
      ref="textContainer"
      :class="[props.class]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import type { HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
  containerClass?: HTMLAttributes["class"];
  duration?: number;
  delay?: number;
  stagger?: number;
}

gsap.registerPlugin(SplitText);

const props = withDefaults(defineProps<Props>(), {
  duration: 0.6,
  delay: 0.2,
  stagger: 0.1,
});

const textContainer = ref<HTMLElement | null>(null);
let split: gsap.core.Tween;

onMounted(() => {
  if (!textContainer.value) return;

  gsap.set(textContainer.value, { opacity: 1 });

  SplitText.create(textContainer.value, {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit: (splitText) => {
      split = gsap.from(splitText.lines, {
        duration: props.duration,
        delay: props.delay,
        yPercent: 100,
        opacity: 0,
        stagger: props.stagger,
        ease: "expo.out",
      });
    },
  });
});

onUnmounted(() => {
  split?.kill();
});
</script>

<style scoped>
.line {
  overflow: hidden;
}
</style>
