---
title: Color Picker
description: A comprehensive color picker component with support for multiple color formats, accessibility features, and custom swatches.
---

::ComponentLoader{label="Preview" componentName="ColorPickerDemo" type="examples" id="color-picker"}
::

::alert{type="info"}
**Note:** This component uses `@uiw/color-convert` npm package for color conversions.
::

## Install using CLI

::InstallationCli{componentId="color-picker"}
::

## Install Manually

::steps{level=4}

#### Install the dependencies

::code-group

```bash [npm]
npm install @uiw/color-convert
```

```bash [pnpm]
pnpm install @uiw/color-convert
```

```bash [bun]
bun add @uiw/color-convert
```

```bash [yarn]
yarn add @uiw/color-convert
```

::

Copy and paste the following code

::code-group

:CodeViewerTab{filename="ColorPicker.vue" language="vue" componentName="ColorPicker" type="ui" id="color-picker"}
:CodeViewerTab{filename="ObjectColorInput.vue" language="vue" componentName="ObjectColorInput" type="ui" id="color-picker"}
:CodeViewerTab{filename="ContrastRatio.vue" language="vue" componentName="ContrastRatio" type="ui" id="color-picker"}
:CodeViewerTab{filename="index.ts" language="ts" componentName="index" extension="ts" type="ui" id="color-picker"}

::
::

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

## Features

- Multiple color formats (HEX, HSL, HSLA, RGB, RGBA with alpha channel)
- Interactive saturation, hue, and alpha sliders
- Alpha channel support with transparency slider for RGBA/HSLA modes
- Custom color swatches with default predefined colors
- Accessibility contrast checker with AA/AAA indicators

## Credits

- Credits to [kalix127](https://github.com/kalix127) for porting this component.
- Inspired by [@uplusion23](https://21st.dev/uplusion23/color-picker/color-picker-with-swatches-and-onchange).
