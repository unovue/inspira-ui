---
title: Shader Toy Viewer
description: A powerful and flexible component to render interactive GLSL shaders from ShaderToy in the browser.
category: Miscellaneous
tags: [css, tailwind, shader-toy, ogl, webgl]
---

::ComponentViewer{demoFile="ShaderToyDemo.vue" config="AnimatedCircularProgressBarConfig" componentId="animated-circular-progressbar" :componentFiles='["ShaderToy.vue", "InspiraShaderToy.ts"]' dependencies="ogl"}

#api

## API

| Prop Name    | Type                 | Default   | Description                                               |
| ------------ | -------------------- | --------- | --------------------------------------------------------- |
| `shaderCode` | `string`             | `-`       | GLSL fragment shader source code from ShaderToy.          |
| `mouseMode`  | `'click' \| 'hover'` | `'click'` | Mouse tracking mode: either on click or continuous hover. |
| `hue`        | `number`             | `0`       | Adjust the hue of the shader output.                      |
| `saturation` | `number`             | `1`       | Adjust the saturation of the shader output.               |
| `brightness` | `number`             | `1`       | Adjust the brightness of the shader output.               |
| `speed`      | `number`             | `1`       | Adjust the speed of the shader output.                    |
| `class`      | `string`             | `-`       | Custom classes to apply to the container.                 |

#credits

- Built with [OGL](https://github.com/oframe/ogl).
- Inspired by [Shadertoy](https://shadertoy.com/) and adapted for Vue compatibility.

::
