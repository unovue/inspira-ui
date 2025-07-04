---
title: Animated Logo Cloud
description: Animated company cloud logs. Usually we can use to show company logos.
---

::ComponentLoader{label="预览" componentName="StaticLogoCloudDemo" type="examples" id="logo-cloud"}
::

## 通过 CLI 安装

::InstallationCli{componentId="logo-cloud"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="AnimatedLogoCloud.vue" language="vue" componentName="AnimatedLogoCloud" type="ui" id="logo-cloud"}
:CodeViewerTab{label="IconLogoCloud.vue" language="vue" componentName="IconLogoCloud" type="ui" id="logo-cloud"}
:CodeViewerTab{label="StaticLogoCloud.vue" language="vue" componentName="StaticLogoCloud" type="ui" id="logo-cloud"}
:CodeViewerTab{filename="index.ts" language="typescript" componentName="index" type="ui" id="logo-cloud" extension="ts"}

::

## 示例

### Animated logs

Animated company logos.

::ComponentLoader{label="预览" componentName="AnimatedLogoCloudDemo" type="examples" id="logo-cloud"}
::

### Icon Logo

Company logo icons

::ComponentLoader{label="预览" componentName="IconLogoCloudDemo" type="examples" id="logo-cloud"}
::

## API

| Prop 名称 | 类型     | 默认值                      | 描述                                                           |
| --------- | -------- | --------------------------- | -------------------------------------------------------------- |
| `class`   | `string` | `-`                         | The delay in milliseconds before adding each item to the list. |
| `title`   | `string` | `Trusted by Companies like` | Title of animated logs.                                        |
| `logos`   | `[]`     | `[{name: "", path: ""}]`    | Array of items(logos) with name & path fields.                 |

## 感谢

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
