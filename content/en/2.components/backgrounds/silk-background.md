---
title: Silk Background
description: A soft, flowing shader-powered background inspired by silk fabric motion and texture, rendered using ShaderToy.
category: Background
tags: [css, tailwind, background, shader-toy, ogl, webgl]
---

::ComponentViewer{demoFile="SilkBackgroundDemo.vue" config="SilkBackgroundConfig" componentId="bg-silk" :componentFiles='["SilkBackground.vue"]'}

#api

## API

| Prop Name    | Type     | Default | Description                                                                 |
| ------------ | -------- | ------- | --------------------------------------------------------------------------- |
| `hue`        | `number` | `300`   | Base hue for the silk texture (in degrees, 0–360).                          |
| `saturation` | `number` | `0.5`   | Saturation of the color (0–1).                                              |
| `brightness` | `number` | `1`     | Brightness multiplier for the output color (0–2 recommended).               |
| `speed`      | `number` | `1`     | Controls the animation speed multiplier (e.g., `2` = double speed).         |
| `class`      | `string` | `—`     | Optional additional CSS classes for the container div (e.g., z-index, etc). |

> 💡 This component uses a full-screen absolute container by default. You can override positioning or stacking via the `class` prop.

#credits

- Adapted from [this ShaderToy shader](https://www.shadertoy.com/view/X3yXRd) by Giorgi Azmaipharashvili (MIT License).
- Inspired by silk textures and fluid motion patterns found in organic materials.

::
