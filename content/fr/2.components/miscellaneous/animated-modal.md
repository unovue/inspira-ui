---
title: Animated Modal
description: Une fenêtre modale avec une animation 3D et un arrière-plan flouté.
category: Miscellaneous
tags: [css, tailwind, modal, motion, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="AnimatedModalDemo.vue" config="AnimatedModalConfig" componentId="animated-modal" :componentFiles='["AnimatedModal.vue", "AnimatedModalBody.vue", "AnimatedModalContent.vue", "AnimatedModalFooter.vue", "AnimatedModalTrigger.vue", "AnimatedModalContext.ts", "useAnimatedModal.ts", "index.ts"]' dependencies="motion-v @vueuse/core"}

#api

## API

### `<AnimatedModal />`

#### Props

| Nom de prop   | Type      | Défaut  | Description                          |
| ------------- | --------- | ------- | ------------------------------------ |
| `open`        | `boolean` | `-`     | État contrôlé d’ouverture.           |
| `defaultOpen` | `boolean` | `false` | État initial en mode non contrôlé.   |
| `closeOnEsc`  | `boolean` | `true`  | Ferme la modale avec la touche `Esc` |

#### Événements

| Nom de l'événement | Charge utile | Description                           |
| ------------------ | ------------ | ------------------------------------- |
| `update:open`      | `boolean`    | Émis lorsque l'état change.           |
| `open`             | -            | Émis quand `openModal()` est appelé.  |
| `close`            | -            | Émis quand `closeModal()` est appelé. |

#### Slots

| Nom du slot | Props du slot                               |
| ----------- | ------------------------------------------- |
| `default`   | `open`, `openModal`, `closeModal`, `toggle` |

#### Composable

- `useAnimatedModal()` — accéder à l'état/méthodes depuis n'importe quel enfant (doit être utilisé dans `<AnimatedModal />`).

### `<AnimatedModalBody />`

#### Props

| Nom de prop      | Type                    | Défaut   | Description                               |
| ---------------- | ----------------------- | -------- | ----------------------------------------- |
| `class`          | `string`                | `""`     | Classes supplémentaires du panneau.       |
| `overlayClass`   | `string`                | `""`     | Classes supplémentaires de l'overlay.     |
| `contentClass`   | `string`                | `""`     | Classes supplémentaires du contenu.       |
| `showClose`      | `boolean`               | `true`   | Affiche le bouton de fermeture.           |
| `closeOnOutside` | `boolean`               | `true`   | Ferme au clic en dehors de la modale.     |
| `lockScroll`     | `boolean`               | `true`   | Bloque le scroll de la page quand ouvert. |
| `zIndex`         | `number`                | `10000`  | Z-index de la couche modale.              |
| `teleportTo`     | `string \| HTMLElement` | `"body"` | Cible Teleport de la modale.              |

#credits

- Porté depuis [Animated Modal d'Aceternity UI](https://ui.aceternity.com/components/animated-modal).
- Animations avec [motion-v](https://motion.dev/).

::
