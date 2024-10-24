import type { ObjectValues } from "@/lib/utils";

export const ORBIT_DIRECTION = {
  Clockwise: "reverse",
  CounterClockwise: "normal",
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
