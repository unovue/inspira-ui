---
title: Texte étincelant
description: Un texte dynamique qui génère en continu des étincelles avec des transitions fluides, idéal pour mettre en valeur du texte avec des étoiles animées.
category: Animation de texte
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="SparklesTextDemo.vue" config="SparklesTextConfig" componentId="sparkles-text" :componentFiles='["SparklesText.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut                         | Description                                   |
| ---------------- | -------- | ----------------------------------------- | --------------------------------------------- |
| `class`          | `string` | `-`                                       | Classe appliquée au texte étincelant.         |
| `text`           | `string` | ``                                        | Texte à afficher.                             |
| `sparklesCount`  | `number` | `10`                                      | Nombre d'étincelles affichées sur le texte.   |
| `colors`         | `object` | `{first: '#A07CFE'; second: '#FE8FB5';}`  | Couleurs des étincelles.                      |

#credits

- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour ce composant.
- Inspiré par [Magic UI](https://magicui.design/docs/components/sparkles-text).
- Merci à [M Atif](https://github.com/atif0075) pour la mise à jour de ce composant.

::
