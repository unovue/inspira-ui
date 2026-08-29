---
title: HTML Drag
description: Bend live HTML with scroll velocity and pressed pointer movement.
category: HTML in Canvas
tags: [webgl, shader, canvas, scroll, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlDragDemo.vue" config="HtmlDragConfig" componentId="html-drag" :componentFiles='["HtmlDrag.vue"]'}

Scroll over the surface to bend its segmented WebGL plane. Enable `mouseEnabled` to add press-and-drag deformation; leave it disabled to keep the HTML selectable.

#api

## API

| Prop           | Type      | Default | Description                                                   |
| -------------- | --------- | ------- | ------------------------------------------------------------- |
| `strength`     | `number`  | `1.25`  | Amount of vertical surface bending.                           |
| `mouseDamping` | `number`  | `0.9`   | Smoothing applied to pointer movement.                        |
| `mouseEnabled` | `boolean` | `false` | Enables press-and-drag deformation and blocks text selection. |
| `frameRate`    | `number`  | `60`    | Maximum render frequency.                                     |
| `pixelRatio`   | `number`  | `1`     | Render scale, clamped between `0.25` and `2`.                 |
| `paused`       | `boolean` | `false` | Pauses the render loop.                                       |
| `autoPause`    | `boolean` | `true`  | Pauses while off-screen or the document is hidden.            |
| `class`        | `string`  | —       | Additional classes merged onto the surface element.           |

### Slots

| Slot      | Description                               |
| --------- | ----------------------------------------- |
| `default` | HTML content rendered through the effect. |

::
