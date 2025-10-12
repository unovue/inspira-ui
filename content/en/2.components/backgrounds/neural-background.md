---
title: Neural Background
description: A dynamic, shader-powered animated background with fluid neural-like visuals using OGL and GLSL.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="NeuralBgDemo" type="examples" id="bg-neural"}
::

## API

| Prop Name    | Type     | Default | Description                                             |
| ------------ | -------- | ------- | ------------------------------------------------------- |
| `hue`        | `number` | `200`   | Base hue for background colors (in degrees, 0–360).     |
| `saturation` | `number` | `0.8`   | Saturation of the background color (0–1).               |
| `chroma`     | `number` | `0.6`   | Chroma/lightness factor of the HSL color (0-1).         |
| `class`      | `string` | `—`     | Optional additional CSS classes for the canvas element. |

> 💡 This component defaults to a full-screen fixed background with `pointer-events-none`. You can override styles via the `class` prop if needed.

## Install using CLI

::InstallationCli{componentId="bg-neural"}
::

## Install Manually

::CodeViewer{filename="NeuralBg.vue" language="vue" componentName="NeuralBg" type="ui" id="bg-neural"}
::

## Features

- **GPU-accelerated animation**: Powered by [OGL](https://github.com/oframe/ogl), offering high-performance WebGL rendering.
- **Neural-inspired visuals**: A recursive shader-based pattern that mimics brain-like structures and motion.
- **Live pointer interaction**: Visuals react to cursor and touch movement in real time.
- **Scroll-driven dynamics**: Color shift and brightness are subtly influenced by page scroll progress.
- **Customizable color palette**: Modify hue, saturation, and chroma in real time with prop bindings.
- **Responsive**: Auto-resizes to match viewport size and device pixel ratio.

## Notes

- Uses a custom fragment shader with recursive sine accumulation to generate a complex organic background.
- Performance is optimized for modern browsers and GPUs; graceful degradation is not implemented for older environments.
- Intended for decorative purposes (e.g., hero sections, full-screen backgrounds).

## Credits

- Built using [OGL](https://github.com/oframe/ogl) — a minimal WebGL framework.
- Math and pattern logic based on recursive trigonometric layering.
- Ported from [Neural Glow Cursor by Cursify](https://cursify.vercel.app/components/neural-glow).
