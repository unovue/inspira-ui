export type ControlType = "number" | "range" | "color" | "text" | "boolean" | "select";

export interface ControlConfig {
  type?: ControlType;
  value?: any;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: string[] | { label: string; value: any }[];
}

export interface Controls {
  [key: string]: ControlConfig;
}

export type ControlValues<T extends Controls> = {
  [K in keyof T]: T[K]["value"];
};

export interface AutoControlConfig {
  [key: string]: Partial<ControlConfig>;
}
