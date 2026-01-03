---
title: Image Trail Cursor
description: An interactive cursor effect that creates a dynamic trail of images following mouse movement with multiple animation variants.
category: Cursor
tags: [css, tailwind, cursor, codrops, gsap]
---

::ComponentViewer{demoFile="ImageTrailCursorDemo.vue" config="ImageTrailCursorConfig" componentId="image-trail-cursor" :componentFiles='["ImageTrailCursor.vue", "trail-variants.ts"]' dependencies="gsap"}

#api

## API

| Prop Name | Type          | Default   | Description                                            |
| --------- | ------------- | --------- | ------------------------------------------------------ |
| `images`  | `string[]`    | `[]`      | Array of image URLs to display in the trailing effect. |
| `variant` | `VariantType` | `"type1"` | Animation variant type (`"type1"` through `"type7"`).  |

> 💡 This component creates a full-width, full-height container with high z-index for cursor tracking. Each image is 190px wide with a 1.1 aspect ratio and rounded corners.

#credits

- Inspired by modern cursor trail effects and image hover interactions.
- Built with Vue 3 Composition API for optimal reactivity and performance.
- Ported from [Codrops Article](https://tympanus.net/codrops/2023/10/18/ideas-for-image-motion-trail-animations/)

::
