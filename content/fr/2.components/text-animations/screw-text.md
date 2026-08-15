---
title: Screw Text
description: Faites pivoter chaque lettre avec une transition 3D au survol du texte.
category: Animation de texte
tags: [css, tailwind, motion-v, 3d]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="ScrewTextDemo.vue" config="ScrewTextConfig" componentId="screw-text" :componentFiles='["ScrewText.vue", "index.ts"]'}

#api

## API

| Prop              | Type                                      | Valeur par défaut  | Description                                  |
| ----------------- | ----------------------------------------- | ------------------ | -------------------------------------------- |
| `label`           | `string`                                  | —                  | Texte séparé en lettres animées.             |
| `as`              | `string`                                  | `"p"`              | Élément HTML utilisé pour le texte racine.   |
| `rotateDirection` | `"top" \| "right" \| "bottom" \| "left"`  | `"right"`          | Axe et direction de la transition 3D.        |
| `staggerDuration` | `number`                                  | `0.05`             | Délai entre les animations des lettres.      |
| `staggerFrom`     | `"first" \| "last" \| "center" \| number` | `"first"`          | Origine utilisée pour l'ordre décalé.        |
| `transition`      | `Transition`                              | Transition ressort | Transition Motion utilisée pour les lettres. |
| `class`           | `string`                                  | —                  | Classes supplémentaires de l'élément racine. |
| `frontFaceClass`  | `string`                                  | —                  | Classes de la face avant des lettres.        |
| `secondFaceClass` | `string`                                  | —                  | Classes de la seconde face des lettres.      |

#credits

- Porté depuis [Fancy Components Letter 3D Swap](https://fancycomponents.dev/docs/components/text/letter-3d-swap).
- Travail original de [Daniel Petho](https://github.com/danielpetho/fancy).

::
