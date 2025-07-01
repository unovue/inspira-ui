---
title: Interactive Grid Pattern
description: A interactive background grid pattern made with SVGs, fully customizable.
---

::ComponentLoader{label="Preview" componentName="InteractiveGridPatternDemo" type="examples" id="interactive-grid-pattern"}
::

## 使用 CLI 安装

::InstallationCli{componentId="interactive-grid-pattern"}
::

## 手动安装

复制并粘贴以下代码

::CodeViewer{filename="InteractiveGridPattern.vue" language="vue" componentName="InteractiveGridPattern" type="ui" id="interactive-grid-pattern"}
::

## Examples

::ComponentLoader{label="Preview" componentName="InteractiveGridPatternColoredDemo" type="examples" id="interactive-grid-pattern"}
::

## API

#### Props

| Prop Name          | 类型               | 默认值     | 说明                                          |
| ------------------ | ------------------ | ---------- | --------------------------------------------- |
| `className`        | `string`           | -          | Additional classes for styling the component. |
| `squaresClassName` | `string`           | -          | Additional classes for styling the squares.   |
| `width`            | `number`           | `40`       | Width of the square in pixels.                |
| `height`           | `number`           | `40`       | Height of the square in pixels.               |
| `squares`          | `[number, number]` | `[24, 24]` | Number of squares in the grid pattern.        |

## 致谢

- Inspired by [MagicUI](https://magicui.design/docs/components/interactive-grid-pattern).
- Credits to [kalix127](https://github.com/kalix127) for porting this component.
