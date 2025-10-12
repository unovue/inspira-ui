---
title: Stractium Background
description: A shader-based background inspired by intricate fractal patterns and organic textures, created using raymarching and GLSL. This effect is designed to simulate complex, evolving visual textures.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="StractiumBackgroundDemo" type="examples" id="bg-stractium"}
::

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

## Install using CLI

::InstallationCli{componentId="bg-stractium"}
::

## Install Manually

::CodeViewer{filename="StractiumBackground.vue" language="vue" componentName="StractiumBackground" type="ui" id="bg-stractium"}
::

## Features

- **Fractal and organic visual effect**: Based on raymarching, creating intricate and evolving fractal textures that simulate natural phenomena.
- **Dynamic mouse interaction**: Subtle distortions and shifts in texture based on mouse movement, creating a more immersive experience.
- **Color control**: Full control over hue, saturation, brightness, and animation speed to match your design’s aesthetic.
- **Performance optimized**: Although complex, this shader is optimized for real-time performance in modern browsers and GPUs.
- **Scalable**: Can be used as a full-screen background or in smaller sections with adjustable scale and motion properties.
- **Shader-powered animation**: Real-time evolving fractal effects with smooth transitions and animations.

## Notes

- Based on a ShaderToy fragment shader by the original creator of the fractal patterns (MIT License).
- The shader uses raymarching techniques to create highly detailed, organic textures with subtle lighting effects and ambient occlusion.
- Not recommended for low-end devices as the shader’s complexity may affect performance.
- For best results, use in full-screen hero sections or large design areas.

## Credits

- Embedded in a Vue component and adapted for dynamic input via props.
- Inspired by fractal patterns, natural textures, and advanced raymarching techniques.
