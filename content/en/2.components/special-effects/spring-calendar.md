---
title: Spring Calendar
description: An animated calendar widget that expands to reveal events and features smooth, spring‑based Motion‑V transitions.
category: Special Effects
tags: [css, tailwind, motion-v]
---

::ComponentViewer{demoFile="SpringCalendarDemo.vue" config="SpringCalendarConfig" componentId="spring-calendar" :componentFiles='["SpringCalendar.vue", "TextMorph.vue"]'}

#api

## API

| Prop Name      | Type                                                                                                           | Default | Description                                                           |
| -------------- | -------------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------- |
| `calendarData` | `Array<{ month: string; date: number; day: string; events?: { title: string; day: string; time: string }[] }>` | **—**   | Array defining each calendar day and its optional events. _Required_. |
| `initialIndex` | `number`                                                                                                       | `0`     | Day index initially selected.                                         |

### Emits

| Event                | Payload  | Description                                                        |
| -------------------- | -------- | ------------------------------------------------------------------ |
| `update:activeIndex` | `number` | Fires when a day button is clicked, emitting the new active index. |

#credits

- Inspired from the work of [sekachov](https://x.com/sekachov)

::
