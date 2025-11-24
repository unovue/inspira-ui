---
title: Lens
description: A lens component to zoom into images, videos, or practically anything.
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="LensDemo.vue" config="LensConfig" componentId="lens" :componentFiles='["Lens.vue", "Rays.vue", "Beams.vue"]'}

#api

## API

| Prop Name    | Type                       | Default              | Description                                                                  |
| ------------ | -------------------------- | -------------------- | ---------------------------------------------------------------------------- |
| `zoomFactor` | `number`                   | `1.5`                | The magnification factor for the lens.                                       |
| `lensSize`   | `number`                   | `170`                | The diameter of the lens in pixels.                                          |
| `position`   | `{ x: number, y: number }` | `{ x: 200, y: 150 }` | The static position of the lens (when isStatic is true).                     |
| `isStatic`   | `boolean`                  | `false`              | If true, the lens stays in a fixed position; if false, it follows the mouse. |
| `hovering`   | `boolean`                  | `"false"`            | External control for the hover state.                                        |

#credits

- Credits to [Aceternity UI](https://ui.aceternity.com/components/lens).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.

::
