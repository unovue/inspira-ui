---
title: Fond trou noir
description: Un fond hypnotisant sur canvas simulant un tunnel de « trou noir » avec disques animés, lignes radiales et particules.
category: Arrière-plan
tags: [css, tailwind, background, motion-v, canvas]
---

::ComponentViewer{demoFile="BlackHoleBackgroundDemo.vue" config="BlackHoleBackgroundConfig" componentId="bg-black-hole" :componentFiles='["BlackHoleBackground.vue"]'}

#api

## API

| Nom de propriété   | Type                       | Valeur par défaut | Description                                                      |
| ------------------ | -------------------------- | ----------------- | ---------------------------------------------------------------- |
| `strokeColor`      | `string`                   | `"#737373"`       | Couleur de tracé pour les disques concentriques et les lignes.   |
| `numberOfLines`    | `number`                   | `50`              | Nombre total de lignes radiales partant du centre.               |
| `numberOfDiscs`    | `number`                   | `50`              | Nombre total d'ellipses concentriques formant le tunnel.         |
| `particleRGBColor` | `[number, number, number]` | `[255,255,255]`   | Couleur RVB utilisée pour les petites particules attirées dans le trou. |
| `class`            | `string`                   | `""`              | Classes utilitaires supplémentaires fusionnées sur le wrapper racine. |

#credits

- Logique d'art génératif inspirée des animations de tunnel/warp.
- Utilise **Motion-V** pour les dérives de dégradé et l'API de composition Vue 3 pour le cycle de vie.
- Conçu en gardant l'accessibilité à l'esprit — l'effet reste purement décoratif via un canvas `aria-hidden`.

::
