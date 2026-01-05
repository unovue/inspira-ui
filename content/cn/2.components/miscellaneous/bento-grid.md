---
title: Bento 网格
description: 炫酷的 Bento 网格布局，可放置不同子组件。
category: Miscellaneous
tags: [css, tailwind, bento, aceternity-ui]
---

::ComponentViewer{demoFile="BentoGridDemo.vue" config="BentoGridConfig" componentId="bento-grid" :componentFiles='["BentoGrid.vue", "BentoGridCard.vue", "BentoGridItem.vue"]'}

#api

#### `BentoGridItem`

| 插槽名        | 描述                 |
| ------------- | -------------------- |
| `title`       | 作为标题显示的组件。 |
| `description` | 作为描述显示的组件。 |
| `icon`        | 作为图标显示的组件。 |
| `header`      | 作为页眉显示的组件。 |

#### `BentoGridCard`

| 插槽名      | 描述                  |
| ----------- | --------------------- |
| `background`| 显示在背景的组件。    |

| 属性名       | 类型      | 描述                   |
| ------------ | --------- | ---------------------- |
| `name`       | `string`  | 卡片上显示的名称。     |
| `icon`       | `?string` | 卡片上显示的图标。     |
| `description`| `string`  | 卡片的描述内容。       |
| `href`       | `string`  | CTA 对应的链接。       |
| `cta`        | `string`  | CTA 上显示的文字。     |

#credits

- 感谢 [Aceternity UI](https://ui.aceternity.com/components/bento-grid) 与 [Magic UI](https://magicui.design/docs/components/bento-grid) 的出色组件。

::
