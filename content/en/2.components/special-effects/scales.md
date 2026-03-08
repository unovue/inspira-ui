---
title: Scales
description: A repeating diagonal, horizontal, or vertical line pattern background effect.
category: Special Effects
tags: [css, tailwind, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="ScalesDemo.vue" config="ScalesConfig" componentId="scales" :componentFiles='["Scales.vue"]'}

#api

## API

| Prop Name        | Type                                       | Default      | Description                                             |
| ---------------- | ------------------------------------------ | ------------ | ------------------------------------------------------- |
| `orientation`    | `"horizontal" \| "vertical" \| "diagonal"` | `"diagonal"` | Direction of the repeating line pattern.                |
| `size`           | `number`                                   | `10`         | Size of each repeating tile in pixels.                  |
| `color`          | `string`                                   | —            | CSS color value for the pattern lines.                  |
| `class`          | `string`                                   | —            | Additional CSS classes for the inner pattern overlay.   |
| `containerClass` | `string`                                   | —            | Additional CSS classes for the outer container element. |

#credits

- Ported from [Aceternity UI Scales](https://ui.aceternity.com/components/scales).

::
