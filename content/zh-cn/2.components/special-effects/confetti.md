---
title: 五彩纸屑
description: 一个五彩纸屑动画的Vue组件。
---

::ComponentLoader{label="预览" componentName="ConfettiDemo" type="examples" id="confetti"}
::

::alert{type="info"}
**注意:** This component uses `canvas-confetti` npm package as a dependency.
::

## 通过 CLI 安装

::InstallationCli{componentId="confetti"}
::

## 手动安装

::steps{level=4}

#### Install the dependencies

::code-group

```bash [npm]
npm install canvas-confetti
npm install -D @types/canvas-confetti
```

```bash [pnpm]
pnpm install canvas-confetti
pnpm install -D @types/canvas-confetti
```

```bash [bun]
bun add canvas-confetti
bun add -d @types/canvas-confetti
```

```bash [yarn]
yarn add canvas-confetti
yarn add --dev @types/canvas-confetti
```

::

复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="Confetti.vue" language="vue" componentName="Confetti" type="ui" id="confetti"}
:CodeViewerTab{label="ConfettiButton.vue" language="vue" componentName="ConfettiButton" type="ui" id="confetti"}
::
::

## 示例

### Basic

::ComponentLoader{label="预览" componentName="ConfettiBasicDemo" type="examples" id="confetti"}
::

### Random Direction

::ComponentLoader{label="预览" componentName="ConfettiRandomDirectionDemo" type="examples" id="confetti"}
::

### Fireworks

::ComponentLoader{label="预览" componentName="ConfettiFireworksDemo" type="examples" id="confetti"}
::

### Side Cannons

::ComponentLoader{label="预览" componentName="ConfettiCannonsDemo" type="examples" id="confetti"}
::

## API

### Components props

::steps{level=4}

#### `Confetti`

| Prop 名称       | 类型                    | 默认值  | 描述                                                              |
| --------------- | ----------------------- | ------- | ----------------------------------------------------------------- |
| `options`       | `ConfettiOptions`       | `{}`    | Options for individual confetti bursts.                           |
| `globalOptions` | `ConfettiGlobalOptions` | `{}`    | Global options for the confetti instance (e.g., resize behavior). |
| `manualstart`   | `boolean`               | `false` | If `true`, confetti won't start automatically on mount.           |

#### `ConfettiOptions`

| Property                  | 类型                        | 默认值                                                                          | 描述                                                                   |
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

| Prop 名称 | 类型                                               | 默认值 | 描述                                             |
| --------- | -------------------------------------------------- | ------ | ------------------------------------------------ |
| `options` | `ConfettiOptions & { canvas?: HTMLCanvasElement }` | `{}`   | Options for confetti when the button is clicked. |

::

## 功能特性

- **Confetti Animation**: Easily add confetti animations to your Vue application.
- **Customizable Options**: Configure both global and individual options for confetti behavior.
- **Manual Control**: Choose whether to start confetti automatically or manually trigger it.
- **Button Integration**: Use the `ConfettiButton` component to trigger confetti on button clicks.

## 感谢

- Built using the [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) library.
- Ported from [Magic UI Confetti](https://magicui.design/docs/components/confetti).
