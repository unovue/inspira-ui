---
title: 交互网格背景
description: A interactive background grid pattern made with SVGs, fully customizable.
---

::ComponentLoader{label="预览" componentName="InteractiveGridPatternDemo" type="examples" id="interactive-grid-pattern"}
::

## 通过 CLI 安装

::InstallationCli{componentId="interactive-grid-pattern"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="InteractiveGridPattern.vue" language="vue" componentName="InteractiveGridPattern" type="ui" id="interactive-grid-pattern"}
::

## 示例

::ComponentLoader{label="预览" componentName="InteractiveGridPatternColoredDemo" type="examples" id="interactive-grid-pattern"}
::

## API

#### Props

| Prop 名称          | 类型               | 默认值     | 描述                                          |
| ------------------ | ------------------ | ---------- | --------------------------------------------- |
| `className`        | `string`           | -          | Additional classes for styling the component. |
| `squaresClassName` | `string`           | -          | Additional classes for styling the squares.   |
| `width`            | `number`           | `40`       | Width of the square in pixels.                |
| `height`           | `number`           | `40`       | Height of the square in pixels.               |
| `squares`          | `[number, number]` | `[24, 24]` | Number of squares in the grid pattern.        |

## 感谢

- Inspired by [MagicUI](https://magicui.design/docs/components/interactive-grid-pattern).
- Credits to [kalix127](https://github.com/kalix127) for porting this component.
