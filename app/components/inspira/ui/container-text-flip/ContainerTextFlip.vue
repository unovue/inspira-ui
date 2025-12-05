<script lang="ts" setup>
import { useIntervalFn } from "@vueuse/core";
import { Motion } from "motion-v";

const props = withDefaults(
  defineProps<{
    words?: string[];
    interval?: number;
    animationDuration?: number;
    class?: string;
    textClass?: string;
  }>(),
  {
    words: () => ["better", "modern", "beautiful", "awesome"],
    interval: 3000,
    animationDuration: 700,
  },
);

const id = useId();

const currentWordIndex = ref(0);
const textRef = useTemplateRef<HTMLElement>("textRef");

const width = computed(() => {
  if (textRef.value) {
    return textRef.value.scrollWidth + 30;
  }
  return 100;
});

useIntervalFn(() => {
  currentWordIndex.value = (currentWordIndex.value + 1) % props.words.length;
}, props.interval);
</script>

<template>
  <Motion
    :key="words[currentWordIndex]"
    as="p"
    :layout-id="`words-here-${id}`"
    :animate="{ width }"
    :transition="{ duration: props.animationDuration / 2000 }"
    class="relative inline-block rounded-lg px-4 pt-2 pb-3 text-center text-4xl font-bold text-black shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db] [background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)] md:text-7xl dark:text-white dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052] dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]"
    :class="[props.class]"
  >
    <Motion
      ref="textRef"
      as="div"
      :transition="{
        duration: animationDuration / 1000,
        ease: 'easeInOut',
      }"
      class="inline-block"
      :class="[props.textClass]"
      :layout-id="`word-div-${words[currentWordIndex]}-${id}`"
    >
      <Motion
        as="div"
        class="inline-block"
      >
        <Motion
          v-for="(letter, index) in words[currentWordIndex]"
          :key="index"
          as="span"
          :initial="{
            opacity: 0,
            filter: 'blur(10px)',
          }"
          :animate="{
            opacity: 1,
            filter: 'blur(0px)',
          }"
          :transition="{
            delay: index * 0.02,
          }"
        >
          {{ letter }}
        </Motion>
      </Motion>
    </Motion>
  </Motion>
</template>
