---
title: Direction Aware Hover
description: A direction aware hover card, that displays an image with dynamic hover effects and customizable content overlay.
---

::ComponentLoader{label="预览" componentName="DirectionAwareHoverDemo" type="examples"}  
::

## 通过 CLI 安装

::InstallationCli{componentId="direction-aware-hover"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="DirectionAwareHover.vue" language="vue" componentName="DirectionAwareHover" type="ui" id="direction-aware-hover"}
::

## API

| Prop 名称       | 类型     | 默认值      | 描述                                            |
| --------------- | -------- | ----------- | ----------------------------------------------- |
| `imageUrl`      | `string` | Required    | The URL of the image to be displayed.           |
| `class`         | `string` | `undefined` | Additional CSS classes for the card container.  |
| `imageClass`    | `string` | `undefined` | Additional CSS classes for the image element.   |
| `childrenClass` | `string` | `undefined` | Additional CSS classes for the content overlay. |

## 感谢

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Direction Aware Hover](https://ui.aceternity.com/components/direction-aware-hover)
