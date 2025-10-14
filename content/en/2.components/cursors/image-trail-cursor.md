---
title: Image Trail Cursor
description: An interactive cursor effect that creates a dynamic trail of images following mouse movement with multiple animation variants.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="ImageTrailCursorDemo" type="examples" id="image-trail-cursor"}
::

## API

| Prop Name | Type          | Default   | Description                                            |
| --------- | ------------- | --------- | ------------------------------------------------------ |
| `images`  | `string[]`    | `[]`      | Array of image URLs to display in the trailing effect. |
| `variant` | `VariantType` | `"type1"` | Animation variant type (`"type1"` through `"type7"`).  |

> 💡 This component creates a full-width, full-height container with high z-index for cursor tracking. Each image is 190px wide with a 1.1 aspect ratio and rounded corners.

## Install using CLI

::InstallationCli{componentId="image-trail-cursor"}
::

## Install Manually

::code-group

::CodeViewerTab{label="ImageTrailCursor.vue" language="vue" componentName="ImageTrailCursor" type="ui" id="image-trail-cursor"}
::
::CodeViewerTab{label="trail-variants.ts" language="typescript" componentName="trail-variants" language="ts" type="ui" id="image-trail-cursor" extension="ts"}
::
::

## Features

- **Multiple animation variants**: Choose from 7 different trail animation patterns and behaviors.
- **Dynamic image rendering**: Displays provided images with smooth opacity transitions and transforms.
- **Responsive design**: Images scale appropriately with rounded corners and overflow handling.
- **Memory management**: Automatically destroys and recreates instances when variant changes.
- **Performance optimized**: Uses `will-change` CSS property for smooth GPU-accelerated animations.
- **Flexible image support**: Accepts any array of image URLs for customizable visual content.

## Notes

- The component uses a variant system with different animation classes mapped in `trail-variants.ts`.
- Images are positioned absolutely with a slight overflow effect (20px larger with -10px offset) for smoother visual transitions.
- The container maintains a high z-index (100) to ensure the trail effect appears above other content.
- Variant instances are properly cleaned up on component unmount and variant changes to prevent memory leaks.

## Credits

- Inspired by modern cursor trail effects and image hover interactions.
- Built with Vue 3 Composition API for optimal reactivity and performance.
- Ported from [Codrops Article](https://tympanus.net/codrops/2023/10/18/ideas-for-image-motion-trail-animations/)
