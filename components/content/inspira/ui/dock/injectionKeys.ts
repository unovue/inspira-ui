import type { Ref, InjectionKey, ComputedRef } from "vue";
import type { DataOrientation } from "./types";

export const MOUSE_X_INJECTION_KEY = Symbol("mouse-x") as InjectionKey<Ref<number>>;
export const MOUSE_Y_INJECTION_KEY = Symbol("mouse-y") as InjectionKey<Ref<number>>;

export const MAGNIFICATION_INJECTION_KEY = Symbol("magnification") as InjectionKey<
  ComputedRef<number>
>;

export const DISTANCE_INJECTION_KEY = Symbol("distance") as InjectionKey<ComputedRef<number>>;

export const ORIENTATION_INJECTION_KEY = Symbol("orientation") as InjectionKey<DataOrientation>;
