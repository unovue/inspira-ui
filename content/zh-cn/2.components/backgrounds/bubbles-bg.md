---
title: 泡泡背景
description: An animated background with floating bubbles.
---

::ComponentLoader{label="预览" componentName="BubblesBgDemo2" type="examples" id="backgrounds"}
::

::alert{type="info"}
**注意:** This component uses Three.js & requires `three` npm package as a dependency.
::

## 通过 CLI 安装

::InstallationCli{componentId="bubbles-bg"}
::

## 手动安装

::steps{level=4}

#### Install the dependencies

::code-group

```bash [npm]
npm install three
npm install -D @types/three
```

```bash [pnpm]
pnpm install three
pnpm install -D @types/three
```

```bash [bun]
bun add three
bun add -d @types/three
```

```bash [yarn]
yarn add three
yarn add --dev @types/three
```

::

复制并粘贴以下代码：

::CodeViewer{filename="BubblesBg.vue" language="vue" componentName="BubblesBg" type="ui" id="bg-bubbles"}  
::
::

## Example

Without Blur or overlay

::ComponentLoader{label="预览" componentName="BubblesBgDemo" type="examples" id="backgrounds"}
::

## API

| Prop 名称 | 类型     | 默认值 | 描述                                                            |
| --------- | -------- | ------ | --------------------------------------------------------------- |
| `blur`    | `number` | `0`    | Amount of blur to apply to the background, specified in pixels. |

## 功能特性

- **Animated Bubble Background**: Renders a captivating background with animated, floating bubbles using 3D graphics.

- **Dynamic Color Gradients**: The bubbles and background smoothly transition between colors over time, creating a visually engaging effect.

- **Customizable Blur Effect**: Use the `blur` prop to adjust the blur intensity applied over the background, enhancing depth perception.

- **Slot Support**: Easily overlay content on top of the animated background using the default slot.

- **Responsive Design**: The component adjusts to fit the width and height of its parent container, ensuring compatibility across different screen sizes.

## 感谢

- Built with the [Three.js](https://threejs.org/) library for 3D rendering and animations.
- Inspired from [Tresjs Experiment](https://lab.tresjs.org/experiments/overlay).
