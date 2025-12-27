---
title: Animated Logo Cloud
description: Animated company cloud logs. Usually we can use to show company logos.
category: Visualization
tags: [css, tailwind]
---

::ComponentViewer{demoFile="IconLogoCloudDemo.vue" config="IconLogoCloudConfig" componentId="logo-cloud" :componentFiles='["AnimatedLogoCloud.vue", "IconLogoCloud.vue", "StaticLogoCloud.vue", "index.ts"]'}

#api

## API

| Prop Name | Type     | Default                     | Description                                                    |
| --------- | -------- | --------------------------- | -------------------------------------------------------------- |
| `class`   | `string` | `-`                         | The delay in milliseconds before adding each item to the list. |
| `title`   | `string` | `Trusted by Companies like` | Title of animated logs.                                        |
| `logos`   | `[]`     | `[{name: "", path: ""}]`    | Array of items(logos) with name & path fields.                 |

#credits

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.

::
