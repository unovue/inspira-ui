---
title: Slider de témoignages
description: Un slider de témoignages léger avec rotation d'image, transitions de texte et auto-rotation optionnelle.
category: Divers
tags: [css, tailwind]
---

::ComponentViewer{demoFile="TestimonialSliderDemo.vue" config="TestimonialSliderConfig" componentId="testimonial-slider" :componentFiles='["TestimonialSlider.vue"]'}

#api

## API

| Nom de propriété | Type                                                                | Valeur par défaut | Description                                                            |
| ---------------- | ------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------- |
| `testimonials`   | `Array<{ img: string; quote: string; name: string; role: string }>` | `[]`              | Tableau d'objets témoignages affichés par le slider.                   |
| `autoRotate`     | `boolean`                                                           | `true`            | Si `true`, le slider avance automatiquement toutes les `duration` secondes. |
| `duration`       | `number`                                                            | `5`               | Intervalle en secondes entre les slides lorsque l'auto-rotation est active. |

::
