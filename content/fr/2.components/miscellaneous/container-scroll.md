---
title: Défilement conteneur
description: Effet de défilement d'un conteneur qui transforme son contenu selon la progression, avec transitions fluides de mise à l'échelle et rotation.
category: Divers
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="ContainerScrollDemo.vue" config="ContainerScrollConfig" componentId="container-scroll" :componentFiles='["ContainerScroll.vue", "ContainerScrollTitle.vue", "ContainerScrollCard.vue"]'}

#api

## API

### `ContainerScroll`

Le composant `ContainerScroll` crée un effet de défilement 3D. À mesure que l'utilisateur fait défiler, le contenu interne est transformé par des effets d'échelle, de rotation et de translation.

| Nom de propriété | Type   | Valeur par défaut | Description                                                                     |
| ---------------- | ------ | ----------------- | ------------------------------------------------------------------------------- |
| `rotate`         | Number | `0`               | Contrôle la rotation du contenu interne selon le défilement.                   |
| `scale`          | Number | `1`               | Contrôle la mise à l'échelle appliquée au contenu pendant le défilement.       |
| `translateY`     | Number | `0`               | Contrôle la translation verticale du titre pendant le défilement.              |

### `ContainerScrollTitle`

Le composant `ContainerScrollTitle` gère la transformation du titre au défilement en appliquant une translation verticale.

| Nom de propriété | Type   | Valeur par défaut | Description                                     |
| ---------------- | ------ | ----------------- | ----------------------------------------------- |
| `translate`      | Number | `0`               | Contrôle la translation verticale du titre.     |

### `ContainerScrollCard`

Le composant `ContainerScrollCard` applique des effets d'échelle et de rotation au contenu de la carte lorsque l'utilisateur fait défiler la page.

| Nom de propriété | Type   | Valeur par défaut | Description                                      |
| ---------------- | ------ | ----------------- | ------------------------------------------------ |
| `rotate`         | Number | `0`               | Contrôle l'effet de rotation de la carte.        |
| `scale`          | Number | `1`               | Contrôle l'effet de mise à l'échelle de la carte.|

## Variables CSS

Pour personnaliser les animations de défilement et la réactivité, vous pouvez définir les variables CSS suivantes :

- **`--scale-start`** : Valeur d'échelle initiale pour la carte.
- **`--scale-end`** : Valeur d'échelle finale au fil du défilement.
- **`--rotate-start`** : Valeur de rotation initiale de la carte.
- **`--rotate-end`** : Valeur de rotation finale au fil du défilement.

#credits

- Inspiré par [Container Scroll Animation d'Aceternity UI](https://ui.aceternity.com/components/container-scroll-animation).

::
