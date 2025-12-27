---
title: Text Reveal
description: Animate text line-by-line using GSAP's SplitText for smooth word or line entrance effects.
category: Text Animation
tags: [css, tailwind, gsap]
---

::ComponentViewer{demoFile="TextRevealDemo.vue" config="TextRevealConfig" componentId="text-reveal" :componentFiles='["TextReveal.vue"]' dependencies="gsap"}

#api

## API

| Prop Name        | Type     | Default | Description                                      |
| ---------------- | -------- | ------- | ------------------------------------------------ |
| `class`          | `string` | `-`     | Additional classes for the inner text container. |
| `containerClass` | `string` | `-`     | Additional classes for the outer container.      |
| `duration`       | `number` | `0.6`   | Animation duration for line reveal.              |
| `delay`          | `number` | `0.2`   | Initial delay before animation starts.           |
| `stagger`        | `number` | `0.1`   | Animation delay between each line reveal.        |

#credits

- Powered by [GSAP](https://gsap.com/) and [GSAP SplitText](https://gsap.com/docs/v3/Plugins/SplitText/).

::
