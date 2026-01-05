---
title: Effet lumineux
description: Un effet lumineux réactif basé sur la proximité, qui répond aux mouvements de souris et au défilement pour mettre en valeur les éléments interactifs.
category: Special Effects
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="GlowingEffectDemo.vue" config="GlowingEffectConfig" componentId="glowing-effect" :componentFiles='["GlowingEffect.vue"]'}

#api

## API

| Nom de propriété   | Type                   | Valeur par défaut | Description                                                                                             |
| ------------------ | ---------------------- | ----------------- | ------------------------------------------------------------------------------------------------------- |
| `blur`             | `number`               | `0`               | Rayon de flou appliqué à la couche lumineuse.                                                           |
| `inactiveZone`     | `number`               | `0.7`             | Définit le rayon interne (en fraction de la plus petite dimension) dans lequel l'effet lumineux est inactif. |
| `proximity`        | `number`               | `0`               | Distance supplémentaire (en pixels) déclenchant l'effet lorsque le curseur est proche de l'élément.     |
| `spread`           | `number`               | `20`              | Amplitude de diffusion de l'effet lumineux autour de l'élément.                                         |
| `variant`          | `"default" \| "white"` | `"default"`       | Variante de style du halo (par exemple une version claire).                                             |
| `glow`             | `boolean`              | `false`           | Contrôle la visibilité de la bordure lumineuse statique.                                                |
| `class`            | `string`               | `""`              | Classes CSS supplémentaires pour un style personnalisé.                                                 |
| `disabled`         | `boolean`              | `true`            | Désactive la détection de proximité et les animations si `true`.                                        |
| `movementDuration` | `number`               | `2`               | Durée (en secondes) de l'animation de rotation fluide.                                                  |
| `borderWidth`      | `number`               | `1`               | Largeur (en pixels) de la bordure appliquée à l'effet lumineux.                                         |

#credits

- Porté depuis (Aceternity UI Glowing Effect)[https://ui.aceternity.com/components/glowing-effect]

::
