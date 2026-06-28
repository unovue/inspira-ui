---
title: Fey Cards
description: Une pile de cartes animée au survol avec changement d’images en couches et un effet de révélation cinématographique du titre.
category: Carte
tags: [css, tailwind, card, aceternity-ui]
---

::ComponentViewer{demoFile="FeyCardsDemo.vue" config="FeyCardsConfig" componentId="fey-cards" :componentFiles='["FeyCards.vue"]'}

#api

## API

| Nom de propriété | Type | Valeur par défaut | Description |
| ---------------- | ---- | ----------------- | ----------- |
| `imgSrc` | `string[]` | `[]` | Tableau de sources d’images utilisées pour les cartes empilées. |
| `mainImg` | `string` | `-` | Image principale affichée derrière la pile de cartes. |
| `idleImg` | `string` | `-` | Image d’attente affichée avant l’effet de swap au survol. |
| `cardSpacing` | `number` | `32` | Espacement horizontal entre les cartes. |
| `spring` | `SpringConfig` | `{ type: "spring", visualDuration: 0.5, bounce: 0.2 }` | Configuration du ressort de motion pour les animations d’entrée et de décalage. |
| `shiftDistance` | `number` | `60` | Distance de déplacement horizontal des cartes quand l’état de survol est actif. |
| `swapDuration` | `number` | `0.5` | Durée de la transition de swap d’image, en secondes. |
| `entranceStagger` | `number` | `0.2` | Délai entre les animations d’entrée de chaque carte. |
| `class` | `string` | `-` | Classes Tailwind supplémentaires appliquées au conteneur. |

#credits

- Inspiré par [Aceternity UI](https://ui.aceternity.com/labs/fey-card).

::
