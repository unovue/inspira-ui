import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import { cva } from "class-variance-authority";

type ObjectValues<T> = T[keyof T];

export const PATTERN_BACKGROUND_DIRECTION = {
  Top: "top",
  Bottom: "bottom",
  Left: "left",
  Right: "right",
  TopLeft: "top-left",
  TopRight: "top-right",
  BottomLeft: "bottom-left",
  BottomRight: "bottom-right",
} as const;

export type PatternBackgroundDirection = ObjectValues<typeof PATTERN_BACKGROUND_DIRECTION>;

export interface BaseProps {
  class?: HTMLAttributes["class"];
  animate?: boolean;
  direction?: PatternBackgroundDirection;
  variant?: PatternBackgroundVariants["variant"];
  size?: PatternBackgroundVariants["size"];
  mask?: PatternBackgroundMaskVariants["mask"];
  speed?: ObjectValues<typeof PATTERN_BACKGROUND_SPEED>;
}

export const PATTERN_BACKGROUND_VARIANT = {
  Grid: "grid",
  Dot: "dot",
  BigDot: "big-dot",
} as const;

export const PATTERN_BACKGROUND_SPEED = {
  Default: 10000,
  Slow: 25000,
  Fast: 5000,
} as const;

export const patternBackgroundVariants = cva("relative text-clip", {
  variants: {
    variant: {
      [PATTERN_BACKGROUND_VARIANT.Grid]:
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
      [PATTERN_BACKGROUND_VARIANT.Dot]:
        "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
      [PATTERN_BACKGROUND_VARIANT.BigDot]:
        "[background-image:radial-gradient(#d4d4d4_3px,transparent_3px)] dark:[background-image:radial-gradient(#404040_3px,transparent_3px)]",
    },
    size: {
      xs: "bg-[size:8px_8px]",
      sm: "bg-[size:16px_16px]",
      md: "bg-[size:24px_24px]",
      lg: "bg-[size:32px_32px]",
      xl: "bg-[size:40px_40px]",
    },
  },
  defaultVariants: {
    variant: "grid",
    size: "md",
  },
});

export type PatternBackgroundVariants = VariantProps<typeof patternBackgroundVariants>;

export const PATTERN_BACKGROUND_MASK = {
  Ellipse: "ellipse",
  EllipseTop: "ellipse-top",
} as const;

export const patternBackgroundMaskVariants = cva("bg-default bg-background", {
  variants: {
    mask: {
      [PATTERN_BACKGROUND_MASK.Ellipse]:
        "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
      [PATTERN_BACKGROUND_MASK.EllipseTop]:
        "[mask-image:radial-gradient(ellipse_at_top,transparent_20%,black)]",
    },
  },
  defaultVariants: {
    mask: "ellipse",
  },
});

export type PatternBackgroundMaskVariants = VariantProps<typeof patternBackgroundMaskVariants>;

export { default as PatternBackground } from "./PatternBackground.vue";
