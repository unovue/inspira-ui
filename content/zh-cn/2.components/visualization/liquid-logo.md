---
title: Liquid Logo
description: An advanced WebGL-based component that applies a dynamic, liquid effect to logos or images using custom shaders.
---

::ComponentLoader{label="预览" componentName="LiquidLogoDemo" type="examples" id="liquid-logo"}
::

## API

| Prop 名称      | 类型     | 默认值  | 描述                                         |
| -------------- | -------- | ------- | -------------------------------------------- |
| `class`        | `string` | `""`    | Additional CSS classes for custom styling.   |
| `imageUrl`     | `string` | `""`    | URL of the image to apply the liquid effect. |
| `patternScale` | `number` | `2`     | Scale of the distortion pattern.             |
| `refraction`   | `number` | `0.015` | Amount of refraction applied to the image.   |
| `edge`         | `number` | `0.4`   | Sharpness of the edge effect.                |
| `patternBlur`  | `number` | `0.005` | Blur effect applied to the pattern.          |
| `liquid`       | `number` | `0.07`  | Intensity of the liquid animation.           |
| `speed`        | `number` | `0.3`   | Animation speed of the liquid effect.        |

## Component Code

You can 复制并粘贴以下代码： to create this component:

::code-group

    ::CodeViewerTab{label="LiquidLogo.vue" language="vue" componentName="LiquidLogo" type="ui" id="liquid-logo"}
    ::

    ::CodeViewerTab{label="parseLogoImage.ts" language="typescript" componentName="parseLogoImage" type="ui" id="liquid-logo" extension="ts"}
    ::

    ::CodeViewerTab{label="shader.ts" language="typescript" componentName="shader" type="ui" id="liquid-logo" extension="ts"}
    ::

::

## 功能特性

- **Dynamic Liquid Effect**: Transforms logos or images with a fluid, liquid-like motion.
- **Custom Shader Utilization**: Built with WebGL2 and GLSL shaders for real-time rendering.
- **Interactive Animations**: Smooth and configurable animation effects.
- **Responsive Scaling**: Automatically adjusts to different screen sizes and resolutions.
- **Configurable Parameters**: Offers a wide range of props to control effects like refraction, speed, and edge sharpness.

## 感谢

- Inspired by the Apple Fluid Motion design.
- Ported and enhaced from [Paper Design Concept](https://github.com/paper-design/liquid-logo).
