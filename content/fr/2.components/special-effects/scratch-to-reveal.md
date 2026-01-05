---
title: Gratter pour révéler
description: Le composant ScratchToReveal crée un effet à gratter interactif avec dimensions et animations personnalisables, révélant le contenu caché en dessous.
category: Special Effects
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="ScratchToRevealDemo.vue" config="ScratchToRevealConfig" componentId="scratch-to-reveal" :componentFiles='["ScratchToReveal.vue"]'}

#api

## API

| Nom de propriété        | Type                     | Valeur par défaut | Description                                                                                     |
| ----------------------- | ------------------------ | ----------------- | ----------------------------------------------------------------------------------------------- |
| `class`                 | `string`                 | `""`              | Nom de classe à appliquer au composant.                                                         |
| `width`                 | `number`                 | `""`              | Largeur du conteneur à gratter.                                                                 |
| `height`                | `number`                 | `""`              | Hauteur du conteneur à gratter.                                                                 |
| `minScratchPercentage`  | `number`                 | `50`              | Pourcentage minimal de surface grattée considéré comme terminé (valeur entre 0 et 100).        |
| `gradientColors`        | `[string,string,string]` | `-`               | Couleurs de dégradé pour l'effet à gratter.                                                     |

| Nom de l'événement | Charge utile | Description                                         |
| ------------------ | ------------ | --------------------------------------------------- |
| `complete`         | `-`          | Fonction appelée lorsque le grattage est terminé.   |

| Nom du slot | Contenu par défaut | Description                             |
| ----------- | ------------------ | --------------------------------------- |
| `default`   | `-`                | Le texte sous le ticket à gratter.      |

#credits

- Merci à [Whbbit1999](https://github.com/Whbbit1999) pour ce composant.
- Inspiré par [MagicUI Scratch To Reveal](https://magicui.design/docs/components/scratch-to-reveal).

::
