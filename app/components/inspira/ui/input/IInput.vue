<!-- Uses base code from shadcn-vue Input component and extends it's functionality-->
<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { computed, ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
  containerClass?: HTMLAttributes["class"];
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});

const inputContainerRef = ref<HTMLDivElement | null>(null);
const mouse = ref<{ x: number; y: number }>({ x: 0, y: 0 });
const radius = 100;
const visible = ref(false);

const containerBg = computed(() => {
  return `
        radial-gradient(
          ${visible.value ? `${radius}px` : "0px"} circle at ${mouse.value.x}px ${mouse.value.y}px,
          var(--blue-500),
          transparent 80%
        )
      `;
});

function handleMouseMove({ clientX, clientY }: MouseEvent) {
  if (!inputContainerRef.value) return;

  const { left, top } = inputContainerRef.value.getBoundingClientRect();
  mouse.value = { x: clientX - left, y: clientY - top };
}
</script>

<template>
  <div
    ref="inputContainerRef"
    class="group/input rounded-lg p-[2px] transition duration-300"
    :class="[props.containerClass]"
    :style="{
      background: containerBg,
    }"
    @mouseenter="() => (visible = true)"
    @mouseleave="() => (visible = false)"
    @mousemove="handleMouseMove"
  >
    <input
      v-bind="$attrs"
      v-model="modelValue"
      class="shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600"
      :class="[props.class]"
    />
  </div>
</template>

<style scoped>
input {
  box-shadow:
    0px 2px 3px -1px rgba(0, 0, 0, 0.1),
    0px 1px 0px 0px rgba(25, 28, 33, 0.02),
    0px 0px 0px 1px rgba(25, 28, 33, 0.08);
}
</style>
