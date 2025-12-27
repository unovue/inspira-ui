---
title: Ripple
description: An animated ripple effect typically used behind elements to emphasize them.
category: Background
tags: [css, tailwind, background, magic-ui]
---

::ComponentViewer{demoFile="RippleDemo.vue" config="RippleConfig" componentId="ripple" :componentFiles='["Ripple.vue", "RippleCircle.vue", "RippleContainer.vue"]'}

#api

## API

| Prop Name                     | Type     | Default     | Description                                                            |
| ----------------------------- | -------- | ----------- | ---------------------------------------------------------------------- |
| `baseCircleSize`              | `number` | `210`       | The size of the main circle in pixels.                                 |
| `baseCircleOpacity`           | `number` | `0.24`      | The opacity of the main circle.                                        |
| `spaceBetweenCircle`          | `number` | `70`        | The space between each ripple circle in pixels.                        |
| `circleOpacityDowngradeRatio` | `number` | `0.03`      | The rate at which opacity decreases for each successive ripple circle. |
| `circleClass`                 | `string` | `undefined` | CSS class name(s) for additional styling of circles.                   |
| `waveSpeed`                   | `number` | `80`        | The animation speed for the wave effect, measured in ms.               |
| `numberOfCircles`             | `number` | `7`         | The number of ripple circles to render.                                |

#credits

- Credits to [Magic UI](https://magicui.design/docs/components/ripple).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.
- Credits to [Nathan De Pachtere](https://nathandepachtere.com/) for updating this component.

::
