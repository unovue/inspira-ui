---
title: Ripple Button
description: A stylish ripple button component with customizable colors and animation duration.
---

::ComponentLoader{label="Preview" componentName="RippleButtonDemo" type="examples"}
::

## 使用 CLI 安装

::InstallationCli{componentId="ripple-button"}
::

## 手动安装

复制并粘贴以下代码

::CodeViewer{filename="RippleButton.vue" language="vue" componentName="RippleButton" type="ui" id="ripple-button"}
::

## API

| Prop Name     | 类型     | 默认值      | 说明                                              |
| ------------- | -------- | ----------- | ------------------------------------------------- |
| `class`       | `string` | -           | Additional CSS classes for custom styling.        |
| `rippleColor` | `string` | `"#ADD8E6"` | Color of the ripple effect.                       |
| `duration`    | `number` | `600`       | Duration of the ripple animation in milliseconds. |

## Emits

| Event Name | 类型    | 说明        |
| ---------- | ------- | ----------- |
| `click`    | `event` | Click event |

## 致谢

- Inspired by [Magic UI's Ripple Button](https://magicui.design/docs/components/ripple-button) component.
- Credits to [kalix127](https://github.com/kalix127) for porting this component.
