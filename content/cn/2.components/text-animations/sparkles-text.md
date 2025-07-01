---
title: Sparkles Text
description: A dynamic text that generates continuous sparkles with smooth transitions, perfect for highlighting text with animated stars.
---

::ComponentLoader{label="Preview" componentName="SparklesTextDemo" type="examples" id="sparkles-text"}
::

## 使用 CLI 安装

::InstallationCli{componentId="sparkles-text"}
::

## 手动安装

复制并粘贴以下代码

::CodeViewer{filename="SparklesText.vue" language="vue" componentName="SparklesText" type="ui" id="sparkles-text"}
::

## API

| Prop Name       | 类型     | 默认值                                   | 说明                                          |
| --------------- | -------- | ---------------------------------------- | --------------------------------------------- |
| `class`         | `string` | `-`                                      | The class to be applied to the sparkles text. |
| `text`          | `string` | ``                                       | The text to display.                          |
| `sparklesCount` | `number` | `10`                                     | sparkles count that appears on the text.      |
| `colors`        | `object` | `{first: '#A07CFE'; second: '#FE8FB5';}` | The sparkles colors.                          |

## 致谢

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
- Inspired from [Magic UI](https://magicui.design/docs/components/sparkles-text).
- Credits to [M Atif](https://github.com/atif0075) for updating this component.
