---
title: Stars Background
description: A parallax-animated starfield background using layered motion and randomized star positions.
category: Background
tags: [css, tailwind, background, animate-ui, motion-v]
---

::ComponentViewer{demoFile="StarsBackgroundDemo.vue" config="StarsBackgroundConfig" componentId="bg-stars" :componentFiles='["StarsBackground.vue"]'}

#api

## API

| Prop Name    | Type            | Default                          | Description                                                             |
| ------------ | --------------- | -------------------------------- | ----------------------------------------------------------------------- |
| `factor`     | `number`        | `0.05`                           | Multiplier for mouse parallax movement.                                 |
| `speed`      | `number`        | `50`                             | Base speed (in seconds) for vertical looping animation of star layers.  |
| `transition` | `SpringOptions` | `{ stiffness: 50, damping: 20 }` | Spring physics config for smooth motion response to cursor movement.    |
| `starColor`  | `string`        | `"#fff"`                         | Color of the stars. Accepts any valid CSS color value.                  |
| `class`      | `string`        | `—`                              | Optional additional classes for container div. Useful for z-index, etc. |

> 💡 This component wraps a slot for children, so you can place other UI elements over the background.

#credits

- Ported from [Animate UI](https://animate-ui.com/docs/backgrounds/stars)

::
