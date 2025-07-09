---
title: 波浪背景
description: 一个酷炫的波浪背景效果。
---

::ComponentLoader{label="预览" componentName="WavyBackgroundDemo" type="examples" id="wavy-background"}
::

::alert{type="info"}
**注意:** This component requires `simplex-noise` as a dependency.
::

## 通过 CLI 安装

::InstallationCli{componentId="wavy-background"}
::

## 手动安装

::steps{level=4}

#### Install the dependencies

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

复制并粘贴以下代码：

::CodeViewer{filename="WavyBackground.vue" language="vue" componentName="WavyBackground" type="ui" id="wavy-background"}  
::
::

## API

| Prop 名称        | 类型               | 默认值                                                    | 描述                                                       |
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

## 功能特性

- **Slot Support**: Easily add any content inside the component using the default slot.

## 感谢

- Credits to [Aceternity UI](https://ui.aceternity.com/components/wavy-background).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.
