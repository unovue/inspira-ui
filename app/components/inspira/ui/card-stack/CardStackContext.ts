import type { MotionValue } from "motion-dom";
import type { InjectionKey } from "vue";

export interface CardStackContext {
  progress: MotionValue<number>;
  scaleMultiplier?: number;
  totalCards: number;
}

export const CardStackKey = Symbol("card-stack") as InjectionKey<CardStackContext>;
