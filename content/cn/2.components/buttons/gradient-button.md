---
title: 渐变按钮
description: 一款带有旋转圆锥渐变边框的时尚动效按钮，提供可自定义的属性，呈现活力效果。
category: 按钮
tags: [css, tailwind, button]
---

::ComponentViewer{demoFile="GradientButtonDemo.vue" config="GradientButtonConfig" componentId="gradient-button" :componentFiles='["GradientButton.vue"]'}

#api

## API

| 属性名         | 类型       | 默认值                | 描述                           |
| -------------- | ---------- | -------------------- | ------------------------------ |
| `borderWidth`  | `number`   | `2`                  | 渐变边框的像素宽度。           |
| `colors`       | `string[]` | 彩虹色数组           | 用于圆锥渐变边框的颜色数组。   |
| `duration`     | `number`   | `2500`               | 渐变旋转动画的持续时间（毫秒）。|
| `borderRadius` | `number`   | `8`                  | 圆角半径（像素）。             |
| `blur`         | `number`   | `4`                  | 渐变边框的模糊强度（像素）。   |
| `class`        | `string`   | `""`                 | 用于自定义样式的额外 CSS 类。  |
| `bgColor`      | `string`   | `"#000"`             | 按钮内容的背景色。             |

::
