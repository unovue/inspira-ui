---
title: Flickering Grid
description: A flickering grid background made with Canvas, fully customizable using Tailwind CSS.
---

::ComponentLoader{label="预览" componentName="FlickeringGridDemo" type="examples" id="flickering-grid"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## 通过 CLI 安装

::InstallationCli{componentId="flickering-grid"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="FlickeringGrid.vue" language="vue" componentName="FlickeringGrid" type="ui" id="flickering-grid"}
::

## API

| Prop 名称       | 类型     | 默认值         | 描述                                   |
| --------------- | -------- | -------------- | -------------------------------------- |
| `squareSize`    | `number` | `4`            | Size of each square in the grid.       |
| `gridGap`       | `number` | `6`            | Gap between squares in the grid.       |
| `flickerChance` | `number` | `0.3`          | Probability of a square flickering.    |
| `color`         | `string` | `rgb(0, 0, 0)` | Color of the squares.                  |
| `width`         | `number` | `-`            | Width of the canvas.                   |
| `height`        | `number` | `-`            | Height of the canvas.                  |
| `class`         | `string` | `-`            | Additional CSS classes for the canvas. |
| `maxOpacity`    | `number` | `0.2`          | Maximum opacity of the squares.        |

## 感谢

- Credits to [magicui flickering-grid](https://magicui.design/docs/components/flickering-grid) for this component.
