---
title: Ribbon Background
description: A layered animated ribbon background with configurable colors, rotation, and transparency.
category: Background
tags: [css, tailwind, background, shader-toy, ogl, webgl]
badge: New
---

::ComponentViewer{demoFile="RibbonBackgroundDemo.vue" config="RibbonBackgroundConfig" componentId="ribbon-background" :componentFiles='["RibbonBackground.vue"]'}

#api

## API

| Prop Name         | Type       | Default                                                   | Description                                                 |
| ----------------- | ---------- | --------------------------------------------------------- | ----------------------------------------------------------- |
| `colors`          | `string[]` | `['#355070', '#6d597a', '#b56576', '#e56b6f', '#eaac8b']` | Five CSS hex colors used by the layered ribbons.            |
| `backgroundColor` | `string`   | `'#282828'`                                               | CSS hex color rendered behind the ribbons.                  |
| `transparent`     | `boolean`  | `false`                                                   | Renders empty background pixels with an alpha value of `0`. |
| `enableShadows`   | `boolean`  | `true`                                                    | Enables shadows between overlapping ribbon layers.          |
| `angle`           | `number`   | `0`                                                       | Rotates the complete ribbon field in degrees.               |
| `offsetX`         | `number`   | `0`                                                       | Moves the ribbon field horizontally in viewport units.      |
| `offsetY`         | `number`   | `0`                                                       | Moves the ribbon field vertically in viewport units.        |
| `speed`           | `number`   | `1`                                                       | Multiplies the animation speed.                             |
| `class`           | `string`   | `—`                                                       | Additional classes applied to the full-size outer element.  |

The component fills its nearest positioned parent. Give the parent an explicit height and `position: relative`.

#credits

- Rendered with the Inspira UI Shader Toy Viewer and [OGL](https://github.com/oframe/ogl).

::
