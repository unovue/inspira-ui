<template>
  <div ref="tracingBeamRef" :class="cn('relative w-full max-w-4xl mx-auto h-full', $props.class)">
    <div class="absolute -left-4 md:-left-12 top-3">
      <div
        :style="{
          boxShadow: scrollYProgress > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }"
        class="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
      >
        <div
          :enter="{
            backgroundColor: scrollYProgress > 0 ? 'white' : 'var(--emerald-500)',
            borderColor: scrollYProgress > 0 ? 'white' : 'var(--emerald-600)',
          }"
          class="h-2 w-2 rounded-full border border-neutral-300 bg-white"
        />
      </div>
      <svg
        :viewBox="`0 0 20 ${svgHeight}`"
        width="20"
        :height="svgHeight"
        class="ml-4 block"
        aria-hidden="true"
      >
        <path
          :d="`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`"
          fill="none"
          stroke="#9091A0"
          stroke-opacity="0.16"
        ></path>
        <path
          :d="`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`"
          fill="none"
          stroke="url(#gradient)"
          stroke-width="1.25"
          class="motion-reduce:hidden"
        ></path>
        <defs>
          <linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            :y1="y1"
            :y2="y2"
          >
            <stop stop-color="#18CCFC" stop-opacity="0"></stop>
            <stop stop-color="#18CCFC"></stop>
            <stop offset="0.325" stop-color="#6344F5"></stop>
            <stop offset="1" stop-color="#AE48FF" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div ref="tracingBeamContentRef">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";

defineProps({
  class: String,
});

const tracingBeamRef = ref<HTMLDivElement>();
const tracingBeamContentRef = ref<HTMLDivElement>();

const scrollYProgress = ref(0);
const svgHeight = ref(0);
const scrollPercentage = ref(0);

const y1 = computed(() => {
  return (
    mapRange(scrollYProgress.value, 0, 0.8, scrollYProgress.value, svgHeight.value) *
    (1.4 - scrollPercentage.value)
  );
});

const y2 = computed(() => {
  return (
    mapRange(scrollYProgress.value, 0, 1, scrollYProgress.value, svgHeight.value - 500) *
    (1.4 - scrollPercentage.value)
  );
});

const updateScrollYProgress = () => {
  if (tracingBeamRef.value) {
    const boundingRect = tracingBeamRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementHeight = boundingRect.height;

    scrollPercentage.value = (windowHeight - boundingRect.top) / (windowHeight + elementHeight);

    scrollYProgress.value = (boundingRect.y / windowHeight) * -1;

    console.log(scrollYProgress.value);
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateScrollYProgress);
  window.addEventListener("resize", updateScrollYProgress);
  updateScrollYProgress();

  updateSVGHeight();
});

onUnmounted(() => {
  tracingBeamRef.value?.removeEventListener("scroll", updateScrollYProgress);
  window.removeEventListener("resize", updateScrollYProgress);
});

function updateSVGHeight() {
  if (!tracingBeamContentRef.value) return;

  svgHeight.value = tracingBeamContentRef.value.offsetHeight;
}

function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
</script>
