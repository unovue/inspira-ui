---
title: Fond ondulé
description: Un effet de fond sympa avec des vagues en mouvement.
category: Arrière-plan
tags: [css, tailwind, background, simplex-noise, aceternity-ui]
---

::ComponentViewer{demoFile="WavyBackgroundDemo.vue" config="WavyBackgroundConfig" componentId="wavy-background" :componentFiles='["WavyBackground.vue"]' dependencies="simplex-noise"}

#api

## API

| Nom de propriété | Type               | Valeur par défaut                                           | Description                                                |
| ---------------- | ------------------ | ----------------------------------------------------------- | ---------------------------------------------------------- |
| `class`          | `string`           | `-`                                                         | Contenu affiché au-dessus du fond ondulé.                  |
| `containerClass` | `string`           | `-`                                                         | Classe CSS appliquée au conteneur de contenu.              |
| `colors`         | `string[]`         | `["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]`   | Couleurs des vagues.                                       |
| `waveWidth`      | `number`           | `50`                                                        | Largeur des vagues.                                        |
| `backgroundFill` | `string`           | `"black"`                                                   | Couleur de fond.                                           |
| `blur`           | `number`           | `10`                                                        | Effet de flou appliqué aux vagues.                         |
| `speed`          | `"slow" \| "fast"` | `"fast"`                                                    | Vitesse des vagues.                                        |
| `waveOpacity`    | `number`           | `0.5`                                                       | Opacité de base des vagues.                                |
| `[key: string]`  | `any`              | `-`                                                         | Entrées supplémentaires facultatives.                      |

#credits

- Merci à [Aceternity UI](https://ui.aceternity.com/components/wavy-background).
- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour le portage de ce composant.

::
