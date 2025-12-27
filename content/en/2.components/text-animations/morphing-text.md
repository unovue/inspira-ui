---
title: Morphing Text
description: This MorphingText component dynamically transitions between an array of text strings, creating a smooth, engaging visual effect.
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="MorphingTextDemo.vue" config="MorphingTextConfig" componentId="morphing-text" :componentFiles='["MorphingText.vue"]'}

#api

## API

| Prop Name      | Type       | Default | Description                           |
| -------------- | ---------- | ------- | ------------------------------------- |
| `texts`        | `string[]` | `[]`    | Array of texts to morph between.      |
| `class`        | `string`   | `""`    | Additional classes for the container. |
| `morphTime`    | `number`   | `1.5`   | Animation execution time.             |
| `coolDownTime` | `number`   | `0.5`   | Animation dwell time.                 |

#credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired and ported from [Magic UI Morphing Text](https://magicui.design/docs/components/morphing-text).

::
