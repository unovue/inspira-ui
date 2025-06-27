<template>
  <div
    ref="containerRef"
    class="relative z-20 overflow-hidden rounded-lg"
    @mouseenter="setIsHovering(true)"
    @mouseleave="setIsHovering(false)"
    @mousemove="handleMouseMove"
  >
    <slot />

    <div v-if="props.isStatic || isHovering">
      <Motion
        :initial="{ opacity: 0, scale: 0.58 }"
        :animate="{
          opacity: 1,
          scale: 1,
        }"
        :transition="{ duration: 0.3, ease: 'easeOut' }"
        :leave="{ opacity: 0, scale: 0.8 }"
        class="absolute inset-0 overflow-hidden"
        :style="{
          maskImage: `radial-gradient(${maskPosition}, black 100%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(${maskPosition}, black 100%, transparent 100%)`,
          transformOrigin,
        }"
      >
        <div
          class="absolute inset-0"
          :style="{ transform: `scale(${props.zoomFactor})`, transformOrigin }"
        >
          <slot />
        </div>
      </Motion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";
import { ref, computed, watchEffect } from "vue";

interface LensProps {
  zoomFactor?: number;
  lensSize?: number;
  position?: {
    x: number;
    y: number;
  };
  isStatic?: boolean;
  hovering?: boolean;
}

const props = withDefaults(defineProps<LensProps>(), {
  zoomFactor: 1.5,
  lensSize: 170,
  isStatic: false,
  hovering: undefined,
  position: () => ({ x: 200, y: 150 }),
});

const emit = defineEmits<{
  (e: "hover-update", value: boolean): void;
}>();

const containerRef = ref<HTMLElement | null>(null);
const localIsHovering = ref(false);
const mousePosition = ref({ x: 100, y: 100 });

const isHovering = computed(() => props.hovering ?? localIsHovering.value);

function setIsHovering(hover: boolean) {
  localIsHovering.value = hover;
  emit("hover-update", hover);
}

function handleMouseMove(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  mousePosition.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

const maskPosition = computed(() => {
  const pos = props.isStatic ? props.position : mousePosition.value;
  return `circle ${props.lensSize! / 2}px at ${pos.x}px ${pos.y}px`;
});

const transformOrigin = computed(() => {
  const pos = props.isStatic ? props.position : mousePosition.value;
  return `${pos.x}px ${pos.y}px`;
});

watchEffect(() => {
  setIsHovering(false);
});
</script>
