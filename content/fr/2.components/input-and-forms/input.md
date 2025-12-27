---
title: Champ de saisie
description: Un champ de saisie polyvalent et visuellement dynamique avec effet radial au survol, conçu pour les applications web modernes.
category: Formulaires et saisie
tags: [css, tailwind, input, aceternity-ui]
---

::ComponentViewer{demoFile="InputDemo.vue" config="InputConfig" componentId="input" :componentFiles='["IInput.vue"]'}

#api

## API

| Nom de propriété   | Type                | Valeur par défaut | Description                                                  |
| ------------------ | ------------------- | ----------------- | ------------------------------------------------------------ |
| `defaultValue`     | `string  \| number` | `""`              | Valeur par défaut du champ de saisie.                        |
| `class`            | `string`            | `""`              | Classes CSS supplémentaires pour un style personnalisé.      |
| `containerClass`   | `string`            | `""`              | Classes CSS supplémentaires pour styliser le conteneur.      |

#credits

- Construit sur la base du composant Input de ShadCN Vue, avec des fonctionnalités étendues pour les besoins UI/UX modernes.
- Porté depuis le [Signup Form Input Component d'Aceternity UI](https://ui.aceternity.com/components/signup-form)

::
