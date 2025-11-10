---
title: Aurora Background
description: A subtle Aurora or Southern Lights background for your website.
category: Background
tags: [css, tailwind, background, aceternity-ui]
---

::ComponentViewer{demoFile="AuroraBackgroundDemo.vue" config="AuroraBackgroundConfig" componentId="aurora-background" :componentFiles='["AuroraBackground.vue"]'}

#instructions

Add following entry to inline theme in your `main.css` file.

```css
@theme inline {
  --animate-aurora: aurora 60s linear infinite;
  @keyframes aurora {
    from {
      background-position:
        50% 50%,
        50% 50%;
    }
    to {
      background-position:
        350% 50%,
        350% 50%;
    }
  }
}
```

#api

## API

| Prop Name        | Type      | Default | Description                                                               |
| ---------------- | --------- | ------- | ------------------------------------------------------------------------- |
| `class`          | `string`  | `-`     | Additional CSS classes to apply to the component for styling.             |
| `radialGradient` | `boolean` | `true`  | Determines whether a radial gradient effect is applied to the background. |

#credits

- Credits to [Aceternity UI](https://ui.aceternity.com/components/aurora-background).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.

::
