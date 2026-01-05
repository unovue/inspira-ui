---
title: 液态背景
description: 使用 OGL 实现的响应式动态背景效果，基于 WebGL。
category: Background
tags: [css, tailwind, background, ogl, webgl]
---

::ComponentViewer{demoFile="LiquidBackgroundDemo.vue" config="LiquidBackgroundConfig" componentId="liquid-background" :componentFiles='["LiquidBackground.vue"]' dependencies="ogl"}

#api

## API

该组件无需外部 props，即可在挂载时动态渲染液态背景效果。

#credits

- 基于 [OGL](https://github.com/oframe/ogl) 库实现 3D 渲染。
- 灵感来自生成艺术图案。
- 使用 Vue 组合式 API 管理生命周期与状态。

::
