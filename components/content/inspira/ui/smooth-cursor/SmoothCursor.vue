<template>
  <Motion
    as="div"
    :style="{
      position: 'fixed',
      left: cursorX,
      top: cursorY,
      translateX: '-50%',
      translateY: '-50%',
      rotate: rotation,
      scale: scale,
      zIndex: 100,
      pointerEvents: 'none',
      willChange: 'transform',
    }"
    :initial="{ scale: 0 }"
    :animate="{ scale: 1 }"
    :transition="{
      type: 'spring',
      stiffness: 400,
      damping: 30,
    }"
  >
    <component :is="props.cursor" />
  </Motion>
</template>

<script lang="ts" setup>
import type { Component } from "vue";
import DefaultCursor from "./DefaultCursor.vue";
import { useSpring, Motion } from "motion-v";
import { useEventListener, useTimeout } from "@vueuse/core";

interface Position {
  x: number;
  y: number;
}
interface SmoothCursorProps {
  cursor?: Component;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
    restDelta: number;
  };
}

const props = withDefaults(defineProps<SmoothCursorProps>(), {
  cursor: () => DefaultCursor,
  springConfig: () => ({
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  }),
});

const isMoving = ref(false);
const lastMousePos = ref<Position>({ x: 0, y: 0 });
const velocity = ref<Position>({ x: 0, y: 0 });
const lastUpdateTime = ref(Date.now());
const previousAngle = ref(0);
const accumulatedRotation = ref(0);

const cursorX = useSpring(0, props.springConfig);
const cursorY = useSpring(0, props.springConfig);
const rotation = useSpring(0, {
  ...props.springConfig,
  damping: 60,
  stiffness: 300,
});
const scale = useSpring(1, {
  ...props.springConfig,
  stiffness: 500,
  damping: 35,
});

function updateVelocity(currentPos: Position) {
  const currentTime = Date.now();
  const deltaTime = currentTime - lastUpdateTime.value;

  if (deltaTime > 0) {
    velocity.value = {
      x: (currentPos.x - lastMousePos.value.x) / deltaTime,
      y: (currentPos.y - lastMousePos.value.y) / deltaTime,
    };
  }

  lastUpdateTime.value = currentTime;
  lastMousePos.value = currentPos;
}

function smoothMouseMove(e: MouseEvent) {
  const currentPos = { x: e.clientX, y: e.clientY };
  updateVelocity(currentPos);

  const speed = Math.sqrt(Math.pow(velocity.value.x, 2) + Math.pow(velocity.value.y, 2));

  cursorX.set(currentPos.x);
  cursorY.set(currentPos.y);

  if (speed > 0.1) {
    const currentAngle = Math.atan2(velocity.value.y, velocity.value.x) * (180 / Math.PI) + 90;

    let angleDiff = currentAngle - previousAngle.value;
    if (angleDiff > 180) angleDiff -= 360;
    if (angleDiff < -180) angleDiff += 360;
    accumulatedRotation.value += angleDiff;
    rotation.set(accumulatedRotation.value);
    previousAngle.value = currentAngle;

    scale.set(0.95);
    isMoving.value = true;

    useTimeout(150, {
      callback: () => {
        scale.set(1);
        isMoving.value = false;
      },
    });
  }
}

let rafId: number;

function throttledMouseMove(e: MouseEvent) {
  if (rafId) return;

  rafId = requestAnimationFrame(() => {
    smoothMouseMove(e);
    rafId = 0;
  });
}

document.body.style.cursor = "none";
useEventListener(window, "mousemove", throttledMouseMove);

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId);
  document.body.style.cursor = "default";
});
</script>
<style scoped></style>
