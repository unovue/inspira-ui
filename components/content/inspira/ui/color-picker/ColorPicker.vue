<template>
  <div class="relative">
    <div @click="isOpen = !isOpen">
      <slot />
    </div>

    <div
      v-if="isOpen"
      class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 p-4 bg-popover border rounded-md shadow-md z-50"
    >
      <div class="space-y-4">
        <div
          ref="saturationRef"
          class="relative w-full aspect-[4/2] rounded border cursor-crosshair"
          :style="{
            background: `linear-gradient(to right, #fff, hsl(${colorHsv.h}, 100%, 50%)), linear-gradient(to top, #000, transparent)`,
          }"
          @mousedown="startSaturationDrag"
          @touchstart="startSaturationDrag"
        >
          <div
            class="absolute w-4 h-4 border-2 border-white rounded-full pointer-events-none"
            :style="{
              left: `${colorHsv.s}%`,
              top: `${100 - colorHsv.v}%`,
              transform: 'translate(-50%, -50%)',
            }"
          />
        </div>

        <div
          ref="hueRef"
          class="relative w-full h-4 rounded cursor-pointer"
          :style="{
            background:
              'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
          }"
          @mousedown="startHueDrag"
          @touchstart="startHueDrag"
          @click="handleHueClick"
        >
          <div
            class="absolute w-4 h-4 border-2 border-foreground rounded-full pointer-events-none bg-white"
            :style="{
              left: `${(colorHsv.h / 360) * 100}%`,
              transform: 'translate(-50%, -50%)',
              top: '50%',
            }"
          />
        </div>

        <div class="flex items-center gap-2">
          <div class="relative">
            <button
              type="button"
              class="inline-flex h-8 w-20 gap-2 items-center justify-between rounded-md border border-input bg-background px-2 py-1 text-xs font-medium uppercase"
              @click="toggleDropdown"
            >
              <span>{{ colorType }}</span>
              <Icon
                name="lucide:chevron-down"
                :size="14"
              />
            </button>

            <div
              v-if="isDropdownOpen"
              class="absolute top-full left-0 z-50 mt-1 w-full rounded-md border border-input bg-popover shadow-md"
            >
              <div class="p-1">
                <button
                  v-for="option in colorOptions"
                  :key="option.value"
                  type="button"
                  class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-xs font-medium uppercase hover:bg-accent hover:text-accent-foreground"
                  @click="selectColorType(option.value)"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>
          </div>

          <div class="flex grow">
            <input
              v-if="colorType === 'hex'"
              :value="hexValue"
              type="text"
              class="flex h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm placeholder:text-muted-foreground focus:outline-none"
              placeholder="#000000"
              @input="updateFromHex(($event.target as HTMLInputElement).value)"
            />

            <ObjectColorInput
              v-else
              :value="colorType === 'hsl' || colorType === 'hsla' ? hslValue : rgbValue"
              :label="colorType"
              @value-change="updateFromObject"
            />
          </div>
        </div>

        <div
          v-if="colorType === 'rgba' || colorType === 'hsla'"
          class="space-y-2"
        >
          <div
            ref="alphaRef"
            class="relative w-full h-4 rounded cursor-pointer"
            :style="{
              background: `linear-gradient(to right, rgba(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b}, 0) 0%, rgba(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b}, 1) 100%), repeating-conic-gradient(#ccc 0% 25%, transparent 0% 50%) 50% / 8px 8px`,
            }"
            @mousedown="startAlphaDrag"
            @touchstart="startAlphaDrag"
          >
            <div
              class="absolute w-4 h-4 border-2 border-foreground rounded-full pointer-events-none bg-white"
              :style="{
                left: `${colorHsv.a * 100}%`,
                transform: 'translate(-50%, -50%)',
                top: '50%',
              }"
            />
          </div>
        </div>

        <div v-if="swatches.length > 0 || !hideDefaultSwatches">
          <div class="h-px bg-border" />
          <div
            v-if="!hideDefaultSwatches"
            class="flex flex-wrap justify-start gap-2 pt-2"
          >
            <button
              v-for="color in sortedSwatches"
              :key="`${color}-swatch`"
              type="button"
              class="size-5 cursor-pointer rounded ring-2 ring-transparent ring-offset-1 ring-offset-background transition-all duration-100 hover:ring-current"
              :style="{ backgroundColor: color }"
              :aria-label="`Set color to ${color}`"
              @click="setColorFromHex(color)"
              @keydown.enter="setColorFromHex(color)"
            />
          </div>
        </div>

        <div v-if="!hideContrastRatio">
          <div class="h-px bg-border" />
          <ContrastRatio :color="colorHsv" />
        </div>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 z-40"
      @click="isOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import {
  type HexColor,
  hexToHsva,
  type HslaColor,
  hslaToHsva,
  type HsvaColor,
  hsvaToHex,
  hsvaToHsla,
  hsvaToRgba,
  type RgbaColor,
  rgbaToHsva,
} from "@uiw/color-convert";
import ObjectColorInput from "./ObjectColorInput.vue";
import ContrastRatio from "./ContrastRatio.vue";

