---
title: Box Reveal
description: An animated box reveal effect with customizable colors, duration, and delay.
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="BoxRevealDemo.vue" config="BoxRevealConfig" componentId="box-reveal" :componentFiles='["BoxReveal.vue"]'}

#api

## API

| Prop Name  | Type     | Default     | Description                                          |
| ---------- | -------- | ----------- | ---------------------------------------------------- |
| `color`    | `string` | `"#5046e6"` | Background color of the reveal box.                  |
| `duration` | `number` | `0.5`       | Duration of the reveal animation in seconds.         |
| `delay`    | `number` | `0.25`      | Delay before the reveal animation starts in seconds. |
| `class`    | `string` | `""`        | Additional CSS classes for custom styling.           |

#credits

- Ported from [Magic UI Box Reveal](https://magicui.design/docs/components/box-reveal).

::
