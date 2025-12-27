---
title: Loader multi-étapes
description: Un loader en plusieurs étapes pour les écrans, compatible avec des conditions asynchrones.
category: Divers
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="MultiStepLoaderDemo.vue" config="MultiStepLoaderConfig" componentId="multi-step-loader" :componentFiles='["MultiStepLoader.vue"]'}

#api

## API

| Nom de propriété   | Type      | Valeur par défaut | Description                                                                   |
| ------------------ | --------- | ----------------- | ----------------------------------------------------------------------------- |
| `loading`          | `boolean` | `false`           | Contrôle la visibilité du loader. À `true`, le loader s'affiche.              |
| `steps`            | `Step[]`  | `[]`              | Tableau d'objets étapes définissant la séquence de chargement.                |
| `defaultDuration`  | `number`  | `1500`            | Durée de chaque étape en millisecondes.                                       |
| `preventClose`     | `boolean` | `false`           | Si `true`, le bouton de fermeture n'est pas affiché.                          |

| Nom de l'événement | Type de charge | Description                                                          |
| ------------------ | -------------- | -------------------------------------------------------------------- |
| `state-change`     | `number`       | Émis lorsque l'étape courante change, fournit le nouvel index.       |
| `complete`         | `void`         | Émis lorsque toutes les étapes sont terminées.                       |
| `close`            | `void`         | Émis lorsque le loader est fermé via le bouton.                      |

#credits

- Merci à [M Atif](https://github.com/atif0075) pour ce composant.
- Inspiré par [Multi Step Loader d'Aceternity UI](https://ui.aceternity.com/components/multi-step-loader).

::
