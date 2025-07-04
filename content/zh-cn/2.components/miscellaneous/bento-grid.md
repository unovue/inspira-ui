---
title: Bento Grid
description: A cool grid layout with different child component.
---

::ComponentLoader{label="预览" componentName="BentoGridDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="bento-grid"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="BentoGrid.vue" language="vue" componentName="BentoGrid" type="ui" id="bento-grid"}
:CodeViewerTab{label="BentoGridCard.vue" language="vue" componentName="BentoGridCard" type="ui" id="bento-grid"}
:CodeViewerTab{label="BentoGridItem.vue" language="vue" componentName="BentoGridItem" type="ui" id="bento-grid"}

::

## 示例

`BentoGrid` in MagicUI style.

::ComponentLoader{label="预览" componentName="BentoGridDemo2" type="examples"}
::

## API

#### `BentoGridItem`

| Slot Name     | 描述                              |
| ------------- | --------------------------------- |
| `title`       | Component to show as title.       |
| `description` | Component to show as description. |
| `icon`        | Component to show as icon.        |
| `header`      | Component to show as header.      |

#### `BentoGridCard`

| Slot Name    | 描述                             |
| ------------ | -------------------------------- |
| `background` | Component to show in background. |

| Props Name    | 类型      | 描述                                 |
| ------------- | --------- | ------------------------------------ |
| `name`        | `string`  | Name or title to show on card.       |
| `icon`        | `?string` | Icon component to show on card.      |
| `description` | `string`  | Description content to show on card. |
| `href`        | `string`  | Link to the url for CTA.             |
| `cta`         | `string`  | Text to show on CTA.                 |

## 感谢

- Credits to [Aceternity UI](https://ui.aceternity.com/components/bento-grid) and [Magic UI](https://magicui.design/docs/components/bento-grid) for this fantastic component.
