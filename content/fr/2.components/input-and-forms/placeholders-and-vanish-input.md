---
title: Placeholders et saisie qui disparaît
description: Des placeholders qui glissent et un champ qui disparaît après soumission.
category: Forms & Input
tags: [css, tailwind, input, aceternity-ui]
---

::ComponentViewer{demoFile="VanishingInputDemo.vue" config="VanishingInputConfig" componentId="vanishing-input" :componentFiles='["VanishingInput.vue"]'}

#api

## API

| Nom de propriété | Type            | Valeur par défaut                                 | Description                                                                       |
| ---------------- | --------------- | ------------------------------------------------- | --------------------------------------------------------------------------------- |
| `placeholders`   | `Array<string>` | `["Placeholder 1", "Placeholder 2", "Placeholder 3"]` | Tableau de textes de placeholder qui défilent comme invites dans le champ.        |

Ce composant écoute les événements suivants émis par le composant `VanishingInput` :

| Nom de l'événement | Paramètres | Description                                    |
| ------------------ | ---------- | ---------------------------------------------- |
| `change`           | `Event`    | Déclenché lorsque la valeur du champ change.   |
| `submit`           | `string`   | Déclenché lorsque le champ est soumis.         |

#credits

- Merci à [M Atif](https://github.com/atif0075) pour le portage de ce composant.
- Porté depuis [Placeholders And Vanish Input d'Aceternity UI](https://ui.aceternity.com/components/placeholders-and-vanish-input).

::
