import type { InjectionKey } from "vue";

export interface ParallaxFloatContext {
  registerElement: (element: HTMLElement, depth: number) => void;
  updateElement: (element: HTMLElement, depth: number) => void;
  unregisterElement: (element: HTMLElement) => void;
}

export const PARALLAX_FLOAT_KEY: InjectionKey<ParallaxFloatContext> = Symbol("parallax-float");
