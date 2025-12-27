---
title: Blur Reveal
description: A component to smoothly blur fade in content.
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="BlurRevealDemo.vue" config="BlurRevealConfig" componentId="blur-reveal" :componentFiles='["BlurReveal.vue"]'}

#api

## API

| Prop Name  | Type     | Default | Description                                                                  |
| ---------- | -------- | ------- | ---------------------------------------------------------------------------- |
| `duration` | `number` | `1`     | Duration of the blur fade in animation.                                      |
| `delay`    | `number` | `1`     | Delay between child components to reveal                                     |
| `blur`     | `string` | `10px`  | Amount of blur to apply to the child components.                             |
| `yOffset`  | `number` | `20`    | Specifies the vertical offset distance (yOffset) for the entrance animation. |

#credits

- Credits to [Magic UI](https://magicui.design/docs/components/blur-fade) for this fantastic component.

::
