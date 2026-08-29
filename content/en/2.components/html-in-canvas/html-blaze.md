---
title: HTML Blaze
description: Distort live HTML with rising heat, smoke, sparks, and flame light.
category: HTML in Canvas
tags: [webgl, shader, canvas, fire, animation]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlBlazeDemo.vue" config="HtmlBlazeConfig" componentId="html-blaze" :componentFiles='["HtmlBlaze.vue"]'}

#api

## API

| Prop         | Type      | Default | Description                                         |
| ------------ | --------- | ------- | --------------------------------------------------- |
| `strength`   | `number`  | `0.03`  | Amount of heat displacement.                        |
| `scale`      | `number`  | `6`     | Scale of the flame noise field.                     |
| `speed`      | `number`  | `1`     | Animation speed of the fire.                        |
| `frameRate`  | `number`  | `60`    | Maximum render frequency.                           |
| `pixelRatio` | `number`  | `1`     | Render scale, clamped between `0.25` and `2`.       |
| `paused`     | `boolean` | `false` | Pauses the render loop.                             |
| `autoPause`  | `boolean` | `true`  | Pauses while off-screen or the document is hidden.  |
| `class`      | `string`  | —       | Additional classes merged onto the surface element. |

### Slots

| Slot      | Description                               |
| --------- | ----------------------------------------- |
| `default` | HTML content rendered through the effect. |

#credits

- Uses the MIT-licensed Simplex Noise implementation by [Ashima Arts](https://github.com/ashima/webgl-noise).

::
