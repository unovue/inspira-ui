---
title: Sparkles
description: A configurable sparkles component that can be used as a background or as a standalone component.
category: Background
tags: [css, tailwind, background, canvas]
---

::ComponentViewer{demoFile="SparklesDemo.vue" config="SparklesConfig" componentId="sparkles" :componentFiles='["Sparkles.vue"]'}

#api

## API

| Prop Name         | Type     | Default     | Description                                                                            |
| ----------------- | -------- | ----------- | -------------------------------------------------------------------------------------- |
| `background`      | `string` | `'#0d47a1'` | Background color of the container. Use 'transparent' to see through to parent element. |
| `particleColor`   | `string` | `'#ffffff'` | Color of the particles. Accepts any valid CSS color value.                             |
| `minSize`         | `number` | `1`         | Minimum size of particles in pixels.                                                   |
| `maxSize`         | `number` | `3`         | Maximum size of particles in pixels.                                                   |
| `speed`           | `number` | `4`         | Movement speed multiplier. Higher values create faster movement.                       |
| `particleDensity` | `number` | `120`       | Number of particles to render. Higher values create denser particle fields.            |

#credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.
- Ported from [Aceternity UI's Sparkles](https://ui.aceternity.com/components/sparkles).

::
