---
title: Pile de cartes
description: Empilez les cartes en les réduisant progressivement pendant le défilement.
category: Carte
tags: [css, tailwind, motion-v, scroll]
badge: New
---

::ComponentViewer{demoFile="CardStackDemo.vue" config="CardStackConfig" componentId="card-stack" :componentFiles='["CardStack.vue", "CardStackItem.vue", "CardStackContext.ts", "index.ts"]'}

#api

## API

### CardStack

| Nom de prop       | Type               | Valeur par défaut                        | Description                                    |
| ----------------- | ------------------ | ---------------------------------------- | ---------------------------------------------- |
| `totalCards`      | `number`           | —                                        | Nombre total de cartes utilisé pour le calcul. |
| `scaleMultiplier` | `number`           | `0.03`                                   | Intensité de réduction pendant le défilement.  |
| `scrollOptions`   | `UseScrollOptions` | `{ offset: ["start start", "end end"] }` | Options de défilement Motion, avec conteneur.  |
| `class`           | `string`           | `-`                                      | Classes supplémentaires du conteneur.          |

### CardStackItem

| Nom de prop   | Type     | Valeur par défaut | Description                               |
| ------------- | -------- | ----------------- | ----------------------------------------- |
| `index`       | `number` | —                 | Index de la carte utilisé pour le calcul. |
| `topPosition` | `string` | `5 + index * 3%`  | Décalage supérieur sticky de la carte.    |
| `class`       | `string` | `-`               | Classes supplémentaires du wrapper.       |

## Utilisation

Utilisez `CardStack` comme parent et placez un `CardStackItem` autour de chaque carte. Définissez une hauteur pour chaque élément afin de laisser le défilement sticky progresser.

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

- Porté depuis [Fancy Components](https://fancycomponents.dev/docs/components/blocks/stacking-cards).

::
