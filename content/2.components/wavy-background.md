---
title: Wavy Background
description: A cool background effect with waves that move.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="WavyBackgroundDemo" type="examples" id="wavy-background"}
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
| `class`   | `string` |   `-`   | The content to be displayed on top of the wavy background.               |
| `containerClass` | `string` |  `-` | The CSS class to apply to the content container. |
| `colors` | `string[]` | `["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]` | The colors of the waves. |
| `waveWidth` | `number` | `50` | The width of the waves. |
| `backgroundFill` | `string` | `"black"` | The background color. |
| `blur` | `number` | `10` | The blur effect applied to the waves. |
| `speed` | `"slow" \| "fast"` | `"fast"` | Range of speed variation for particles. |
| `waveOpacity` | `number` | `0.5` | Base radius of particles. |
| `[key: string]` | `any` | `-` | Range of radius variation for particles. |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="WavyBackground.vue" language="vue" componentName="WavyBackground" type="ui" id="wavy-background"}  
::

## Features

- **Slot Support**: Easily add any content inside the component using the default slot.

## Credits

- Credits to [Aceternity UI](https://ui.aceternity.com/components/wavy-background).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.