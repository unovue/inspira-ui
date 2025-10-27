<script setup lang="ts">
import type { useMouseState } from "~/composables/useMouseState";

interface Props {
  as?: string;
  class?: string;

  translateX?: number;
  translateY?: number;
  translateZ?: number;

  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
}

const {
  as = "div",
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...props
} = defineProps<Props>();

const refElement = ref<HTMLElement | null>(null);

const mouseState = inject("use3DCardMouseState") as ReturnType<typeof useMouseState>;

function handleAnimation(isMouseEntered: Readonly<Ref<boolean, boolean>>) {
  if (!refElement.value) return;

  if (isMouseEntered) {
    refElement.value.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
  } else {
    refElement.value.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  }
}

watch(mouseState.isMouseEntered, handleAnimation, { immediate: true });
</script>

<template>
  <component
    :is="as"
    ref="refElement"
    class="w-fit transition duration-500 ease-in-out"
    :class="[props.class]"
  >
    <slot />
  </component>
</template>
