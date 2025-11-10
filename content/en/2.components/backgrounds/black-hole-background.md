---
title: Black Hole Background
description: A mesmerizing, canvas-driven background effect that simulates a warped “black-hole” tunnel with animated discs, radial lines, and particles.
category: Background
tags: [css, tailwind, background, motion-v, canvas]
---

::ComponentViewer{demoFile="BlackHoleBackgroundDemo.vue" config="BlackHoleBackgroundConfig" componentId="bg-black-hole" :componentFiles='["BlackHoleBackground.vue"]'}

#api

## API

| Prop Name          | Type                       | Default         | Description                                                   |
| ------------------ | -------------------------- | --------------- | ------------------------------------------------------------- |
| `strokeColor`      | `string`                   | `"#737373"`     | Stroke colour for the concentric discs and radial lines.      |
| `numberOfLines`    | `number`                   | `50`            | Total radial lines emanating from the centre.                 |
| `numberOfDiscs`    | `number`                   | `50`            | Total concentric ellipses that form the tunnel.               |
| `particleRGBColor` | `[number, number, number]` | `[255,255,255]` | RGB colour used for the tiny particles flowing into the hole. |
| `class`            | `string`                   | `""`            | Extra utility classes merged onto the root wrapper.           |

#credits

- Custom generative art logic inspired by tunnel / warp animations.
- Utilises **Motion-V** for gradient drift and Vue 3 Composition API for lifecycle control.
- Developed with accessibility in mind—background effect remains purely decorative via `aria-hidden` canvas.

::
