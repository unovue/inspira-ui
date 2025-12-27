---
title: Bordure lumineuse
description: Un effet de bordure animée.
category: Effets spéciaux
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="GlowBorderDemo.vue" config="GlowBorderConfig" componentId="glow-border" :componentFiles='["GlowBorder.vue"]'}

#api

## API

| Nom de propriété | Type                 | Valeur par défaut | Description                                                |
| ---------------- | -------------------- | ----------------- | ---------------------------------------------------------- |
| `duration`       | `number`             | `10`              | Durée de l'animation de la bordure lumineuse.              |
| `color`          | `string \| string[]` | `#FFF`            | Couleur ou tableau de couleurs appliqués à la bordure.     |
| `borderRadius`   | `number`             | `10`              | Rayon de la bordure.                                       |
| `borderWidth`    | `number`             | `2`               | Largeur de la bordure.                                     |

#instructions

Ajoutez l'entrée suivante au thème inline dans votre fichier `main.css`.

```css
@theme inline {
  --animate-glow: glow var(--duration) infinite linear;
  @keyframes glow {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    to {
      background-position: 0% 0%;
    }
  }
}
```

#credits

- Merci à [Magic UI](https://magicui.design/docs/components/shine-border) pour ce superbe composant.

::
