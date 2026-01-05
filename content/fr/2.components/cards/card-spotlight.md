---
title: Carte avec spot lumineux
description: Une carte dotée d'un effet de projecteur dynamique qui suit le curseur, renforçant l'interactivité visuelle.
category: Card
tags: [css, tailwind, card, magic-ui]
---

::ComponentViewer{demoFile="CardSpotlightDemo.vue" config="CardSpotlightConfig" componentId="card-spotlight" :componentFiles='["CardSpotlight.vue"]'}

#api

## API

| Nom de propriété   | Type     | Valeur par défaut | Description                                                    |
| ------------------ | -------- | ----------------- | -------------------------------------------------------------- |
| `gradientSize`     | `number` | `200`             | Rayon de l'effet de spot, en pixels.                           |
| `gradientColor`    | `string` | `'#262626'`       | Couleur du dégradé du spot.                                    |
| `gradientOpacity`  | `number` | `0.8`             | Niveau d'opacité du dégradé du spot.                           |
| `slotClass`        | `string` | `undefined`       | Classe à appliquer au conteneur parent du slot.                |

#credits

- Inspiré du composant Magic Card de [Magic UI](https://magicui.design/docs/components/magic-card).

::
