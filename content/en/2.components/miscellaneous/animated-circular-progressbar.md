---
title: Animated Circular Progress Bar
description: Animated Circular Progress Bar is a component that displays a circular gauge with a percentage value.
category: Miscellaneous
tags: [css, tailwind, input, magic-ui]
---

::ComponentViewer{demoFile="AnimatedCircularProgressBarDemo.vue" config="AnimatedCircularProgressBarConfig" componentId="animated-circular-progressbar" :componentFiles='["AnimatedCircularProgressBar.vue"]'}

#api

## API

| Prop Name             | Type      | Default              | Description                                 |
| --------------------- | --------- | -------------------- | ------------------------------------------- |
| `class`               | `string`  | `-`                  | The class to be applied to the component.   |
| `max`                 | `number`  | `100`                | The maximum value of the gauge.             |
| `min`                 | `number`  | `0`                  | The minimum value of the gauge.             |
| `value`               | `number`  | `0`                  | The current value of the gauge.             |
| `gaugePrimaryColor`   | `string`  | `rgb(79 70 229)`     | The primary color of the gauge.             |
| `gaugeSecondaryColor` | `string`  | `rgba(0, 0, 0, 0.1)` | The secondary color of the gauge.           |
| `circleStrokeWidth`   | `number`  | `10`                 | The width of the circle progress bar.       |
| `showPercentage`      | `boolean` | `true`               | Show the value inside the circle            |
| `duration`            | `number`  | `1`                  | The duration of the animation (in seconds). |

#credits

- Credits to [Magic UI](https://magicui.design/docs/components/animated-circular-progress-bar).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.

::
