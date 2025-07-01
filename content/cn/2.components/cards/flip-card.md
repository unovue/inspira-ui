---
title: Flip Card
description: A dynamic flip card with smooth 180-degree flipping animations along both the X and Y axes, providing an engaging and interactive visual effect.
---

::ComponentLoader{label="Preview" componentName="FlipCardDemo" type="examples" id="flip-card"}
::

## 使用 CLI 安装

::InstallationCli{componentId="flip-card"}
::

## 手动安装

复制并粘贴以下代码

::CodeViewer{filename="FlipCard.vue" language="vue" componentName="FlipCard" type="ui" id="flip-card"}
::

## Examples

### Horizontal Flip

::ComponentLoader{label="Preview" componentName="FlipCardHorizontalDemo" type="examples" id="flip-card"}
::

## API

| Prop Name | 类型     | 默认值 | 说明                                       |
| --------- | -------- | ------ | ------------------------------------------ |
| `class`   | `string` | `-`    | The class to be applied to the component.  |
| `rotate`  | `x \| y` | `y`    | You can pass the rotate value as you want. |

| Slot Name | 说明                        |
| --------- | --------------------------- |
| `default` | Component to show as front. |
| `back`    | Component to show as back.  |

## 致谢

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
