<template>
  <Teleport to="body">
    <AnimatePresence>
      <div
        v-if="open"
        class="fixed inset-0 z-50 h-screen overflow-auto"
      >
        <Motion
          as="div"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          class="fixed inset-0 size-full bg-black/80 backdrop-blur-lg"
        />
        <Motion
          ref="containerRef"
          as="div"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :layout-id="layout ? `card-${card.title}` : undefined"
          class="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
        >
          <button
            class="sticky right-0 top-4 ml-auto flex size-8 items-center justify-center rounded-full bg-black dark:bg-white"
            @click="handleClose"
          >
            <Icon
              name="tabler:x"
              class="size-6 text-neutral-100 dark:text-neutral-900"
            />
          </button>
          <Motion
            as="div"
            :layout-id="layout ? `category-${card.title}` : undefined"
            class="text-base font-medium text-black dark:text-white"
          >
            {{ card.category }}
          </Motion>
          <Motion
            as="div"
            :layout-id="layout ? `title-${card.title}` : undefined"
            class="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
          >
            {{ card.title }}
          </Motion>
          <div class="py-10">
            <slot></slot>
          </div>
        </Motion>
      </div>
    </AnimatePresence>
  </Teleport>

  <Motion
    :layout-id="layout ? `card-${card.title}` : undefined"
    class="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900"
    @click="handleOpen"
  >
    <div
      class="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent"
    />
    <div class="relative z-40 p-8">
      <Motion
        :layout-id="layout ? `category-${card.category}` : undefined"
        class="text-left font-sans text-sm font-medium text-white md:text-base"
      >
        {{ card.category }}
      </Motion>
      <Motion
        :layout-id="layout ? `title-${card.title}` : undefined"
        class="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-white [text-wrap:balance] md:text-3xl"
      >
        {{ card.title }}
      </Motion>
    </div>
    <AppleBlurImage
      :src="card.src"
      :alt="card.title"
      class="absolute inset-0 z-10 object-cover"
      :fill="true"
    />
  </Motion>
</template>

<script setup lang="ts">
import { ref, onMounted, inject, onUnmounted, watch } from "vue";
import { Motion, AnimatePresence } from "motion-v";
import { onClickOutside } from "@vueuse/core";
import { CarouselKey } from "./AppleCarouselContext";

interface Card {
  src: string;
  title: string;
  category: string;
}

interface Props {
  card: Card;
  index: number;
  layout?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  layout: false,
});

const open = ref(false);
const containerRef = ref<HTMLDivElement | null>(null);
const carouselContext = inject(CarouselKey);

if (!carouselContext) {
  throw new Error("Card must be used within a Carousel");
}

const { onCardClose, currentIndex } = carouselContext;

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    handleClose();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

watch(open, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

onClickOutside(containerRef, () => handleClose());

function handleOpen() {
  open.value = true;
}

function handleClose() {
  open.value = false;
  onCardClose(props.index);
}
</script>
