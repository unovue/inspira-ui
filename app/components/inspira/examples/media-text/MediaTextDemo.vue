<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

interface Props {
  triggerType?: "hover" | "ref" | "inView";
}

const props = withDefaults(defineProps<Props>(), {
  triggerType: "hover",
});

const isMobile = useMediaQuery("(max-width: 639px)");
const animationVariants = computed(() => ({
  initial: { width: 0 },
  animate: {
    width: isMobile.value ? "30px" : "100px",
    transition: { duration: 0.4, type: "spring", bounce: 0 },
  },
}));

const mediaUrl = "https://cdn.cosmos.so/90e2192e-7bd4-44af-96ae-05cd955c0cfb?format=jpeg";
</script>

<template>
  <div
    class="bg-background text-foreground flex h-full min-h-112 w-full flex-col items-center justify-center"
  >
    <a
      href="https://www.instagram.com/p/C3oL4euoc2l/?img_index=1"
      target="_blank"
      rel="noreferrer"
      class="block"
    >
      <MediaText
        first-text="that's a nice ("
        second-text=") chair!"
        :media-url="mediaUrl"
        media-type="image"
        :trigger-type="props.triggerType"
        media-container-class="mx-px mt-1 h-[30px] w-[30px] overflow-hidden sm:mx-2 sm:mt-4 sm:h-[100px] sm:w-[100px]"
        class="text-primary flex w-full cursor-pointer flex-row items-center justify-center text-2xl font-light lowercase sm:text-6xl"
        :animation-variants="animationVariants"
      />
    </a>
  </div>
</template>
