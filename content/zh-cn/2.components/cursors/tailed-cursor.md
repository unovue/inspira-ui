---
title: Tailed Cursor
description: A smooth, colorful ribbon cursor trail rendered with WebGL using OGL, featuring dynamic shaders and customizable animation effects.
---

::ComponentLoader{label="Preview" componentName="TailedCursorDemo" type="examples" id="tailed-cursor"}
::

## API

| Prop Name            | Type       | Default                                        | Description                                                  |
| -------------------- | ---------- | ---------------------------------------------- | ------------------------------------------------------------ |
| `colors`             | `string[]` | `["#ff9346", "#7cff67", "#ffee51", "#00d8ff"]` | Array of colors for each tail ribbon.                        |
| `baseSpring`         | `number`   | `0.03`                                         | Spring strength for tail movement responsiveness.            |
| `baseFriction`       | `number`   | `0.9`                                          | Friction factor slowing down the tail movement.              |
| `baseThickness`      | `number`   | `30`                                           | Base thickness of the tail ribbons.                          |
| `offsetFactor`       | `number`   | `0.05`                                         | Horizontal offset factor between each ribbon line.           |
| `maxAge`             | `number`   | `500`                                          | Maximum age for tail segments controlling their fade timing. |
| `pointCount`         | `number`   | `50`                                           | Number of points composing each ribbon tail.                 |
| `speedMultiplier`    | `number`   | `0.6`                                          | Speed multiplier controlling the animation speed.            |
| `enableFade`         | `boolean`  | `false`                                        | Enables fading effect on tail edges.                         |
| `enableShaderEffect` | `boolean`  | `false`                                        | Enables dynamic shader wave effect on ribbons.               |
| `effectAmplitude`    | `number`   | `2`                                            | Amplitude of the shader wave effect when enabled.            |
| `backgroundColor`    | `number[]` | `[0, 0, 0, 0]`                                 | RGBA background clear color for the WebGL canvas.            |

## Installation

This component requires the **OGL** library for WebGL rendering.

::pm-install{name="ogl"}
::

## Install using CLI

::InstallationCli{componentId="tailed-cursor"}
::

## Install Manually

Copy and paste the following code:

::CodeViewer{filename="TailedCursor.vue" language="vue" componentName="TailedCursor" type="ui" id="tailed-cursor"}
::

## Features

- **WebGL-powered tails**: High-performance smooth trailing ribbons following the cursor.
- **Multi-color ribbons**: Multiple colored tails with customizable colors and offsets.
- **Dynamic shaders**: Optional shader-based waving effects and fade transitions.
- **Responsive and adaptive**: Automatically resizes with container and supports touch input.
- **Customizable physics**: Adjustable spring, friction, thickness, and speed for fine-tuned motion.
- **Lightweight integration**: Minimal external dependencies, easy to integrate in Vue 3 apps.

## Credits

- Built with [OGL](https://github.com/oframe/ogl), a lightweight WebGL framework.
- Inspired from [Codrops Article](https://tympanus.net/codrops/2019/09/24/crafting-stylised-mouse-trails-with-ogl/)
