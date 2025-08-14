<template>
  <div class="flex w-full min-w-0">
    <input
      v-for="(input, idx) in inputs"
      :key="input.key"
      :value="inputValues[idx]"
      :min="input.min"
      :max="input.max"
      :class="input.class"
      step="1"
      @input="handleChange(idx, $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { HslaColor, RgbaColor } from "@uiw/color-convert";

interface ObjectColorInputProps {
  label: "hsl" | "hsla" | "rgb" | "rgba";
  value: HslaColor | RgbaColor;
}

const props = defineProps<ObjectColorInputProps>();
const emit = defineEmits<{ "value-change": [value: HslaColor | RgbaColor] }>();

const inputValues = computed(() => {
  return getInputValues(props.value);
});

function getInputValues(value: HslaColor | RgbaColor): number[] {
  const isHsl = props.label === "hsl" || props.label === "hsla";
  const hasAlpha = props.label === "hsla" || props.label === "rgba";

  if (isHsl) {
    const hsl = value as HslaColor;
    const values = [Math.round(hsl.h), Math.round(hsl.s), Math.round(hsl.l)];
    if (hasAlpha) {
      values.push(Math.round(hsl.a * 100));
    }
    return values;
  } else {
    const rgb = value as RgbaColor;
    const values = [Math.round(rgb.r), Math.round(rgb.g), Math.round(rgb.b)];
    if (hasAlpha) {
      values.push(Math.round(rgb.a * 100));
    }
    return values;
  }
}

function getInputClass(index: number, totalInputs: number): string {
  const baseClass =
    "flex-1 w-0 h-8 px-2 py-1 text-xs border border-input bg-background text-center overflow-hidden focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0";

  const isFirst = index === 0;
  const isLast = index === totalInputs - 1;
  const isMiddle = !isFirst && !isLast;

  let positionClasses = "";
  if (isFirst) {
    positionClasses = "rounded-l-md -mr-px";
  } else if (isLast) {
    positionClasses = "rounded-r-md";
  } else if (isMiddle) {
    positionClasses = "rounded-none -mr-px";
  }

  return `${baseClass} ${positionClasses}`;
}

const inputs = computed(() => {
  const isHsl = props.label === "hsl" || props.label === "hsla";
  const hasAlpha = props.label === "hsla" || props.label === "rgba";

  let inputsData;
  if (isHsl) {
    const hsl = props.value as HslaColor;
    inputsData = [
      { key: "h", value: Math.round(hsl.h), min: 0, max: 360, prop: "h" },
      { key: "s", value: Math.round(hsl.s), min: 0, max: 100, prop: "s" },
      { key: "l", value: Math.round(hsl.l), min: 0, max: 100, prop: "l" },
    ];
    if (hasAlpha) {
      inputsData.push({ key: "a", value: Math.round(hsl.a * 100), min: 0, max: 100, prop: "a" });
    }
  } else {
    const rgb = props.value as RgbaColor;
    inputsData = [
      { key: "r", value: Math.round(rgb.r), min: 0, max: 255, prop: "r" },
      { key: "g", value: Math.round(rgb.g), min: 0, max: 255, prop: "g" },
      { key: "b", value: Math.round(rgb.b), min: 0, max: 255, prop: "b" },
    ];
    if (hasAlpha) {
      inputsData.push({ key: "a", value: Math.round(rgb.a * 100), min: 0, max: 100, prop: "a" });
    }
  }

  return inputsData.map((input, index) => ({
    ...input,
    class: getInputClass(index, inputsData.length),
  }));
});

function handleChange(idx: number, event: Event) {
  const target = event.target as HTMLInputElement;
  const value = Number(target.value);
  if (Number.isNaN(value)) return;

  const input = inputs.value[idx];
  const clampedValue = Math.max(input.min, Math.min(input.max, value));
  const finalValue = input.prop === "a" ? clampedValue / 100 : clampedValue;

  emit("value-change", { ...props.value, [input.prop]: finalValue } as HslaColor | RgbaColor);
}
</script>
