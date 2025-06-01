<template>
  <div
    ref="divRef"
    :class="containerClass"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
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
          v-show="direction !== null || isTouched"
          :class="childrenClass"
        >
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
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
const isTouched = ref(false);
const isMobile = ref(false);

// Touch timer for mobile interactions
let touchTimer: ReturnType<typeof setTimeout> | null = null;

function detectMobile() {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window;
}

function handleMouseEnter(event: MouseEvent) {
  if (isMobile.value) return;

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
  if (isMobile.value) return;
  direction.value = null;
}

function handleTouchStart(event: TouchEvent) {
  if (!isMobile.value) return;

  isTouched.value = true;

  if (!divRef.value) return;
  const touch = event.touches[0];
  const mouseEvent = new MouseEvent("mouseenter", {
    clientX: touch.clientX,
    clientY: touch.clientY,
  });

  const fetchedDirection = getDirection(mouseEvent, divRef.value);

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

  // Auto-hide after 3 seconds on mobile
  if (touchTimer) clearTimeout(touchTimer);
  touchTimer = setTimeout(() => {
    handleTouchEnd();
  }, 3000);
}

function handleTouchEnd() {
  if (touchTimer) {
    clearTimeout(touchTimer);
    touchTimer = null;
  }

  setTimeout(() => {
    direction.value = null;
    isTouched.value = false;
  }, 300);
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
    "group/card relative overflow-hidden rounded-lg bg-transparent transition-all duration-300",
    // Mobile first responsive sizing
    "h-48 w-48", // Base mobile size
    "xs:h-56 xs:w-56", // Extra small screens
    "sm:h-64 sm:w-64", // Small screens
    "md:h-80 md:w-80", // Medium screens
    "lg:h-96 lg:w-96", // Large screens
    "xl:h-[28rem] xl:w-[28rem]", // Extra large screens
    // Mobile touch improvements
    "touch-manipulation",
    "active:scale-[0.98]",
    "md:active:scale-100", // Disable scale on desktop
    props.class,
  ),
);

const imageClass = computed(() =>
  cn(
    "h-full w-full object-cover transition-transform duration-300",
    // Responsive scaling
    "scale-125", // Mobile
    "sm:scale-135", // Small screens
    "md:scale-150", // Desktop
    props.imageClass,
  ),
);

const childrenClass = computed(() =>
  cn(
    "absolute z-40 text-white transition-opacity duration-300",
    // Responsive positioning
    "bottom-2 left-2 text-sm", // Mobile
    "sm:bottom-3 sm:left-3 sm:text-base", // Small screens
    "md:bottom-4 md:left-4 md:text-lg", // Desktop
    props.childrenClass,
  ),
);

const overlayClass = computed(() => {
  const baseClasses = "absolute inset-0 z-10 transition-all duration-300";
  const backgroundClasses = "bg-black/40 dark:bg-black/60";

  let transformClasses = "";

  switch (direction.value) {
    case "top":
      transformClasses = "-translate-y-full";
      break;
    case "bottom":
      transformClasses = "translate-y-full";
      break;
    case "left":
      transformClasses = "-translate-x-full";
      break;
    case "right":
      transformClasses = "translate-x-full";
      break;
    default:
      transformClasses = "";
  }

  return cn(baseClasses, backgroundClasses, transformClasses);
});

const imageContainerClass = computed(() => ({
  // Reduced movement on mobile for better UX
  "translate-y-2 md:translate-y-5": direction.value === "top",
  "-translate-y-2 md:-translate-y-5": direction.value === "bottom",
  "translate-x-2 md:translate-x-5": direction.value === "left",
  "-translate-x-2 md:-translate-x-5": direction.value === "right",
}));

onMounted(() => {
  detectMobile();
  window.addEventListener("resize", detectMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", detectMobile);
  if (touchTimer) {
    clearTimeout(touchTimer);
  }
});
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

/* Enhanced mobile touch targets */
@media (max-width: 768px) {
  .group\/card {
    min-height: 44px; /* iOS minimum touch target */
    min-width: 44px;
  }
}

/* Smooth transitions for mobile */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.1s !important;
  }
}
</style>
