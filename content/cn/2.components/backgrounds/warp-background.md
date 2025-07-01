---
title: Warp Background
description: A container component that applies a warp animation effect to its children
---

::ComponentLoader{label="Preview" componentName="WarpBackgroundDemo" type="examples" id="warp-background"}
::

## Install using CLI

::InstallationCli{componentId="warp-background"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="WarpBackground.vue" language="vue" componentName="WarpBackground" type="ui" id="warp-background"}
:CodeViewerTab{filename="Beam.vue" language="vue" componentName="Beam" type="ui" id="warp-background"}

::

## API

| Prop Name      | Type     | Default                | Description                               |
| -------------- | -------- | ---------------------- | ----------------------------------------- |
| `perspective`  | `number` | `100`                  | The perspective of the warp animation     |
| `beamsPerSide` | `number` | `3`                    | The number of beams per side              |
| `beamSize`     | `number` | `5`                    | The size of the beams                     |
| `beamDelayMax` | `number` | `3`                    | The maximum delay of the beams in seconds |
| `beamDelayMin` | `number` | `0`                    | The minimum delay of the beams in seconds |
| `beamDuration` | `number` | `3`                    | The duration of the beams                 |
| `gridColor`    | `string` | `"hsl(var(--border))"` | The color of the grid lines               |

## Credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired and ported from [Magic UI WarpBackground](https://magicui.design/docs/components/warp-background).
