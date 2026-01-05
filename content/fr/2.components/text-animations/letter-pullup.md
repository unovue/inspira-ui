---
title: Lettres en soulèvement
description: Animation de texte où les lettres se soulèvent en décalé.
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="LetterPullupDemo.vue" config="LetterPullupConfig" componentId="letter-pullup" :componentFiles='["LetterPullup.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut            | Description                                         |
| ---------------- | -------- | ---------------------------- | --------------------------------------------------- |
| `class`          | `string` | `-`                          | Classe appliquée au composant.                      |
| `words`          | `string` | `Staggered Letter Pull Up`   | Texte à animer.                                     |
| `delay`          | `number` | `0.05`                       | Délai en secondes appliqué à l'animation de chaque lettre. |

#credits

- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour ce composant.
- Inspiré par [Magic UI](https://magicui.design/docs/components/letter-pullup).

::
