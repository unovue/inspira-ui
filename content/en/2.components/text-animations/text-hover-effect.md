---
title: Text Hover Effect
description: A text hover effect that animates and outlines gradient on hover, as seen on x.ai
category: Text Animation
tags: [css, tailwind]
---

::ComponentViewer{demoFile="TextHoverEffectDemo.vue" config="TextHoverEffectConfig" componentId="text-hover-effect" :componentFiles='["TextHoverEffect.vue"]'}

#api

## API

| Prop Name     | Type     | Default  | Description                                               |
| ------------- | -------- | -------- | --------------------------------------------------------- |
| `text`        | `string` | Required | The text to be displayed with the hover effect.           |
| `duration`    | `number` | `200`    | The duration of the mask transition animation in seconds. |
| `strokeWidth` | `number` | `0.75`   | The width of the text stroke.                             |
| `opacity`     | `number` | `null`   | The opacity of the text.                                  |

::
