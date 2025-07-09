---
title: 照片墙
description: Showcase your team with pride using our stunning Photo Gallery Component.
---

::ComponentLoader{label="预览" componentName="PhotoGalleryDemo" type="examples" id="photo-gallery"}
::

## 通过 CLI 安装

::InstallationCli{componentId="photo-gallery"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="PhotoGallery.vue" language="vue" componentName="PhotoGallery" type="ui" id="photo-gallery"}
::

## API

| Prop 名称        | 类型                | 默认值 | 描述                                                   |
| ---------------- | ------------------- | ------ | ------------------------------------------------------ |
| `items`          | `"[{src: string}]"` | `[]`   | Pass items / image src to animate                      |
| `containerClass` | `string`            | `""`   | Additional tailwind CSS classes for container styling. |
| `class`          | `string`            | `""`   | Additional tailwind CSS classes for custom styling.    |

## 感谢

- All images from [Pexels](https://www.pexels.com/@soldiervip/)
- Thanks to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for providing this component.
