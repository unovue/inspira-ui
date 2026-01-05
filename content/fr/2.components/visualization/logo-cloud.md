---
title: Nuage de logos animé
description: Un nuage de logos d'entreprises animé, idéal pour présenter des partenaires ou clients.
category: Visualization
tags: [css, tailwind]
---

::ComponentViewer{demoFile="IconLogoCloudDemo.vue" config="IconLogoCloudConfig" componentId="logo-cloud" :componentFiles='["AnimatedLogoCloud.vue", "IconLogoCloud.vue", "StaticLogoCloud.vue", "index.ts"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut              | Description                                                    |
| ---------------- | -------- | ------------------------------ | -------------------------------------------------------------- |
| `class`          | `string` | `-`                            | Délai en millisecondes avant l'ajout de chaque élément à la liste. |
| `title`          | `string` | `Trusted by Companies like`    | Titre du nuage animé.                                         |
| `logos`          | `[]`     | `[{name: "", path: ""}]`       | Tableau d'éléments (logos) avec les champs `name` et `path`.   |

#credits

- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour ce composant.

::
