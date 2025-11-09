---
title: Snowfall Background
description: A beautifully animated snowfall effect applied as a background.
category: Background
tags: [css, tailwind, background, canvas]
---

::ComponentViewer{demoFile="SnowfallBgDemo.vue" config="SnowfallBgConfig" componentId="snowfall-bg" :componentFiles='["SnowfallBg.vue"]'}

#api

## API

| Prop Name   | Type     | Default | Description                                               |
| ----------- | -------- | ------- | --------------------------------------------------------- |
| `color`     | `string` | `#FFF`  | Color of the snowflakes in hexadecimal format.            |
| `quantity`  | `number` | `100`   | Number of snowflakes to display.                          |
| `speed`     | `number` | `1`     | Speed at which snowflakes fall.                           |
| `maxRadius` | `number` | `3`     | Maximum radius of snowflakes.                             |
| `minRadius` | `number` | `1`     | Minimum radius of snowflakes.                             |
| `class`     | `string` | `null`  | Additional CSS classes to apply to the container element. |

#credits

- Inspired by natural snowfall effects.

::
