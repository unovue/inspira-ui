---
title: Calendrier à ressorts
description: Un widget de calendrier animé qui s'étend pour révéler les événements et propose des transitions Motion‑V fluides basées sur des ressorts.
category: Special Effects
tags: [css, tailwind, motion-v]
---

::ComponentViewer{demoFile="SpringCalendarDemo.vue" config="SpringCalendarConfig" componentId="spring-calendar" :componentFiles='["SpringCalendar.vue", "TextMorph.vue"]'}

#api

## API

| Nom de propriété | Type                                                                                                           | Valeur par défaut | Description                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------ |
| `calendarData`   | `Array<{ month: string; date: number; day: string; events?: { title: string; day: string; time: string }[] }>` | **—**             | Tableau définissant chaque jour du calendrier et ses éventuels événements. _Requis._ |
| `initialIndex`   | `number`                                                                                                       | `0`               | Index du jour sélectionné au départ.                                    |

### Événements émis

| Nom de l'événement      | Charge utile | Description                                                        |
| ----------------------- | ------------ | ------------------------------------------------------------------ |
| `update:activeIndex`    | `number`     | Déclenché lorsqu'un jour est cliqué, en émettant le nouvel index actif. |

#credits

- Inspiré par le travail de [sekachov](https://x.com/sekachov)

::
