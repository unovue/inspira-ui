---
title: Box Reveal
description: An animated box reveal effect with customizable colors, duration, and delay.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="BoxRevealDemo" type="examples"}
::

## API

| Prop Name  | Type     | Default     | Description                                          |
| ---------- | -------- | ----------- | ---------------------------------------------------- |
| `color`    | `string` | `"#5046e6"` | Background color of the reveal box.                  |
| `duration` | `number` | `0.5`       | Duration of the reveal animation in seconds.         |
| `delay`    | `number` | `0.25`      | Delay before the reveal animation starts in seconds. |
| `class`    | `string` | `""`        | Additional CSS classes for custom styling.           |

## Component Code

You can copy and paste the following code to create this component:

::CodeViewer{filename="BoxReveal.vue" language="vue" componentName="BoxReveal" type="ui" id="box-reveal"}
::

## Features

- **Box Reveal Animation**: Creates a sliding box reveal effect with smooth transitions.
- **Customizable Animation**: Control the animation timing with the `duration` and `delay` props.
- **Slot-Based Content**: Supports default slot content that appears once the reveal animation completes.
- **Custom Background Color**: Easily customize the box's background color using the `color` prop.

## Credits

- Ported from [Magic UI Box Reveal](https://magicui.design/docs/components/box-reveal).
