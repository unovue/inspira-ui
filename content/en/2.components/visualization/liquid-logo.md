---
title: Liquid Logo
description: An advanced WebGL-based component that applies a dynamic, liquid effect to logos or images using custom shaders.
category: Visualization
tags: [css, tailwind, webgl, paper]
---

::ComponentViewer{demoFile="LiquidLogoDemo.vue" config="LiquidLogoConfig" componentId="liquid-logo" :componentFiles='["LiquidLogo.vue", "parseLogoImage.ts", "shader.ts"]' }

#api

## API

| Prop Name      | Type     | Default | Description                                  |
| -------------- | -------- | ------- | -------------------------------------------- |
| `class`        | `string` | `""`    | Additional CSS classes for custom styling.   |
| `imageUrl`     | `string` | `""`    | URL of the image to apply the liquid effect. |
| `patternScale` | `number` | `2`     | Scale of the distortion pattern.             |
| `refraction`   | `number` | `0.015` | Amount of refraction applied to the image.   |
| `edge`         | `number` | `0.4`   | Sharpness of the edge effect.                |
| `patternBlur`  | `number` | `0.005` | Blur effect applied to the pattern.          |
| `liquid`       | `number` | `0.07`  | Intensity of the liquid animation.           |
| `speed`        | `number` | `0.3`   | Animation speed of the liquid effect.        |

#credits

- Inspired by the Apple Fluid Motion design.
- Ported and enhaced from [Paper Design Concept](https://github.com/paper-design/liquid-logo).

::
