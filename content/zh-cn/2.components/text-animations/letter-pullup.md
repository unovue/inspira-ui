---
title: 文字上弹
description: 文字依序向上弹出。
---

::ComponentLoader{label="预览" componentName="LetterPullupDemo" type="examples" id="letter-pullup"}
::

## 通过 CLI 安装

::InstallationCli{componentId="letter-pullup"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="LetterPullup.vue" language="vue" componentName="LetterPullup" type="ui" id="letter-pullup"}
::

## API

| Prop 名称 | 类型     | 默认值                     | 描述                                               |
| --------- | -------- | -------------------------- | -------------------------------------------------- |
| `class`   | `string` | `-`                        | The class to be applied to the component.          |
| `words`   | `string` | `Staggered Letter Pull Up` | Text to animate.                                   |
| `delay`   | `number` | `0.05`                     | Delay each letter's animation by this many seconds |

## 感谢

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
- Inspired from [Magic UI](https://magicui.design/docs/components/letter-pullup).
