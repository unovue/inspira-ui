---
title: Vortex Background
description: A wavy, swirly, vortex background ideal for CTAs and backgrounds.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="VortexDemo" type="examples" id="vortex"}
::

## Example

Full page demo usage

::ComponentLoader{label="Preview" componentName="VortexFullPageDemo" type="examples" id="vortex"}
::

::alert{type="info"}
**Note:** This component uses simplex-noise & requires `simplex-noise` npm package as a dependency.

Please install simplex-noise using following commands.

    ::code-group

    ```bash [npm]
    npm install simplex-noise
    ```

    ```bash [pnpm]
    pnpm install simplex-noise
    ```

    ```bash [bun]
    bun add simplex-noise
    ```

    ```bash [yarn]
    yarn add simplex-noise
    ```
    ::

::

## API

| Prop Name | Type     | Default | Description                                                     |
| --------- | -------- | ------- | --------------------------------------------------------------- |
| `class`   | `string` |      | Optional className for styling the children wrapper.               |
| `containerClass` | `string` |   | Optional className for styling the container. |
| `particleCount` | `number` | `700` | Number of particles to be generated. |
| `rangeY` | `number` | `100` | Vertical range for particle movement. |
| `baseHue` | `number` | `220` | Base hue for particle color. |
| `baseSpeed` | `number` | `0.0` | Base speed for particle movement. |
| `rangeSpeed` | `number` | `1.5` | Range of speed variation for particles. |
| `baseRadius` | `number` | `1` | Base radius of particles. |
| `rangeRadius` | `number` | `2` | Range of radius variation for particles. |
| `backgroundColor` | `string` | `"#000000"` | Background color of the canvas. |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="Vortex.vue" language="vue" componentName="Vortex" type="ui" id="vortex"}  
::

## Credits

- Credits to [Aceternity UI](https://ui.aceternity.com/components/bento-grid).
