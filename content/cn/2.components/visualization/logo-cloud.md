---
title: Animated Logo Cloud
description: Animated company cloud logs. Usually we can use to show company logos.
---

::ComponentLoader{label="Preview" componentName="StaticLogoCloudDemo" type="examples" id="logo-cloud"}
::

## 使用 CLI 安装

::InstallationCli{componentId="logo-cloud"}
::

## 手动安装

将以下代码复制并粘贴到同一文件夹中

::code-group

:CodeViewerTab{label="AnimatedLogoCloud.vue" language="vue" componentName="AnimatedLogoCloud" type="ui" id="logo-cloud"}
:CodeViewerTab{label="IconLogoCloud.vue" language="vue" componentName="IconLogoCloud" type="ui" id="logo-cloud"}
:CodeViewerTab{label="StaticLogoCloud.vue" language="vue" componentName="StaticLogoCloud" type="ui" id="logo-cloud"}
:CodeViewerTab{filename="index.ts" language="typescript" componentName="index" type="ui" id="logo-cloud" extension="ts"}

::

## Examples

### Animated logs

Animated company logos.

::ComponentLoader{label="Preview" componentName="AnimatedLogoCloudDemo" type="examples" id="logo-cloud"}
::

### Icon Logo

Company logo icons

::ComponentLoader{label="Preview" componentName="IconLogoCloudDemo" type="examples" id="logo-cloud"}
::

## API

| Prop Name | 类型     | 默认值                      | 说明                                                           |
| --------- | -------- | --------------------------- | -------------------------------------------------------------- |
| `class`   | `string` | `-`                         | The delay in milliseconds before adding each item to the list. |
| `title`   | `string` | `Trusted by Companies like` | Title of animated logs.                                        |
| `logos`   | `[]`     | `[{name: "", path: ""}]`    | Array of items(logos) with name & path fields.                 |

## 致谢

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
