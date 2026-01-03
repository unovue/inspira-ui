---
title: Dither Shader
description: A real-time ordered dithering effect for images, perfect for pixel art and retro aesthetics.
category: Special Effects
tags: [tailwind, background, card, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="DitherShaderDemo.vue" config="DitherShaderConfig" componentId="dither-shader" :componentFiles='["DitherShader.vue"]'}

#api

## API

| Prop              | Type                                                 | Default                  | Description                                                                  |
| ----------------- | ---------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------- |
| `src`             | `string`                                             | `–`                      | Source image URL                                                             |
| `gridSize`        | `number`                                             | `4`                      | Size of the dithering grid cells                                             |
| `ditherMode`      | `"bayer" \| "halftone" \| "noise" \| "crosshatch"`   | `"bayer"`                | Type of dithering pattern                                                    |
| `colorMode`       | `"original" \| "grayscale" \| "duotone" \| "custom"` | `"original"`             | Color processing mode                                                        |
| `invert`          | `boolean`                                            | `false`                  | Invert the dithered output colors                                            |
| `pixelRatio`      | `number`                                             | `1`                      | Pixelation multiplier (1 = no pixelation, higher = more pixelated)           |
| `primaryColor`    | `string`                                             | `"#000000"`              | Primary color for duotone mode                                               |
| `secondaryColor`  | `string`                                             | `"#ffffff"`              | Secondary color for duotone mode                                             |
| `customPalette`   | `string[]`                                           | `["#000000", "#ffffff"]` | Custom color palette array for custom mode                                   |
| `brightness`      | `number`                                             | `0`                      | Brightness adjustment (-1 to 1)                                              |
| `contrast`        | `number`                                             | `1`                      | Contrast adjustment (0 to 2, 1 = normal)                                     |
| `backgroundColor` | `string`                                             | `"transparent"`          | Background color behind the dithered image                                   |
| `objectFit`       | `"cover" \| "contain" \| "fill" \| "none"`           | `"cover"`                | Object fit behavior                                                          |
| `threshold`       | `number`                                             | `0.5`                    | Threshold bias for dithering (0 to 1)                                        |
| `animated`        | `boolean`                                            | `false`                  | Enable animation effect                                                      |
| `animationSpeed`  | `number`                                             | `0.02`                   | Animation speed (lower = slower)                                             |
| `class`           | `string`                                             | `–`                      | Additional CSS classes for the container (use this to set size via Tailwind) |

#credits

- Inspired and ported from [Aceternity UI Dither Shader](https://ui.aceternity.com/components/dither-shader).

::
