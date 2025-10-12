---
title: 流星背景
description: A stunning animated starfield background with glowing and sharp trail effects.
---

::ComponentLoader{label="预览" componentName="FallingStarsBgDemo" type="examples" id="backgrounds"}
::

## 通过 CLI 安装

::InstallationCli{componentId="bg-falling-stars"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="FallingStarsBg.vue" language="vue" componentName="FallingStarsBg" type="ui" id="bg-falling-stars"}
::

## API

| Prop 名称 | 类型     | 默认值   | 描述                                        |
| --------- | -------- | -------- | ------------------------------------------- |
| `color`   | `string` | `"#FFF"` | Color of the stars in the starfield.        |
| `count`   | `number` | `200`    | Number of stars displayed in the animation. |

## 功能特性

- **Dynamic Starfield**: Creates a 3D starfield effect with stars moving toward the viewer.
- **Glowing and Sharp Trail Effects**: Each star has a sharp line and a blurred, glowing trail.
- **Customizable**: Adjust the `color` of the stars and control the number of stars using the `count` prop.
- **Responsive Design**: Automatically adapts to the size of the canvas, ensuring a full-screen starfield effect.

## 感谢

- Inspired by 3D starfield simulations and trail effects in modern canvas animations.
- Credit to [Prodromos Pantos](https://github.com/prpanto) for porting the original component to Vue & Nuxt.
