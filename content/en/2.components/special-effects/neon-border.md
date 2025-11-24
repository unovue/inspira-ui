---
title: Neon Border
description: A visually appealing neon border component with customizable animations and colors.
category: Special Effects
tags: [css, tailwind, border]
---

::ComponentViewer{demoFile="NeonBorderDemo.vue" config="NeonBorderConfig" componentId="neon-border" :componentFiles='["NeonBorder.vue"]'}

#api

## API

| Prop Name       | Type                         | Default     | Description                                     |
| --------------- | ---------------------------- | ----------- | ----------------------------------------------- |
| `color1`        | `string`                     | `"#0496ff"` | Primary color of the neon border.               |
| `color2`        | `string`                     | `"#ff0a54"` | Secondary color of the neon border.             |
| `animationType` | `"none" \| "half" \| "full"` | `"half"`    | Type of animation effect applied to the border. |
| `duration`      | `number`                     | `6`         | Duration of the animation effect in seconds.    |
| `class`         | `string`                     | `""`        | Additional CSS classes for styling.             |

#instructions

Add following entry to inline theme in your `main.css` file.

```css
@theme inline {
  --animate-neon-border: neon-border var(--neon-border-duration) linear infinite;
  @keyframes neon-border {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
```

#credits

- Inspired by modern neon border effects.

::
