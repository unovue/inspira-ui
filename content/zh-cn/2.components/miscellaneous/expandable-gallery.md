---
title: Expandable Gallery
description: A responsive image gallery with an interactive hover effect that expands images dynamically.
---

::ComponentLoader{label="预览" componentName="ExpandableGalleryDemo" type="examples" id="expandable-gallery"}
::

## 通过 CLI 安装

::InstallationCli{componentId="expandable-gallery"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="ExpandableGallery.vue" language="vue" componentName="ExpandableGallery" type="ui" id="expandable-gallery"}
::

## API

| Prop 名称 | 类型       | 默认值 | 描述                                           |
| --------- | ---------- | ------ | ---------------------------------------------- |
| `images`  | `string[]` | `[]`   | Array of image URLs to display in the gallery. |

## 功能特性

- **Interactive Hover Effect**: Images expand when hovered over, creating a dynamic and engaging user experience.
- **Responsive Design**: The gallery automatically adjusts to the container size, ensuring it looks great on all devices.
- **Smooth Transitions**: Includes smooth scaling animations for a polished visual effect.
- **Customizable Content**: Easily update the `images` array to change the gallery's content.

## 感谢

- Inspired from [Expandable Gallery Component by David Mráz](https://x.com/davidm_ml/status/1872319793124282653)
