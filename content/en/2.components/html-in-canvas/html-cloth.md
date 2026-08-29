---
title: HTML Cloth
description: Fold live HTML through a continuously moving fabric-like vector field.
category: HTML in Canvas
tags: [webgl, shader, canvas, cloth, animation]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlClothDemo.vue" config="HtmlClothConfig" componentId="html-cloth" :componentFiles='["HtmlCloth.vue"]'}

#api

## API

| Prop         | Type      | Default | Description                                         |
| ------------ | --------- | ------- | --------------------------------------------------- |
| `strength`   | `number`  | `0.03`  | Amount of vector-field displacement.                |
| `scale`      | `number`  | `6`     | Scale of the cloth field.                           |
| `speed`      | `number`  | `1`     | Animation speed of the field.                       |
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

- Vector field based on the work of [MartinRGB](https://www.shadertoy.com/view/DttSRB).

::
