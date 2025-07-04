---
title: Flip Words
description: A component that flips through a list of words.
---

::ComponentLoader{label="预览" componentName="FlipWordsDemo" type="examples"}  
::

## 通过 CLI 安装

::InstallationCli{componentId="flip-words"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="FlipWords.vue" language="vue" componentName="FlipWords" type="ui" id="flip-words"}
::

## API

| Prop 名称  | 类型     | 描述                                                                                       |
| ---------- | -------- | ------------------------------------------------------------------------------------------ |
| `words`    | `Array`  | An array of words to be displayed and animated.                                            |
| `duration` | `number` | Duration (in milliseconds) for each word to be displayed before flipping to the next word. |
| `class`    | `string` | Additional CSS classes to apply to the component.                                          |

## 感谢

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Flip Words](https://ui.aceternity.com/components/flip-words)
