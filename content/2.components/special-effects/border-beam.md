---
title: Border Beam
description: A stylish animated border beam effect with customizable size, duration, colors, and delay.
---

::ComponentLoader{label="Preview" componentName="BorderBeamDemo" type="examples"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## Install using CLI

::InstallationCli{componentId="border-beam"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="BorderBeam.vue" language="vue" componentName="BorderBeam" type="ui" id="border-beam"}
::

## API

| Prop Name     | Type     | Default     | Description                                                           |
| ------------- | -------- | ----------- | --------------------------------------------------------------------- |
| `class`       | `string` | `""`        | Additional CSS classes for custom styling.                            |
| `size`        | `number` | `200`       | Size of the animated border beam effect.                              |
| `duration`    | `number` | `15`        | Duration of the animation in seconds.                                 |
| `borderWidth` | `number` | `1.5`       | Width of the border around the beam effect.                           |
| `anchor`      | `number` | `90`        | Anchor point for the beam, determining its position along the border. |
| `colorFrom`   | `string` | `"#ffaa40"` | Starting color for the gradient of the beam.                          |
| `colorTo`     | `string` | `"#9c40ff"` | Ending color for the gradient of the beam.                            |
| `delay`       | `number` | `0`         | Delay before the animation starts, in seconds.                        |

## Features

- **Animated Border Beam**: Adds a dynamic border beam effect that animates around the border.
- **Customizable Gradient Colors**: Adjust the `colorFrom` and `colorTo` props to create a gradient effect that suits your design.
- **Flexible Animation Settings**: Control the size, duration, and delay of the animation to fine-tune the visual experience.
- **Anchor Positioning**: Use the `anchor` prop to set the starting position of the beam along the border.

## Credits

- Ported from [Magic UI](https://magicui.design/docs/components/border-beam).
