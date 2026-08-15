---
title: Parallax Float
description: Ajoutez une profondeur pilotée par le curseur à des éléments flottants indépendants.
category: Divers
tags: [motion, parallax, images]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="ParallaxFloatDemo.vue" config="ParallaxFloatConfig" componentId="parallax-float" :componentFiles='["ParallaxFloat.vue", "ParallaxFloatElement.vue", "ParallaxFloatContext.ts", "index.ts"]'}

#api

## API

### ParallaxFloat

| Nom de prop    | Type     | Valeur par défaut | Description                              |
| -------------- | -------- | ----------------- | ---------------------------------------- |
| `sensitivity`  | `number` | `1`               | Multiplicateur appliqué à la profondeur. |
| `easingFactor` | `number` | `0.05`            | Interpolation effectuée à chaque image.  |
| `class`        | `string` | —                 | Classes supplémentaires du conteneur.    |

### ParallaxFloatElement

| Nom de prop | Type     | Valeur par défaut | Description                             |
| ----------- | -------- | ----------------- | --------------------------------------- |
| `depth`     | `number` | `1`               | Profondeur de déplacement de l'élément. |
| `class`     | `string` | —                 | Classes de positionnement et de style.  |

## Utilisation

Utilisez `ParallaxFloat` comme conteneur et placez chaque calque indépendant dans `ParallaxFloatElement` :

```vue
<ParallaxFloat :sensitivity="-1">
  <ParallaxFloatElement :depth="2" class="top-1/4 left-1/3">
    <img src="/images/portrait.jpg" alt="Portrait" class="size-32 object-cover" />
  </ParallaxFloatElement>
</ParallaxFloat>
```

#credits

- Porté depuis [Fancy Components Parallax Floating](https://fancycomponents.dev/docs/components/image/parallax-floating).

::
