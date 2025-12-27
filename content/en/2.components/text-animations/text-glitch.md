---
title: Text Glitch
description: Creates a vibrant glitch effect on text with customizable speed, shadow colors, and optional hover-triggered animation.
category: Text Animation
tags: [css, tailwind]
---

::ComponentViewer{demoFile="TextGlitchDemo.vue" config="TextGlitchConfig" componentId="text-glitch" :componentFiles='["TextGlitch.vue"]'}

#api

## API

| Prop Name       | Type      | Default     | Description                                                   |
| --------------- | --------- | ----------- | ------------------------------------------------------------- |
| `text`          | `string`  | `""`        | The text content to display with the glitch effect.           |
| `speed`         | `number`  | `0.5`       | Controls the animation speed of the glitch effect in seconds. |
| `enableShadows` | `boolean` | `true`      | Toggles colored shadows that enhance the glitch look.         |
| `enableOnHover` | `boolean` | `false`     | If true, glitch animation activates only on hover.            |
| `class`         | `string`  | `undefined` | Additional CSS classes for the container div.                 |

#credits

- Inspired and developed using resources from following YouTube videos.
  - https://www.youtube.com/watch?v=7Xyg8Ja7dyY
  - https://www.youtube.com/watch?v=9CCkp_El1So

::
