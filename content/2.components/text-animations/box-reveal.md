---
title: Box Reveal
description: An animated box reveal effect with customizable colors, duration, and delay.
---

::ComponentLoader{label="Preview" componentName="BoxRevealDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="box-reveal"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="BoxReveal.vue" language="vue" componentName="BoxReveal" type="ui" id="box-reveal"}
::

## API

| Prop Name  | Type     | Default     | Description                                          |
| ---------- | -------- | ----------- | ---------------------------------------------------- |
| `color`    | `string` | `"#5046e6"` | Background color of the reveal box.                  |
| `duration` | `number` | `0.5`       | Duration of the reveal animation in seconds.         |
| `delay`    | `number` | `0.25`      | Delay before the reveal animation starts in seconds. |
| `class`    | `string` | `""`        | Additional CSS classes for custom styling.           |

## Features

- **Box Reveal Animation**: Creates a sliding box reveal effect with smooth transitions.
- **Customizable Animation**: Control the animation timing with the `duration` and `delay` props.
- **Slot-Based Content**: Supports default slot content that appears once the reveal animation completes.
- **Custom Background Color**: Easily customize the box's background color using the `color` prop.

## Credits

- Ported from [Magic UI Box Reveal](https://magicui.design/docs/components/box-reveal).
