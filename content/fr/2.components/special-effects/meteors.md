---
title: Pluie de météores
description: Un composant affichant une animation de pluie de météores avec nombre et style personnalisables.
category: Effets spéciaux
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="MeteorsDemo.vue" config="MeteorsConfig" componentId="meteors" :componentFiles='["Meteors.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                     |
| ---------------- | -------- | ----------------- | --------------------------------------------------------------- |
| `count`          | `number` | `20`              | Nombre de météores affichés dans l'animation.                   |
| `class`          | `string` | `""`              | Classes CSS supplémentaires à appliquer pour personnaliser les météores. |

#instructions

Ajoutez l'entrée suivante au thème inline dans votre fichier `main.css`.

```css
@theme inline {
  --animate-meteor-effect: meteor 5s linear infinite;
  @keyframes meteor {
    0% {
      transform: rotate(215deg) translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: rotate(215deg) translateX(-500px);
      opacity: 0;
    }
  }
}
```

#credits

- Porté depuis [l'effet Meteor d'Aceternity UI](https://ui.aceternity.com/components/meteors)

::
