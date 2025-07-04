---
title: Snowfall Background
description: A beautifully animated snowfall effect applied as a background.
---

::ComponentLoader{label="预览" componentName="SnowfallBgDemo" type="examples" id="backgrounds"}
::

## 通过 CLI 安装

::InstallationCli{componentId="snowfall-bg"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="SnowfallBg.vue" language="vue" componentName="SnowfallBg" type="ui" id="snowfall-bg"}
::

## API

| Prop 名称   | 类型     | 默认值 | 描述                                                      |
| ----------- | -------- | ------ | --------------------------------------------------------- |
| `color`     | `string` | `#FFF` | Color of the snowflakes in hexadecimal format.            |
| `quantity`  | `number` | `100`  | Number of snowflakes to display.                          |
| `speed`     | `number` | `1`    | Speed at which snowflakes fall.                           |
| `maxRadius` | `number` | `3`    | Maximum radius of snowflakes.                             |
| `minRadius` | `number` | `1`    | Minimum radius of snowflakes.                             |
| `class`     | `string` | `null` | Additional CSS classes to apply to the container element. |

## 感谢

- Inspired by natural snowfall effects.
