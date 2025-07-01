---
title: Text Reveal Card
description: Mousemove effect to reveal text content at the bottom of the card.
---

::ComponentLoader{label="Preview" componentName="TextRevealDemo" type="examples"}  
::

## 使用 CLI 安装

::InstallationCli{componentId="text-reveal-card"}
::

## 手动安装

将以下代码复制并粘贴到同一文件夹中

::code-group

:CodeViewerTab{label="TextRevealCard.vue" language="vue" componentName="TextRevealCard" type="ui" id="text-reveal-card"}
:CodeViewerTab{filename="TextRevealStars.vue" language="vue" componentName="TextRevealStars" type="ui" id="text-reveal-card"}
::

## API

| Prop Name  | 类型     | 说明                                                             |
| ---------- | -------- | ---------------------------------------------------------------- |
| class      | `String` | Additional classes to be added to the card.                      |
| starsCount | `Number` | Control the number of stars that are generated                   |
| starsClass | `String` | Additional classes to be added to the stars floating on content. |

| Slot Name  | 说明                                                    |
| ---------- | ------------------------------------------------------- |
| header     | `String`                                                |
| text       | Display default text when the card is not hovered over. |
| revealText | Text to be revealed when hovered over the card.         |

## 致谢

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Text Reveal Card](https://ui.aceternity.com/components/text-reveal-card).
