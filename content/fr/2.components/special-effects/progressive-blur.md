---
title: Flou progressif
description: Un effet de flou d'arrière-plan en couches qui augmente progressivement l'intensité dans une direction choisie, parfait pour la profondeur, la mise au point et la séparation visuelle.
category: Special Effects
tags: [css, tailwind, motion-v, blur, backdrop-filter]
badge: New
---

::ComponentViewer{demoFile="ProgressiveBlurDemo.vue" config="ProgressiveBlurConfig" componentId="progressive-blur" :componentFiles='["ProgressiveBlur.vue"]'}

#api

## API

| Nom de propriété  | Type                                     | Valeur par défaut | Description                                                      |
| ----------------- | ---------------------------------------- | ----------------- | ---------------------------------------------------------------- |
| `direction`       | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"`        | Direction dans laquelle le flou augmente progressivement.       |
| `blurLayers`      | `number`                                 | `8`               | Nombre de couches de flou utilisées pour créer l'effet progressif. |
| `blurIntensity`   | `number`                                 | `0.25`            | Multiplicateur d'intensité du flou par couche (en pixels).       |
| `class`           | `string`                                 | `""`              | Classe optionnelle appliquée au conteneur englobant.             |

> Ce composant accepte aussi toutes les props `motion-v` valides pour un `div`.

#credits

- Porté depuis [Motion Primitives Progressive Blur](https://motion-primitives.com/docs/progressive-blur).
- Propulsé par `motion-v`.

::
