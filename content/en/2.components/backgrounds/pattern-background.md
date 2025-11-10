---
title: Pattern Background
description: Simple animated pattern background to make your sections stand out.
category: Background
tags: [css, tailwind, background, magic-ui]
---

::ComponentViewer{demoFile="PatternBackgroundDotDemo.vue" config="PatternBackgroundConfig" componentId="pattern-background" :componentFiles='["PatternBackground.vue", "index.ts"]' dependencies="class-variance-authority"}

#api

## API

| Prop Name   | Type                                                                                                   | Default   | Description                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animate`   | `boolean`                                                                                              | `false`   | Set `true` if you want to animate the background.                                                                                                              |
| `direction` | `top` \| `bottom` \| `left` \| `right` \| `top-left` \| `top-right` \| `bottom-left` \| `bottom-right` | `top`     | Direction of the animation movement. You can use the const `PATTERN_BACKGROUND_DIRECTION.`                                                                     |
| `direction` | `grid` \| `dot`                                                                                        | `grid`    | Type of pattern. You can use the const `PATTERN_BACKGROUND_VARIANT.`                                                                                           |
| `size`      | `xs` \| `sm` \| `md` \| `lg`                                                                           | `md`      | Size of the background pattern.                                                                                                                                |
| `mask`      | `ellipse` \| `ellipse-top`                                                                             | `ellipse` | Add a mask over the background pattern. You can use the const `PATTERN_BACKGROUND_MASK.`                                                                       |
| `speed`     | `number`                                                                                               | `10000`   | Duration of the animation in `ms`, the bigger it is, the slower the animation. (`20000` slower than `5000`). You can use the const `PATTERN_BACKGROUND_SPEED.` |

#credits

- Inspired by [Magic UI's Dot Pattern](https://magicui.design/docs/components/dot-pattern) component.
- Inspired by [Magic UI's Grid Pattern](https://magicui.design/docs/components/grid-pattern) component.
- Inspired by [Magic UI's Animated Grid Pattern](https://magicui.design/docs/components/animated-grid-pattern) component.
- Credits to [Nathan De Pachtere](https://nathandepachtere.com/) for porting this component.

::