export interface ColorPickerValue {
  hex: string;
  hsl: HslaColor;
  hsla: HslaColor;
  rgb: RgbaColor;
  rgba: RgbaColor;
}

export interface ColorPickerProps {
  value?: `#${string}` | HsvaColor | HslaColor | RgbaColor;
  type?: "hsl" | "hsla" | "rgb" | "rgba" | "hex";
  swatches?: HexColor[];
  hideContrastRatio?: boolean;
  hideDefaultSwatches?: boolean;
  class?: string;
  open?: boolean;
}

const props = withDefaults(defineProps<ColorPickerProps>(), {
  type: "hsl",
  swatches: () => [],
  hideContrastRatio: false,
  hideDefaultSwatches: false,
  open: false,
});

const emit = defineEmits<{
  "value-change": [value: ColorPickerValue];
  "update:open": [value: boolean];
}>();

const colorType = ref(props.type);
const isDropdownOpen = ref(false);
const isOpen = ref(props.open);

const colorOptions = [
  { value: "hex", label: "HEX" },
  { value: "hsl", label: "HSL" },
  { value: "hsla", label: "HSLA" },
  { value: "rgb", label: "RGB" },
  { value: "rgba", label: "RGBA" },
];

function getColorAsHsva(color: ColorPickerProps["value"]): HsvaColor {
  if (!color) return { h: 0, s: 0, v: 0, a: 1 };

  if (typeof color === "string") {
    return hexToHsva(color);
  } else if ("h" in color && "s" in color && "v" in color) {
    return color;
  } else if ("r" in color) {
    return rgbaToHsva(color);
  } else {
    return hslaToHsva(color);
  }
}

const colorHsv = ref<HsvaColor>(getColorAsHsva(props.value));

watch(
  () => props.value,
  (newValue) => {
    if (newValue) {
      colorHsv.value = getColorAsHsva(newValue);
    }
  },
  { deep: true },
);

watch(
  () => props.open,
  (newValue) => {
    isOpen.value = newValue;
  },
);

watch(isOpen, (newValue) => {
  emit("update:open", newValue);
});

const hexValue = computed(() => hsvaToHex(colorHsv.value));
const hslValue = computed(() => hsvaToHsla(colorHsv.value));
const rgbValue = computed(() => hsvaToRgba(colorHsv.value));

const defaultSwatches = ["#F8371A", "#F97C1B", "#FAC81C", "#3FD0B6", "#2CADF6", "#6462FC"];
const sortedSwatches = computed(() => {
  const allSwatches = [...defaultSwatches, ...props.swatches];
  return allSwatches.sort((a, b) => hexToHsva(a).h - hexToHsva(b).h);
});

const isDraggingSaturation = ref(false);
const isDraggingHue = ref(false);
const isDraggingAlpha = ref(false);
const saturationRef = ref<HTMLElement>();
const hueRef = ref<HTMLElement>();
const alphaRef = ref<HTMLElement>();

function handleValueChange(color: HsvaColor) {
  colorHsv.value = color;

  const hslColor = hsvaToHsla(color);
  const rgbColor = hsvaToRgba(color);

  emit("value-change", {
    hex: hsvaToHex(color),
    hsl: {
      ...hslColor,
      a: Math.round(hslColor.a * 100) / 100,
    },
    hsla: {
      ...hslColor,
      a: Math.round(hslColor.a * 100) / 100,
    },
    rgb: {
      ...rgbColor,
      a: Math.round(rgbColor.a * 100) / 100,
    },
    rgba: {
      ...rgbColor,
      a: Math.round(rgbColor.a * 100) / 100,
    },
  });
}

