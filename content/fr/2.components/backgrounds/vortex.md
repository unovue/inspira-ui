---
title: Fond vortex
description: Un fond ondulant et tourbillonnant, idéal pour les CTA et arrière-plans.
category: Background
tags: [css, tailwind, background, aceternity-ui, motion-v, simplex-noise]
---

::ComponentViewer{demoFile="VortexDemo.vue" config="VortexConfig" componentId="vortex" :componentFiles='["Vortex.vue"]' dependencies="simplex-noise"}

#api

## API

| Nom de propriété  | Type     | Valeur par défaut | Description                                          |
| ----------------- | -------- | ----------------- | ---------------------------------------------------- |
| `class`           | `string` |                   | Classe optionnelle pour styliser le wrapper enfants. |
| `containerClass`  | `string` |                   | Classe optionnelle pour styliser le conteneur.       |
| `particleCount`   | `number` | `700`             | Nombre de particules générées.                       |
| `rangeY`          | `number` | `100`             | Amplitude verticale du mouvement des particules.     |
| `baseHue`         | `number` | `220`             | Teinte de base pour la couleur des particules.       |
| `baseSpeed`       | `number` | `0.0`             | Vitesse de base du mouvement des particules.         |
| `rangeSpeed`      | `number` | `1.5`             | Amplitude de variation de vitesse des particules.    |
| `baseRadius`      | `number` | `1`               | Rayon de base des particules.                        |
| `rangeRadius`     | `number` | `2`               | Amplitude de variation de rayon des particules.      |
| `backgroundColor` | `string` | `"#000000"`       | Couleur de fond du canvas.                           |

#credits

- Merci à [Aceternity UI](https://ui.aceternity.com/components/vortex).
- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour le portage de ce composant.

::
