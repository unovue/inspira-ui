---
title: Révélation au défilement
description: Un composant qui dévoile le texte mot par mot pendant le défilement, avec texte et styles personnalisables.
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="TextScrollRevealDemo.vue" config="TextScrollRevealConfig" componentId="text-scroll-reveal" :componentFiles='["TextScrollReveal.vue", "ScrollWord.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                         |
| ---------------- | -------- | ----------------- | ------------------------------------------------------------------- |
| `text`           | `string` | N/A               | Texte à afficher et révéler mot par mot pendant le défilement.      |
| `class`          | `string` | `""`              | Classes CSS supplémentaires à appliquer pour personnaliser le composant. |

#credits

- Porté depuis [Magic UI Text Reveal](https://magicui.design/docs/components/text-reveal).

::
