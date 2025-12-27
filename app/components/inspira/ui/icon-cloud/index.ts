import type { HTMLAttributes } from "vue";

export interface SphereIcon {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  id: number;
}

export interface IconCloudProps {
  class?: HTMLAttributes["class"];
  images?: string[];
}

export { default as IconCloud } from "./IconCloud.vue";
