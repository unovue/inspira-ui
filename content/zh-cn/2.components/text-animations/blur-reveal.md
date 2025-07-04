---
title: Blur Reveal
description: A component to smoothly blur fade in content.
---

::ComponentLoader{label="预览" componentName="BlurRevealDemo" type="examples"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## 通过 CLI 安装

::InstallationCli{componentId="blur-reveal"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="BlurReveal.vue" language="vue" componentName="BlurReveal" type="ui" id="blur-reveal"}
::

## API

| Prop 名称  | 类型     | 默认值 | 描述                                                                         |
| ---------- | -------- | ------ | ---------------------------------------------------------------------------- |
| `duration` | `number` | `1`    | Duration of the blur fade in animation.                                      |
| `delay`    | `number` | `1`    | Delay between child components to reveal                                     |
| `blur`     | `string` | `10px` | Amount of blur to apply to the child components.                             |
| `yOffset`  | `number` | `20`   | Specifies the vertical offset distance (yOffset) for the entrance animation. |

## 感谢

- Credits to [Magic UI](https://magicui.design/docs/components/blur-fade) for this fantastic component.
