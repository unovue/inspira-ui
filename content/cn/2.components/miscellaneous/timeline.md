---
title: 时间线
description: 视觉化、交互式的时间线组件，带平滑动画、粘性标签与渐变滚动效果。
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TimelineDemo.vue" config="TimelineConfig" componentId="timeline" :componentFiles='["Timeline.vue"]'}

#api

## API

| 属性名          | 类型                               | 默认值 | 描述                                  |
| --------------- | ---------------------------------- | ------ | ------------------------------------- |
| `containerClass`| `string`                           | `""`   | 时间线容器的额外 CSS 类。             |
| `class`         | `string`                           | `""`   | 其他样式的额外 CSS 类。               |
| `items`         | `{ id: string; label: string; }[]` | `[]`   | 时间线条目列表，每项包含 ID 与标签。  |
| `title`         | `string`                           | `""`   | 时间线部分的标题。                    |
| `description`   | `string`                           | `""`   | 显示在标题下方的描述文字。            |

#credits

- 灵感并移植自 [Aceternity UI's Timeline](https://ui.aceternity.com/components/timeline)。

::
