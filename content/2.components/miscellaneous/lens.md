---
title: Lens
description: A lens component to zoom into images, videos, or practically anything.
---

::ComponentLoader{label="Preview" componentName="LensDemo" type="examples" id="lens"}
::

## Install using CLI

::InstallationCli{componentId="lens"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="Lens.vue" language="vue" componentName="Lens" type="ui" id="lens"}
:CodeViewerTab{label="Rays.vue" language="vue" componentName="Rays" type="examples" id="lens"}
:CodeViewerTab{label="Beams.vue" language="vue" componentName="Beams" type="examples" id="lens"}

::

## Examples

Lens are static in center

::ComponentLoader{label="Preview" componentName="StaticLensDemo" type="examples" id="lens"}
::

## API

| Prop Name    | Type                       | Default              | Description                                                                  |
| ------------ | -------------------------- | -------------------- | ---------------------------------------------------------------------------- |
| `zoomFactor` | `number`                   | `1.5`                | The magnification factor for the lens.                                       |
| `lensSize`   | `number`                   | `170`                | The diameter of the lens in pixels.                                          |
| `position`   | `{ x: number, y: number }` | `{ x: 200, y: 150 }` | The static position of the lens (when isStatic is true).                     |
| `isStatic`   | `boolean`                  | `false`              | If true, the lens stays in a fixed position; if false, it follows the mouse. |
| `hovering`   | `boolean`                  | `"false"`            | External control for the hover state.                                        |

## Features

- **Slot Support**: Easily add any content inside the component using the default slot.

## Credits

- Credits to [Aceternity UI](https://ui.aceternity.com/components/lens).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.
