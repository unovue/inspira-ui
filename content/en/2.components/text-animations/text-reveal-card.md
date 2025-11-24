---
title: Text Reveal Card
description: Mousemove effect to reveal text content at the bottom of the card.
category: Text Animation
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TextRevealCardDemo.vue" config="TextRevealCardConfig" componentId="text-reveal-card" :componentFiles='["TextRevealCard.vue", "TextRevealStars.vue"]'}

#api

## API

| Prop Name  | Type     | Description                                                      |
| ---------- | -------- | ---------------------------------------------------------------- |
| class      | `String` | Additional classes to be added to the card.                      |
| starsCount | `Number` | Control the number of stars that are generated                   |
| starsClass | `String` | Additional classes to be added to the stars floating on content. |

| Slot Name  | Description                                             |
| ---------- | ------------------------------------------------------- |
| header     | `String`                                                |
| text       | Display default text when the card is not hovered over. |
| revealText | Text to be revealed when hovered over the card.         |

#credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.
- Ported from [Aceternity UI's Text Reveal Card](https://ui.aceternity.com/components/text-reveal-card).

::
