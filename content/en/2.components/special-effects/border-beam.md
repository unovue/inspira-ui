---
title: Border Beam
description: A stylish animated border beam effect with customizable size, duration, colors, and delay.
category: Special Effects
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="BorderBeamDemo.vue" config="BorderBeamConfig" componentId="border-beam" :componentFiles='["BorderBeam.vue"]'}

#api

## API

| Prop Name     | Type     | Default     | Description                                                           |
| ------------- | -------- | ----------- | --------------------------------------------------------------------- |
| `class`       | `string` | `""`        | Additional CSS classes for custom styling.                            |
| `size`        | `number` | `200`       | Size of the animated border beam effect.                              |
| `duration`    | `number` | `15`        | Duration of the animation in seconds.                                 |
| `borderWidth` | `number` | `1.5`       | Width of the border around the beam effect.                           |
| `anchor`      | `number` | `90`        | Anchor point for the beam, determining its position along the border. |
| `colorFrom`   | `string` | `"#ffaa40"` | Starting color for the gradient of the beam.                          |
| `colorTo`     | `string` | `"#9c40ff"` | Ending color for the gradient of the beam.                            |
| `delay`       | `number` | `0`         | Delay before the animation starts, in seconds.                        |

#credits

- Ported from [Magic UI](https://magicui.design/docs/components/border-beam).

::
