export { default as AnimatedLogoCloud } from "./AnimatedLogoCloud.vue";
export { default as IconLogoCloud } from "./IconLogoCloud.vue";
export { default as StaticLogoCloud } from "./StaticLogoCloud.vue";

interface Logo {
  name: string;
  path: string;
}
export interface AnimateLogoCloudProps {
  class?: string;
  title?: string;
  logos?: Logo[];
}
