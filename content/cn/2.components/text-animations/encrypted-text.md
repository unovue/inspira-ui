---
title: 加密文字
description: 当进入视口时由乱码字符开始并逐步解密为最终内容的文字揭示效果。
category: Text Animation
tags: [css, tailwind, motion-v, typography, animation, text]
badge: New
---

::ComponentViewer{demoFile="EncryptedTextDemo.vue" config="EncryptedTextConfig" componentId="encrypted-text" :componentFiles='["EncryptedText.vue"]'}

#api

## API

| 属性名            | 类型     | 默认值                                   | 描述                                   |
| ----------------- | -------- | ---------------------------------------- | -------------------------------------- |
| `text`            | `string` | **required**                             | 要渲染并揭示的文字内容。               |
| `class`           | `string` | `""`                                     | 应用于外层容器的基础类名。             |
| `revealDelayMs`   | `number` | `50`                                     | 每个字符依次揭示的延迟（毫秒）。       |
| `flipDelayMs`     | `number` | `50`                                     | 未揭示字符重新打乱的延迟（毫秒）。     |
| `charset`         | `string` | `A–Z a–z 0–9 !@#$%^&*()_+-={}[];:,.<>/?` | 用于乱码字符的字符集。                 |
| `encryptedClass`  | `string` | `""`                                     | 仍处于加密/打乱状态时的字符类名。      |
| `revealedClass`   | `string` | `""`                                     | 字符揭示后应用的类名。                 |

#credits

- 移植自 [Aceternity UI Encrypted Text](https://ui.aceternity.com/components/encrypted-text)。
- 动画由 `motion-v` 驱动。

::
