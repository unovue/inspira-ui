import animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";

export default {
  darkMode: "selector",
  safelist: ["dark"],
  prefix: "",
  content: [],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      "max-xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "max-lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "max-md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "max-sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }

      "min-xl": { min: "1280px" },
      // => @media (min-width: 1280px) { ... }

      "min-lg": { min: "1024px" },
      // => @media (min-width: 1024px) { ... }

      "min-md": { min: "768px" },
      // => @media (min-width: 768px) { ... }

      "min-sm": { min: "640px" },
      // => @media (min-width: 640px) { ... },
      xl: { min: "1280px" },
      // => @media (min-width: 1280px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }

      md: { min: "768px" },
      // => @media (min-width: 768px) { ... }

      sm: { min: "640px" },
      // => @media (min-width: 640px) { ... }
    },
    fontFamily: {
      heading: ["Bricolage Grotesque", "Manrope"],
      sans: ["Manrope"],
      mono: ["monospace"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },

  plugins: [animate, setupInspiraUI],
};
