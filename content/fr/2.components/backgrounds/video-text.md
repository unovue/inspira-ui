---
title: Texte vidéo
description: Un composant texte avec une vidéo en arrière-plan.
category: Background
tags: [css, tailwind, background, magic-ui]
---

::ComponentViewer{demoFile="VideoTextDemo.vue" config="VideoTextConfig" componentId="video-text" :componentFiles='["VideoText.vue"]'}

#api

## API

| Nom de propriété   | Type                             | Valeur par défaut | Description                                   |
| ------------------ | -------------------------------- | ----------------- | --------------------------------------------- |
| `src`              | `string`                         | Requise           | URL source de la vidéo.                       |
| `class`            | `string`                         | `""`              | Classes supplémentaires pour le conteneur.    |
| `autoPlay`         | `boolean`                        | `true`            | Indique si la vidéo se lance automatiquement. |
| `muted`            | `boolean`                        | `true`            | Indique si la vidéo est muette.               |
| `loop`             | `boolean`                        | `true`            | Indique si la vidéo boucle.                   |
| `preload`          | `"auto" \| "metadata" \| "none"` | `"auto"`          | Indique si la vidéo est préchargée.           |
| `fontSize`         | `string \| number`               | `"120"`           | Taille de police pour le masque de texte.     |
| `fontWeight`       | `string \| number`               | `"bold"`          | Graisse de police pour le masque de texte.    |
| `textAnchor`       | `string`                         | `"middle"`        | Ancre de texte pour le masque.                |
| `dominantBaseline` | `string`                         | `"middle"`        | Ligne de base dominante pour le masque.       |
| `fontFamily`       | `string`                         | `"sans-serif"`    | Famille de police pour le masque de texte.    |

#credits

- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour ce composant.
- Porté depuis [Video Text de Magic UI](https://magicui.design/docs/components/video-text).

::
