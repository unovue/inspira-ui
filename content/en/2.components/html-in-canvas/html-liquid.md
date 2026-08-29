---
title: HTML Liquid
description: Refract live HTML through a flowing liquid surface that reacts to pointer movement.
category: HTML in Canvas
tags: [webgl, shader, canvas, liquid, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlLiquidDemo.vue" config="HtmlLiquidConfig" componentId="html-liquid" :componentFiles='["HtmlLiquid.vue"]'}

#api

## API

| Prop           | Type      | Default | Description                                         |
| -------------- | --------- | ------- | --------------------------------------------------- |
| `strength`     | `number`  | `0.03`  | Amount of texture displacement.                     |
| `frequency`    | `number`  | `18`    | Density of the flowing surface and pointer ripples. |
| `speed`        | `number`  | `3`     | Motion speed of the liquid field.                   |
| `mouseDamping` | `number`  | `0.9`   | Smoothing applied to pointer movement.              |
| `frameRate`    | `number`  | `60`    | Maximum render frequency.                           |
| `pixelRatio`   | `number`  | `1`     | Render scale, clamped between `0.25` and `2`.       |
| `paused`       | `boolean` | `false` | Pauses the render loop.                             |
| `autoPause`    | `boolean` | `true`  | Pauses while off-screen or the document is hidden.  |
| `class`        | `string`  | —       | Additional classes merged onto the surface element. |

### Slots

| Slot      | Description                               |
| --------- | ----------------------------------------- |
| `default` | HTML content rendered through the effect. |

::
