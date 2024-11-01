---
title: Aurora Background
description: A subtle Aurora or Southern Lights background for your website.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="AuroraBackgroundDemo" type="examples" id="aurora-background"}
::

## API

| Prop Name        | Type      | Default | Description                                                               |
| ---------------- | --------- | ------- | ------------------------------------------------------------------------- |
| `class`          | `string`  | `-`     | Additional CSS classes to apply to the component for styling.             |
| `radialGradient` | `boolean` | `true`  | Determines whether a radial gradient effect is applied to the background. |

You can copy and paste the `tailwind.config.ts` code.

```ts{1-3, 13, 16-23, 27, 31-40} [tailwind.config.ts]
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: "selector",
  safelist: ["dark"],
  prefix: "",
  content: [],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
```

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="AuroraBackground.vue" language="vue" componentName="AuroraBackground" type="ui" id="aurora-background"}
::

## Features

- **Slot Support**: Easily add any content inside the component using the default slot.

## Credits

- Credits to [Aceternity UI](https://ui.aceternity.com/components/aurora-background).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.
