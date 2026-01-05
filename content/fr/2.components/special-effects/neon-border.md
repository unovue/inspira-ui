---
title: Bordure néon
description: Une bordure néon esthétique avec animations et couleurs personnalisables.
category: Special Effects
tags: [css, tailwind, border]
---

::ComponentViewer{demoFile="NeonBorderDemo.vue" config="NeonBorderConfig" componentId="neon-border" :componentFiles='["NeonBorder.vue"]'}

#api

## API

| Nom de propriété | Type                         | Valeur par défaut | Description                                        |
| ---------------- | ---------------------------- | ----------------- | -------------------------------------------------- |
| `color1`         | `string`                     | `"#0496ff"`       | Couleur principale de la bordure néon.             |
| `color2`         | `string`                     | `"#ff0a54"`       | Couleur secondaire de la bordure néon.             |
| `animationType`  | `"none" \| "half" \| "full"` | `"half"`          | Type d'animation appliquée à la bordure.           |
| `duration`       | `number`                     | `6`               | Durée de l'effet d'animation en secondes.          |
| `class`          | `string`                     | `""`              | Classes CSS supplémentaires pour le style.         |

#instructions

Ajoutez l'entrée suivante au thème inline dans votre fichier `main.css`.

```css
@theme inline {
  --animate-neon-border: neon-border var(--neon-border-duration) linear infinite;
  @keyframes neon-border {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
```

#credits

- Inspiré par les effets modernes de bordure néon.

::
