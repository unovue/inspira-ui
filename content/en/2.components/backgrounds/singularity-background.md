---
title: Singularity Background
description: A shader-based background.
category: Background
tags: [css, tailwind, background, shader-toy, webgl, ogl]
badge: New
---

::ComponentViewer{demoFile="SingularityBackgroundDemo.vue" config="SingularityBackgroundConfig" componentId="bg-singularity" :componentFiles='["SingularityBackground.vue"]'}

#api

## API

| Prop Name          | Type     | Default | Description                                                                 |
| ------------------ | -------- | ------- | --------------------------------------------------------------------------- |
| `hue`              | `number` | `0`     | Base hue for the fractal texture (0–360 degrees).                           |
| `saturation`       | `number` | `1`     | Saturation of the color (0–1).                                              |
| `brightness`       | `number` | `1`     | Brightness multiplier for the output color (0–2 recommended).               |
| `speed`            | `number` | `1`     | Speed multiplier for animation.                                             |
| `mouseSensitivity` | `number` | `0.5`   | Controls the responsiveness to mouse movement. (0–5)                        |
| `damping`          | `number` | `1`     | Damping factor to control the smoothness of texture distortions. (0–1)      |
| `class`            | `string` | `—`     | Optional additional CSS classes for the container div (e.g., z-index, etc). |

> 💡 This component is designed to be used in full-screen or large section backgrounds. It is optimized for modern GPUs but may be demanding on lower-end devices.

#credits

- Adapted from [this ShaderToy shader](https://www.shadertoy.com/view/3csSWB).

::
