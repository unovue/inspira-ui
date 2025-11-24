---
title: Bento Grid
description: A cool grid layout with different child component.
category: Miscellaneous
tags: [css, tailwind, bento, aceternity-ui]
---

::ComponentViewer{demoFile="BentoGridDemo.vue" config="BentoGridConfig" componentId="bento-grid" :componentFiles='["BentoGrid.vue", "BentoGridCard.vue", "BentoGridItem.vue"]'}

#api

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

#credits

- Credits to [Aceternity UI](https://ui.aceternity.com/components/bento-grid) and [Magic UI](https://magicui.design/docs/components/bento-grid) for this fantastic component.

::
