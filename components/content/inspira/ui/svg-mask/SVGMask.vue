<template>
  <div
    ref="svgMaskContainerRef"
    :class="cn('h-screen relative', isHovered ? 'bg-slate-900' : 'bg-white', props.class)"
    @mousemove="updateMousePosition"
  >
    <div
      :style="{
        maskSize: `${maskSize}px`,
        maskPosition: `${mousePosition.x ? mousePosition.x - maskSize / 2 : 0}px ${
          mousePosition.y ? mousePosition.y - maskSize / 2 : 0
        }px`,
        transition: 'mask-size 0.2s ease-in-out',
      }"
      class="absolute flex size-full items-center justify-center bg-black text-6xl text-white bg-grid-white/[0.2] [mask-image:url(/images/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
    >
      <div class="absolute inset-0 z-0 size-full bg-black opacity-50"></div>
      <div
        class="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold text-white"
        :onmouseenter="() => (isHovered = true)"
        :onmouseleave="() => (isHovered = false)"
      >
        <slot name="base"></slot>
      </div>
    </div>

    <div class="flex size-full items-center justify-center text-white">
      <slot name="reveal"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, type HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  class?: HTMLAttributes["class"];
  size?: number;
  revealSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 10,
  revealSize: 600,
});

const isHovered = ref(false);
const svgMaskContainerRef = ref<HTMLDivElement>();
const mousePosition = ref<{ x: null | number; y: null | number }>({ x: null, y: null });

const maskSize = computed(() => {
  return isHovered.value ? props.revealSize : props.size;
});

function updateMousePosition(event: MouseEvent) {
  if (!svgMaskContainerRef.value) return;

  const rect = svgMaskContainerRef.value.getBoundingClientRect();
  mousePosition.value = { x: event.clientX - rect.left, y: event.clientY - rect.top };
}
</script>
