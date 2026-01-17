---
title: Progressive Blur
description: A layered backdrop blur effect that gradually increases intensity in a chosen direction, perfect for depth, focus, and visual separation.
category: Special Effects
tags: [css, tailwind, motion-v, blur, backdrop-filter]
badge: New
---

::ComponentViewer{demoFile="ProgressiveBlurDemo.vue" config="ProgressiveBlurConfig" componentId="progressive-blur" :componentFiles='["ProgressiveBlur.vue"]'}

#api

## API

| Prop Name       | Type                                     | Default    | Description                                                  |
| --------------- | ---------------------------------------- | ---------- | ------------------------------------------------------------ |
| `direction`     | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | Direction in which the blur progressively increases.         |
| `blurLayers`    | `number`                                 | `8`        | Number of blur layers used to create the progressive effect. |
| `blurIntensity` | `number`                                 | `0.25`     | Blur strength multiplier per layer (in pixels).              |
| `class`         | `string`                                 | `""`       | Optional class applied to the wrapper container.             |

> This component also accepts all valid `motion-v` props for a `div`.

#credits

- Ported from [Motion Primitives Progressive Blur](https://motion-primitives.com/docs/progressive-blur).
- Powered by `motion-v`

::
