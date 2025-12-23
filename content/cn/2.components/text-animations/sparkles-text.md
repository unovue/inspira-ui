---
title: 闪光文字
description: 为文字持续生成闪光与平滑过渡，非常适合突出显示的星光效果。
category: 文字动画
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="SparklesTextDemo.vue" config="SparklesTextConfig" componentId="sparkles-text" :componentFiles='["SparklesText.vue"]'}

#api

## API

| 属性名         | 类型     | 默认值                                  | 描述                        |
| -------------- | -------- | --------------------------------------- | --------------------------- |
| `class`        | `string` | `-`                                      | 应用于闪光文字的类名。      |
| `text`         | `string` | ``                                       | 要显示的文字。              |
| `sparklesCount`| `number` | `10`                                     | 文字上出现的闪光数量。      |
| `colors`       | `object` | `{first: '#A07CFE'; second: '#FE8FB5';}` | 闪光的颜色配置。            |

#credits

- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 提供该组件。
- 灵感来自 [Magic UI](https://magicui.design/docs/components/sparkles-text)。
- 感谢 [M Atif](https://github.com/atif0075) 更新该组件。

::
