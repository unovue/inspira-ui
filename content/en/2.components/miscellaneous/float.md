---
title: Float
description: Add continuous organic movement across three-dimensional position and rotation axes.
category: Miscellaneous
tags: [css, tailwind, motion-v, 3d, animation]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="FloatDemo.vue" config="FloatConfig" componentId="float" :componentFiles='["Float.vue", "index.ts"]'}

#api

## API

| Prop            | Type                       | Default         | Description                                          |
| --------------- | -------------------------- | --------------- | ---------------------------------------------------- |
| `speed`         | `number`                   | `0.5`           | Amount of time progression per animation frame.      |
| `amplitude`     | `[number, number, number]` | `[10, 30, 30]`  | Position movement on the X, Y, and Z axes in pixels. |
| `rotationRange` | `[number, number, number]` | `[15, 15, 7.5]` | Rotation range on the X, Y, and Z axes in degrees.   |
| `timeOffset`    | `number`                   | `0`             | Phase offset for desynchronising multiple floaters.  |
| `class`         | `string`                   | —               | Additional classes merged onto the animated wrapper. |

Place the content to animate in the default slot. The wrapper preserves 3D transforms and updates its position on every animation frame.

#credits

- Ported from [Fancy Components Float](https://fancycomponents.dev/docs/components/blocks/float).

::