function updateFromHex(value: string | number) {
  try {
    const newColor = hexToHsva(String(value));
    handleValueChange(newColor);
  } catch (error) {
    // Invalid hex color, ignore
  }
}

function updateFromObject(value: HslaColor | RgbaColor) {
  try {
    const newColor = "r" in value ? rgbaToHsva(value) : hslaToHsva(value);
    handleValueChange(newColor);
  } catch (error) {
    // Invalid color object, ignore
  }
}

function setColorFromHex(hex: string) {
  handleValueChange(hexToHsva(hex));
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectColorType(value: string) {
  colorType.value = value as "hsl" | "hsla" | "rgb" | "rgba" | "hex";
  isDropdownOpen.value = false;
}

function startSaturationDrag(event: MouseEvent | TouchEvent) {
  event.preventDefault();
  isDraggingSaturation.value = true;
  updateSaturation(event);

  function handleMove(e: MouseEvent | TouchEvent) {
    if (isDraggingSaturation.value) {
      updateSaturation(e);
    }
  }

  function handleEnd() {
    isDraggingSaturation.value = false;
    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("mouseup", handleEnd);
    document.removeEventListener("touchmove", handleMove);
    document.removeEventListener("touchend", handleEnd);
  }

  document.addEventListener("mousemove", handleMove);
  document.addEventListener("mouseup", handleEnd);
  document.addEventListener("touchmove", handleMove);
  document.addEventListener("touchend", handleEnd);
}

function updateSaturation(event: MouseEvent | TouchEvent) {
  if (!saturationRef.value) return;

  const rect = saturationRef.value.getBoundingClientRect();
  const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
  const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;

  const relativeX = (clientX - rect.left) / rect.width;
  const relativeY = (clientY - rect.top) / rect.height;

  const x = Math.max(0.01, Math.min(0.99, relativeX));
  const y = Math.max(0.01, Math.min(0.99, relativeY));

  handleValueChange({
    ...colorHsv.value,
    s: x * 100,
    v: (1 - y) * 100,
  });
}

function handleHueClick(event: MouseEvent) {
  updateHue(event);
}

function startHueDrag(event: MouseEvent | TouchEvent) {
  event.preventDefault();
  isDraggingHue.value = true;
  updateHue(event);

  function handleMove(e: MouseEvent | TouchEvent) {
    if (isDraggingHue.value) {
      updateHue(e);
    }
  }

  function handleEnd() {
    isDraggingHue.value = false;
    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("mouseup", handleEnd);
    document.removeEventListener("touchmove", handleMove);
    document.removeEventListener("touchend", handleEnd);
  }

  document.addEventListener("mousemove", handleMove);
  document.addEventListener("mouseup", handleEnd);
  document.addEventListener("touchmove", handleMove);
  document.addEventListener("touchend", handleEnd);
}

function updateHue(event: MouseEvent | TouchEvent) {
  if (!hueRef.value) return;

  const rect = hueRef.value.getBoundingClientRect();
  const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;

  const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));

  handleValueChange({
    ...colorHsv.value,
    h: x * 360,
  });
}

function startAlphaDrag(event: MouseEvent | TouchEvent) {
  event.preventDefault();
  isDraggingAlpha.value = true;
  updateAlpha(event);

  function handleMove(e: MouseEvent | TouchEvent) {
    if (isDraggingAlpha.value) {
      updateAlpha(e);
    }
  }

  function handleEnd() {
    isDraggingAlpha.value = false;
    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("mouseup", handleEnd);
    document.removeEventListener("touchmove", handleMove);
    document.removeEventListener("touchend", handleEnd);
  }

  document.addEventListener("mousemove", handleMove);
  document.addEventListener("mouseup", handleEnd);
  document.addEventListener("touchmove", handleMove);
  document.addEventListener("touchend", handleEnd);
}

function updateAlpha(event: MouseEvent | TouchEvent) {
  if (!alphaRef.value) return;

  const rect = alphaRef.value.getBoundingClientRect();
  const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;

  const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));

  handleValueChange({
    ...colorHsv.value,
    a: x,
  });
}
</script>
