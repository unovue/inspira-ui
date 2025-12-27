---
title: 闪光按钮
description: 一款带有闪烁动画效果的按钮。
category: 按钮
tags: [css, tailwind, button, magic-ui]
---

::ComponentViewer{demoFile="ShimmerButtonDemo.vue" config="ShimmerButtonConfig" componentId="shimmer-button" :componentFiles='["ShimmerButton.vue"]'}

#api

## API

| 属性名            | 类型     | 默认值               | 描述                                    |
| ----------------- | -------- | -------------------- | --------------------------------------- |
| `class`           | `string` | `""`                 | 应用于按钮的额外 CSS 类。               |
| `shimmerColor`    | `string` | `"#ffffff"`          | 闪光效果的颜色。                        |
| `shimmerSize`     | `string` | `"0.05em"`           | 闪光效果的尺寸。                        |
| `borderRadius`    | `string` | `"100px"`            | 按钮的圆角半径。                        |
| `shimmerDuration` | `string` | `"3s"`               | 闪光动画的持续时间。                    |
| `background`      | `string` | `"rgba(0, 0, 0, 1)"` | 按钮的背景色，可使用 rgb 或十六进制。   |

#credits

- 移植自 [Magic UI Shimmer Button](https://magicui.design/docs/components/shimmer-button)。

::
