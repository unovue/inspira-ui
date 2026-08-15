---
title: Galerie circulaire
description: Disposez le contenu du slot autour d’un cercle avec une rotation continue et une pause au survol.
category: Divers
tags: [css, tailwind, gallery]
badge: New
---

::ComponentViewer{demoFile="CircularGalleryDemo.vue" config="CircularGalleryConfig" componentId="circular-gallery" :componentFiles='["CircularGallery.vue", "index.ts"]'}

#api

## API

| Nom de prop    | Type                  | Valeur par défaut | Description                                             |
| -------------- | --------------------- | ----------------- | ------------------------------------------------------- |
| `radius`       | `number`              | `100`             | Distance en pixels entre le centre et chaque élément.   |
| `duration`     | `number`              | `10`              | Durée en secondes d’une rotation complète.              |
| `easing`       | `string`              | `linear`          | Fonction d’easing CSS utilisée pour la rotation.        |
| `direction`    | `normal` \| `reverse` | `normal`          | Sens de rotation.                                       |
| `class`        | `string`              | —                 | Classes supplémentaires pour la racine.                 |
| `pauseOnHover` | `boolean`             | `false`           | Met la rotation en pause lorsqu’un élément est survolé. |

## Utilisation

Passez les éléments à disposer autour du cercle via le slot par défaut :

```vue
<CircularGallery :radius="140" :duration="12" pause-on-hover>
  <img src="/images/one.jpg" alt="One" class="size-24 object-cover" />
  <img src="/images/two.jpg" alt="Two" class="size-24 object-cover" />
  <img src="/images/three.jpg" alt="Three" class="size-24 object-cover" />
</CircularGallery>
```

#credits

- Porté depuis [Fancy Components Circling Elements](https://fancycomponents.dev/docs/components/blocks/circling-elements).

::
