---
title: Arborescence de fichiers
description: Un composant pour présenter la structure de dossiers et fichiers d'un répertoire.
category: Visualization
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="FileTreeDemo.vue" config="FileTreeConfig" componentId="file-tree" :componentFiles='["Tree.vue", "Folder.vue", "File.vue", "TreeIndicator.vue", "index.ts"]'}

#api

## API

### `Tree`

Le composant `Tree` sert de conteneur pour afficher une structure hiérarchique de fichiers/dossiers.

#### Props

| Nom de propriété        | Type                | Valeur par défaut        | Description                                            |
| ----------------------- | ------------------- | ------------------------ | ------------------------------------------------------ |
| `class`                 | `string`            | -                        | Classes supplémentaires pour styliser le conteneur.    |
| `initialSelectedId`     | `string`            | -                        | ID de l'élément sélectionné au chargement.             |
| `indicator`             | `boolean`           | `true`                   | Affiche ou non la ligne d'indicateur de l'arborescence. |
| `elements`              | `TreeViewElement[]` | -                        | Tableau des éléments de l'arbre à afficher.            |
| `initialExpandedItems`  | `string[]`          | -                        | IDs des dossiers ouverts initialement.                 |
| `openIcon`              | `string`            | `"lucide:folder-open"`   | Icône pour les dossiers ouverts.                       |
| `closeIcon`             | `string`            | `"lucide:folder"`        | Icône pour les dossiers fermés.                        |
| `fileIcon`              | `string`            | `"lucide:file"`          | Icône pour les fichiers.                               |
| `direction`             | `"rtl" \| "ltr"`    | `"ltr"`                  | Sens d'écriture de l'arborescence.                     |

### `Folder` et `File`

Les composants `Folder` et `File` représentent les dossiers et fichiers. Les dossiers peuvent contenir d'autres `Folder` et `File`.

#### Props

| Nom de propriété | Type      | Valeur par défaut | Description                                  |
| ---------------- | --------- | ----------------- | -------------------------------------------- |
| `class`          | `string`  | -                 | Classes supplémentaires pour un style personnalisé. |
| `id`             | `string`  | -                 | Identifiant unique de l'élément.             |
| `name`           | `string`  | -                 | Nom affiché du dossier/fichier.              |
| `isSelectable`   | `boolean` | `true`            | Indique si l'élément peut être sélectionné.  |
| `isSelect`       | `boolean` | `false`           | Indique si l'élément est actuellement sélectionné. |

#credits

- Inspiré par [Magic UI](https://magicui.design/docs/components/file-tree).
- Merci à [kalix127](https://github.com/kalix127) pour le portage de ce composant.

::
