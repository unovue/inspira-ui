---
title: Sleek Line Cursor
description: A reactive animated cursor trail with smooth wave-like motion, using spring physics and dynamic color waves.
category: Cursor
tags: [css, tailwind, cursor, webgl, cursify]
badge: New
---

::ComponentViewer{demoFile="SleekLineCursorDemo.vue" config="SleekLineCursorConfig" componentId="sleek-line-cursor" :componentFiles='["SleekLineCursor.vue"]'}

## API

| Prop Name   | Type                 | Default     | Description                                                               |
| ----------- | -------------------- | ----------- | ------------------------------------------------------------------------- |
| `class`     | `string \| string[]` | `undefined` | Additional CSS classes for the canvas container element.                  |
| `trails`    | `number`             | `20`        | Number of trailing lines rendered behind the cursor.                      |
| `size`      | `number`             | `50`        | Number of spring-connected nodes per trail.                               |
| `friction`  | `number`             | `0.5`       | Global friction applied to velocity.                                      |
| `dampening` | `number`             | `0.25`      | Velocity damping applied between connected nodes.                         |
| `tension`   | `number`             | `0.98`      | Reduces spring intensity across the tail, giving a fluid tapering motion. |

> 💡 This component uses `pointer-events-none` and is fixed fullscreen by default. You can extend or override its styling via the `class` prop.

#credits

- Ported from [Canvas Cursor by Cursify](https://cursify.vercel.app/components/canvas-cursor).

::
