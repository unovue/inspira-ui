---
title: Gradient Button
description: A stylish animated button with a rotating conic gradient border and customizable properties for a vibrant look.
category: Button
tags: [css, tailwind, button]
---

::ComponentViewer{demoFile="GradientButtonDemo.vue" config="GradientButtonConfig" componentId="gradient-button" :componentFiles='["GradientButton.vue"]'}

#api

## API

| Prop Name      | Type       | Default              | Description                                                  |
| -------------- | ---------- | -------------------- | ------------------------------------------------------------ |
| `borderWidth`  | `number`   | `2`                  | Width of the gradient border in pixels.                      |
| `colors`       | `string[]` | Rainbow Colors Array | Array of colors used in the conic gradient border.           |
| `duration`     | `number`   | `2500`               | Duration of the gradient rotation animation in milliseconds. |
| `borderRadius` | `number`   | `8`                  | Border radius for rounded corners in pixels.                 |
| `blur`         | `number`   | `4`                  | Blur intensity of the gradient border effect in pixels.      |
| `class`        | `string`   | `""`                 | Additional CSS classes for custom styling.                   |
| `bgColor`      | `string`   | `"#000"`             | Background color of the button content.                      |

::
