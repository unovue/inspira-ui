---
title: Icon Cloud
description: An interactive 3D tag cloud component
---

::ComponentLoader{label="Preview" componentName="IconCloudDemo" type="examples"}
::

## 使用 CLI 安装

::InstallationCli{componentId="icon-cloud"}
::

## 手动安装

将以下代码复制并粘贴到同一文件夹中

::code-group

:CodeViewerTab{label="IconCloud.vue" language="vue" componentName="IconCloud" type="ui" id="icon-cloud"}
:CodeViewerTab{filename="index.ts" language="typescript" componentName="index" type="ui" id="icon-cloud" extension="ts"}

::

## API

| Prop Name | 类型     | 默认值 | 说明                                          |
| --------- | -------- | ------ | --------------------------------------------- |
| `class`   | `string` | -      | Additional classes for styling the component. |
| `images`  | `array`  | `[]`   | Array of image URLs to render in the cloud    |

## 致谢

- Inspired by [MagicUI](https://magicui.design/docs/components/icon-cloud).
- Credits to [kalix127](https://github.com/kalix127) for porting this component.
