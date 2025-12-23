---
title: 彩带
description: 用于彩带动画的 Vue 组件。
category: 特效
tags: [css, tailwind, canvas, magic-ui]
---

::ComponentViewer{demoFile="ConfettiDemo.vue" config="ConfettiConfig" componentId="confetti" :componentFiles='["Confetti.vue", "ConfettiButton.vue"]' dependencies="canvas-confetti" devDependencies="@types/canvas-confetti"}

#api

## API

### Props

#### `Confetti`

| 属性名         | 类型                    | 默认值 | 描述                                            |
| -------------- | ----------------------- | ------ | ----------------------------------------------- |
| `options`      | `ConfettiOptions`       | `{}`   | 单次彩带的配置项。                              |
| `globalOptions`| `ConfettiGlobalOptions` | `{}`   | 彩带实例的全局配置（如自适应尺寸）。            |
| `manualstart`  | `boolean`               | `false`| 若为 `true`，组件挂载时不会自动启动。           |

#### `ConfettiOptions`

| 属性                      | 类型                        | 默认值                                                                          | 描述                                         |
| ------------------------- | --------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------- |
| `particleCount`           | `number`                    | `50`                                                                            | 发射的彩带颗粒数量。                         |
| `angle`                   | `number`                    | `90`                                                                            | 发射彩带的角度（度）。                       |
| `spread`                  | `number`                    | `45`                                                                            | 彩带的扩散角度（度）。                       |
| `startVelocity`           | `number`                    | `45`                                                                            | 彩带颗粒的初始速度。                         |
| `decay`                   | `number`                    | `0.9`                                                                           | 彩带颗粒减速的速率。                         |
| `gravity`                 | `number`                    | `1`                                                                             | 作用于彩带颗粒的重力。                       |
| `drift`                   | `number`                    | `0`                                                                             | 彩带颗粒的水平漂移。                         |
| `ticks`                   | `number`                    | `200`                                                                           | 彩带动画持续的帧数。                         |
| `origin`                  | `{ x: number, y: number }`  | `{ x: 0.5, y: 0.5 }`                                                            | 彩带发射的原点（0 到 1 之间）。              |
| `colors`                  | `string[]`                  | `['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']` | 彩带颗粒的 HEX 颜色数组。                    |
| `shapes`                  | `string[]`                  | `['square', 'circle']`                                                          | 彩带颗粒的形状数组。                         |
| `scalar`                  | `number`                    | `1`                                                                             | 彩带颗粒大小的缩放因子。                     |
| `zIndex`                  | `number`                    | `100`                                                                           | 彩带画布元素的 z-index。                     |
| `disableForReducedMotion` | `boolean`                   | `false`                                                                         | 若用户偏好减少动画时禁用彩带。               |
| `useWorker`               | `boolean`                   | `true`                                                                          | 使用 Web Worker 以获得更好性能。            |
| `resize`                  | `boolean`                   | `true`                                                                          | 窗口尺寸变化时是否自动调整画布大小。         |
| `canvas`                  | `HTMLCanvasElement \| null` | `null`                                                                          | 自定义用于绘制彩带的 canvas 元素。           |
| `gravity`                 | `number`                    | `1`                                                                             | 作用于彩带颗粒的重力。                       |
| `drift`                   | `number`                    | `0`                                                                             | 彩带颗粒的水平漂移。                         |
| `flat`                    | `boolean`                   | `false`                                                                         | 若为 `true`，彩带颗粒将不旋转或无 3D 效果。  |

#### `ConfettiButton`

| 属性名   | 类型                                               | 默认值 | 描述                             |
| -------- | -------------------------------------------------- | ------ | -------------------------------- |
| `options`| `ConfettiOptions & { canvas?: HTMLCanvasElement }` | `{}`   | 点击按钮时的彩带配置。           |

#credits

- 基于 [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) 库构建。
- 移植自 [Magic UI Confetti](https://magicui.design/docs/components/confetti)。

::
