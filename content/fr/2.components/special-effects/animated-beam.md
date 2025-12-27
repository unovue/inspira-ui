---
title: Rayon animé
description: Un rayon SVG reliant des éléments avec une animation.
category: Effets spéciaux
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="AnimatedBeamDemo.vue" config="AnimatedBeamConfig" componentId="animated-beam" :componentFiles='["AnimatedBeam.vue"]'}

#api

## API

| Nom de propriété      | Type          | Valeur par défaut       | Description                                                                      |
| --------------------- | ------------- | ----------------------- | -------------------------------------------------------------------------------- |
| `class`               | `string`      | `""`                    | Classes CSS supplémentaires à appliquer au composant pour le personnaliser.      |
| `containerRef`        | `HTMLElement` | N/A                     | Référence au conteneur dans lequel le rayon est rendu.                           |
| `fromRef`             | `HTMLElement` | N/A                     | Référence à l'élément de départ d'où part le rayon.                              |
| `toRef`               | `HTMLElement` | N/A                     | Référence à l'élément d'arrivée vers lequel pointe le rayon.                     |
| `curvature`           | `number`      | `0`                     | Contrôle la courbure du rayon ; une valeur plus élevée crée un chemin plus courbé. |
| `reverse`             | `boolean`     | `false`                 | Inverse le sens de l'animation du rayon si défini à `true`.                      |
| `pathColor`           | `string`      | `"gray"`                | Couleur du tracé du rayon.                                                       |
| `pathWidth`           | `number`      | `2`                     | Largeur du tracé du rayon.                                                       |
| `pathOpacity`         | `number`      | `0.2`                   | Opacité du tracé du rayon.                                                       |
| `gradientStartColor`  | `string`      | `"#FFAA40"`             | Couleur de départ de l'animation de dégradé du rayon.                            |
| `gradientStopColor`   | `string`      | `"#9C40FF"`             | Couleur de fin de l'animation de dégradé du rayon.                               |
| `delay`               | `number`      | `0`                     | Délai avant le début de l'animation du rayon, en secondes.                       |
| `duration`            | `number`      | Aléatoire entre 4 et 7 s | Durée du cycle d'animation du rayon, en secondes.                                |
| `startXOffset`        | `number`      | `0`                     | Décalage horizontal du point de départ du rayon.                                 |
| `startYOffset`        | `number`      | `0`                     | Décalage vertical du point de départ du rayon.                                   |
| `endXOffset`          | `number`      | `0`                     | Décalage horizontal du point d'arrivée du rayon.                                 |
| `endYOffset`          | `number`      | `0`                     | Décalage vertical du point d'arrivée du rayon.                                   |

#credits

- Inspiré et porté depuis [Magic UI Animated Beam](https://magicui.design/docs/components/animated-beam).

::
