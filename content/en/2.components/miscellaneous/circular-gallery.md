---
title: Circular Gallery
description: Arrange slot content around a circle with continuous motion and hover pause.
category: Miscellaneous
tags: [css, tailwind, gallery]
badge: New
---

::ComponentViewer{demoFile="CircularGalleryDemo.vue" config="CircularGalleryConfig" componentId="circular-gallery" :componentFiles='["CircularGallery.vue", "index.ts"]'}

#api

## API

| Prop Name      | Type                  | Default  | Description                                       |
| -------------- | --------------------- | -------- | ------------------------------------------------- |
| `radius`       | `number`              | `100`    | Distance in pixels from the center to each child. |
| `duration`     | `number`              | `10`     | Time in seconds for one full rotation.            |
| `easing`       | `string`              | `linear` | CSS timing function used for the rotation.        |
| `direction`    | `normal` \| `reverse` | `normal` | Rotation direction.                               |
| `class`        | `string`              | —        | Additional classes for the component root.        |
| `pauseOnHover` | `boolean`             | `false`  | Pauses the rotation while a child is hovered.     |

## Usage

Pass the elements to arrange around the circle through the default slot:

```vue
<CircularGallery :radius="140" :duration="12" pause-on-hover>
  <img src="/images/one.jpg" alt="One" class="size-24 object-cover" />
  <img src="/images/two.jpg" alt="Two" class="size-24 object-cover" />
  <img src="/images/three.jpg" alt="Three" class="size-24 object-cover" />
</CircularGallery>
```

#credits

- Ported from [Fancy Components Circling Elements](https://fancycomponents.dev/docs/components/blocks/circling-elements).

::
