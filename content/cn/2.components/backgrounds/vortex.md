---
title: Vortex Background
description: A wavy, swirly, vortex background ideal for CTAs and backgrounds.
---

::ComponentLoader{label="Preview" componentName="VortexDemo" type="examples" id="vortex"}
::

::alert{type="info"}
**Note:** This component requires `simplex-noise` as a dependency.
::

## 使用 CLI 安装

::InstallationCli{componentId="vortex"}
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

复制并粘贴以下代码

::CodeViewer{filename="Vortex.vue" language="vue" componentName="Vortex" type="ui" id="vortex"}  
::
::

## Example

Full page demo usage

::ComponentLoader{label="Preview" componentName="VortexFullPageDemo" type="examples" id="vortex"}
::

## API

| Prop Name         | 类型     | 默认值      | 说明                                                 |
| ----------------- | -------- | ----------- | ---------------------------------------------------- |
| `class`           | `string` |             | Optional className for styling the children wrapper. |
| `containerClass`  | `string` |             | Optional className for styling the container.        |
| `particleCount`   | `number` | `700`       | Number of particles to be generated.                 |
| `rangeY`          | `number` | `100`       | Vertical range for particle movement.                |
| `baseHue`         | `number` | `220`       | Base hue for particle color.                         |
| `baseSpeed`       | `number` | `0.0`       | Base speed for particle movement.                    |
| `rangeSpeed`      | `number` | `1.5`       | Range of speed variation for particles.              |
| `baseRadius`      | `number` | `1`         | Base radius of particles.                            |
| `rangeRadius`     | `number` | `2`         | Range of radius variation for particles.             |
| `backgroundColor` | `string` | `"#000000"` | Background color of the canvas.                      |

## Features

- **Slot Support**: Easily add any content inside the component using the default slot.

## 致谢

- Credits to [Aceternity UI](https://ui.aceternity.com/components/vortex).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.
