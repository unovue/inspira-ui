---
title: Téléversement de fichier
description: Un composant moderne de téléversement de fichiers avec effet de carte 3D, glisser-déposer et arrière-plan en grille réactive.
category: Formulaires et saisie
tags: [css, tailwind, input, aceternity-ui]
---

::ComponentViewer{demoFile="FileUploadDemo.vue" config="FileUploadConfig" componentId="file-upload" :componentFiles='["FileUpload.vue", "FileUploadGrid.vue"]'}

#api

## API

### `FileUpload`

Le composant `FileUpload` sert de conteneur pour l'effet d'upload. Il gère les événements souris pour créer une perspective 3D.

#### Props

| Nom de propriété | Type   | Valeur par défaut | Description                                                 |
| ---------------- | ------ | ----------------- | ----------------------------------------------------------- |
| `class`          | String | -                 | Classes supplémentaires pour styliser l'élément conteneur.  |

#### Événements émis

| Nom de l'événement | Type                      | Description                                                       |
| ------------------ | ------------------------- | ----------------------------------------------------------------- |
| `onChange`         | `(files: File[]) => void` | Fonction de rappel déclenchée lorsque des fichiers sont ajoutés/téléversés. |

### `FileUploadGrid`

Le composant `FileUploadGrid` fournit le motif de grille d'arrière-plan pour la zone d'upload. Il est destiné à être utilisé dans un composant `FileUpload` pour créer l'effet visuel derrière l'interface de téléversement.

#### Props

| Nom de propriété | Type   | Valeur par défaut | Description                                   |
| ---------------- | ------ | ----------------- | --------------------------------------------- |
| `class`          | String | -                 | Classes supplémentaires pour un style personnalisé. |

#credits

- Merci à [kalix127](https://github.com/kalix127) pour le portage de ce composant.
- Inspiré par [AcernityUI](https://ui.aceternity.com/components/file-upload).

::
