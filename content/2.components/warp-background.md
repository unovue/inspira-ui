---
title: Warp Background
description: A container component that applies a warp animation effect to its children.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="WarpBackgroundDemo" type="examples" id="warp-background"}
::

## API

| Prop Name       | Type     | Default                | Description                                                |
| --------------- | -------- | ---------------------- | ---------------------------------------------------------- |
| `class`         | `string` | `-`                    | The content to be displayed on top of the wavy background. |
| `perspective`   | `number` | `100`                  | The perspective of the warp animation.                     |
| `beamsPerSide`  | `number` | `3`                    | The number of beams per side.                              |
| `beamSize`      | `number` | `5`                    | The size of the beams.                                     |
| `beamDelayMax`  | `number` | `3`                    | The maximum delay of the beams.                            |
| `beamDelayMin`  | `number` | `0`                    | The minimum delay of the beams.                            |
| `beamDuration`  | `number` | `8`                    | The duration of the beams.                                 |
| `gridColor`     | `string` | `"hsl(var(--border))"` | The color of the grid lines.                               |
| `[key: string]` | `any`    | `-`                    | Range of radius variation for particles.                   |

## Component Code

You can copy and paste the following code to create these components:

::CodeGroup
::CodeViewerTab{label="WarpBackground.vue" language="vue" componentName="WarpBackground" type="ui" id="warp-background"}
::

::CodeViewerTab{label="Beam.vue" language="vue" componentName="Beam" type="ui" id="warp-background"}
::
::

## Features

- **Slot Support**: Easily add any content inside the component using the default slot.

## Credits

- Credits to [Magic UI](https://magicui.design/docs/components/warp-background).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
