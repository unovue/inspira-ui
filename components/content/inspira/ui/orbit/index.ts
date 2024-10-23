import type { ObjectValues } from "@/lib/utils";

export const ORBIT_DIRECTION = {
  Reverse: "reverse",
  Normal: "normal",
  Alternate: "alternate",
  AlternateReverse: "alternate-reverse",
} as const;

export type OrbitDirection = ObjectValues<typeof ORBIT_DIRECTION>;

export interface Props {
  class?: string;
  direction?: OrbitDirection;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}
