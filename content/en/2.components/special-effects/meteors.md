---
title: Meteors
description: A component that displays a meteor shower animation with customizable meteor count and styling.
category: Special Effects
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="MeteorsDemo.vue" config="MeteorsConfig" componentId="meteors" :componentFiles='["Meteors.vue"]'}

#api

## API

| Prop Name | Type     | Default | Description                                                       |
| --------- | -------- | ------- | ----------------------------------------------------------------- |
| `count`   | `number` | `20`    | The number of meteors to display in the animation.                |
| `class`   | `string` | `""`    | Additional CSS classes to apply to the meteors for customization. |

#instructions

Add following entry to inline theme in your `main.css` file.

```css
@theme inline {
  --animate-meteor-effect: meteor 5s linear infinite;
  @keyframes meteor {
    0% {
      transform: rotate(215deg) translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: rotate(215deg) translateX(-500px);
      opacity: 0;
    }
  }
}
```

#credits

- Ported from [Aceternity UI's Meteor Effect](https://ui.aceternity.com/components/meteors)

::
