---
title: 抖动着色器
description: 用于图像的实时有序抖动效果，非常适合像素艺术和复古风格。
category: Special Effects
tags: [tailwind, background, card, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="DitherShaderDemo.vue" config="DitherShaderConfig" componentId="dither-shader" :componentFiles='["DitherShader.vue"]'}

#api

## API

| 属性              | 类型                                                 | 默认值                   | 描述                                          |
| ----------------- | ---------------------------------------------------- | ------------------------ | --------------------------------------------- |
| `src`             | `string`                                             | `-`                      | 源图像的 URL。                                |
| `gridSize`        | `number`                                             | `4`                      | 抖动网格单元的尺寸。                          |
| `ditherMode`      | `"bayer" \| "halftone" \| "noise" \| "crosshatch"`   | `"bayer"`                | 抖动的图案类型。                              |
| `colorMode`       | `"original" \| "grayscale" \| "duotone" \| "custom"` | `"original"`             | 颜色处理模式。                                |
| `invert`          | `boolean`                                            | `false`                  | 是否反转抖动后的输出颜色。                    |
| `pixelRatio`      | `number`                                             | `1`                      | 像素化倍数（1 表示无像素化，越大越像素化）。  |
| `primaryColor`    | `string`                                             | `"#000000"`              | 双色调模式下的主色。                          |
| `secondaryColor`  | `string`                                             | `"#ffffff"`              | 双色调模式下的次色。                          |
| `customPalette`   | `string[]`                                           | `["#000000", "#ffffff"]` | 自定义模式下的调色板数组。                    |
| `brightness`      | `number`                                             | `0`                      | 亮度调节（-1 至 1）。                         |
| `contrast`        | `number`                                             | `1`                      | 对比度调节（0 至 2，1 为正常）。              |
| `backgroundColor` | `string`                                             | `"transparent"`          | 抖动图像背后的背景色。                        |
| `objectFit`       | `"cover" \| "contain" \| "fill" \| "none"`           | `"cover"`                | 图像的填充方式。                              |
| `threshold`       | `number`                                             | `0.5`                    | 抖动阈值偏移（0 至 1）。                      |
| `animated`        | `boolean`                                            | `false`                  | 是否启用动画效果。                            |
| `animationSpeed`  | `number`                                             | `0.02`                   | 动画速度（数值越小越慢）。                    |
| `class`           | `string`                                             | `-`                      | 容器的额外 CSS 类（可用 Tailwind 设置尺寸）。 |

#credits

- 灵感并移植自 [Aceternity UI Dither Shader](https://ui.aceternity.com/components/dither-shader)。

::
