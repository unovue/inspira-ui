---
title: Cube Carousel
description: A draggable four-face 3D carousel for cycling through images and videos.
category: Card
tags: [css, tailwind, motion-v, carousel, 3d]
badge: New
---

::ComponentViewer{demoFile="CubeCarouselDemo.vue" config="CubeCarouselConfig" componentId="cube-carousel" :componentFiles='["CubeCarousel.vue", "index.ts"]'}

#api

## API

### `CubeCarousel`

| Prop Name          | Type                                     | Default                                           | Description                                                   |
| ------------------ | ---------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------- |
| `items`            | `CubeCarouselItem[]`                     | —                                                 | Four or more image or video items to place on the cube faces. |
| `width`            | `number`                                 | —                                                 | Width of each face in pixels.                                 |
| `height`           | `number`                                 | —                                                 | Height of each face in pixels.                                |
| `class`            | `string`                                 | —                                                 | Additional classes for the carousel root.                     |
| `debug`            | `boolean`                                | `false`                                           | Shows face colors and item IDs for inspecting the cube.       |
| `perspective`      | `number`                                 | `600`                                             | CSS perspective distance in pixels.                           |
| `direction`        | `"top" \| "bottom" \| "left" \| "right"` | `"left"`                                          | Rotation axis and direction.                                  |
| `transition`       | `Record<string, unknown>`                | `{ duration: 1.25, ease: [...] }`                 | Motion transition used for button and keyboard rotations.     |
| `snapTransition`   | `Record<string, unknown>`                | `{ type: "spring", damping: 30, stiffness: 200 }` | Transition used when drag snaps to a face.                    |
| `dragSpring`       | `CubeCarouselSpringConfig`               | `{ stiffness: 200, damping: 30 }`                 | Spring used while following pointer drag.                     |
| `autoPlay`         | `boolean`                                | `false`                                           | Automatically advances through the items.                     |
| `autoPlayInterval` | `number`                                 | `3000`                                            | Delay between autoplay rotations in milliseconds.             |
| `onIndexChange`    | `(index: number) => void`                | —                                                 | Called after a rotation finishes.                             |
| `enableDrag`       | `boolean`                                | `true`                                            | Enables pointer and touch drag interaction.                   |
| `dragSensitivity`  | `number`                                 | `0.5`                                             | Rotation amount produced by pointer movement.                 |

### `CubeCarouselItem`

| Property | Type                 | Required | Description                       |
| -------- | -------------------- | -------- | --------------------------------- |
| `id`     | `string`             | Yes      | Stable identifier for the item.   |
| `type`   | `"image" \| "video"` | Yes      | Selects the media renderer.       |
| `src`    | `string`             | Yes      | Image or video source URL.        |
| `alt`    | `string`             | No       | Alternative text for image items. |
| `poster` | `string`             | No       | Poster image URL for video items. |

## Interaction

Drag along the carousel axis to rotate it. Release to snap to the nearest quarter-turn. When the carousel is focused, use the arrow keys matching its axis. The exposed `next`, `prev`, and `getCurrentItemIndex` methods can also control it from a parent component.

```vue
<script setup lang="ts">
import { ref } from "vue";
import CubeCarousel, {
  type CubeCarouselRef,
} from "@/components/inspira/ui/cube-carousel/CubeCarousel.vue";

const carousel = ref<CubeCarouselRef | null>(null);
</script>

<template>
  <CubeCarousel
    ref="carousel"
    :items="items"
    :width="400"
    :height="300"
    direction="right"
  />
  <button @click="carousel?.prev()">Previous</button>
  <button @click="carousel?.next()">Next</button>
</template>
```

#credits

- Ported from [Fancy Components Box Carousel](https://fancycomponents.dev/docs/components/carousel/box-carousel).
- Demo artwork by [Daniel Petho](https://www.cosmos.so/danielpetho/box-carousel-demo).
- Inspired by [Framer University](https://framer.university/resources/3d-box-carousel-in-framer).

::
