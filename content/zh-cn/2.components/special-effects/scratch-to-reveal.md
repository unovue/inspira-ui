---
title: Scratch To Reveal
description: The ScratchToReveal component creates an interactive scratch-off effect with customizable dimensions and animations, revealing hidden content beneath.
---

::ComponentLoader{label="预览" componentName="ScratchToRevealDemo" type="examples" id="scratch-to-reveal"}
::

## 通过 CLI 安装

::InstallationCli{componentId="scratch-to-reveal"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="ScratchToReveal.vue" language="vue" componentName="ScratchToReveal" type="ui" id="scratch-to-reveal"}
::

## API

| Prop 名称              | 类型                     | 默认值 | 描述                                                                                          |
| ---------------------- | ------------------------ | ------ | --------------------------------------------------------------------------------------------- |
| `class`                | `string`                 | `""`   | The class name to apply to the component.                                                     |
| `width`                | `number`                 | `""`   | Width of the scratch container.                                                               |
| `height`               | `number`                 | `""`   | Height of the scratch container.                                                              |
| `minScratchPercentage` | `number`                 | `50`   | Minimum percentage of scratched area to be considered as completed (Value between 0 and 100). |
| `gradientColors`       | `[string,string,string]` | `-`    | Gradient colors for the scratch effect.                                                       |

| Event Name | Payload | 描述                                               |
| ---------- | ------- | -------------------------------------------------- |
| `complete` | `-`     | Callback function called when scratch is completed |

| Slot Name | 默认值 Content | 描述                                   |
| --------- | -------------- | -------------------------------------- |
| `default` | `-`            | The text below the scratch-off ticket. |

## Component Code

You can 复制并粘贴以下代码： to create this component:

::CodeViewer{filename="ScratchToReveal.vue" language="vue" componentName="ScratchToReveal" type="ui" id="scratch-to-reveal"}
::

## 感谢

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired by [MagicUI Scratch To Reveal](https://magicui.design/docs/components/scratch-to-reveal).
