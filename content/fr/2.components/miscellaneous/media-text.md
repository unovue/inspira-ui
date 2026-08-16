---
title: Texte média
description: Révélez une image ou une vidéo entre deux fragments de texte au survol, dans la vue ou via une ref.
category: Miscellaneous
tags: [media, image, video, motion-v]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="MediaTextDemo.vue" config="MediaTextConfig" componentId="media-text" :componentFiles='["MediaText.vue", "index.ts"]'}

#api

## API

| Nom de la prop        | Type                           | Valeur par défaut                  | Description                                        |
| --------------------- | ------------------------------ | ---------------------------------- | -------------------------------------------------- |
| `firstText`           | `string`                       | —                                  | Texte affiché avant le média.                      |
| `secondText`          | `string`                       | —                                  | Texte affiché après le média.                      |
| `mediaUrl`            | `string`                       | —                                  | URL de l’image ou de la vidéo.                     |
| `mediaType`           | `"image" \| "video"`           | —                                  | Type de média à afficher.                          |
| `mediaContainerClass` | `string`                       | —                                  | Classes du conteneur média animé.                  |
| `fallbackUrl`         | `string`                       | —                                  | Affiche utilisée comme poster pour les vidéos.     |
| `as`                  | `string`                       | `p`                                | Élément HTML utilisé pour les fragments de texte.  |
| `autoPlay`            | `boolean`                      | `true`                             | Lance automatiquement la vidéo.                    |
| `loop`                | `boolean`                      | `true`                             | Boucle la vidéo.                                   |
| `muted`               | `boolean`                      | `true`                             | Coupe le son de la vidéo.                          |
| `playsInline`         | `boolean`                      | `true`                             | Conserve la lecture vidéo dans la page sur mobile. |
| `alt`                 | `string`                       | Généré                             | Texte alternatif de l’image.                       |
| `triggerType`         | `"hover" \| "ref" \| "inView"` | `hover`                            | Déclencheur utilisé pour révéler le média.         |
| `useInViewOptions`    | `UseInViewOptions`             | `{ once: true, amount: 0.5 }`      | Options du déclencheur de visibilité.              |
| `animationVariants`   | `object`                       | Révélation avec ressort de largeur | Variants Motion du conteneur média.                |
| `class`               | `string`                       | —                                  | Classes fusionnées sur la racine.                  |
| `leftTextClass`       | `string`                       | —                                  | Classes du premier fragment de texte.              |
| `rightTextClass`      | `string`                       | —                                  | Classes du second fragment de texte.               |

Le composant expose `animate()` et `reset()` avec le déclencheur `ref`.

#credits

- Porté depuis [Fancy Components Media Between Text](https://fancycomponents.dev/docs/components/blocks/media-between-text).

::
