<template>
  <svg
    ref="svgRef"
    width="100%"
    height="100%"
    viewBox="0 0 300 100"
    xmlns="http://www.w3.org/2000/svg"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    class="select-none"
  >
    <defs>
      <linearGradient
        id="textGradient"
        gradientUnits="userSpaceOnUse"
        cx="50%"
        cy="50%"
        r="25%"
      >
        <stop offset="0%" stop-color="var(--yellow-500)" v-if="hovered" />
        <stop offset="25%" stop-color="var(--red-500)" v-if="hovered" />
        <stop offset="50%" stop-color="var(--blue-500)" v-if="hovered" />
        <stop offset="75%" stop-color="var(--cyan-500)" v-if="hovered" />
        <stop offset="100%" stop-color="var(--violet-500)" v-if="hovered" />
      </linearGradient>

      <!-- Radial Gradient -->
      <radialGradient
        id="revealMask"
        gradientUnits="userSpaceOnUse"
        r="20%"
        :cx="maskPosition.cx"
        :cy="maskPosition.cy"
        :style="{
          transition: `cx ${transitionDuration}ms ease-out, cy ${transitionDuration}ms ease-out`,
        }"
      >
        <stop offset="0%" stop-color="white" />
        <stop offset="100%" stop-color="black" />
      </radialGradient>

      <mask id="textMask">
        <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
      </mask>
    </defs>

    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      :stroke-width="strokeWidth"
      :style="{ opacity: hovered ? opacity : 0 }"
      class="font-[helvetica] font-bold stroke-neutral-200 dark:stroke-neutral-800 fill-transparent text-7xl"
    >
      {{ text }}
    </text>

    <!-- Animated Text Stroke -->
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      :stroke-width="strokeWidth"
      :style="strokeStyle"
      class="font-[helvetica] font-bold fill-transparent text-7xl stroke-neutral-200 dark:stroke-neutral-800"
    >
      {{ text }}
    </text>

    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      stroke="url(#textGradient)"
      :stroke-width="strokeWidth"
      mask="url(#textMask)"
      class="font-[helvetica] font-bold fill-transparent text-7xl"
    >
      {{ text }}
    </text>
  </svg>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { cn } from "~/lib/utils";

const props = defineProps({
  strokeWidth: {
    type: Number,
    default: 0.75,
  },
  text: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 200,
  },
  opacity: {
    type: Number,
    default: 0.75,
  },
});

const svgRef = ref<SVGSVGElement | null>(null);
const cursor = reactive({ x: 0, y: 0 });
const hovered = ref(false);

// Set transition duration for smoother animation
const transitionDuration = props.duration ? props.duration * 1000 : 200;

// Reactive gradient position
const maskPosition = computed(() => {
  if (svgRef.value) {
    const svgRect = svgRef.value.getBoundingClientRect();
    const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
    const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
    return { cx: `${cxPercentage}%`, cy: `${cyPercentage}%` };
  }
  return { cx: "50%", cy: "50%" }; // Default position
});

// Reactive style for stroke animation
const strokeStyle = computed(() => ({
  strokeDashoffset: hovered.value ? "0" : "1000",
  strokeDasharray: "1000",
  transition:
    "stroke-dashoffset 4s ease-in-out, stroke-dasharray 4s ease-in-out",
}));

const handleMouseEnter = () => (hovered.value = true);
const handleMouseLeave = () => (hovered.value = false);
const handleMouseMove = (e: MouseEvent) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
};

// Touch support
const handleTouchStart = (e: TouchEvent) => {
  hovered.value = true;
  handleTouchMove(e); // Update the position on touch start
};

const handleTouchMove = (e: TouchEvent) => {
  const touch = e.touches[0];
  cursor.x = touch.clientX;
  cursor.y = touch.clientY;
};

const handleTouchEnd = () => {
  hovered.value = false;
};
</script>

<style scoped>
.select-none {
  user-select: none;
}
</style>
