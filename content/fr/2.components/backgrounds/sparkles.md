---
title: Étincelles
description: Un composant d'étincelles configurable, utilisable comme arrière-plan ou composant autonome.
category: Background
tags: [css, tailwind, background, canvas]
---

::ComponentViewer{demoFile="SparklesDemo.vue" config="SparklesConfig" componentId="sparkles" :componentFiles='["Sparkles.vue"]'}

#api

## API

| Nom de propriété   | Type     | Valeur par défaut | Description                                                                            |
| ------------------ | -------- | ----------------- | -------------------------------------------------------------------------------------- |
| `background`       | `string` | `'#0d47a1'`       | Couleur de fond du conteneur. Utilisez `transparent` pour voir l'élément parent.       |
| `particleColor`    | `string` | `'#ffffff'`       | Couleur des particules. Accepte toute valeur de couleur CSS valide.                    |
| `minSize`          | `number` | `1`               | Taille minimale des particules, en pixels.                                             |
| `maxSize`          | `number` | `3`               | Taille maximale des particules, en pixels.                                             |
| `speed`            | `number` | `4`               | Multiplicateur de vitesse de mouvement. Plus la valeur est élevée, plus le mouvement est rapide. |
| `particleDensity`  | `number` | `120`             | Nombre de particules à rendre. Plus la valeur est élevée, plus le champ est dense.     |

#credits

- Merci à [M Atif](https://github.com/atif0075) pour le portage de ce composant.
- Porté depuis [Sparkles d'Aceternity UI](https://ui.aceternity.com/components/sparkles).

::
