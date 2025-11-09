---
title: Vortex Background
description: A wavy, swirly, vortex background ideal for CTAs and backgrounds.
category: Background
tags: [css, tailwind, background, aceternity-ui, motion-v, simplex-noise]
---

::ComponentViewer{demoFile="VortexDemo.vue" config="VortexConfig" componentId="vortex" :componentFiles='["Vortex.vue"]' dependencies="simplex-noise"}

#api

## API

| Prop Name         | Type     | Default     | Description                                          |
| ----------------- | -------- | ----------- | ---------------------------------------------------- |
| `class`           | `string` |             | Optional className for styling the children wrapper. |
| `containerClass`  | `string` |             | Optional className for styling the container.        |
| `particleCount`   | `number` | `700`       | Number of particles to be generated.                 |
| `rangeY`          | `number` | `100`       | Vertical range for particle movement.                |
| `baseHue`         | `number` | `220`       | Base hue for particle color.                         |
| `baseSpeed`       | `number` | `0.0`       | Base speed for particle movement.                    |
| `rangeSpeed`      | `number` | `1.5`       | Range of speed variation for particles.              |
| `baseRadius`      | `number` | `1`         | Base radius of particles.                            |
| `rangeRadius`     | `number` | `2`         | Range of radius variation for particles.             |
| `backgroundColor` | `string` | `"#000000"` | Background color of the canvas.                      |

#credits

- Credits to [Aceternity UI](https://ui.aceternity.com/components/vortex).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.

::
