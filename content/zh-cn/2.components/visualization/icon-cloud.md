---
title: 图标云
description: 一个3D交互式球形环绕组件。
---

::ComponentLoader{label="预览" componentName="IconCloudDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="icon-cloud"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="IconCloud.vue" language="vue" componentName="IconCloud" type="ui" id="icon-cloud"}
:CodeViewerTab{filename="index.ts" language="typescript" componentName="index" type="ui" id="icon-cloud" extension="ts"}

::

## API

| Prop 名称 | 类型     | 默认值 | 描述                                          |
| --------- | -------- | ------ | --------------------------------------------- |
| `class`   | `string` | -      | Additional classes for styling the component. |
| `images`  | `array`  | `[]`   | Array of image URLs to render in the cloud    |

## 感谢

- Inspired by [MagicUI](https://magicui.design/docs/components/icon-cloud).
- Credits to [kalix127](https://github.com/kalix127) for porting this component.
