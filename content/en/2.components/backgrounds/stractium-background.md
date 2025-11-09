---
title: Stractium Background
description: A shader-based background inspired by intricate fractal patterns and organic textures, created using raymarching and GLSL. This effect is designed to simulate complex, evolving visual textures.
category: Background
tags: [css, tailwind, background, shader-toy, webgl, ogl]
badge: New
---

::ComponentViewer{demoFile="StractiumBackgroundDemo.vue" config="StractiumBackgroundConfig" componentId="bg-stractium" :componentFiles='["StractiumBackground.vue"]'}

#api

## API

| Prop Name          | Type     | Default | Description                                                                 |
| ------------------ | -------- | ------- | --------------------------------------------------------------------------- |
| `hue`              | `number` | `0`     | Base hue for the fractal texture (0–360 degrees).                           |
| `saturation`       | `number` | `1`     | Saturation of the color (0–1).                                              |
| `brightness`       | `number` | `1`     | Brightness multiplier for the output color (0–2 recommended).               |
| `speed`            | `number` | `1`     | Speed multiplier for texture animation.                                     |
| `mouseSensitivity` | `number` | `0.5`   | Controls the responsiveness of the texture to mouse movement. (0–1)         |
| `damping`          | `number` | `1`     | Damping factor to control the smoothness of texture distortions. (0–1)      |
| `class`            | `string` | `—`     | Optional additional CSS classes for the container div (e.g., z-index, etc). |

> 💡 This component is designed to be used in full-screen or large section backgrounds. It is optimized for modern GPUs but may be demanding on lower-end devices.

#credits

- Based on a ShaderToy fragment shader by the original creator of the fractal patterns (MIT License).
- Embedded in a Vue component and adapted for dynamic input via props.
- Inspired by fractal patterns, natural textures, and advanced raymarching techniques.

::
