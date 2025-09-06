---
title: Silk Background
description: A soft, flowing shader-powered background inspired by silk fabric motion and texture, rendered using ShaderToy.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="SilkBackgroundDemo" type="examples" id="bg-silk"}
::

## API

| Prop Name    | Type     | Default | Description                                                                 |
| ------------ | -------- | ------- | --------------------------------------------------------------------------- |
| `hue`        | `number` | `300`   | Base hue for the silk texture (in degrees, 0–360).                          |
| `saturation` | `number` | `0.5`   | Saturation of the color (0–1).                                              |
| `brightness` | `number` | `1`     | Brightness multiplier for the output color (0–2 recommended).               |
| `speed`      | `number` | `1`     | Controls the animation speed multiplier (e.g., `2` = double speed).         |
| `class`      | `string` | `—`     | Optional additional CSS classes for the container div (e.g., z-index, etc). |

> 💡 This component uses a full-screen absolute container by default. You can override positioning or stacking via the `class` prop.

## Install using CLI

::InstallationCli{componentId="bg-silk"}
::

## Install Manually

::CodeViewer{filename="SilkBackground.vue" language="vue" componentName="SilkBackground" type="ui" id="bg-silk"}
::

## Features

- **Shader-powered silk effect**: Based on a fragment shader that simulates soft silk motion using recursive trigonometry and noise.
- **Real-time animation**: Runs on GPU with smooth transitions and natural waves.
- **Interactive response**: Subtle mouse-based parallax and warping effects when the cursor is active.
- **Custom color control**: Adjust hue, saturation, brightness, and animation speed using props.
- **Lightweight and performant**: Optimized GLSL logic for modern GPUs and browsers.
- **Modular**: Embeds the GLSL shader inside a `ShaderToy` wrapper component for easy reuse.

## Notes

- Adapted from [this ShaderToy shader](https://www.shadertoy.com/view/X3yXRd) by Giorgi Azmaipharashvili (MIT License).
- Designed primarily for decorative use, such as full-screen hero backgrounds or section dividers.
- Shader uses a combination of sine wave functions, noise layers, and distance-based distortion.
- Not recommended for low-end devices due to GPU intensity.

## Credits

- Embedded in a Vue component and adapted for dynamic input via props.
- Inspired by silk textures and fluid motion patterns found in organic materials.
