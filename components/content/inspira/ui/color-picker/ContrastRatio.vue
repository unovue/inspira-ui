<template>
  <div class="flex items-center justify-between gap-4 pt-2 select-none">
    <div class="flex items-center gap-4">
      <div
        class="flex size-10 items-center justify-center rounded border"
        :style="{
          backgroundColor: `rgba(${rgbaColor.r}, ${rgbaColor.g}, ${rgbaColor.b}, ${rgbaColor.a})`,
          backgroundSize: '8px 8px',
        }"
      >
        <span
          class="font-medium"
          :style="{
            color: shouldUseWhiteText ? 'white' : 'black',
          }"
          >A</span
        >
      </div>
      <div class="flex flex-col justify-between">
        <span class="whitespace-nowrap text-nowrap text-xs text-muted-foreground">
          Contrast Ratio
        </span>
        <span class="text-sm">{{ currentContrastRatio }}</span>
      </div>
    </div>
    <div class="flex items-center justify-end gap-1 *:select-none">
      <UiBadge
        :variant="isAccessible.aa ? 'default' : 'secondary'"
        class="gap-1"
      >
        <Icon
          :name="isAccessible.aa ? 'lucide:check' : 'lucide:x'"
          :size="12"
        />
        AA
      </UiBadge>
      <UiBadge
        :variant="isAccessible.aaa ? 'default' : 'secondary'"
        class="gap-1"
      >
        <Icon
          :name="isAccessible.aaa ? 'lucide:check' : 'lucide:x'"
          :size="12"
        />
        AAA
      </UiBadge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, computed } from "vue";
import type { HsvaColor } from "@uiw/color-convert";
import { hsvaToRgba } from "@uiw/color-convert";

export interface ContrastRatioProps {
  color: HsvaColor;
}

const props = defineProps<ContrastRatioProps>();

const darkModeContrastRatio = ref(0);
const lightModeContrastValue = ref(0);

const rgbaColor = computed(() => hsvaToRgba(props.color));

const shouldUseWhiteText = computed(() => {
  const rgb = rgbaColor.value;
  // Calculate luminance of the color background
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const rLinear = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const gLinear = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const bLinear = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  const luminance = 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;

  // Use white text if the background is dark (luminance < 0.5)
  return luminance < 0.5;
});

const currentContrastRatio = computed(() => {
  // For accessibility, use the better of the two contrast ratios (dark or light mode)
  // This gives the most accurate assessment of accessibility across different contexts
  return Math.max(darkModeContrastRatio.value, lightModeContrastValue.value);
});

const isAccessible = computed(() => {
  return {
    aa: currentContrastRatio.value >= 4.5,
    aaa: currentContrastRatio.value >= 7,
  };
});

function calculateContrastRatios(color: HsvaColor) {
  const rgb = hsvaToRgba(color);

  function toSRGB(c: number) {
    const channel = c / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }

  function alphaBlend(foreground: number, background: number, alpha: number) {
    return foreground * alpha + background * (1 - alpha);
  }

  // Apply alpha blending for light background (white: 255)
  const lightR = alphaBlend(rgb.r, 255, rgb.a);
  const lightG = alphaBlend(rgb.g, 255, rgb.a);
  const lightB = alphaBlend(rgb.b, 255, rgb.a);

  // Apply alpha blending for dark background (dark gray: 32)
  const darkR = alphaBlend(rgb.r, 32, rgb.a);
  const darkG = alphaBlend(rgb.g, 32, rgb.a);
  const darkB = alphaBlend(rgb.b, 32, rgb.a);

  // Calculate luminance for light background composition
  const lightRSRGB = toSRGB(lightR);
  const lightGSRGB = toSRGB(lightG);
  const lightBSRGB = toSRGB(lightB);
  const lightLuminance = 0.2126 * lightRSRGB + 0.7152 * lightGSRGB + 0.0722 * lightBSRGB;

  // Calculate luminance for dark background composition
  const darkRSRGB = toSRGB(darkR);
  const darkGSRGB = toSRGB(darkG);
  const darkBSRGB = toSRGB(darkB);
  const darkLuminance = 0.2126 * darkRSRGB + 0.7152 * darkGSRGB + 0.0722 * darkBSRGB;

  // Text color luminances (what we're measuring contrast against)
  const whiteTextLuminance = 1.0;
  const blackTextLuminance = 0.0;

  // Calculate contrast ratios: text against the color background (alpha-blended)
  // For dark mode: white text against the dark-composited color
  const darkModeRatio =
    (Math.max(whiteTextLuminance, darkLuminance) + 0.05) /
    (Math.min(whiteTextLuminance, darkLuminance) + 0.05);
  // For light mode: black text against the light-composited color
  const lightModeRatio =
    (Math.max(blackTextLuminance, lightLuminance) + 0.05) /
    (Math.min(blackTextLuminance, lightLuminance) + 0.05);

  darkModeContrastRatio.value = Number(darkModeRatio.toFixed(2));
  lightModeContrastValue.value = Number(lightModeRatio.toFixed(2));
}

watch(() => props.color, calculateContrastRatios, { immediate: true, deep: true });
</script>
