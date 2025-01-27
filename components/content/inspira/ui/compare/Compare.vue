<template>
  <div
    ref="sliderRef"
    :class="cn('w-[400px] h-[400px] overflow-hidden', props.class)"
    :style="{
      position: 'relative',
      cursor: props.slideMode === 'drag' ? 'grab' : 'col-resize',
    }"
    @mousemove="handleMouseMove"
    @mouseleave="mouseLeaveHandler"
    @mouseenter="mouseEnterHandler"
    @mousedown="handleMouseDown"
    @mouseup="handleEnd"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchmove="handleTouchMove"
  >
    <!-- Slider Line -->
    <Transition>
      <div
        v-show="true"
        class="absolute top-0 z-30 m-auto h-full w-px bg-gradient-to-b from-transparent from-5% via-indigo-500 to-transparent to-95%"
        :style="{
          left: `${sliderXPercent}%`,
          top: '0',
          zIndex: 40,
          pointerEvents: 'none',
        }"
      >
        <!-- Decorative Effects -->
        <div
          class="absolute left-0 top-1/2 z-20 h-full w-36 -translate-y-1/2 bg-gradient-to-r from-indigo-400 via-transparent to-transparent opacity-50 [mask-image:radial-gradient(100px_at_left,white,transparent)]"
        />
        <div
          class="absolute left-0 top-1/2 z-10 h-1/2 w-10 -translate-y-1/2 bg-gradient-to-r from-cyan-400 via-transparent to-transparent opacity-100 [mask-image:radial-gradient(50px_at_left,white,transparent)]"
        />
        <div
          class="absolute -right-10 top-1/2 h-3/4 w-10 -translate-y-1/2 [mask-image:radial-gradient(100px_at_left,white,transparent)]"
        >
          <StarField
            :stars-count="120"
            class="size-full"
          />
        </div>

        <!-- Custom Handle Slot -->
        <slot name="handle">
          <div
            v-if="props.showHandlebar"
            class="pointer-events-auto absolute -right-2.5 top-1/2 z-30 flex size-5 -translate-y-1/2 cursor-grab items-center justify-center rounded-md bg-white shadow-[0px_-1px_0px_0px_#FFFFFF40]"
          >
            <Icon
              name="heroicons:ellipsis-vertical"
              class="size-4 text-black"
            />
          </div>
        </slot>
      </div>
    </Transition>

    <!-- First Content -->
    <div
      class="relative z-20 size-full overflow-hidden"
      :style="{ pointerEvents: isInteracting ? 'none' : 'auto' }"
    >
      <Transition>
        <div
          v-show="true"
          :class="
            cn(
              'absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden',
              props.firstContentClass,
            )
          "
          :style="{
            clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
          }"
        >
          <slot name="first-content">
            <img
              v-if="props.firstImage"
              :alt="props.firstImageAlt"
              :src="props.firstImage"
              :class="
                cn(
                  'absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none',
                  firstContentClass,
                )
              "
              :draggable="false"
            />
          </slot>
        </div>
      </Transition>
    </div>

    <!-- Second Content -->
    <Transition>
      <div
        v-show="true"
        :class="
          cn(
            'absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none',
            props.secondContentClass,
          )
        "
        :style="{ pointerEvents: isInteracting ? 'none' : 'auto' }"
      >
        <slot name="second-content">
          <img
            v-if="props.secondImage"
            :alt="props.secondImageAlt"
            :src="props.secondImage"
            :class="cn('w-full h-full object-cover', secondContentClass)"
            :draggable="false"
          />
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ref, onMounted, onUnmounted, watch } from "vue";
import { templateRef } from "@vueuse/core";

interface Props {
  firstImage?: string;
  secondImage?: string;
  firstImageAlt?: string;
  secondImageAlt?: string;
  class?: string;
  firstContentClass?: string;
  secondContentClass?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  firstImage: "",
  secondImage: "",
  firstImageAlt: "First image",
  secondImageAlt: "Second image",
  class: "",
  firstContentClass: "",
  secondContentClass: "",
  initialSliderPercentage: 50,
  slideMode: "hover",
  showHandlebar: true,
  autoplay: false,
  autoplayDuration: 5000,
});

