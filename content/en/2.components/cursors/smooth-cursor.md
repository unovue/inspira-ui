---
title: Smooth Cursor
description: A customizable, physics-based smooth cursor animation component for Vue applications.
category: Cursor
tags: [css, tailwind, cursor, magic-ui]
---

::ComponentViewer{demoFile="SmoothCursorDemo.vue" config="SmoothCursorConfig" componentId="smooth-cursor" :componentFiles='["SmoothCursor.vue"]'}

#api

## API

| Prop Name      | Type           | Default         | Description                                             |
| -------------- | -------------- | --------------- | ------------------------------------------------------- |
| `cursor`       | `Component`    | `DefaultCursor` | Custom cursor component to replace the default cursor   |
| `springConfig` | `SpringConfig` | `See below`     | Configuration object for the spring animation behavior. |

### SpringConfig Type

```ts
interface springConfig {
  damping: number;
  stiffness: number;
  mass: number;
  restDelta: number;
}
```

#credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Ported from [Magic UI Smooth Cursor](https://magicui.design/docs/components/smooth-cursor).

::
