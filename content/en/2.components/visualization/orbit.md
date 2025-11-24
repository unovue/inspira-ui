---
title: Orbit
description: A component that animates content in a circular orbit, with customizable duration, delay, and radius. It also offers an optional orbit path display.
category: Visualization
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="OrbitDemo.vue" config="OrbitConfig" componentId="orbit" :componentFiles='["Orbit.vue", "index.ts"]'}

#api

## API

| Prop Name   | Type                  | Default  | Description                                                           |
| ----------- | --------------------- | -------- | --------------------------------------------------------------------- |
| `direction` | `normal` \| `reverse` | `normal` | The direction of the orbit. You can use the constant ORBIT_DIRECTION. |
| `duration`  | `?number`             | `20`     | The duration of the orbit animation in seconds.                       |
| `delay`     | `?number`             | `10`     | Delay in seconds before the animation starts.                         |
| `radius`    | `?number`             | `50`     | Radius of the orbit path in pixels.                                   |
| `path`      | `?boolean`            | `false`  | Displays a circle path for the orbit if `true`.                       |

#credits

- Inspired by [Magic UI](https://magicui.design/docs/components/orbiting-circles).
- Credits to [Nathan De Pachtere](https://nathandepachtere.com/) for updating this component.

::
