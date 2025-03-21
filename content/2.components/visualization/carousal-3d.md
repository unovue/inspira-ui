---
title: 3D Carousel
description: A dynamic and interactive 3D carousel component using Three.js and Motion-V, allowing smooth infinite rotation and user-controlled interactions.
---

::ComponentLoader{label="Preview" componentName="Carousel3dDemo" type="examples" id="carousel-3d"}
::

## API

| Prop Name        | Type        | Default | Description                                                 |
| ---------------- | ----------- | ------- | ----------------------------------------------------------- |
| `items`          | `unknown[]` | `[]`    | List of images or elements to be displayed in the carousel. |
| `class`          | `string`    | `""`    | Additional CSS classes for styling the carousel overlay.    |
| `containerClass` | `string`    | `""`    | CSS classes for styling the carousel container.             |
| `width`          | `number`    | `450`   | Width of individual carousel items.                         |
| `height`         | `number`    | `600`   | Height of individual carousel items.                        |

## Component Code

You can copy and paste the following code to create this component:

::code-group

    ::CodeViewerTab{label="Carousel3D.vue" language="vue" componentName="Carousel3D" type="ui" id="carousel-3d"}
    ::

::

## Features

- **3D Rotating Carousel**: Displays a rotating 3D carousel using Three.js.
- **Smooth Infinite Rotation**: The carousel continuously rotates smoothly.
- **User Interaction Support**: Supports mouse and touch interactions to manually rotate the carousel.
- **Fully Responsive**: Adapts to different screen sizes dynamically.
- **Performance Optimized**: Utilizes Motion-V for smooth animations and easing functions.
- **Dynamic Item Rendering**: Accepts an array of items to render in the carousel dynamically.
- **Dark Mode Support**: Adaptable to dark and light themes for better UI consistency.

## Credits

- Built using Three.js for 3D rendering.
- Utilizes Motion-V for seamless animations.
- Thanks [@safakdinc](https://github.com/safakdinc) for sharing this component.
