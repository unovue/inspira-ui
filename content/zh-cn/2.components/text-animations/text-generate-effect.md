---
title: 文字生成效果
description: 一个酷炫的文本效果，在页面加载时文本一个接一个淡入。
---

::ComponentLoader{label="预览" componentName="TextGenerateDemo" type="examples"}  
::

## 通过 CLI 安装

::InstallationCli{componentId="text-generate-effect"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="TextGenerateEffect.vue" language="vue" componentName="TextGenerateEffect" type="ui" id="text-generate-effect"}
::

## 示例

Two text with different delay

::ComponentLoader{label="预览" componentName="TextGenerateEffectDemoDelayed" type="examples" id="text-generate-effect"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## API

| Prop 名称  | 类型      | 默认值   | 描述                                                                   |
| ---------- | --------- | -------- | ---------------------------------------------------------------------- |
| `words`    | `string`  | Required | The text to be displayed with the generating effect.                   |
| `duration` | `number`  | `0.7`    | The duration of the text generation animation in seconds.              |
| `delay`    | `number`  | `0`      | The delay before the text generation animation starts in milliseconds. |
| `filter`   | `boolean` | `true`   | The blur of the text.                                                  |

## 感谢

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Text Generate Effect](https://ui.aceternity.com/components/text-generate-effect).
