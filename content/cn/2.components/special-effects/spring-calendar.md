---
title: 弹性日历
description: 带弹簧动画的日历组件，可展开查看事件，使用 Motion-V 实现平滑过渡。
category: Special Effects
tags: [css, tailwind, motion-v]
---

::ComponentViewer{demoFile="SpringCalendarDemo.vue" config="SpringCalendarConfig" componentId="spring-calendar" :componentFiles='["SpringCalendar.vue", "TextMorph.vue"]'}

#api

## API

| 属性名          | 类型                                                                                                           | 默认值 | 描述                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------- |
| `calendarData`  | `Array<{ month: string; date: number; day: string; events?: { title: string; day: string; time: string }[] }>` | **—**  | 定义每一天及可选事件的数组。_必填。_                |
| `initialIndex`  | `number`                                                                                                       | `0`    | 初始选中的日期索引。                                |

### Emits

| 事件名              | 负载     | 描述                                      |
| ------------------- | -------- | ----------------------------------------- |
| `update:activeIndex`| `number` | 当点击日期按钮时触发，返回新的激活索引。  |

#credits

- 灵感来自 [sekachov](https://x.com/sekachov) 的作品。

::
