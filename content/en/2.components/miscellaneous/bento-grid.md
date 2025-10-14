---
title: Bento Grid
description: A cool grid layout with different child component.
---

::ComponentLoader{label="Preview" componentName="BentoGridDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="bento-grid"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="BentoGrid.vue" language="vue" componentName="BentoGrid" type="ui" id="bento-grid"}
:CodeViewerTab{label="BentoGridCard.vue" language="vue" componentName="BentoGridCard" type="ui" id="bento-grid"}
:CodeViewerTab{label="BentoGridItem.vue" language="vue" componentName="BentoGridItem" type="ui" id="bento-grid"}

::

## Examples

`BentoGrid` in MagicUI style.

::ComponentLoader{label="Preview" componentName="BentoGridDemo2" type="examples"}
::

## API

#### `BentoGridItem`

| Slot Name     | Description                       |
| ------------- | --------------------------------- |
| `title`       | Component to show as title.       |
| `description` | Component to show as description. |
| `icon`        | Component to show as icon.        |
| `header`      | Component to show as header.      |

#### `BentoGridCard`

| Slot Name    | Description                      |
| ------------ | -------------------------------- |
| `background` | Component to show in background. |

| Props Name    | Type      | Description                          |
| ------------- | --------- | ------------------------------------ |
| `name`        | `string`  | Name or title to show on card.       |
| `icon`        | `?string` | Icon component to show on card.      |
| `description` | `string`  | Description content to show on card. |
| `href`        | `string`  | Link to the url for CTA.             |
| `cta`         | `string`  | Text to show on CTA.                 |

## Credits

- Credits to [Aceternity UI](https://ui.aceternity.com/components/bento-grid) and [Magic UI](https://magicui.design/docs/components/bento-grid) for this fantastic component.
