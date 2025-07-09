---
title: 粒子漩涡
description: 一个带有粒子旋转的动画背景。
---

::ComponentLoader{label="预览" componentName="ParticleWhirlpoolBgDemo" type="examples" id="backgrounds"}
::

::alert{type="info"}
**注意:** This component uses Three.js & requires `three` & `postprocessing` npm package as a dependency.
::

## 通过 CLI 安装

::InstallationCli{componentId="bg-particle-whirlpool"}
::

## 手动安装

::steps{level=4}

#### Install the dependencies

::code-group

```bash [npm]
npm install three postprocessing
npm install -D @types/three
```

```bash [pnpm]
pnpm install three postprocessing
pnpm install -D @types/three
```

```bash [bun]
bun add three postprocessing
bun add -d @types/three
```

```bash [yarn]
yarn add three postprocessing
yarn add --dev @types/three
```

::

复制并粘贴以下代码：

::CodeViewer{filename="ParticleWhirlpoolBg.vue" language="vue" componentName="ParticleWhirlpoolBg" type="ui" id="bg-particle-whirlpool"}
::
::

## 示例

Without blur and overlay

::ComponentLoader{label="预览" componentName="ParticleWhirlpoolBgDemo2" type="examples" id="backgrounds"}
::

With `particleCount` 500

::ComponentLoader{label="预览" componentName="ParticleWhirlpoolBgDemo3" type="examples" id="backgrounds"}
::

## API

| Prop 名称       | 类型     | 默认值 | 描述                                                            |
| --------------- | -------- | ------ | --------------------------------------------------------------- |
| `class`         | `string` | `""`   | Additional CSS classes for custom styling.                      |
| `blur`          | `number` | `0`    | Amount of blur to apply to the background, specified in pixels. |
| `particleCount` | `number` | `2000` | Number of particles in the whirlpool animation.                 |

## 功能特性

- **Interactive Whirlpool Animation**: Renders a captivating whirlpool effect with particles that respond to mouse and touch interactions.

- **Customizable Particle Count**: Adjust the `particleCount` prop to control the number of particles in the animation.

- **Dynamic Blur Effect**: Use the `blur` prop to apply a blur effect over the background, enhancing the visual depth.

- **Slot Support**: Overlay additional content on top of the animation using the default slot.

- **Responsive Design**: The component adjusts to fit the width and height of its parent container, ensuring compatibility across different screen sizes.

## 感谢

- Built with the [Three.js](https://threejs.org/) library for 3D rendering and animations.

- Inspired by [TroisJs](https://troisjs.github.io/examples/demos/3.html)
