---
title: Effet de carte 3D
description: Un effet de perspective sur carte ; survolez la carte pour mettre en relief ses éléments.
category: Card
tags: [css, tailwind, card, aceternity-ui]
---

::ComponentViewer{demoFile="CardDemo.vue" config="Card3dConfig" componentId="card-3d" :componentFiles='["CardContainer.vue", "CardBody.vue", "CardItem.vue", "useMouseState.ts"]'}

#api

## API

### `CardContainer`

Le composant `CardContainer` sert de conteneur pour l'effet de carte 3D. Il gère les événements souris pour créer la perspective.

#### Props

| Nom de propriété | Type   | Valeur par défaut | Description                                                 |
| ---------------- | ------ | ----------------- | ----------------------------------------------------------- |
| `class`          | string | `null`            | Classes supplémentaires pour styliser le conteneur interne. |
| `containerClass` | string | `null`            | Classes supplémentaires pour styliser le conteneur externe. |

---

### `CardBody`

Le composant `CardBody` est un conteneur flexible qui conserve le style 3D. Il est destiné à être utilisé dans un `CardContainer` pour accueillir du contenu avec un effet de transformation 3D.

#### Props

| Nom de propriété | Type   | Valeur par défaut | Description                                         |
| ---------------- | ------ | ----------------- | --------------------------------------------------- |
| `class`          | string | `null`            | Classes supplémentaires pour un style personnalisé. |

---

### `CardItem`

Le composant `CardItem` représente les éléments individuels de la carte 3D. Il prend en charge diverses transformations (translation et rotation) pour créer des effets 3D dynamiques.

#### Props

| Nom de propriété | Type   | Valeur par défaut | Description                                                   |
| ---------------- | ------ | ----------------- | ------------------------------------------------------------- |
| `as`             | string | `"div"`           | Balise HTML ou composant à utiliser pour l'élément.           |
| `class`          | string | `null`            | Classes supplémentaires pour styliser l'élément.              |
| `translateX`     | string | `0`               | Translation sur l'axe X, en pixels.                           |
| `translateY`     | string | `0`               | Translation sur l'axe Y, en pixels.                           |
| `translateZ`     | string | `0`               | Translation sur l'axe Z, en pixels, pour gérer la profondeur. |
| `rotateX`        | string | `0`               | Rotation sur l'axe X, en degrés.                              |
| `rotateY`        | string | `0`               | Rotation sur l'axe Y, en degrés.                              |
| `rotateZ`        | string | `0`               | Rotation sur l'axe Z, en degrés.                              |

---

> 💡 **_Note importante :_**
>
> Si vous utilisez `CardItem` dans une `div`, ajoutez `style="transform-style: preserve-3d;"` sur la div pour que la prop `translate-z` fonctionne.

#credits

- Porté depuis le composant 3D Card d'Aceternity UI.

::
