---
title: 神经网络背景
description: 使用 OGL 与 GLSL 的动态着色器背景，呈现流动的神经质视觉效果。
category: 背景
tags: [css, tailwind, background, ogl, webgl, cursify]
badge: New
---

::ComponentViewer{demoFile="NeuralBgDemo.vue" config="NeuralBgConfig" componentId="bg-neural" :componentFiles='["NeuralBg.vue"]'}

#api

## API

| 属性名      | 类型     | 默认值 | 描述                                                         |
| ----------- | -------- | ------ | ------------------------------------------------------------ |
| `hue`       | `number` | `200`  | 背景颜色的基础色相（度数 0–360）。                           |
| `saturation`| `number` | `0.8`  | 背景颜色的饱和度（0–1）。                                    |
| `chroma`    | `number` | `0.6`  | HSL 颜色的色度/亮度系数（0–1）。                             |
| `class`     | `string` | `—`    | 可选，应用于画布的额外 CSS 类。                              |

> 💡 组件默认使用全屏固定背景并设置 `pointer-events-none`。如需修改，可通过 `class` 属性覆写样式。

#credits

- 基于轻量级 WebGL 框架 [OGL](https://github.com/oframe/ogl) 构建。
- 数学与图案逻辑源自递归三角函数叠加。
- 移植自 [Cursify 的 Neural Glow Cursor](https://cursify.vercel.app/components/neural-glow)。

::
