---
title: Texte morphing
description: Le composant MorphingText fait passer en douceur un tableau de chaînes de texte pour un effet visuel fluide et engageant.
category: Animation de texte
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="MorphingTextDemo.vue" config="MorphingTextConfig" componentId="morphing-text" :componentFiles='["MorphingText.vue"]'}

#api

## API

| Nom de propriété | Type       | Valeur par défaut | Description                           |
| ---------------- | ---------- | ----------------- | ------------------------------------- |
| `texts`          | `string[]` | `[]`              | Tableau de textes entre lesquels alterner. |
| `class`          | `string`   | `""`              | Classes supplémentaires pour le conteneur. |
| `morphTime`      | `number`   | `1.5`             | Durée d'exécution de l'animation.          |
| `coolDownTime`   | `number`   | `0.5`             | Temps de pause de l'animation.             |

#credits

- Merci à [Whbbit1999](https://github.com/Whbbit1999) pour ce composant.
- Inspiré et porté depuis [Magic UI Morphing Text](https://magicui.design/docs/components/morphing-text).

::
