---
title: Wavy Background
description: A cool background effect with waves that move.
category: Background
tags: [css, tailwind, background, simplex-noise, aceternity-ui]
---

::ComponentViewer{demoFile="WavyBackgroundDemo.vue" config="WavyBackgroundConfig" componentId="wavy-background" :componentFiles='["WavyBackground.vue"]' dependencies="simplex-noise"}

#api

## API

| Prop Name        | Type               | Default                                                   | Description                                                |
| ---------------- | ------------------ | --------------------------------------------------------- | ---------------------------------------------------------- |
| `class`          | `string`           | `-`                                                       | The content to be displayed on top of the wavy background. |
| `containerClass` | `string`           | `-`                                                       | The CSS class to apply to the content container.           |
| `colors`         | `string[]`         | `["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]` | The colors of the waves.                                   |
| `waveWidth`      | `number`           | `50`                                                      | The width of the waves.                                    |
| `backgroundFill` | `string`           | `"black"`                                                 | The background color.                                      |
| `blur`           | `number`           | `10`                                                      | The blur effect applied to the waves.                      |
| `speed`          | `"slow" \| "fast"` | `"fast"`                                                  | Range of speed variation for particles.                    |
| `waveOpacity`    | `number`           | `0.5`                                                     | Base radius of particles.                                  |
| `[key: string]`  | `any`              | `-`                                                       | Range of radius variation for particles.                   |

#credits

- Credits to [Aceternity UI](https://ui.aceternity.com/components/wavy-background).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.

::
