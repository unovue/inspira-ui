<template>
  <div
    ref="divRef"
    :class="containerClass"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="relative size-full overflow-hidden">
      <transition name="fade">
        <div
          v-show="direction !== null"
          :class="overlayClass"
        />
      </transition>
      <div
        class="relative size-full bg-gray-50 transition-transform duration-300 dark:bg-black"
        :class="imageContainerClass"
      >
        <img
          :src="imageUrl"
          alt="image"
          :class="imageClass"
          width="1000"
          height="1000"
        />
      </div>
      <transition name="fade">
        <div
          v-show="direction !== null"
          :class="childrenClass"
        >
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  imageUrl: string;
  childrenClass?: string;
  imageClass?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  childrenClass: undefined,
  imageClass: undefined,
  class: undefined,
});

const divRef = ref<HTMLDivElement | null>(null);
const direction = ref<"top" | "bottom" | "left" | "right" | null>(null);

function handleMouseEnter(event: MouseEvent) {
  if (!divRef.value) return;

  const fetchedDirection = getDirection(event, divRef.value);
  switch (fetchedDirection) {
    case 0:
      direction.value = "top";
      break;
    case 1:
      direction.value = "right";
      break;
    case 2:
      direction.value = "bottom";
      break;
    case 3:
      direction.value = "left";
      break;
    default:
      direction.value = "left";
      break;
  }
}

function handleMouseLeave() {
  direction.value = null;
}

function getDirection(ev: MouseEvent, obj: HTMLElement) {
  const { width: w, height: h, left, top } = obj.getBoundingClientRect();
  const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
  const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
  const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  return d;
}

const containerClass = computed(() =>
  cn(
    "group/card relative h-60 w-60 overflow-hidden rounded-lg bg-transparent md:h-96 md:w-96",
    props.class,
  ),
);

const imageClass = computed(() =>
  cn("h-full w-full scale-150 object-cover transition-transform duration-300", props.imageClass),
);

const childrenClass = computed(() =>
  cn(
    "absolute bottom-4 left-4 z-40 text-white transition-opacity duration-300",
    props.childrenClass,
  ),
);

const overlayClass = computed(
  () =>
    `absolute inset-0 z-10 bg-black/40 transition-opacity duration-300 ${
      direction.value === "top"
        ? "-translate-y-full"
        : direction.value === "bottom"
          ? "translate-y-full"
          : direction.value === "left"
            ? "-translate-x-full"
            : direction.value === "right"
              ? "translate-x-full"
              : ""
    }`,
);

const imageContainerClass = computed(() => ({
  "translate-y-5": direction.value === "top",
  "-translate-y-5": direction.value === "bottom",
  "translate-x-5": direction.value === "left",
  "-translate-x-5": direction.value === "right",
}));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
