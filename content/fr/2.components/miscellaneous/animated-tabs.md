---
title: Animated Tabs
description: Un composant d'onglets avec un indicateur actif en shared layout et une transition de contenu en pile.
category: Miscellaneous
tags: [css, tailwind, tabs, aceternity-ui, motion-v]
badge: New
---

::ComponentViewer{demoFile="AnimatedTabsDemo.vue" config="AnimatedTabsConfig" componentId="animated-tabs" :componentFiles='["AnimatedTabs.vue", "AnimatedTabsFadeInDiv.vue", "types.ts", "index.ts"]' dependencies="motion-v"}

#api

## API

### `<AnimatedTabs />`

Astuce : donnez au conteneur une hauteur fixe (par ex. `h-[20rem] md:h-[40rem]`), car le contenu est empilé avec un positionnement `absolute`.

#### Props

| Nom                  | Type            | Défaut | Description                                                      |
| -------------------- | --------------- | ------ | ---------------------------------------------------------------- |
| `tabs`               | `AnimatedTab[]` | `-`    | Liste des métadonnées des onglets.                               |
| `modelValue`         | `string`        | `-`    | Valeur active de l'onglet en mode contrôlé.                      |
| `containerClassName` | `string`        | `""`   | Classes supplémentaires pour le conteneur de la liste d'onglets. |
| `tabClassName`       | `string`        | `""`   | Classes supplémentaires pour chaque bouton d'onglet.             |
| `activeTabClassName` | `string`        | `""`   | Classes supplémentaires pour le fond de l'indicateur actif.      |
| `contentClassName`   | `string`        | `""`   | Classes supplémentaires pour chaque carte de contenu empilée.    |

#### Events

| Nom                 | Payload  | Description                                         |
| ------------------- | -------- | --------------------------------------------------- |
| `update:modelValue` | `string` | Émis lorsque l'onglet actif change (mode contrôlé). |

#### Slots

| Nom       | Props du slot               | Description                                           |
| --------- | --------------------------- | ----------------------------------------------------- |
| `content` | `tab`, `active`, `hovering` | Permet de rendre le contenu de l'onglet (recommandé). |

#### Types

##### `AnimatedTab`

| Champ            | Type                  | Requis | Description                                                                     |
| ---------------- | --------------------- | ------ | ------------------------------------------------------------------------------- |
| `title`          | `string`              | oui    | Libellé de l'onglet (utilisé par l'interface par défaut).                       |
| `value`          | `string`              | oui    | Identifiant unique de l'onglet.                                                 |
| `panelClassName` | `string`              | non    | Classes d'arrière-plan du panneau (utilisées par la démo ou les consommateurs). |
| `content`        | `Component`           | non    | Composant de contenu de secours si le slot `#content` n'est pas fourni.         |
| `contentProps`   | `Record<string, any>` | non    | Props passées au composant `content`.                                           |

#credits

- Porté depuis [Aceternity UI Tabs](https://ui.aceternity.com/components/tabs).
- Animations propulsées par [motion-v](https://motion.dev/docs/vue).

::
