---
title: HTML Chromatic
description: Split the color channels of live HTML based on pointer position.
category: HTML in Canvas
tags: [webgl, shader, canvas, chromatic, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlChromaticDemo.vue" config="HtmlChromaticConfig" componentId="html-chromatic" :componentFiles='["HtmlChromatic.vue"]'}

#api

## API

| Prop           | Type      | Default | Description                                         |
| -------------- | --------- | ------- | --------------------------------------------------- |
| `strength`     | `number`  | `0.03`  | Maximum red and blue channel separation.            |
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
