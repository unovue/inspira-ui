---
title: Révélation de texte
description: Anime le texte ligne par ligne grâce à SplitText de GSAP pour des entrées fluides de mots ou de lignes.
category: Animation de texte
tags: [css, tailwind, gsap]
---

::ComponentViewer{demoFile="TextRevealDemo.vue" config="TextRevealConfig" componentId="text-reveal" :componentFiles='["TextReveal.vue"]' dependencies="gsap"}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                      |
| ---------------- | -------- | ----------------- | ------------------------------------------------ |
| `class`          | `string` | `-`               | Classes supplémentaires pour le conteneur interne. |
| `containerClass` | `string` | `-`               | Classes supplémentaires pour le conteneur externe. |
| `duration`       | `number` | `0.6`             | Durée de l'animation de révélation des lignes.   |
| `delay`          | `number` | `0.2`             | Délai initial avant le début de l'animation.     |
| `stagger`        | `number` | `0.1`             | Décalage de l'animation entre chaque ligne.      |

#credits

- Propulsé par [GSAP](https://gsap.com/) et [GSAP SplitText](https://gsap.com/docs/v3/Plugins/SplitText/).

::
