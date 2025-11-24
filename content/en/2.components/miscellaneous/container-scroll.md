---
title: Container Scroll
description: A container scrolling effect that transforms the content inside based on scroll progress. Features smooth transitions with scaling and rotating effects on scroll.
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="ContainerScrollDemo.vue" config="ContainerScrollConfig" componentId="container-scroll" :componentFiles='["ContainerScroll.vue", "ContainerScrollTitle.vue", "ContainerScrollCard.vue"]'}

#api

## API

### `ContainerScroll`

The `ContainerScroll` component creates a 3D scroll effect. As the user scrolls, the content inside the container is transformed with scale, rotation, and translation effects.

| Prop Name    | Type   | Default | Description                                                                   |
| ------------ | ------ | ------- | ----------------------------------------------------------------------------- |
| `rotate`     | Number | `0`     | Controls the rotation of the inner content based on the scroll progress.      |
| `scale`      | Number | `1`     | Controls the scaling transformation applied to the content during the scroll. |
| `translateY` | Number | `0`     | Controls the vertical translation of the title during the scroll.             |

### `ContainerScrollTitle`

The `ContainerScrollTitle` component handles the title's transformation as the user scrolls, applying a vertical translation effect.

| Prop Name   | Type   | Default | Description                                     |
| ----------- | ------ | ------- | ----------------------------------------------- |
| `translate` | Number | `0`     | Controls the vertical translation of the title. |

### `ContainerScrollCard`

The `ContainerScrollCard` component applies scale and rotation effects to the card content as the user scrolls through the page.

| Prop Name | Type   | Default | Description                                      |
| --------- | ------ | ------- | ------------------------------------------------ |
| `rotate`  | Number | `0`     | Controls the rotation effect of the card.        |
| `scale`   | Number | `1`     | Controls the scaling effect applied to the card. |

## CSS Variables

To customize the scroll animations and responsiveness, you can set the following CSS variables:

- **`--scale-start`**: Initial scale value for the card.
- **`--scale-end`**: Final scale value for the card as the scroll progresses.
- **`--rotate-start`**: Initial rotation value for the card.
- **`--rotate-end`**: Final rotation value for the card as the scroll progresses.

#credits

- Inspired by [Aceternity UI Container Scroll Animation](https://ui.aceternity.com/components/container-scroll-animation).

::
