---
title: Link Preview
description: Dynamic link previews for your anchor tags
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="LinkPreviewDemo.vue" config="LinkPreviewConfig" componentId="link-preview" :componentFiles='["LinkPreview.vue"]' dependencies="qss"}

#api

## API

| Prop Name   | Type      | Default | Description                                                                                 |
| ----------- | --------- | ------- | ------------------------------------------------------------------------------------------- |
| `class`     | `string`  | `""`    | Custom class applied to the main element.                                                   |
| `linkClass` | `string`  | `""`    | Custom class applied to the link element.                                                   |
| `width`     | `number`  | `200`   | Width of the preview image.                                                                 |
| `height`    | `number`  | `125`   | Height of the preview image.                                                                |
| `isStatic`  | `boolean` | `false` | Determines if the preview image is static or a URL preview (set to `true` for static mode). |
| `imageSrc`  | `string`  | `""`    | The source of the image to display (required if `isStatic` is `true`).                      |
| `url`       | `string`  | `""`    | URL for the link and for generating the preview image (required if `isStatic` is `false`).  |

#credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.
- Ported from [Aceternity UI's Link Preview](https://ui.aceternity.com/components/link-preview).

::
