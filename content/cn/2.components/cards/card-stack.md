---
title: 卡片堆叠
description: 随着用户滚动，让卡片缩放并叠放成聚焦的卡片堆。
category: 卡片
tags: [css, tailwind, motion-v, scroll]
badge: New
---

::ComponentViewer{demoFile="CardStackDemo.vue" config="CardStackConfig" componentId="card-stack" :componentFiles='["CardStack.vue", "CardStackItem.vue", "CardStackContext.ts", "index.ts"]'}

#api

## API

### CardStack

| 属性名            | 类型               | 默认值                                   | 说明                              |
| ----------------- | ------------------ | ---------------------------------------- | --------------------------------- |
| `totalCards`      | `number`           | —                                        | 用于计算堆叠缩放效果的卡片总数。  |
| `scaleMultiplier` | `number`           | `0.03`                                   | 卡片在滚动范围内缩放的幅度。      |
| `scrollOptions`   | `UseScrollOptions` | `{ offset: ["start start", "end end"] }` | Motion 滚动选项，可传入滚动容器。 |
| `class`           | `string`           | `-`                                      | 应用到堆叠容器的额外类名。        |

### CardStackItem

| 属性名        | 类型     | 默认值           | 说明                               |
| ------------- | -------- | ---------------- | ---------------------------------- |
| `index`       | `number` | —                | 用于计算缩放的从零开始的卡片索引。 |
| `topPosition` | `string` | `5 + index * 3%` | 卡片的 sticky 顶部偏移。           |
| `class`       | `string` | `-`              | 应用到卡片包装器的额外类名。       |

## 用法

使用 `CardStack` 作为父组件，并在每张卡片外包裹一个 `CardStackItem`。为每个项目设置高度，让 sticky 滚动范围可以正常推进。

```vue
<CardStack :total-cards="cards.length">
  <CardStackItem
    v-for="(card, index) in cards"
    :key="card"
    :index="index"
    class="h-dvh"
  >
    <div class="h-[80%]">{{ card }}</div>
  </CardStackItem>
</CardStack>
```

#credits

- 移植自 [Fancy Components](https://fancycomponents.dev/docs/components/blocks/stacking-cards)。

::
