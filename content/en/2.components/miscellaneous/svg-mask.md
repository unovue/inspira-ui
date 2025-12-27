---
title: SVG Mask
description: A dynamic SVG mask component that reveals content with hover and mouse movement.
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="SvgMaskDemo.vue" config="SvgMaskConfig" componentId="svg-mask" :componentFiles='["SVGMask.vue"]'}

#api

## API

| Prop Name    | Type     | Default | Description                                |
| ------------ | -------- | ------- | ------------------------------------------ |
| `class`      | `string` | `""`    | Additional CSS classes for custom styling. |
| `size`       | `number` | `10`    | Initial size of the mask in pixels.        |
| `revealSize` | `number` | `600`   | Size of the mask during hover in pixels.   |

#credits

- Ported from [Aceternity UI's SVG Mask Effect](https://ui.aceternity.com/components/text-generate-effect).

::
