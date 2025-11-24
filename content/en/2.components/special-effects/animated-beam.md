---
title: Animated Beam
description: An SVG beam connecting elements with animation.
category: Special Effects
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="AnimatedBeamDemo.vue" config="AnimatedBeamConfig" componentId="animated-beam" :componentFiles='["AnimatedBeam.vue"]'}

#api

## API

| Prop Name            | Type          | Default                | Description                                                                  |
| -------------------- | ------------- | ---------------------- | ---------------------------------------------------------------------------- |
| `class`              | `string`      | `""`                   | Additional CSS classes to apply to the component for customization.          |
| `containerRef`       | `HTMLElement` | N/A                    | Reference to the container element where the beam is rendered.               |
| `fromRef`            | `HTMLElement` | N/A                    | Reference to the starting element from which the beam originates.            |
| `toRef`              | `HTMLElement` | N/A                    | Reference to the ending element where the beam points to.                    |
| `curvature`          | `number`      | `0`                    | Controls the curvature of the beam; higher values create a more curved path. |
| `reverse`            | `boolean`     | `false`                | Reverses the animation direction of the beam if set to `true`.               |
| `pathColor`          | `string`      | `"gray"`               | Color of the beam's path.                                                    |
| `pathWidth`          | `number`      | `2`                    | Stroke width of the beam's path.                                             |
| `pathOpacity`        | `number`      | `0.2`                  | Opacity of the beam's path.                                                  |
| `gradientStartColor` | `string`      | `"#FFAA40"`            | Starting color of the beam's gradient animation.                             |
| `gradientStopColor`  | `string`      | `"#9C40FF"`            | Ending color of the beam's gradient animation.                               |
| `delay`              | `number`      | `0`                    | Delay before the beam's animation starts, in seconds.                        |
| `duration`           | `number`      | `Random between 4–7 s` | Duration of the beam's animation cycle, in seconds.                          |
| `startXOffset`       | `number`      | `0`                    | Horizontal offset for the beam's starting point.                             |
| `startYOffset`       | `number`      | `0`                    | Vertical offset for the beam's starting point.                               |
| `endXOffset`         | `number`      | `0`                    | Horizontal offset for the beam's ending point.                               |
| `endYOffset`         | `number`      | `0`                    | Vertical offset for the beam's ending point.                                 |

#credits

- Inspired and ported from [Magic UI Animated Beam](https://magicui.design/docs/components/animated-beam).

::
