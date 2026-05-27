---
title: Color Picker
description: A comprehensive color picker component with support for multiple color formats, accessibility features, and custom swatches.
category: Forms & Input
tags: [css, tailwind, input, color-picker, uplusion23]
---

::ComponentViewer{demoFile="ColorPickerDemo.vue" config="ColorPickerConfig" componentId="color-picker" :componentFiles='["ColorPicker.vue", "ObjectColorInput.vue", "ContrastRatio.vue", "index.ts"]' dependencies="@uiw/color-convert"}

#api

## API

### ColorPicker Props

| Prop Name             | Type                                            | Default     | Description                                       |
| --------------------- | ----------------------------------------------- | ----------- | ------------------------------------------------- |
| `value`               | `string \| HsvaColor \| HslaColor \| RgbaColor` | `undefined` | The current color value in any supported format   |
| `type`                | `'hsl' \| 'hsla' \| 'rgb' \| 'rgba' \| 'hex'`   | `'hsl'`     | Default color format to display in inputs         |
| `swatches`            | `HexColor[]`                                    | `[]`        | Array of predefined color swatches                |
| `hideContrastRatio`   | `boolean`                                       | `false`     | Hide the accessibility contrast ratio section     |
| `hideDefaultSwatches` | `boolean`                                       | `false`     | Hide the default color swatches                   |
| `class`               | `string`                                        | `""`        | Additional CSS classes for the popover content    |
| `open`                | `boolean`                                       | `false`     | Control the popover state with `v-model:open`     |

### ColorPicker Events

| Event Name     | Type                                | Description                                 |
| -------------- | ----------------------------------- | ------------------------------------------- |
| `value-change` | `(value: ColorPickerValue) => void` | Emitted when the selected color changes     |
| `update:open`  | `(value: boolean) => void`          | Emitted when the popover open state changes |

### ColorPickerValue Type

```typescript
interface ColorPickerValue {
  hex: string; // Hex color string (e.g., "#ff0000")
  hsl: HslaColor; // HSL color object with h, s, l, a properties
  hsla: HslaColor; // HSLA color object with h, s, l, a properties
  rgb: RgbaColor; // RGB color object with r, g, b, a properties
  rgba: RgbaColor; // RGBA color object with r, g, b, a properties
}
```

### Controlled Usage

Use `v-model:open` when the trigger needs to reflect or manage the popover state. The picker accepts hex, HSVA, HSLA, and RGBA inputs through `value`, then emits a normalized `ColorPickerValue` object from `value-change`.

```vue
<script setup lang="ts">
import type { ColorPickerValue } from "@/components/content/inspira/ui/color-picker";
import { ref } from "vue";

const isOpen = ref(false);
const color = ref<ColorPickerValue>({
  hex: "#A35fFF",
  hsl: { h: 265.5, s: 100, l: 67, a: 1 },
  hsla: { h: 265.5, s: 100, l: 67, a: 1 },
  rgb: { r: 163, g: 95, b: 255, a: 1 },
  rgba: { r: 163, g: 95, b: 255, a: 1 },
});

function setColor(newColor: ColorPickerValue) {
  color.value = newColor;
}
</script>

<template>
  <ColorPicker
    :value="color.hsl"
    v-model:open="isOpen"
    type="hsla"
    :swatches="['#AEDEAE', '#FFD3B6', '#FFB6B9']"
    @value-change="setColor"
  >
    <button
      type="button"
      aria-haspopup="dialog"
      :aria-expanded="isOpen"
    >
      Pick Color
    </button>
  </ColorPicker>
</template>
```

#credits

- Credits to [kalix127](https://github.com/kalix127) for porting this component.
- Inspired by [@uplusion23](https://21st.dev/uplusion23/color-picker/color-picker-with-swatches-and-onchange).

::
