---
title: Effet verre liquide
description: Un effet de glassmorphism saisissant utilisant des filtres de déplacement SVG, similaire à l'effet Apple Liquid Glass.
category: Visualisation
tags: [css, tailwind, apple, svg]
---

::ComponentViewer{demoFile="LiquidGlassDemo.vue" config="LiquidGlassConfig" componentId="liquid-glass" :componentFiles='["LiquidGlass.vue"]' }

#api

## API

| Nom de propriété  | Type                | Valeur par défaut | Description                                                                             |
| ----------------- | ------------------- | ----------------- | --------------------------------------------------------------------------------------- |
| `radius`          | `number`            | `16`              | Rayon des coins du conteneur en verre (en pixels).                                      |
| `border`          | `number`            | `0.07`            | Épaisseur relative de la bordure influençant la marge interne du filtre de déplacement. |
| `lightness`       | `number`            | `50`              | Luminosité (0-100) de la couleur de superposition en HSL.                               |
| `blend`           | `string`            | `"difference"`    | Mode de fusion CSS entre les couches de déplacement rouges et bleues pour la distorsion. |
| `xChannel`        | `"R" \| "G" \| "B"` | `"R"`             | Canal de l'image de déplacement utilisé pour le décalage horizontal.                    |
| `yChannel`        | `"R" \| "G" \| "B"` | `"B"`             | Canal de l'image de déplacement utilisé pour le décalage vertical.                      |
| `alpha`           | `number`            | `0.93`            | Transparence alpha de la couleur de superposition (0-1).                                |
| `blur`            | `number`            | `11`              | Rayon de flou gaussien appliqué à la superposition.                                     |
| `rOffset`         | `number`            | `0`               | Décalage d'échelle supplémentaire pour la carte de déplacement rouge.                   |
| `gOffset`         | `number`            | `10`              | Décalage d'échelle supplémentaire pour la carte de déplacement verte.                   |
| `bOffset`         | `number`            | `20`              | Décalage d'échelle supplémentaire pour la carte de déplacement bleue.                   |
| `scale`           | `number`            | `-180`            | Facteur d'échelle de base pour les effets de déplacement, combiné aux décalages de canal. |
| `frost`           | `number`            | `0.05`            | Facteur d'opacité contrôlant la force de l'arrière-plan givré.                           |
| `class`           | `string`            | `""`              | Classes CSS supplémentaires appliquées au slot interne qui enveloppe le contenu.         |
| `containerClass`  | `string`            | `""`              | Classes CSS supplémentaires appliquées à la div conteneur externe.                       |

#credits

- Inspiré par Apple Liquid Glass.

::

::warning
Ce composant utilise des filtres SVG pour le flou d'arrière-plan. Ceux-ci ne sont pas pris en charge par Safari et sont très limités sur Firefox.

Il est recommandé d'utiliser ce composant uniquement si vous ciblez des navigateurs basés sur Chromium, et de prévoir un fallback si l'utilisateur est sur Safari ou Firefox.

Par exemple, la page d'accueil d'Inspira UI utilise le composant Liquid Glass sur les navigateurs Chromium, mais bascule vers un effet de verre dépoli sur Safari et Mozilla.
::
