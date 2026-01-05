---
title: 液态 Logo
description: 基于 WebGL 的高级组件，通过自定义着色器为徽标或图像添加动态液态效果。
category: Visualization
tags: [css, tailwind, webgl, paper]
---

::ComponentViewer{demoFile="LiquidLogoDemo.vue" config="LiquidLogoConfig" componentId="liquid-logo" :componentFiles='["LiquidLogo.vue", "parseLogoImage.ts", "shader.ts"]' }

#api

## API

| 属性名        | 类型     | 默认值 | 描述                                   |
| ------------- | -------- | ------ | -------------------------------------- |
| `class`       | `string` | `""`   | 用于自定义样式的额外 CSS 类。          |
| `imageUrl`    | `string` | `""`   | 应用液态效果的图片 URL。               |
| `patternScale`| `number` | `2`    | 置换图案的缩放。                       |
| `refraction`  | `number` | `0.015`| 应用于图像的折射程度。                 |
| `edge`        | `number` | `0.4`  | 边缘效果的锐利度。                     |
| `patternBlur` | `number` | `0.005`| 应用于图案的模糊。                     |
| `liquid`      | `number` | `0.07` | 液态动画的强度。                       |
| `speed`       | `number` | `0.3`  | 液态效果的动画速度。                   |

#credits

- 灵感来自 Apple Fluid Motion 设计。
- 从 [Paper Design Concept](https://github.com/paper-design/liquid-logo) 移植并改进。

::
