---
title: SVG 遮罩
description: 通过悬停与鼠标移动揭示内容的动态 SVG 遮罩组件。
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="SvgMaskDemo.vue" config="SvgMaskConfig" componentId="svg-mask" :componentFiles='["SVGMask.vue"]'}

#api

## API

| 属性名    | 类型     | 默认值 | 描述                                |
| --------- | -------- | ------ | ----------------------------------- |
| `class`   | `string` | `""`   | 用于自定义样式的额外 CSS 类。       |
| `size`    | `number` | `10`   | 遮罩的初始大小（像素）。            |
| `revealSize`| `number`| `600`  | 悬停时遮罩的大小（像素）。          |

#credits

- 移植自 [Aceternity UI's SVG Mask Effect](https://ui.aceternity.com/components/text-generate-effect)。

::
