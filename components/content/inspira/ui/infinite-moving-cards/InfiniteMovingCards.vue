<template>
  <div
    ref="containerRef"
    class="container-animation"
    :class="
      cn(
        'scroller relative z-20 max-w-7xl overflow-hidden mask-image:linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
        props.class,
      )
    "
  >
    <ul
      ref="scrollerRef"
      :class="
        cn('flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap', start && 'animate-scroll')
      "
      :style="{ animationPlayState: isHovered && props.pauseOnHover ? 'paused' : 'running' }"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <li
        v-for="item in props.items"
        :key="item.name"
        class="background-gradient relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]"
      >
        <blockquote>
          <div
            aria-hidden="true"
            class="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 size-[calc(100%_+_4px)]"
          ></div>
          <span class="relative z-20 text-sm font-normal leading-[1.6] text-gray-100">
            {{ item.quote }}
          </span>
          <div class="relative z-20 mt-6 flex flex-row items-center">
            <span class="flex flex-col gap-1">
              <span class="text-sm font-normal leading-[1.6] text-gray-400">
                {{ item.name }}
              </span>
              <span class="text-sm font-normal leading-[1.6] text-gray-400">
                {{ item.title }}
              </span>
            </span>
          </div>
        </blockquote>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { cn } from "~/lib/utils";

interface Item {
  quote: string;
  name: string;
  title: string;
}

interface InfiniteMovingCards {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<InfiniteMovingCards>(), {
  direction: "left",
  speed: "fast",
  pauseOnHover: true,
});

const containerRef = ref<HTMLElement | null>();
const scrollerRef = ref<HTMLUListElement | null>(null);
const start = ref(false);
const isHovered = ref(false);

const addAnimation = () => {
  if (containerRef.value && scrollerRef.value) {
    // Duplicate items for seamless scroll
    const scrollerContent = Array.from(scrollerRef.value.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.value?.appendChild(duplicatedItem);
    });
    start.value = true;
  }
};

const animationDirection = computed(() => (props.direction === "left" ? "forwards" : "reverse"));
const animationDuration = computed(() =>
  props.speed === "fast" ? "20s" : props.speed === "normal" ? "40s" : "80s",
);

onMounted(addAnimation);
</script>

<style scoped>
.background-gradient {
  background: linear-gradient(180deg, var(--slate-800), var(--slate-900));
}

.container-animation {
  --animation-direction: v-bind(animationDirection);
  --animation-duration: v-bind(animationDuration);
}

.animate-scroll {
  animation: scroll var(--animation-duration, 40s) linear infinite;
  animation-direction: var(--animation-direction, forwards);
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% / 2));
  }
}
</style>
