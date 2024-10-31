---
title: Lens
description: A lens component to zoom into images, videos, or practically anything.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="LensDemo" type="examples" id="lens"}
::

## Examples

### Basic

::ComponentLoader{label="Preview" componentName="LensDemo" type="examples" id="lens"}
::

### Static

Lens are static in center

::ComponentLoader{label="Preview" componentName="StaticLensDemo" type="examples" id="lens"}
::

## API

| Prop Name | Type     | Default | Description                                                     |
| --------- | -------- | ------- | --------------------------------------------------------------- |
| `zoomFactor`   | `number` |   `1.5`   | The magnification factor for the lens.               |
| `lensSize` | `number` |  `170` | The diameter of the lens in pixels. |
| `position` | `{ x: number, y: number }` | `{ x: 200, y: 150 }` | The static position of the lens (when isStatic is true). |
| `isStatic` | `boolean` | `false` | If true, the lens stays in a fixed position; if false, it follows the mouse. |
| `hovering` | `boolean` | `"false"` | External control for the hover state. |

## Component Code

You can copy and paste the following code to create these components:

::code-group
::CodeViewerTab{label="Lens.vue" icon="vscode-icons:file-type-vue" componentName="Lens" type="ui" id="lens"}
::

::CodeViewerTab{label="Rays.vue" icon="vscode-icons:file-type-vue" componentName="Rays" type="examples" id="lens"}
::

::CodeViewerTab{label="Beams.vue" icon="vscode-icons:file-type-vue" componentName="Beams" type="examples" id="lens"}
::

## Features

- **Slot Support**: Easily add any content inside the component using the default slot.

## Credits

- Credits to [Aceternity UI](https://ui.aceternity.com/components/lens).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.
