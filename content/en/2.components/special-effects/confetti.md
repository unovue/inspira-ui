---
title: Confetti
description: A Vue component for confetti animations.
category: Special Effects
tags: [css, tailwind, canvas, magic-ui]
---

::ComponentViewer{demoFile="ConfettiDemo.vue" config="ConfettiConfig" componentId="confetti" :componentFiles='["Confetti.vue", "ConfettiButton.vue"]' dependencies="canvas-confetti" devDependencies="@types/canvas-confetti"}

#api

## API

### Props

#### `Confetti`

| Prop Name       | Type                    | Default | Description                                                       |
| --------------- | ----------------------- | ------- | ----------------------------------------------------------------- |
| `options`       | `ConfettiOptions`       | `{}`    | Options for individual confetti bursts.                           |
| `globalOptions` | `ConfettiGlobalOptions` | `{}`    | Global options for the confetti instance (e.g., resize behavior). |
| `manualstart`   | `boolean`               | `false` | If `true`, confetti won't start automatically on mount.           |

#### `ConfettiOptions`

| Property                  | Type                        | Default                                                                         | Description                                                            |
| ------------------------- | --------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `particleCount`           | `number`                    | `50`                                                                            | The number of confetti particles to launch.                            |
| `angle`                   | `number`                    | `90`                                                                            | The angle in degrees at which to launch the confetti.                  |
| `spread`                  | `number`                    | `45`                                                                            | The spread in degrees of the confetti.                                 |
| `startVelocity`           | `number`                    | `45`                                                                            | The initial velocity of the confetti particles.                        |
| `decay`                   | `number`                    | `0.9`                                                                           | The rate at which confetti particles slow down.                        |
| `gravity`                 | `number`                    | `1`                                                                             | The gravity applied to confetti particles.                             |
| `drift`                   | `number`                    | `0`                                                                             | The horizontal drift applied to confetti particles.                    |
| `ticks`                   | `number`                    | `200`                                                                           | The number of animation frames the confetti should last.               |
| `origin`                  | `{ x: number, y: number }`  | `{ x: 0.5, y: 0.5 }`                                                            | The origin point (from 0 to 1) of the confetti emission.               |
| `colors`                  | `string[]`                  | `['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']` | Array of color strings in HEX format for the confetti particles.       |
| `shapes`                  | `string[]`                  | `['square', 'circle']`                                                          | Array of shapes for the confetti particles.                            |
| `scalar`                  | `number`                    | `1`                                                                             | Scaling factor for confetti particle sizes.                            |
| `zIndex`                  | `number`                    | `100`                                                                           | The z-index value for the confetti canvas element.                     |
| `disableForReducedMotion` | `boolean`                   | `false`                                                                         | Disables confetti for users who prefer reduced motion.                 |
| `useWorker`               | `boolean`                   | `true`                                                                          | Use a Web Worker for better performance.                               |
| `resize`                  | `boolean`                   | `true`                                                                          | Whether to automatically resize the canvas when the window resizes.    |
| `canvas`                  | `HTMLCanvasElement \| null` | `null`                                                                          | Custom canvas element to draw confetti on.                             |
| `gravity`                 | `number`                    | `1`                                                                             | The gravity applied to confetti particles.                             |
| `drift`                   | `number`                    | `0`                                                                             | The horizontal drift applied to particles.                             |
| `flat`                    | `boolean`                   | `false`                                                                         | If `true`, confetti particles will be flat (no rotation or 3D effect). |

#### `ConfettiButton`

| Prop Name | Type                                               | Default | Description                                      |
| --------- | -------------------------------------------------- | ------- | ------------------------------------------------ |
| `options` | `ConfettiOptions & { canvas?: HTMLCanvasElement }` | `{}`    | Options for confetti when the button is clicked. |

#credits

- Built using the [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) library.
- Ported from [Magic UI Confetti](https://magicui.design/docs/components/confetti).

::
