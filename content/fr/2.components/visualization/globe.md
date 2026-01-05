---
title: Globe
description: Un globe interactif en rotation.
category: Visualization
tags: [css, tailwind, cobe, magic-ui]
---

::ComponentViewer{demoFile="GlobeDemo.vue" config="GlobeConfig" componentId="globe" :componentFiles='["Globe.vue"]' dependencies="cobe vue-use-spring"}

#api

## API

| Nom de propriété | Type          | Valeur par défaut | Description                                                                                                 |
| ---------------- | ------------- | ----------------- | ----------------------------------------------------------------------------------------------------------- |
| `class`          | `string`      | `""`              | Classes CSS supplémentaires pour un style personnalisé.                                                     |
| `config`         | `COBEOptions` | N/A               | Objet de configuration du globe, suivant les options de la bibliothèque **[COBE]**(https://cobe.vercel.app/docs/api). |
| `mass`           | `number`      | `1`               | Paramètre de masse pour l'animation à ressort contrôlant l'inertie de rotation.                             |
| `tension`        | `number`      | `280`             | Tension du ressort pour l'animation, influence la réactivité.                                               |
| `friction`       | `number`      | `100`             | Friction du ressort, influence l'amortissement.                                                             |
| `precision`      | `number`      | `0.001`           | Précision pour les calculs de l'animation à ressort.                                                        |

#credits

- Construit avec la bibliothèque [cobe](https://github.com/shuding/cobe) pour la visualisation WebGL du globe.
- Porté depuis [Magic UI](https://magicui.design/docs/components/globe).

::
