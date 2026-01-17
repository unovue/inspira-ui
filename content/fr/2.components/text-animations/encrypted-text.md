---
title: Texte chiffré
description: Un effet de révélation du texte qui commence par des caractères brouillés et se déchiffre progressivement en message final lorsqu'il entre dans la fenêtre d'affichage.
category: Text Animation
tags: [css, tailwind, motion-v, typography, animation, text]
badge: New
---

::ComponentViewer{demoFile="EncryptedTextDemo.vue" config="EncryptedTextConfig" componentId="encrypted-text" :componentFiles='["EncryptedText.vue"]'}

#api

## API

| Nom de propriété  | Type     | Valeur par défaut                          | Description                                                     |
| ----------------- | -------- | ------------------------------------------ | --------------------------------------------------------------- |
| `text`            | `string` | **required**                               | Le texte à afficher et à révéler.                               |
| `class`           | `string` | `""`                                       | Classe de base appliquée à l'élément conteneur.                 |
| `revealDelayMs`   | `number` | `50`                                       | Délai (en ms) entre la révélation de chaque caractère suivant.  |
| `flipDelayMs`     | `number` | `50`                                       | Délai (en ms) entre chaque ré-embrouillage des caractères non révélés. |
| `charset`         | `string` | `A–Z a–z 0–9 !@#$%^&*()_+-={}[];:,.<>/?`   | Jeu de caractères utilisé pour les glyphes brouillés.          |
| `encryptedClass`  | `string` | `""`                                       | Classe appliquée aux caractères encore chiffrés/brouillés.      |
| `revealedClass`   | `string` | `""`                                       | Classe appliquée aux caractères une fois révélés.              |

#credits

- Porté depuis [Aceternity UI Encrypted Text](https://ui.aceternity.com/components/encrypted-text).
- Animation propulsée par `motion-v`.

::
