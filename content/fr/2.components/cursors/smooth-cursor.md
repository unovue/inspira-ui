---
title: Curseur fluide
description: Un composant de curseur fluide et personnalisable, basé sur la physique, pour les applications Vue.
category: Curseur
tags: [css, tailwind, cursor, magic-ui]
---

::ComponentViewer{demoFile="SmoothCursorDemo.vue" config="SmoothCursorConfig" componentId="smooth-cursor" :componentFiles='["SmoothCursor.vue"]'}

#api

## API

| Nom de propriété  | Type           | Valeur par défaut | Description                                                    |
| ----------------- | -------------- | ----------------- | -------------------------------------------------------------- |
| `cursor`          | `Component`    | `DefaultCursor`   | Composant de curseur personnalisé remplaçant le curseur par défaut. |
| `springConfig`    | `SpringConfig` | `Voir ci-dessous` | Objet de configuration pour le comportement d'animation à ressort. |

### Type SpringConfig

```ts
interface springConfig {
  damping: number;
  stiffness: number;
  mass: number;
  restDelta: number;
}
```

#credits

- Merci à [Whbbit1999](https://github.com/Whbbit1999) pour ce composant.
- Porté depuis [Magic UI Smooth Cursor](https://magicui.design/docs/components/smooth-cursor).

::
