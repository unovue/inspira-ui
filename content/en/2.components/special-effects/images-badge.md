---
title: Images Badge
description: A badge with images that can be hovered to reveal more images.
category: Special Effects
tags: [css, tailwind, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="ImagesBadgeDemo.vue" config="ImagesBadgeConfig" componentId="images-badge" :componentFiles='["ImagesBadge.vue"]'}

#api

## API

| Prop Name         | Type                                | Default                     | Description                                                               |
| ----------------- | ----------------------------------- | --------------------------- | ------------------------------------------------------------------------- |
| `text`            | `string`                            | —                           | Text label displayed next to the folder badge.                            |
| `images`          | `string[]`                          | —                           | Array of image URLs to display (up to 3 are shown).                       |
| `class`           | `string`                            | —                           | Additional CSS classes for the root element.                              |
| `href`            | `string`                            | —                           | Optional link URL; renders an `<a>` tag instead of `<div>` when provided. |
| `target`          | `string`                            | —                           | Link target attribute (e.g. `_blank` for new tab).                        |
| `folderSize`      | `{ width: number; height: number }` | `{ width: 32, height: 24 }` | Folder icon dimensions in pixels.                                         |
| `teaserImageSize` | `{ width: number; height: number }` | `{ width: 20, height: 14 }` | Image dimensions while peeking (idle state) in pixels.                    |
| `hoverImageSize`  | `{ width: number; height: number }` | `{ width: 48, height: 32 }` | Image dimensions when hovered in pixels.                                  |
| `hoverTranslateY` | `number`                            | `-35`                       | How far images translate upward on hover in pixels.                       |
| `hoverSpread`     | `number`                            | `20`                        | Horizontal spread between images on hover in pixels.                      |
| `hoverRotation`   | `number`                            | `15`                        | Fan rotation angle for images on hover in degrees.                        |

#credits

- Ported from [Aceternity UI Images Badge](https://ui.aceternity.com/components/images-badge)

::
