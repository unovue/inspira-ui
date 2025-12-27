---
title: Témoignages animés
description: Un composant de témoignages animé et attractif, présentant les retours utilisateurs avec transitions et lecture automatique.
category: Divers
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="AnimatedTestimonialsDemo.vue" config="AnimatedTestimonialsConfig" componentId="animated-testimonials" :componentFiles='["AnimatedTestimonials.vue"]'}

#api

## API

| Nom de propriété | Type            | Valeur par défaut | Description                                                                                    |
| ---------------- | --------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| `testimonials`   | `Testimonial[]` | `[]`              | Tableau d'objets témoignages contenant citation, nom, image et fonction.                       |
| `autoplay`       | `boolean`       | `false`           | Indique si les témoignages doivent défiler automatiquement.                                    |
| `duration`       | `number`        | `5000`            | Durée (en millisecondes) avant de passer automatiquement au témoignage suivant.                |

### Objet Testimonial

Chaque objet de témoignage doit contenir les champs suivants :

| Propriété     | Type     | Description                                                         |
| ------------- | -------- | ------------------------------------------------------------------- |
| `quote`       | `string` | Texte du témoignage.                                                |
| `name`        | `string` | Nom de la personne ou entité donnant le témoignage.                 |
| `designation` | `string` | Poste ou rôle de l'auteur du témoignage (ex. CEO, utilisateur).     |
| `image`       | `string` | URL de l'image ou de l'avatar de l'auteur du témoignage.            |

#credits

- Porté depuis (Aceternity UI Animated Testimonials)[https://ui.aceternity.com/components/animated-testimonials].

::
