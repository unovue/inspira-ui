---
title: 粒子背景
description: 粒子背景效果可以为你的网站增加一个动态和引人入胜的视觉效果。它们有助于创造一种深度、动感和互动的感觉，使网站在视觉上更具吸引力。
---

::ComponentLoader{label="预览" componentName="ParticlesBgDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="particles-bg"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="ParticlesBg.vue" language="vue" componentName="ParticlesBg" type="ui" id="particles-bg"}
::

## API

| Prop 名称   | 类型     | 默认值 | 描述                                                                                                        |
| ----------- | -------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| `color`     | `string` | `#FFF` | Hexadecimal color code used for particles. Supports 3 or 6 character hex codes.                             |
| `quantity`  | `number` | `100`  | The number of particles to generate and display on the canvas.                                              |
| `staticity` | `number` | `50`   | Determines how much the particles move based on the mouse's proximity. Higher values reduce movement.       |
| `ease`      | `number` | `50`   | Controls the easing effect of particle movement; lower values make particles follow the mouse more closely. |

## 感谢

- Credits to [Magic UI](https://magicui.design/docs/components/particles) for this fantastic component.
- Credit to [Prodromos Pantos](https://github.com/prpanto) for porting the original component to Vue & Nuxt.
