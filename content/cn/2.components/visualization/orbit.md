---
title: 轨道动画
description: 让内容沿圆轨道运动的组件，可自定义持续时间、延迟与半径，并可选择显示轨道路径。
category: 可视化
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="OrbitDemo.vue" config="OrbitConfig" componentId="orbit" :componentFiles='["Orbit.vue", "index.ts"]'}

#api

## API

| 属性名      | 类型                  | 默认值  | 描述                                                         |
| ----------- | --------------------- | ------- | ------------------------------------------------------------ |
| `direction` | `normal` \| `reverse` | `normal`| 轨道运动方向，可使用常量 ORBIT_DIRECTION。                   |
| `duration`  | `?number`             | `20`    | 轨道动画持续时间（秒）。                                     |
| `delay`     | `?number`             | `10`    | 动画开始前的延迟时间（秒）。                                 |
| `radius`    | `?number`             | `50`    | 轨道半径（像素）。                                           |
| `path`      | `?boolean`            | `false` | 若为 `true`，显示轨道圆路径。                                |

#credits

- 灵感来自 [Magic UI](https://magicui.design/docs/components/orbiting-circles)。
- 感谢 [Nathan De Pachtere](https://nathandepachtere.com/) 更新此组件。

::
