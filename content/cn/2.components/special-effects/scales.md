---
title: 鳞片纹理
description: 一种重复的对角线、水平线或垂直线图案背景效果。
category: Special Effects
tags: [css, tailwind, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="ScalesDemo.vue" config="ScalesConfig" componentId="scales" :componentFiles='["Scales.vue"]'}

#api

## API

| 属性名           | 类型                                       | 默认值       | 描述                                    |
| ---------------- | ------------------------------------------ | ------------ | --------------------------------------- |
| `orientation`    | `"horizontal" \| "vertical" \| "diagonal"` | `"diagonal"` | 重复线条图案的方向。                    |
| `size`           | `number`                                   | `10`         | 每个重复贴片的尺寸（像素）。            |
| `color`          | `string`                                   | —            | 图案线条的 CSS 颜色值。                 |
| `class`          | `string`                                   | —            | 内部图案遮罩层的附加 CSS 类。           |
| `containerClass` | `string`                                   | —            | 外部容器元素的附加 CSS 类。             |

#credits

- 移植自 [Aceternity UI Scales](https://ui.aceternity.com/components/scales).

::
