---
title: Logo Origami
description: Animated flipping logo with origami effect.
---

::ComponentLoader{label="Preview" componentName="LogoOrigamiDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="logo-origami"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="LogoOrigami.vue" language="vue" componentName="LogoOrigami" type="ui" id="logo-origami"}
:CodeViewerTab{filename="LogoOrigamiItem.vue" language="vue" componentName="LogoOrigamiItem" type="ui" id="logo-origami"}
::

## API

| Prop Name  | Type     | Default | Description                                |
| ---------- | -------- | ------- | ------------------------------------------ |
| `class`    | `string` | `""`    | Additional CSS classes for custom styling. |
| `duration` | `number` | `1.5`   | Duration of the flip animation in seconds. |
| `delay`    | `number` | `2.5`   | Delay between flip animations in seconds.  |

## Features

- **Origami Flip Animation**: Animates flipping between multiple child components with an origami-style effect.

- **Customizable Timing**: Adjust the `duration` and `delay` props to control the animation speed and interval.

- **Slot-Based Content**: Accepts multiple child components or content via default slots.

- **Responsive Design**: Designed to adapt to various screen sizes and devices.

- **Easy Integration**: Simple to include in your Vue projects with minimal setup.

## Credits

- Inspired by origami animations and flip effects at [hover.dev](www.hover.dev/components/other#logo-origami)
