---
title: Container Text Flip
description: A container that flips through words, animating the width.
category: Text Animation
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="ContainerTextFlipDemo.vue" config="ContainerTextFlipConfig" componentId="container-text-flip" :componentFiles='["ContainerTextFlip.vue"]'}

#api

## API

| Prop Name           | Type       | Default                                        | Description                                          |
| ------------------- | ---------- | ---------------------------------------------- | ---------------------------------------------------- |
| `words`             | `string[]` | `["better", "modern", "beautiful", "awesome"]` | Array of words to cycle through in the animation     |
| `interval`          | `number`   | `3000`                                         | Time in milliseconds between word transitions        |
| `animationDuration` | `number`   | `700`                                          | Duration of the transition animation in milliseconds |
| `class`             | `string`   | ``                                             | Additional CSS classes to apply to the container     |
| `textClass`         | `string`   | ``                                             | Additional CSS classes to apply to the text          |

#credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Ported from [Aceternity UI Container Text Flip](https://ui.aceternity.com/components/container-text-flip).

::
