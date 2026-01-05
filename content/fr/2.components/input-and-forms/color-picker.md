---
title: Sélecteur de couleur
description: Un sélecteur de couleurs complet prenant en charge plusieurs formats, l'accessibilité et des palettes personnalisées.
category: Forms & Input
tags: [css, tailwind, input, color-picker, uplusion23]
---

::ComponentViewer{demoFile="ColorPickerDemo.vue" config="ColorPickerConfig" componentId="color-picker" :componentFiles='["ColorPicker.vue", "ObjectColorInput.vue", "ContrastRatio.vue", "index.ts"]' dependencies="@uiw/color-convert"}

#api

## API

### Props de ColorPicker

| Nom de propriété        | Type                                            | Valeur par défaut | Description                                           |
| ----------------------- | ----------------------------------------------- | ----------------- | ----------------------------------------------------- |
| `value`                 | `string \| HsvaColor \| HslaColor \| RgbaColor` | `undefined`       | Valeur de couleur actuelle dans n'importe quel format pris en charge. |
| `type`                  | `'hsl' \| 'hsla' \| 'rgb' \| 'rgba' \| 'hex'`   | `'hsl'`           | Format de couleur par défaut affiché dans les champs. |
| `swatches`              | `HexColor[]`                                    | `[]`              | Tableau d'échantillons de couleur prédéfinis.         |
| `hideContrastRatio`     | `boolean`                                       | `false`           | Masque la section du rapport de contraste (accessibilité). |
| `hideDefaultSwatches`   | `boolean`                                       | `false`           | Masque les échantillons de couleur par défaut.        |
| `class`                 | `string`                                        | `""`              | Classes CSS supplémentaires pour le contenu du popover. |
| `open`                  | `boolean`                                       | `false`           | Contrôle l'état ouvert/fermé du sélecteur de couleurs. |

### Événements de ColorPicker

| Nom de l'événement | Type                                | Description                                   |
| ------------------ | ----------------------------------- | --------------------------------------------- |
| `value-change`     | `(value: ColorPickerValue) => void` | Émis lorsque la couleur sélectionnée change.  |
| `update:open`      | `(value: boolean) => void`          | Émis lorsque l'état d'ouverture du popover change. |

### Type ColorPickerValue

```typescript
interface ColorPickerValue {
  hex: string; // Chaîne hexadécimale de couleur (ex. "#ff0000")
  hsl: HslaColor; // Objet couleur HSL avec propriétés h, s, l, a
  hsla: HslaColor; // Objet couleur HSLA avec propriétés h, s, l, a
  rgb: RgbaColor; // Objet couleur RGB avec propriétés r, g, b, a
  rgba: RgbaColor; // Objet couleur RGBA avec propriétés r, g, b, a
}
```

#credits

- Merci à [kalix127](https://github.com/kalix127) pour le portage de ce composant.
- Inspiré par [@uplusion23](https://21st.dev/uplusion23/color-picker/color-picker-with-swatches-and-onchange).

::
