---
title: Onglets morphing
description: Une interaction d'onglets morphing recréée à partir du travail de Preet et intégrant un effet gooey.
category: Miscellaneous
tags: [css, tailwind]
---

::ComponentViewer{demoFile="MorphingTabsDemo.vue" config="MorphingTabsConfig" componentId="morphing-tabs" :componentFiles='["MorphingTabs.vue"]'}

#api

## API

| Nom de propriété      | Type       | Valeur par défaut | Description                                       |
| --------------------- | ---------- | ----------------- | ------------------------------------------------- |
| `class`               | `string`   | `""`              | Classes supplémentaires pour styliser le composant. |
| `tabs`                | `string[]` | `[]`              | Onglets.                                          |
| `activeTab`           | `string`   | `""`              | Onglet actif actuel.                              |
| `margin`              | `number`   | `20`              | Marge gauche et droite de l'onglet actif.         |
| `blurStdDeviation`    | `number`   | `6`               | Valeur `stdDeviation` du flou SVG, utile pour arrondir l'onglet. |

#credits

- Merci à [Whbbit1999](https://github.com/Whbbit1999) pour ce composant.
- Inspiré et porté depuis [@Preet \"Exclusion tabs\"](https://x.com/wickedmishra/status/1823026659894940124).

::
