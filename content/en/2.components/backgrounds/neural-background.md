---
title: Neural Background
description: A dynamic, shader-powered animated background with fluid neural-like visuals using OGL and GLSL.
category: Background
tags: [css, tailwind, background, ogl, webgl, cursify]
---

::ComponentViewer{demoFile="NeuralBgDemo.vue" config="NeuralBgConfig" componentId="bg-neural" :componentFiles='["NeuralBg.vue"]'}

#api

## API

| Prop Name    | Type     | Default | Description                                             |
| ------------ | -------- | ------- | ------------------------------------------------------- |
| `hue`        | `number` | `200`   | Base hue for background colors (in degrees, 0–360).     |
| `saturation` | `number` | `0.8`   | Saturation of the background color (0–1).               |
| `chroma`     | `number` | `0.6`   | Chroma/lightness factor of the HSL color (0-1).         |
| `class`      | `string` | `—`     | Optional additional CSS classes for the canvas element. |

> 💡 This component defaults to a full-screen fixed background with `pointer-events-none`. You can override styles via the `class` prop if needed.

#credits

- Built using [OGL](https://github.com/oframe/ogl) — a minimal WebGL framework.
- Math and pattern logic based on recursive trigonometric layering.
- Ported from [Neural Glow Cursor by Cursify](https://cursify.vercel.app/components/neural-glow).

::
