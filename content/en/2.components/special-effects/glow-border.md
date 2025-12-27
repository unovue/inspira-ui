---
title: Glow Border
description: An animated border effect.
category: Special Effects
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="GlowBorderDemo.vue" config="GlowBorderConfig" componentId="glow-border" :componentFiles='["GlowBorder.vue"]'}

#api

## API

| Prop Name      | Type                 | Default | Description                                                |
| -------------- | -------------------- | ------- | ---------------------------------------------------------- |
| `duration`     | `number`             | `10`    | Duration of the glowing border animation.                  |
| `color`        | `string \| string[]` | `#FFF`  | Color or array of colors to applied on the glowing border. |
| `borderRadius` | `number`             | `10`    | Radius of the border.                                      |
| `borderWidth`  | `number`             | `2`     | Width of the border.                                       |

#instructions

Add following entry to inline theme in your `main.css` file.

```css
@theme inline {
  --animate-glow: glow var(--duration) infinite linear;
  @keyframes glow {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    to {
      background-position: 0% 0%;
    }
  }
}
```

#credits

- Credits to [Magic UI](https://magicui.design/docs/components/shine-border) for this fantastic component.

::
