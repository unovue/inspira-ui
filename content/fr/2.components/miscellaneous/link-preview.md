---
title: Aperçu de lien
description: Aperçus dynamiques pour vos balises de lien.
category: Divers
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="LinkPreviewDemo.vue" config="LinkPreviewConfig" componentId="link-preview" :componentFiles='["LinkPreview.vue"]' dependencies="qss"}

#api

## API

| Nom de propriété | Type      | Valeur par défaut | Description                                                                                 |
| ---------------- | --------- | ----------------- | ------------------------------------------------------------------------------------------- |
| `class`          | `string`  | `""`              | Classe personnalisée appliquée à l'élément principal.                                      |
| `linkClass`      | `string`  | `""`              | Classe personnalisée appliquée à l'élément lien.                                            |
| `width`          | `number`  | `200`             | Largeur de l'image d'aperçu.                                                                |
| `height`         | `number`  | `125`             | Hauteur de l'image d'aperçu.                                                                |
| `isStatic`       | `boolean` | `false`           | Définit si l'image d'aperçu est statique ou générée depuis l'URL (`true` pour mode statique). |
| `imageSrc`       | `string`  | `""`              | Source de l'image à afficher (requis si `isStatic` vaut `true`).                            |
| `url`            | `string`  | `""`              | URL du lien et pour générer l'aperçu (requis si `isStatic` vaut `false`).                   |

#credits

- Merci à [M Atif](https://github.com/atif0075) pour le portage de ce composant.
- Porté depuis [Link Preview d'Aceternity UI](https://ui.aceternity.com/components/link-preview).

::
