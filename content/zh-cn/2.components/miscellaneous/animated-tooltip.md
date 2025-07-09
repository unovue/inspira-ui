---
title: Animated Tooltip
description: A cool tooltip that reveals on hover, follows mouse pointer
---

::ComponentLoader{label="预览" componentName="AnimatedTooltipDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="animated-tooltip"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="AnimatedTooltip.vue" language="vue" componentName="AnimatedTooltip" type="ui" id="animated-tooltip"}
::

## API

| Prop 名称 | 类型                                                                    | 默认值 | 描述                                                                                                                                        |
| --------- | ----------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`   | `Array<{id: number, name: string, designation: string, image: string}>` | `[]`   | An array of objects, each representing an item. Each object in the array should have the following properties: id, name, designation, image |

## 感谢

- Credits to [M Atif](https://github.com/atif0075) for this component.

- Inspired from [Aceternity UI's Animated Tooltip](https://ui.aceternity.com/components/animated-tooltip).
