---
title: Marquee
description: Un composant défilant personnalisable qui boucle son contenu horizontalement ou verticalement, avec direction, pause au survol et répétitions configurables.
category: Miscellaneous
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="MarqueeDemo.vue" config="MarqueeConfig" componentId="marquee" :componentFiles='["Marquee.vue", "ReviewCard.vue"]'}

#api

## API

| Nom de propriété | Type      | Valeur par défaut | Description                                                              |
| ---------------- | --------- | ----------------- | ------------------------------------------------------------------------ |
| `class`          | `string`  | `''`              | Classes CSS personnalisées pour le conteneur externe du marquee.         |
| `reverse`        | `boolean` | `false`           | Inverse le sens de défilement (droite vers gauche ou bas vers haut).     |
| `pauseOnHover`   | `boolean` | `false`           | Met en pause l'animation au survol.                                      |
| `vertical`       | `boolean` | `false`           | Définit un défilement vertical au lieu d'horizontal.                     |
| `repeat`         | `number`  | `4`               | Nombre de répétitions du contenu dans le marquee.                        |

## Variables CSS

Vous pouvez personnaliser la vitesse et l'espacement des éléments via les variables suivantes :

- **`--duration`** : Contrôle la vitesse de l'animation du marquee.
- **`--gap`** : Définit l'espacement entre les éléments répétés.

#credits

- Inspiré par [Magic UI](https://magicui.design/docs/components/marquee).

::
