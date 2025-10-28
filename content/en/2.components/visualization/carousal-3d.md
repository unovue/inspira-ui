---
title: 3D Carousel
description: A dynamic and interactive 3D carousel component using Three.js and Motion-V, allowing smooth infinite rotation and user-controlled interactions.
category: Visualization
tags: [css, tailwind, threejs, motion-v]
---

::ComponentViewer{demoFile="Carousel3dDemo.vue" config="Carousel3dConfig" componentId="carousel-3d" :componentFiles='["Carousel3D.vue"]'}

#api

## API

| Prop Name        | Type        | Default | Description                                                 |
| ---------------- | ----------- | ------- | ----------------------------------------------------------- |
| `items`          | `unknown[]` | `[]`    | List of images or elements to be displayed in the carousel. |
| `class`          | `string`    | `""`    | Additional CSS classes for styling the carousel overlay.    |
| `containerClass` | `string`    | `""`    | CSS classes for styling the carousel container.             |
| `width`          | `number`    | `450`   | Width of individual carousel items.                         |
| `height`         | `number`    | `600`   | Height of individual carousel items.                        |

#credits

- Built using Three.js for 3D rendering.
- Utilizes Motion-V for seamless animations.
- Thanks [@safakdinc](https://github.com/safakdinc) for sharing this component.

::
