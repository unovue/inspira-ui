---
title: Line Shadow Text
description: A line shadow text component for Magic UI that adds a shadow effect to the text, making it visually appealing and engaging.
---

::ComponentLoader{label="预览" componentName="LineShadowTextDemo" type="examples" id="line-shadow-text"}
::

## 通过 CLI 安装

::InstallationCli{componentId="line-shadow-text"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="LineShadowText.vue" language="vue" componentName="LineShadowText" type="ui" id="line-shadow-text"}
::

## API

| Prop 名称     | 类型     | 默认值    | 描述                                       |
| ------------- | -------- | --------- | ------------------------------------------ |
| `shadowColor` | `string` | `"black"` | The color of the shadow effect             |
| `class`       | `string` | `""`      | Additional CSS classes for custom styling. |
| `as`          | `string` | `"span"`  | The HTML element to render the text as.    |

## 功能特性

- **Slot-Based Content**: Supports default slots for dynamic content, making it flexible for various use cases.

## 感谢

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
- Ported from [Magic UI's Line Shadow Text](https://magicui.design/docs/components/line-shadow-text)