const emit = defineEmits<{
  (e: "update:percentage", value: number): void;
  (e: "drag:start"): void;
  (e: "drag:end"): void;
  (e: "hover:enter"): void;
  (e: "hover:leave"): void;
}>();

const sliderRef = templateRef<HTMLDivElement | null>("sliderRef");
const sliderXPercent = ref(props.initialSliderPercentage);
const isDragging = ref(false);
const isMouseOver = ref(false);
const isInteracting = ref(false);
let autoplayTimeout: ReturnType<typeof setTimeout> | null = null;
let autoplayRAF: number | null = null;

function startAutoplay(): void {
  if (!props.autoplay || isMouseOver.value || isDragging.value) return;

  const startTime = Date.now();
  function animate(): void {
    if (isMouseOver.value || isDragging.value) {
      if (autoplayRAF) cancelAnimationFrame(autoplayRAF);
      return;
    }

    const elapsedTime = Date.now() - startTime;
    const progress = (elapsedTime % (props.autoplayDuration * 2)) / props.autoplayDuration;
    const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

    sliderXPercent.value = percentage;
    emit("update:percentage", percentage);
    autoplayRAF = requestAnimationFrame(animate);
  }

  animate();
}

function stopAutoplay(): void {
  if (autoplayTimeout) {
    clearTimeout(autoplayTimeout);
    autoplayTimeout = null;
  }
  if (autoplayRAF) {
    cancelAnimationFrame(autoplayRAF);
    autoplayRAF = null;
  }
}

function mouseEnterHandler(): void {
  isMouseOver.value = true;
  emit("hover:enter");
  if (props.autoplay) {
    stopAutoplay();
  }
}

function mouseLeaveHandler(): void {
  isMouseOver.value = false;
  isInteracting.value = false;
  emit("hover:leave");

  if (props.slideMode === "hover") {
    sliderXPercent.value = props.initialSliderPercentage;
    emit("update:percentage", props.initialSliderPercentage);
  }
  if (props.slideMode === "drag") {
    isDragging.value = false;
  }

  if (props.autoplay) {
    startAutoplay();
  }
}

function handleStart(): void {
  if (props.slideMode === "drag") {
    isDragging.value = true;
    isInteracting.value = true;
    emit("drag:start");
    stopAutoplay();
  }
}

function handleEnd(): void {
  if (props.slideMode === "drag") {
    isDragging.value = false;
    isInteracting.value = false;
    emit("drag:end");
    if (props.autoplay && !isMouseOver.value) {
      startAutoplay();
    }
  }
}

function handleMove(clientX: number): void {
  if (!sliderRef.value) return;

  if (props.slideMode === "hover" || (props.slideMode === "drag" && isDragging.value)) {
    isInteracting.value = true;
    stopAutoplay();

    const rect = sliderRef.value.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;

    requestAnimationFrame(() => {
      const newPercent = Math.max(0, Math.min(100, percent));
      sliderXPercent.value = newPercent;
      emit("update:percentage", newPercent);
    });
  }
}

function handleMouseDown(e: MouseEvent): void {
  handleStart();
}

function handleMouseMove(e: MouseEvent): void {
  handleMove(e.clientX);
}

function handleTouchStart(e: TouchEvent): void {
  if (!props.autoplay) handleStart();
}

function handleTouchEnd(): void {
  if (!props.autoplay) handleEnd();
}

function handleTouchMove(e: TouchEvent): void {
  if (!props.autoplay) handleMove(e.touches[0].clientX);
}

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});

watch(
  () => props.initialSliderPercentage,
  (newValue) => {
    sliderXPercent.value = newValue;
  },
);

watch(
  () => props.autoplay,
  (newValue) => {
    if (newValue && !isMouseOver.value && !isDragging.value) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  },
);
</script>
