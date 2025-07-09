---
title: Colourful Text
description: A text component with various colours, filter and scale effects.
---

::ComponentLoader{label="预览" componentName="ColourfulTextDemo" type="examples" id="colourful-text"}
::

## 通过 CLI 安装

::InstallationCli{componentId="colourful-text"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="ColourfulText.vue" language="vue" componentName="ColourfulText" type="ui" id="colourful-text"}
::

## API

| Prop 名称    | 类型       | 默认值                                                                                                                                                                                                             | 描述                                                                                                                                                      |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`       | `string`   | `"black"`                                                                                                                                                                                                          | The text string to be rendered with colorful animated characters. Each character will be individually animated with color transitions and motion effects. |
| `colors`     | `string[]` | `[ "rgb(131, 179, 32)", "rgb(47, 195, 106)", "rgb(42, 169, 210)", "rgb(4, 112, 202)", "rgb(107, 10, 255)", "rgb(183, 0, 218)", "rgb(218, 0, 171)", "rgb(230, 64, 92)", "rgb(232, 98, 63)", "rgb(249, 129, 47)", ]` | The text use colors.                                                                                                                                      |
| `startColor` | `string`   | `"rgb(255,255,255)"`                                                                                                                                                                                               | The char start color.                                                                                                                                     |
| `duration`   | `number`   | `5`                                                                                                                                                                                                                | The animation duration time in seconds.                                                                                                                   |

## 感谢

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Ported from [Aceternity UI Colourful Text](https://ui.aceternity.com/components/colourful-text)
