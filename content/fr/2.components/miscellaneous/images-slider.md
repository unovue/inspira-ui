---
title: Slider d'images
description: Un slider pleine page avec navigation clavier.
category: Divers
tags: [css, tailwind, images, aceternity-ui]
---

::ComponentViewer{demoFile="ImagesSliderDemo.vue" config="ImagesSliderConfig" componentId="images-slider" :componentFiles='["ImagesSlider.vue"]'}

#api

## API

| Nom de propriété    | Type                       | Valeur par défaut                                 | Description                                                                    |
| ------------------- | -------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------ |
| `images`            | `string[]`                 | `[]`                                              | Tableau d'URL d'images à afficher.                                             |
| `hideOverlay`       | `boolean`                  | `false`                                           | Ne pas créer de superposition pour le slider ; le slot ne sera pas rendu.      |
| `overlayClass`      | `string`                   | `''`                                              | Chaîne de classes à appliquer au conteneur de l'overlay.                       |
| `imageClass`        | `string`                   | `'bg-cover bg-center bg-no-repeat'`               | Classes à appliquer à chaque image.                                            |
| `enterFromClass`    | `string`                   | `'scale-0 origin-center'`                         | Classe appliquée à `enter-from-class` lors de la transition d'image.           |
| `enterActiveClass`  | `string`                   | `'transition-transform duration-300 ease-in-out'` | Classe appliquée à `enter-active-class` lors de la transition.                 |
| `leaveActiveClass`  | `string`                   | `'transition-transform duration-300 ease-in-out'` | Classe appliquée à `leave-active-class` lors de la transition.                 |
| `autoplay`          | `boolean\\|number`         | `false`                                           | Intervalle d'autoplay en ms, ou `false` pour désactiver.                       |
| `direction`         | `'vertical'\\|'horizontal'`| `'vertical'`                                      | Axe sur lequel le slider doit fonctionner.                                     |
| `perspective`       | `string`                   | `'1000px'`                                        | Perspective appliquée au conteneur du slider.                                  |
| `modelValue`        | `number`                   | `0`                                               | Liaison bidirectionnelle pour l'index de l'image active.                       |

#credits

- Composant par [Craig Riley](https://github.com/craigrileyuk) pour le portage.
- Merci à [Aceternity UI](https://ui.aceternity.com/components/images-slider) pour l'inspiration.

::
