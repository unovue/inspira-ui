---
title: Effet de génération de texte
description: Un effet sympa qui fait apparaître le texte au chargement, lettre par lettre.
category: Animation de texte
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TextGenerateDemo.vue" config="TextGenerateConfig" componentId="text-generate-effect" :componentFiles='["TextGenerateEffect.vue"]'}

#api

## API

| Nom de propriété | Type      | Valeur par défaut | Description                                                             |
| ---------------- | --------- | ----------------- | ----------------------------------------------------------------------- |
| `words`          | `string`  | Requise           | Texte à afficher avec l'effet de génération.                            |
| `duration`       | `number`  | `0.7`             | Durée de l'animation de génération, en secondes.                        |
| `delay`          | `number`  | `0`               | Délai avant le démarrage de l'animation, en millisecondes.              |
| `filter`         | `boolean` | `true`            | Intensité du flou appliqué au texte.                                    |

#credits

- Merci à [M Atif](https://github.com/atif0075) pour le portage de ce composant.
- Porté depuis [Text Generate Effect d'Aceternity UI](https://ui.aceternity.com/components/text-generate-effect).

::
