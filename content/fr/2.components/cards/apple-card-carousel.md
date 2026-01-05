---
title: Carrousel de cartes Apple
description: Un carrousel de cartes au style Apple, avec images floutées lors du chargement, extension en modal et commandes de défilement fluides.
category: Card
tags: [css, tailwind, card, aceternity-ui]
---

::ComponentViewer{demoFile="AppleCardCarouselDemo.vue" config="AppleCardCarouselConfig" componentId="apple-card-carousel" :componentFiles='["AppleCardCarousel.vue", "AppleCarouselItem.vue", "AppleCard.vue", "AppleBlurImage.vue", "AppleCarouselContext.ts"]'}

#api

La suite **Apple Carousel** se compose de quatre composants liés :

| Composant           | Rôle                                                                       |
| ------------------- | -------------------------------------------------------------------------- |
| `AppleCardCarousel` | Le conteneur de défilement horizontal avec contrôles gauche / droite.      |
| `AppleCarouselItem` | Un wrapper qui ajoute animation d'entrée et espacement à chaque carte.     |
| `AppleCard`         | Une carte riche et cliquable pouvant s'étendre en modal plein écran.       |
| `AppleBlurImage`    | Un remplacement de `<img>` qui démarre flou jusqu'au chargement de l'image. |

Ensemble, ils reproduisent l'expérience de navigation interactive type App Store / Apple TV.

---

## `AppleCardCarousel`

| Propriété       | Type     | Valeur par défaut | Description                                          |
| --------------- | -------- | ----------------- | ---------------------------------------------------- |
| `initialScroll` | `number` | `0`               | Décalage horizontal appliqué au montage (en px).     |

### Slots

Le slot par défaut doit contenir un ou plusieurs composants **`AppleCarouselItem`**.

### Événements émis

_Aucun événement personnalisé._

---

## `AppleCarouselItem`

| Propriété | Type     | Obligatoire | Description                                                  |
| --------- | -------- | ----------- | ------------------------------------------------------------ |
| `index`   | `number` | ✓           | Index basé sur zéro, utilisé pour échelonner l'animation d'apparition. |

### Slots

Slot par défaut — placez ici une **`AppleCard`**.

---

## `AppleCard`

| Propriété | Type                                               | Obligatoire | Valeur par défaut | Description                              |
| --------- | -------------------------------------------------- | ----------- | ----------------- | ---------------------------------------- |
| `card`    | `{ src: string; title: string; category: string }` | ✓           | —                 | Objet de données de la carte.            |
| `index`   | `number`                                           | ✓           | —                 | Position dans le carrousel.              |
| `layout`  | `boolean`                                          | ✕           | `false`           | Active l'animation FLIP avec layout partagé. |

### Slots

Lorsque la carte est **étendue** (modal ouverte), le slot par défaut s'affiche dans le corps de la modal ; vous pouvez y injecter du contenu enrichi comme du texte, des images ou des vidéos.

### Événements émis

_Aucun événement personnalisé (repose sur le contexte injecté `CarouselKey`)._

---

## `AppleBlurImage`

| Propriété | Type               | Valeur par défaut                 | Description                                                        |
| --------- | ------------------ | --------------------------------- | ------------------------------------------------------------------ |
| `src`     | `string`           | **—**                             | URL de l'image. _Requise._                                         |
| `alt`     | `string`           | "Background of a beautiful view"  | Texte alternatif.                                                  |
| `width`   | `number \| string` | _taille naturelle de l'image_     | Attribut de largeur ; omis lors de l'utilisation de `fill`.        |
| `height`  | `number \| string` | _taille naturelle de l'image_     | Attribut de hauteur ; omis lors de l'utilisation de `fill`.        |
| `fill`    | `boolean`          | `false`                           | Si `true`, applique `width:100%; height:100%` via des classes utilitaires. |
| `class`   | `string`           | `""`                              | Classes supplémentaires fusionnées via `cn()`.                     |

Lorsque l'image déclenche l'événement natif `load`, elle passe en douceur de `blur-sm` à sans flou.

---

#credits

- Porté depuis [Aceternity UI Apple Card Carousel](https://ui.aceternity.com/components/apple-cards-carousel).

::
