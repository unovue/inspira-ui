---
title: Particle Whirlpool
description: An animated background with swirling particles.
category: Background
tags: [css, tailwind, background, threejs, postprocessing]
---

::ComponentViewer{demoFile="ParticleWhirlpoolBgDemo.vue" config="ParticleWhirlpoolBgConfig" componentId="bg-particle-whirlpool" :componentFiles='["ParticleWhirlpoolBg.vue"]' dependencies="three postprocessing" devDependencies="@types/three"}

#api

## API

| Prop Name       | Type     | Default | Description                                                     |
| --------------- | -------- | ------- | --------------------------------------------------------------- |
| `class`         | `string` | `""`    | Additional CSS classes for custom styling.                      |
| `blur`          | `number` | `0`     | Amount of blur to apply to the background, specified in pixels. |
| `particleCount` | `number` | `2000`  | Number of particles in the whirlpool animation.                 |

#credits

- Built with the [Three.js](https://threejs.org/) library for 3D rendering and animations.
- Inspired by [TroisJs](https://troisjs.github.io/examples/demos/3.html)

::
