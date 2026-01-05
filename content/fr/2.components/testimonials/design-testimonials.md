---
title: Témoignages design
description: Une section de témoignages premium et orientée design, avec typographie cinématographique, parallaxe magnétique, animations mot à mot et navigation en lecture automatique.
category: Divers
tags: [css, tailwind, motion-v, testimonial, animation]
badge: New
---

::ComponentViewer{demoFile="DesignTestimonialsDemo.vue" config="DesignTestimonialsConfig" componentId="design-testimonials" :componentFiles='["DesignTestimonials.vue"]'}

#api

## API

| Nom de propriété | Type                | Valeur par défaut | Description                                                          |
| ---------------- | ------------------- | ----------------- | -------------------------------------------------------------------- |
| `title`          | `string`            | `"Testimonials"`  | Libellé vertical affiché sur le côté gauche de la mise en page.      |
| `duration`       | `number`            | `6000`            | Durée (en ms) avant de passer automatiquement au témoignage suivant. |
| `testimonials`   | `TestimonialItem[]` | **requis**        | Liste des témoignages à afficher et animer.                          |

### Objet `TestimonialItem`

Chaque témoignage doit suivre cette structure :

| Propriété | Type     | Description                                                               |
| --------- | -------- | ------------------------------------------------------------------------- |
| `quote`   | `string` | Texte du témoignage, animé mot à mot.                                     |
| `author`  | `string` | Nom de l'auteur du témoignage.                                            |
| `role`    | `string` | Rôle ou fonction de l'auteur.                                             |
| `company` | `string` | Nom de l'entreprise ou organisation (utilisé dans le badge et le ticker). |

#credits

- Animations propulsées par `motion-v`
- Porté depuis [Design Testimonials par Jatin Yadav](https://21st.dev/community/components/jatin-yadav05/design-testimonial/default)

::
