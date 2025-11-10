---
title: Shimmer Button
description: A button with a shimmering animated effect.
category: Button
tags: [css, tailwind, button, magic-ui]
---

::ComponentViewer{demoFile="ShimmerButtonDemo.vue" config="ShimmerButtonConfig" componentId="shimmer-button" :componentFiles='["ShimmerButton.vue"]'}

#api

## API

| Prop Name         | Type     | Default              | Description                                             |
| ----------------- | -------- | -------------------- | ------------------------------------------------------- |
| `class`           | `string` | `""`                 | Additional CSS classes to apply to the button.          |
| `shimmerColor`    | `string` | `"#ffffff"`          | Color of the shimmer effect.                            |
| `shimmerSize`     | `string` | `"0.05em"`           | Size of the shimmer effect.                             |
| `borderRadius`    | `string` | `"100px"`            | Border radius of the button.                            |
| `shimmerDuration` | `string` | `"3s"`               | Duration of the shimmer animation.                      |
| `background`      | `string` | `"rgba(0, 0, 0, 1)"` | Background color of the button. Can be rgb or hex code. |

#credits

- Ported from [Magic UI Shimmer Button](https://magicui.design/docs/components/shimmer-button).

::
