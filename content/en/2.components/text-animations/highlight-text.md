---
title: Highlight Text
description: Highlight text with a directional background sweep.
category: Text Animation
tags: [css, tailwind, motion-v]
badge: New
---

::ComponentViewer{demoFile="HighlightTextDemo.vue" config="HighlightTextConfig" componentId="highlight-text" :componentFiles='["HighlightText.vue", "index.ts"]'}

#api

## API

| Prop Name          | Type                                   | Default                                       | Description                                      |
| ------------------ | -------------------------------------- | --------------------------------------------- | ------------------------------------------------ |
| `as`               | `string`                               | `span`                                        | Element rendered as the outer wrapper.           |
| `triggerType`      | `hover` \| `ref` \| `inView` \| `auto` | `inView`                                      | Trigger used to start the highlight.             |
| `transition`       | `Record<string, unknown>`              | spring transition                             | Motion transition passed to the highlight sweep. |
| `useInViewOptions` | `Record<string, unknown>`              | `{ once: true, initial: false, amount: 0.1 }` | Options used by the in-view trigger.             |
| `class`            | `string`                               | `-`                                           | Classes merged onto the highlighted text.        |
| `highlightColor`   | `string`                               | `hsl(25 90% 80%)`                             | CSS color used for the highlight.                |
| `direction`        | `ltr` \| `rtl` \| `ttb` \| `btt`       | `ltr`                                         | Direction of the background sweep.               |

The component exposes `animate(direction?)` and `reset()` for the `ref` trigger.

#credits

- Inspired by [Fancy Components](https://fancycomponents.dev/docs/components/text/text-highlighter).

::
