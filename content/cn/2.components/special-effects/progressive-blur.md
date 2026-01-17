---
title: 渐进模糊
description: 一种分层的背景模糊效果，会在指定方向上逐渐增强强度，适合营造景深、聚焦与视觉分隔。
category: Special Effects
tags: [css, tailwind, motion-v, blur, backdrop-filter]
badge: New
---

::ComponentViewer{demoFile="ProgressiveBlurDemo.vue" config="ProgressiveBlurConfig" componentId="progressive-blur" :componentFiles='["ProgressiveBlur.vue"]'}

#api

## API

| 属性名           | 类型                                     | 默认值     | 描述                                         |
| ---------------- | ---------------------------------------- | ---------- | -------------------------------------------- |
| `direction`      | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | 模糊逐渐增强的方向。                         |
| `blurLayers`     | `number`                                 | `8`        | 用于创建渐进效果的模糊层数。                 |
| `blurIntensity`  | `number`                                 | `0.25`     | 每层的模糊强度系数（像素）。                 |
| `class`          | `string`                                 | `""`       | 应用于外层容器的可选类名。                   |

> 该组件也支持 `div` 的所有有效 `motion-v` 属性。

#credits

- 移植自 [Motion Primitives Progressive Blur](https://motion-primitives.com/docs/progressive-blur)。
- 由 `motion-v` 驱动。

::
