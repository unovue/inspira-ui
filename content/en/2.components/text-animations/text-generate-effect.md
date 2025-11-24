---
title: Text Generate Effect
description: A cool text effect that fades in text on page load, one by one.
category: Text Animation
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TextGenerateDemo.vue" config="TextGenerateEffectConfig" componentId="text-generate-effect" :componentFiles='["TextGenerateEffect.vue"]'}

#api

## API

| Prop Name  | Type      | Default  | Description                                                            |
| ---------- | --------- | -------- | ---------------------------------------------------------------------- |
| `words`    | `string`  | Required | The text to be displayed with the generating effect.                   |
| `duration` | `number`  | `0.7`    | The duration of the text generation animation in seconds.              |
| `delay`    | `number`  | `0`      | The delay before the text generation animation starts in milliseconds. |
| `filter`   | `boolean` | `true`   | The blur of the text.                                                  |

#credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.
- Ported from [Aceternity UI's Text Generate Effect](https://ui.aceternity.com/components/text-generate-effect).

::
