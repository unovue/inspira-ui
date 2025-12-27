---
title: 动态 Logo 云
description: 动态展示公司 Logo 的云图，可用于展示合作或客户徽标。
category: 可视化
tags: [css, tailwind]
---

::ComponentViewer{demoFile="IconLogoCloudDemo.vue" config="IconLogoCloudConfig" componentId="logo-cloud" :componentFiles='["AnimatedLogoCloud.vue", "IconLogoCloud.vue", "StaticLogoCloud.vue", "index.ts"]'}

#api

## API

| 属性名 | 类型     | 默认值                      | 描述                                   |
| ------ | -------- | --------------------------- | -------------------------------------- |
| `class`| `string` | `-`                         | 将每个项目加入列表前的延迟时间（毫秒）。|
| `title`| `string` | `Trusted by Companies like` | 动态 Logo 云的标题。                   |
| `logos`| `[]`     | `[{name: "", path: ""}]`    | Logo 数组，包含名称与路径字段。        |

#credits

- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 提供该组件。

::
