---
title: Grille infinie
description: Une grille 3D infinie, interactive et performante, construite avec OGL comme vue sur phantom.land.
category: Visualisation
tags: [css, tailwind, phantom-land, ogl, webgl]
---

::ComponentViewer{demoFile="InfiniteGridDemo.vue" config="InfiniteGridConfig" componentId="infinite-grid" :componentFiles='["InfiniteGrid.vue", "InfiniteGridClass.ts", "DisposalManager.ts", "EventHandler.ts", "GridManager.ts", "PostProcessShader.ts", "createTexture.ts", "shaders.ts", "types.ts"]' dependencies="ogl gsap"}

#api

## API

| Nom de propriété | Type                           | Valeur par défaut | Description                                                                  |
| ---------------- | ------------------------------ | ----------------- | ---------------------------------------------------------------------------- |
| `cardData`       | `CardData[]`                   | `[]`              | Données pour chaque tuile affichée dans la grille. **Requis**.               |
| `options`        | `Partial<InfiniteGridOptions>` | `{}`              | Surcharges facultatives pour le layout, la caméra et le post-traitement (voir tableau ci-dessous). |

### `InfiniteGridOptions`

| Option                                  | Type      | Valeur par défaut | Description                                          |
| --------------------------------------- | --------- | ----------------- | ---------------------------------------------------- |
| `gridCols`                              | `number`  | `4`               | Nombre de colonnes.                                  |
| `gridRows`                              | `number`  | `4`               | Nombre de lignes.                                    |
| `gridGap`                               | `number`  | `0`               | Espacement entre les cases.                          |
| `tileSize`                              | `number`  | `2.4`             | Taille des tuiles (en unités OGL).                   |
| `baseCameraZ`                           | `number`  | `10`              | Distance Z initiale de la caméra.                    |
| `enablePostProcessing`                  | `boolean` | `true`            | Active la pipeline de post-traitement.               |
| `postProcessParams.distortionIntensity` | `number`  | `-0.2`            | Intensité de distorsion barillet/coussin (0 = aucune). |
| `postProcessParams.vignetteOffset`      | `number`  | `0.0`             | Offset du vignetage ; plus élevé ⇒ zone claire plus réduite. |
| `postProcessParams.vignetteDarkness`    | `number`  | `0.0`             | Obscurité du vignetage ; plus élevé ⇒ bords plus sombres. |

---

### `CardData`

| Champ         | Type       | Obligatoire | Description                                   |
| ------------- | ---------- | ----------- | --------------------------------------------- |
| `title`       | `string`   | ✓           | Titre principal.                              |
| `badge`       | `string`   | ✓           | Libellé du badge (rendu personnalisable).     |
| `description` | `string`   | –           | Texte descriptif.                             |
| `tags`        | `string[]` | ✓           | Tags affichés en bas.                         |
| `date`        | `string`   | ✓           | Date affichée en bas à droite.                |
| `image`       | `string`   | –           | URL de l'image d'arrière-plan de la tuile.    |

---

## Événements émis

| Nom de l'événement | Charge utile                        | Description                                                                                                               |
| ------------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `tileClicked`      | `{ card: CardData, index: number }` | Déclenché lorsqu'une tuile est cliquée/appuyée. La charge contient l'objet `CardData` cliqué et son `index` (base zéro). |
| `onTileLoaded`     | -                                   | Déclenché lorsque toutes les images d'une tuile sont chargées.                                                            |

#credits

- Inspiré par [Phantom Land](https://phantom.land)
- Un grand merci à [Safak Dinc](https://github.com/safakdinc) pour l'idée et l'autorisation de l'inclure ici. Le dépôt original est [infinite-grid](https://github.com/safakdinc/infinite-grid). Votre contribution est très appréciée !
- Merci à [kalix127](https://github.com/kalix127) pour le portage de ce composant.

::
