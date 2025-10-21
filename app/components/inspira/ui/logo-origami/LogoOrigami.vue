<script lang="ts" setup>
import { Motion } from "motion-v";
import { onBeforeUnmount, onMounted, ref, useSlots, watchEffect } from "vue";
import { cn } from "@/lib/utils";

interface LogoOrigamiProps {
  duration?: number;
  delay?: number;
  class?: string;
}

const props = withDefaults(defineProps<LogoOrigamiProps>(), {
  delay: 2.5,
  duration: 1.5,
});

const slots = useSlots();

const interval = ref();
const activeIndex = ref(0);
const children = ref<unknown[]>([]);

onMounted(() => {
  watchEffect(() => {
    children.value = slots.default ? slots.default() : [];
  });

  interval.value = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % children.value.length;
  }, props.delay * 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>

<template>
  <div
    :style="{
      transform: 'rotateY(-20deg)',
      transformStyle: 'preserve-3d',
    }"
    :class="
      cn(
        'border-background/75 bg-background relative z-0 h-44 w-60 shrink-0 rounded-xl border',
        $props.class,
      )
    "
  >
    <!-- Static Upper part -->
    <div
      :style="{
        clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
        zIndex: -999,
        backfaceVisibility: 'hidden',
      }"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <component :is="children[(activeIndex + 1) % children.length]" />
    </div>

    <!-- Static Lower part -->
    <div
      :style="{
        clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
        zIndex: -999,
        backfaceVisibility: 'hidden',
      }"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <component :is="children[activeIndex % children.length]" />
    </div>

    <!-- Upper part of the flip -->
    <Motion
      :key="activeIndex"
      as="div"
      :style="{
        clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
        zIndex: -activeIndex,
        backfaceVisibility: 'hidden',
      }"
      :initial="{
        rotateX: '0deg',
        y: '-50%',
        x: '-50%',
      }"
      :animate="{
        rotateX: '-180deg',
      }"
      :exit="{
        rotateX: '-180deg',
      }"
      :transition="{
        duration,
        ease: 'easeInOut',
      }"
      class="absolute top-1/2 left-1/2"
    >
      <component :is="children[activeIndex % children.length]" />
    </Motion>

    <!-- Lower part of the flip  -->
    <Motion
      :key="(activeIndex + 1) * 2"
      as="div"
      :style="{
        clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
        zIndex: activeIndex,
        backfaceVisibility: 'hidden',
      }"
      :initial="{
        rotateX: '180deg',
        y: '-50%',
        x: '-50%',
      }"
      :animate="{
        rotateX: '0deg',
      }"
      :exit="{
        rotateX: '0deg',
      }"
      :transition="{
        duration,
        ease: 'easeInOut',
      }"
      class="absolute top-1/2 left-1/2"
    >
      <component :is="children[(activeIndex + 1) % children.length]" />
    </Motion>

    <!-- Center divider line -->
    <hr
      style="transform: translateZ(1px)"
      class="absolute top-1/2 right-[15px] left-4 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
    >
  </div>
</template>
