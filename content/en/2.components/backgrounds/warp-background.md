---
title: Warp Background
description: A container component that applies a warp animation effect to its children
category: Background
tags: [css, tailwind, background, magic-ui]
---

::ComponentViewer{demoFile="WarpBackgroundDemo.vue" config="WarpBackgroundConfig" componentId="warp-background" :componentFiles='["WarpBackground.vue", "Beam.vue"]'}

#api

## API

| Prop Name      | Type     | Default                | Description                               |
| -------------- | -------- | ---------------------- | ----------------------------------------- |
| `perspective`  | `number` | `100`                  | The perspective of the warp animation     |
| `beamsPerSide` | `number` | `3`                    | The number of beams per side              |
| `beamSize`     | `number` | `5`                    | The size of the beams                     |
| `beamDelayMax` | `number` | `3`                    | The maximum delay of the beams in seconds |
| `beamDelayMin` | `number` | `0`                    | The minimum delay of the beams in seconds |
| `beamDuration` | `number` | `3`                    | The duration of the beams                 |
| `gridColor`    | `string` | `"hsl(var(--border))"` | The color of the grid lines               |

#credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired and ported from [Magic UI WarpBackground](https://magicui.design/docs/components/warp-background).

::
