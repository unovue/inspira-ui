---
title: Hyper Text
description: A hyper changing text animation as you hover..
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="HyperTextDemo.vue" config="HyperTextConfig" componentId="hyper-text" :componentFiles='["HyperText.vue"]'}

#api

## API

| Prop Name       | Type      | Default  | Description                                               |
| --------------- | --------- | -------- | --------------------------------------------------------- |
| `class`         | `string`  | `""`     | Additional CSS classes to apply to the component.         |
| `text`          | `string`  | Required | Text to animate                                           |
| `duration`      | `number`  | `0.8`    | The total duration (in seconds) for the entire animation. |
| `animateOnLoad` | `boolean` | `true`   | Play animation on load                                    |

#credits

- Inspired by [Magic UI's Hyper Text](https://magicui.design/docs/components/hyper-text) component.
- Credits to [Prem](https://github.com/premdasvm) for porting this component.

::
