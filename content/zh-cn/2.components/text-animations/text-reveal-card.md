---
title: Text Reveal Card
description: Mousemove effect to reveal text content at the bottom of the card.
---

::ComponentLoader{label="预览" componentName="TextRevealCardDemo" type="examples"}  
::

## 通过 CLI 安装

::InstallationCli{componentId="text-reveal-card"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="TextRevealCard.vue" language="vue" componentName="TextRevealCard" type="ui" id="text-reveal-card"}
:CodeViewerTab{filename="TextRevealStars.vue" language="vue" componentName="TextRevealStars" type="ui" id="text-reveal-card"}
::

## API

| Prop 名称  | 类型     | 描述                                                             |
| ---------- | -------- | ---------------------------------------------------------------- |
| class      | `String` | Additional classes to be added to the card.                      |
| starsCount | `Number` | Control the number of stars that are generated                   |
| starsClass | `String` | Additional classes to be added to the stars floating on content. |

| Slot Name  | 描述                                                    |
| ---------- | ------------------------------------------------------- |
| header     | `String`                                                |
| text       | Display default text when the card is not hovered over. |
| revealText | Text to be revealed when hovered over the card.         |

## 感谢

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Text Reveal Card](https://ui.aceternity.com/components/text-reveal-card).
