---
title: Fond Aurore
description: Un fond discret inspiré des aurores boréales pour votre site.
category: Background
tags: [css, tailwind, background, aceternity-ui]
---

::ComponentViewer{demoFile="AuroraBackgroundDemo.vue" config="AuroraBackgroundConfig" componentId="aurora-background" :componentFiles='["AuroraBackground.vue"]'}

#instructions

Ajoutez l'entrée suivante au thème inline dans votre fichier `main.css`.

```css
@theme inline {
  --animate-aurora: aurora 60s linear infinite;
  @keyframes aurora {
    from {
      background-position:
        50% 50%,
        50% 50%;
    }
    to {
      background-position:
        350% 50%,
        350% 50%;
    }
  }
}
```

#api

## API

| Nom de propriété | Type      | Valeur par défaut | Description                                                                |
| ---------------- | --------- | ----------------- | -------------------------------------------------------------------------- |
| `class`          | `string`  | `-`               | Classes CSS supplémentaires à appliquer pour le style du composant.        |
| `radialGradient` | `boolean` | `true`            | Indique si un dégradé radial est appliqué sur le fond.                     |

#credits

- Merci à [Aceternity UI](https://ui.aceternity.com/components/aurora-background).
- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour le portage de ce composant.

::
