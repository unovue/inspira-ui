---
title: Float
description: Ajoutez un mouvement organique continu sur les axes de position et de rotation en 3D.
category: Miscellaneous
tags: [css, tailwind, motion-v, 3d, animation]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="FloatDemo.vue" config="FloatConfig" componentId="float" :componentFiles='["Float.vue", "index.ts"]'}

#api

## API

| Nom de la prop  | Type                       | Valeur par défaut | Description                                             |
| --------------- | -------------------------- | ----------------- | ------------------------------------------------------- |
| `speed`         | `number`                   | `0.5`             | Progression du temps à chaque image.                    |
| `amplitude`     | `[number, number, number]` | `[10, 30, 30]`    | Amplitude de déplacement des axes X, Y et Z en pixels.  |
| `rotationRange` | `[number, number, number]` | `[15, 15, 7.5]`   | Plage de rotation des axes X, Y et Z en degrés.         |
| `timeOffset`    | `number`                   | `0`               | Décalage de phase pour désynchroniser plusieurs objets. |
| `class`         | `string`                   | —                 | Classes supplémentaires du wrapper animé.               |

Placez le contenu à animer dans le slot par défaut. Le composant conserve les transformations 3D et met à jour sa position à chaque image.

#credits

- Porté depuis [Fancy Components Float](https://fancycomponents.dev/docs/components/blocks/float).

::
