<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { ParallaxFloatContext } from "./ParallaxFloatContext";
import { cn } from "@inspira-ui/plugins";
import { onBeforeUnmount, onMounted, provide, ref } from "vue";
import { PARALLAX_FLOAT_KEY } from "./ParallaxFloatContext";

interface Props {
  class?: HTMLAttributes["class"];
  sensitivity?: number;
  easingFactor?: number;
}

const props = withDefaults(defineProps<Props>(), {
  sensitivity: 1,
  easingFactor: 0.05,
});

const containerRef = ref<HTMLElement | null>(null);
const mousePosition = { x: 0, y: 0 };
const elements = new Map<
  HTMLElement,
  { depth: number; currentPosition: { x: number; y: number } }
>();

const context: ParallaxFloatContext = {
  registerElement(element, depth) {
    elements.set(element, {
      depth: depth ?? 0.01,
      currentPosition: { x: 0, y: 0 },
    });
  },
  updateElement(element, depth) {
    const data = elements.get(element);
    if (data) data.depth = depth ?? 0.01;
  },
  unregisterElement(element) {
    elements.delete(element);
  },
};

provide(PARALLAX_FLOAT_KEY, context);

let animationFrame = 0;

function updateMousePosition(clientX: number, clientY: number) {
  const container = containerRef.value;
  if (!container) return;

  const rect = container.getBoundingClientRect();
  mousePosition.x = clientX - rect.left;
  mousePosition.y = clientY - rect.top;
}

function handleMouseMove(event: MouseEvent) {
  updateMousePosition(event.clientX, event.clientY);
}

function handleTouchMove(event: TouchEvent) {
  const touch = event.touches[0];
  if (touch) updateMousePosition(touch.clientX, touch.clientY);
}

function animate() {
  elements.forEach((data, element) => {
    const strength = (data.depth * props.sensitivity) / 20;
    const targetX = mousePosition.x * strength;
    const targetY = mousePosition.y * strength;
    const easingFactor = Math.min(Math.max(props.easingFactor, 0), 1);

    data.currentPosition.x += (targetX - data.currentPosition.x) * easingFactor;
    data.currentPosition.y += (targetY - data.currentPosition.y) * easingFactor;

    element.style.transform = `translate3d(${data.currentPosition.x}px, ${data.currentPosition.y}px, 0)`;
  });

  animationFrame = window.requestAnimationFrame(animate);
}

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: true });
  animationFrame = window.requestAnimationFrame(animate);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("touchmove", handleTouchMove);
  window.cancelAnimationFrame(animationFrame);
  elements.clear();
});
</script>

<template>
  <div
    ref="containerRef"
    :class="cn('absolute top-0 left-0 h-full w-full', props.class)"
  >
    <slot />
  </div>
</template>
