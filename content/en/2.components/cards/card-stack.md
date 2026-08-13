---
title: Card Stack
description: Layer cards as they scale into a focused stack while the user scrolls.
category: Card
tags: [css, tailwind, motion-v, scroll]
badge: New
---

::ComponentViewer{demoFile="CardStackDemo.vue" config="CardStackConfig" componentId="card-stack" :componentFiles='["CardStack.vue", "CardStackItem.vue", "CardStackContext.ts", "index.ts"]'}

#api

## API

### CardStack

| Prop Name         | Type               | Default                                  | Description                                                   |
| ----------------- | ------------------ | ---------------------------------------- | ------------------------------------------------------------- |
| `totalCards`      | `number`           | —                                        | Total cards used to calculate the stack scale.                |
| `scaleMultiplier` | `number`           | `0.03`                                   | Amount each card scales as it moves through the scroll range. |
| `scrollOptions`   | `UseScrollOptions` | `{ offset: ["start start", "end end"] }` | Motion scroll options, including an optional container.       |
| `class`           | `string`           | `-`                                      | Additional classes applied to the stack container.            |

### CardStackItem

| Prop Name     | Type     | Default          | Description                                       |
| ------------- | -------- | ---------------- | ------------------------------------------------- |
| `index`       | `number` | —                | Zero-based card index used for scale calculation. |
| `topPosition` | `string` | `5 + index * 3%` | Sticky top offset for the card.                   |
| `class`       | `string` | `-`              | Additional classes applied to the card wrapper.   |

## Usage

Use `CardStack` as the parent and place one `CardStackItem` around each card. Give each item a height so the sticky scroll range has room to progress.

```vue
<script setup lang="ts">
import { CardStack, CardStackItem } from "@/components/inspira/ui/card-stack";

const cards = ["First", "Second", "Third"];
</script>

<template>
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
</template>
```

#credits

- Ported from [Fancy Components](https://fancycomponents.dev/docs/components/blocks/stacking-cards).

::
