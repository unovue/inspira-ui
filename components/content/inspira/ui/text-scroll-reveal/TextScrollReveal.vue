<template>
  <div
    ref="textScrollRevealRef"
    :class="cn('relative z-0 h-[200vh]', $props.class)"
  >
    <div class="sticky top-0 mx-auto flex h-1/2 max-w-4xl items-center bg-transparent px-4 py-20">
      <p
        class="flex flex-wrap p-5 text-2xl font-bold text-black/20 xl:text-5xl lg:p-10 lg:text-4xl md:p-8 md:text-3xl dark:text-white/20"
      >
        <ScrollWord
          v-for="(word, i) in words"
          :key="i"
          :word="word"
          :progress="scrollYProgress"
          :range="[i / words.length, (i + 1) / words.length]"
        />
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  class?: string;
  text: string;
}

// Props
const props = defineProps<Props>();

const textScrollRevealRef = ref<HTMLElement | null>(null);

const words = computed(() => props.text.split(" "));

const scrollYProgress = ref(0);

function updateScrollYProgress() {
  if (textScrollRevealRef.value) {
    const boundingRect = textScrollRevealRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    scrollYProgress.value = (boundingRect.y / windowHeight) * -1;
  }
}

onMounted(() => {
  window.addEventListener("scroll", updateScrollYProgress);
  window.addEventListener("resize", updateScrollYProgress);
  updateScrollYProgress();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollYProgress);
  window.removeEventListener("resize", updateScrollYProgress);
});
</script>
