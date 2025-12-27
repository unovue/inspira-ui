---
title: Timeline
description: A visually appealing and interactive timeline component with smooth animations, sticky labels, and a gradient scrolling effect.
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TimelineDemo.vue" config="TimelineConfig" componentId="timeline" :componentFiles='["Timeline.vue"]'}

#api

## API

| Prop Name        | Type                               | Default | Description                                        |
| ---------------- | ---------------------------------- | ------- | -------------------------------------------------- |
| `containerClass` | `string`                           | `""`    | Additional CSS classes for the timeline container. |
| `class`          | `string`                           | `""`    | Additional CSS classes for styling.                |
| `items`          | `{ id: string; label: string; }[]` | `[]`    | List of timeline items, each with an ID and label. |
| `title`          | `string`                           | `""`    | Title of the timeline section.                     |
| `description`    | `string`                           | `""`    | Description text displayed below the title.        |

#credits

- Inspired and ported from [Aceternity UI's Timeline](https://ui.aceternity.com/components/timeline).

::
