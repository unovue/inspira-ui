---
title: Bending Gallery
description: A curved, scrollable 3D gallery with dynamic image cards and animated text rendered using WebGL and OGL.
category: Visualization
tags: [css, tailwind, ogl, webgl]
---

::ComponentViewer{demoFile="BendingGalleryDemo.vue" config="BendingGalleryConfig" componentId="bending-gallery" :componentFiles='["BendingGallery.vue"]' dependencies="ogl"}

#api

## API

| Prop Name      | Type                                | Default               | Description                                                     |
| -------------- | ----------------------------------- | --------------------- | --------------------------------------------------------------- |
| `items`        | `{ image: string; text: string }[]` | `[]`                  | Array of objects containing image URLs and accompanying text.   |
| `bend`         | `number`                            | `3`                   | Controls the curvature of the gallery. Higher values bend more. |
| `textColor`    | `string`                            | `"#ffffff"`           | Color of the text displayed below each image.                   |
| `borderRadius` | `number`                            | `0.05`                | Rounded corners for image cards (in UV space).                  |
| `font`         | `string`                            | `"bold 30px DM Sans"` | Font used for the text below each image.                        |

#credits

- Inspired by [Infinite Circular Gallery from Codrops](https://tympanus.net/Tutorials/InfiniteCircularGallery/).

::
