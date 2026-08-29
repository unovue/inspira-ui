---
title: HTML ASCII
description: Rebuild live HTML with luminance-matched bitmap glyphs.
category: HTML in Canvas
tags: [webgl, shader, canvas, ascii, typography]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlAsciiDemo.vue" config="HtmlAsciiConfig" componentId="html-ascii" :componentFiles='["HtmlAscii.vue"]'}

Press the surface to switch the glyph output to monochrome.

#api

## API

| Prop         | Type      | Default | Description                                          |
| ------------ | --------- | ------- | ---------------------------------------------------- |
| `cellSize`   | `number`  | `8`     | Glyph cell size in pixels. Values below `5` use `5`. |
| `frameRate`  | `number`  | `60`    | Maximum render frequency.                            |
| `pixelRatio` | `number`  | `1`     | Render scale, clamped between `0.25` and `2`.        |
| `paused`     | `boolean` | `false` | Pauses the render loop.                              |
| `autoPause`  | `boolean` | `true`  | Pauses while off-screen or the document is hidden.   |
| `class`      | `string`  | —       | Additional classes merged onto the surface element.  |

### Slots

| Slot      | Description                               |
| --------- | ----------------------------------------- |
| `default` | HTML content rendered through the effect. |

#credits

- Bitmap character technique adapted from [movAX13h](https://www.shadertoy.com/user/movAX13h).

::
