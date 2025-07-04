---
title: Hyper Text
description: A hyper changing text animation as you hover..
---

::ComponentLoader{label="预览" componentName="HyperTextDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="hyper-text"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="HyperText.vue" language="vue" componentName="HyperText" type="ui" id="hyper-text"}
::

## API

| Prop 名称       | 类型      | 默认值   | 描述                                                      |
| --------------- | --------- | -------- | --------------------------------------------------------- |
| `class`         | `string`  | `""`     | Additional CSS classes to apply to the component.         |
| `text`          | `string`  | Required | Text to animate                                           |
| `duration`      | `number`  | `0.8`    | The total duration (in seconds) for the entire animation. |
| `animateOnLoad` | `boolean` | `true`   | Play animation on load                                    |

## 感谢

- Inspired by [Magic UI's Hyper Text](https://magicui.design/docs/components/hyper-text) component.
- Credits to [Prem](https://github.com/premdasvm) for porting this component.
