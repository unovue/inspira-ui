---
title: 数字滚动
description: 动画数字向目标值递增或递减。
category: 文字动画
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="NumberTickerDemo.vue" config="NumberTickerConfig" componentId="number-ticker" :componentFiles='["NumberTicker.vue"]'}

#api

## API

| 属性名          | 类型                | 默认值         | 描述                                              |
| --------------- | ------------------- | -------------- | ------------------------------------------------- |
| `value`         | `int`               | `0`            | 需要滚动到的目标值。                              |
| `direction`     | `up \| down`        | `up`           | 计数方向。                                        |
| `decimalPlaces` | `number`            | `0`            | 显示的小数位数。                                  |
| `delay`         | `number`            | `0`            | 开始计数前的延迟（毫秒）。                        |
| `duration`      | `number`            | `1000`         | 整个动画的持续时间（毫秒）。                      |
| `transition`    | `TransitionPresets` | `easeOutCubic` | 过渡预设名称（https://vueuse.org/core/useTransition）。 |

#credits

- 感谢 [Grzegorz Krol](https://github.com/Grzechu335) 移植该组件。
- 移植自 [Magic UI NumberTicker](https://magicui.design/docs/components/number-ticker)。

::
