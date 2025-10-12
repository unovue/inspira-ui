---
title: Bending Gallery
description: A curved, scrollable 3D gallery with dynamic image cards and animated text rendered using WebGL and OGL.
---

::ComponentLoader{label="Preview" componentName="BendingGalleryDemo" type="examples" id="bending-gallery"}
::

## API

| Prop Name      | Type                                | Default               | Description                                                     |
| -------------- | ----------------------------------- | --------------------- | --------------------------------------------------------------- |
| `items`        | `{ image: string; text: string }[]` | `[]`                  | Array of objects containing image URLs and accompanying text.   |
| `bend`         | `number`                            | `3`                   | Controls the curvature of the gallery. Higher values bend more. |
| `textColor`    | `string`                            | `"#ffffff"`           | Color of the text displayed below each image.                   |
| `borderRadius` | `number`                            | `0.05`                | Rounded corners for image cards (in UV space).                  |
| `font`         | `string`                            | `"bold 30px DM Sans"` | Font used for the text below each image.                        |

## Features

- **Curved Layout**: Creates a 3D bending effect across the scrollable gallery.
- **Image & Text Support**: Each item includes an image with dynamic text rendered via canvas.
- **Customizable Props**: Bend amount, border radius, font, and colors are fully configurable.
- **WebGL Rendering**: Utilizes [OGL](https://github.com/oframe/ogl) for GPU-accelerated visuals.
- **Smooth Interactions**: Drag or scroll with momentum and responsive snapping.
- **Autoloop Gallery**: Seamlessly scroll through items in an infinite loop-like experience.

## Install using CLI

::InstallationCli{componentId="bending-gallery"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="BendingGallery.vue" language="vue" componentName="BendingGallery" type="ui" id="bending-gallery"}
::

## Credits

- Inspired by [Infinite Circular Gallery from Codrops](https://tympanus.net/Tutorials/InfiniteCircularGallery/).
