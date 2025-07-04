---
title: Placeholders And Vanish Input
description: Sliding in placeholders and vanish effect of input on submit
---

::ComponentLoader{label="预览" componentName="VanishingInputDemo" type="examples"}  
::

## 通过 CLI 安装

::InstallationCli{componentId="vanishing-input"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="VanishingInput.vue" language="vue" componentName="VanishingInput" type="ui" id="vanishing-input"}
::

## API

| Prop 名称      | 类型            | 默认值                                                | 描述                                                                            |
| -------------- | --------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| `placeholders` | `Array<string>` | `["Placeholder 1", "Placeholder 2", "Placeholder 3"]` | An array of placeholder texts that cycle through as prompts in the input field. |

This component listens to the following events emitted by the `VanishingInput` component:

| Event Name | Parameters | 描述                                    |
| ---------- | ---------- | --------------------------------------- |
| `change`   | `Event`    | Triggered when the input value changes. |
| `submit`   | `string`   | Triggered when the input is submitted.  |

## 感谢

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Placeholders And Vanish Input](https://ui.aceternity.com/components/placeholders-and-vanish-input).
