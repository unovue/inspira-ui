---
title: Container Text Flip
description: A container that flips through words, animating the width.
---

::ComponentLoader{label="预览" componentName="ContainerTextFlipDemo" type="examples" id="container-text-flip"}
::

## 通过 CLI 安装

::InstallationCli{componentId="container-text-flip"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="ContainerTextFlip.vue" language="vue" componentName="ContainerTextFlip" type="ui" id="container-text-flip"}
::

## Example

Standard

::ComponentLoader{label="预览" componentName="ContainerTextFlipStandardDemo" type="examples" id="container-text-flip"}
::

Hero section with animation

::ComponentLoader{label="预览" componentName="ContainerTextFlipHeroDemo" type="examples" id="container-text-flip"}
::

## API

| Prop 名称           | 类型       | 默认值                                         | 描述                                                 |
| ------------------- | ---------- | ---------------------------------------------- | ---------------------------------------------------- |
| `words`             | `string[]` | `["better", "modern", "beautiful", "awesome"]` | Array of words to cycle through in the animation     |
| `interval`          | `number`   | `3000`                                         | Time in milliseconds between word transitions        |
| `animationDuration` | `number`   | `700`                                          | Duration of the transition animation in milliseconds |
| `class`             | `string`   | ``                                             | Additional CSS classes to apply to the container     |
| `textClass`         | `string`   | ``                                             | Additional CSS classes to apply to the text          |

## 感谢

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Ported from [Aceternity UI Container Text Flip](https://ui.aceternity.com/components/container-text-flip).
