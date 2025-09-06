<template>
  <div
    :class="
      cn(
        'relative size-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]',
        props.class,
      )
    "
    @mousemove="handleMouseMove"
  >
    <motion.div :style="{ x: springX, y: springY }">
      <!-- Star Layer 1 -->
      <motion.div
        class="absolute top-0 left-0 w-full h-[2000px]"
        :animate="{ y: [0, -2000] }"
        :transition="starLayer1Transition"
      >
        <div
          class="absolute bg-transparent rounded-full"
          :style="{
            width: '1px',
            height: '1px',
            boxShadow: boxShadow1,
          }"
        />
        <div
          class="absolute bg-transparent rounded-full top-[2000px]"
          :style="{
            width: '1px',
            height: '1px',
            boxShadow: boxShadow1,
          }"
        />
      </motion.div>

      <!-- Star Layer 2 -->
      <motion.div
        class="absolute top-0 left-0 w-full h-[2000px]"
        :animate="{ y: [0, -2000] }"
        :transition="starLayer2Transition"
      >
        <div
          class="absolute bg-transparent rounded-full"
          :style="{
            width: '2px',
            height: '2px',
            boxShadow: boxShadow2,
          }"
        />
        <div
          class="absolute bg-transparent rounded-full top-[2000px]"
          :style="{
            width: '2px',
            height: '2px',
            boxShadow: boxShadow2,
          }"
        />
      </motion.div>

      <!-- Star Layer 3 -->
      <motion.div
        class="absolute top-0 left-0 w-full h-[2000px]"
        :animate="{ y: [0, -2000] }"
        :transition="starLayer3Transition"
      >
        <div
          class="absolute bg-transparent rounded-full"
          :style="{
            width: '3px',
            height: '3px',
            boxShadow: boxShadow3,
          }"
        />
        <div
          class="absolute bg-transparent rounded-full top-[2000px]"
          :style="{
            width: '3px',
            height: '3px',
            boxShadow: boxShadow3,
          }"
        />
      </motion.div>
    </motion.div>

    <!-- Slot for child content -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { SpringOptions } from "motion-v";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "motion-v";
import { computed, onMounted, ref, watch } from "vue";

interface StarsBackgroundProps {
  factor?: number;
  speed?: number;
  transition?: SpringOptions;
  starColor?: string;
  class?: string;
}

const props = withDefaults(defineProps<StarsBackgroundProps>(), {
  factor: 0.05,
  speed: 50,
  transition: () => ({ stiffness: 50, damping: 20 }),
  starColor: "#fff",
});

// For slot content
defineSlots();

function generateStars(count: number, starColor: string) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(", ");
}

const offsetX = useMotionValue(1);
const offsetY = useMotionValue(1);

const springX = useSpring(offsetX, props.transition);
const springY = useSpring(offsetY, props.transition);

function handleMouseMove(e: MouseEvent) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const newOffsetX = -(e.clientX - centerX) * props.factor;
  const newOffsetY = -(e.clientY - centerY) * props.factor;
  offsetX.set(newOffsetX);
  offsetY.set(newOffsetY);
}

const boxShadow1 = ref("");
const boxShadow2 = ref("");
const boxShadow3 = ref("");

onMounted(() => {
  boxShadow1.value = generateStars(1000, props.starColor);
  boxShadow2.value = generateStars(400, props.starColor);
  boxShadow3.value = generateStars(200, props.starColor);
});

// Watch for starColor changes
watch(
  () => props.starColor,
  (newColor) => {
    boxShadow1.value = generateStars(1000, newColor);
    boxShadow2.value = generateStars(400, newColor);
    boxShadow3.value = generateStars(200, newColor);
  },
);

const starLayer1Transition = computed(() => ({
  repeat: Infinity,
  duration: props.speed,
  ease: "linear",
}));

const starLayer2Transition = computed(() => ({
  repeat: Infinity,
  duration: props.speed * 2,
  ease: "linear",
}));

const starLayer3Transition = computed(() => ({
  repeat: Infinity,
  duration: props.speed * 3,
  ease: "linear",
}));
</script>
