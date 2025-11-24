---
title: 3D Text
description: A stylish 3D text component with customizable colors, shadows, and animation options.
category: Text Animation
tags: [css, tailwind, 3d]
---

::ComponentViewer{demoFile="Text3dDemo.vue" config="Text3dConfig" componentId="text-3d" :componentFiles='["Text3d.vue"]'}

#api

## API

| Prop Name           | Type      | Default    | Description                                        |
| ------------------- | --------- | ---------- | -------------------------------------------------- |
| `textColor`         | `string`  | `"white"`  | Color of the main text.                            |
| `letterSpacing`     | `number`  | `-0.1`     | Adjusts the spacing between letters in `ch` units. |
| `strokeColor`       | `string`  | `"black"`  | Color of the text stroke.                          |
| `shadowColor`       | `string`  | `"yellow"` | Color of the text shadow.                          |
| `strokeSize`        | `number`  | `20`       | Thickness of the text stroke in pixels.            |
| `shadow1Size`       | `number`  | `7`        | Size of the first shadow layer in pixels.          |
| `shadow2Size`       | `number`  | `10`       | Size of the second shadow layer in pixels.         |
| `class`             | `string`  | `""`       | Additional CSS classes for custom styling.         |
| `animate`           | `boolean` | `true`     | Enables wiggle animation when set to `true`.       |
| `animationDuration` | `number`  | `1500`     | Duration of the wiggle animation in milliseconds.  |

::
