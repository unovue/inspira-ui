---
title: Media Text
description: Reveal an image or video between two text fragments on hover, in view, or by ref.
category: Miscellaneous
tags: [media, image, video, motion-v]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="MediaTextDemo.vue" config="MediaTextConfig" componentId="media-text" :componentFiles='["MediaText.vue", "index.ts"]'}

#api

## API

| Prop Name             | Type                           | Default                       | Description                                     |
| --------------------- | ------------------------------ | ----------------------------- | ----------------------------------------------- |
| `firstText`           | `string`                       | —                             | Text rendered before the media.                 |
| `secondText`          | `string`                       | —                             | Text rendered after the media.                  |
| `mediaUrl`            | `string`                       | —                             | Image or video URL.                             |
| `mediaType`           | `"image" \| "video"`           | —                             | Media element to render.                        |
| `mediaContainerClass` | `string`                       | —                             | Classes applied to the animated media wrapper.  |
| `fallbackUrl`         | `string`                       | —                             | Poster URL used by videos.                      |
| `as`                  | `string`                       | `p`                           | Element used for the text fragments.            |
| `autoPlay`            | `boolean`                      | `true`                        | Autoplay the video when `mediaType` is `video`. |
| `loop`                | `boolean`                      | `true`                        | Loop the video when `mediaType` is `video`.     |
| `muted`               | `boolean`                      | `true`                        | Mute the video when `mediaType` is `video`.     |
| `playsInline`         | `boolean`                      | `true`                        | Keep video playback inline on mobile devices.   |
| `alt`                 | `string`                       | Generated                     | Alternative text for an image.                  |
| `triggerType`         | `"hover" \| "ref" \| "inView"` | `hover`                       | Trigger used to reveal the media.               |
| `useInViewOptions`    | `UseInViewOptions`             | `{ once: true, amount: 0.5 }` | Options passed to the in-view trigger.          |
| `animationVariants`   | `object`                       | Width spring reveal           | Motion variants for the media wrapper.          |
| `class`               | `string`                       | —                             | Classes merged onto the root element.           |
| `leftTextClass`       | `string`                       | —                             | Classes applied to the first text fragment.     |
| `rightTextClass`      | `string`                       | —                             | Classes applied to the second text fragment.    |

The component exposes `animate()` and `reset()` for the `ref` trigger.

#credits

- Ported from [Fancy Components Media Between Text](https://fancycomponents.dev/docs/components/blocks/media-between-text).

::
