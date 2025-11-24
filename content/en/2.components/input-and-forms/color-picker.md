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
| `open`                | `boolean`                                       | `false`     | Control the open/closed state of the color picker |

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

#credits

- Credits to [kalix127](https://github.com/kalix127) for porting this component.
- Inspired by [@uplusion23](https://21st.dev/uplusion23/color-picker/color-picker-with-swatches-and-onchange).

::
