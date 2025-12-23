---
title: 多步加载器
description: 多步骤加载组件，支持异步条件。
category: 杂项
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="MultiStepLoaderDemo.vue" config="MultiStepLoaderConfig" componentId="multi-step-loader" :componentFiles='["MultiStepLoader.vue"]'}

#api

## API

| 属性名           | 类型      | 默认值 | 描述                                            |
| ---------------- | --------- | ------ | ----------------------------------------------- |
| `loading`        | `boolean` | `false`| 控制加载器可见性，为 `true` 时显示。            |
| `steps`          | `Step[]`  | `[]`   | 定义加载序列的步骤数组。                        |
| `defaultDuration`| `number`  | `1500` | 每个步骤的持续时间（毫秒）。                    |
| `preventClose`   | `boolean` | `false`| 若为 `true`，不显示关闭按钮。                   |

| 事件名          | 负载类型 | 描述                                 |
| --------------- | -------- | ------------------------------------ |
| `state-change`  | `number` | 当前步骤变化时触发，返回新步骤索引。 |
| `complete`      | `void`   | 所有步骤完成时触发。                 |
| `close`         | `void`   | 点击按钮关闭加载器时触发。           |

#credits

- 感谢 [M Atif](https://github.com/atif0075) 提供该组件。
- 灵感来自 [Aceternity UI's Multi Step Loader](https://ui.aceternity.com/components/multi-step-loader)。

::
