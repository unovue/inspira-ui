---
title: Fond particules
description: Les particules apportent de la dynamique et de la profondeur à vos visuels web, créant une impression de mouvement et d'interaction.
category: Background
tags: [css, tailwind, background, magic-ui, canvas]
---

::ComponentViewer{demoFile="ParticlesBgDemo.vue" config="ParticlesBgConfig" componentId="particles-bg" :componentFiles='["ParticlesBg.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                                                                 |
| ---------------- | -------- | ----------------- | ----------------------------------------------------------------------------------------------------------- |
| `color`          | `string` | `#FFF`            | Code couleur hexadécimal utilisé pour les particules (3 ou 6 caractères).                                   |
| `quantity`       | `number` | `100`             | Nombre de particules générées et affichées sur le canvas.                                                   |
| `staticity`      | `number` | `50`              | Contrôle l'amplitude de mouvement des particules selon la proximité de la souris. Une valeur élevée réduit le mouvement. |
| `ease`           | `number` | `50`              | Contrôle l'effet d'easing du mouvement : plus la valeur est basse, plus les particules suivent la souris de près. |

#credits

- Merci à [Magic UI](https://magicui.design/docs/components/particles) pour ce superbe composant.
- Merci à [Prodromos Pantos](https://github.com/prpanto) pour le portage du composant original vers Vue & Nuxt.

::
