import type { AutoControlConfig, ControlConfig, ControlType } from "@/types/control";

export function extractPropDefaultValue(prop: any): any {
  if (typeof prop === "function") {
    // Prop with type constructor like String, Number, Boolean
    return getDefaultValueFromType(prop);
  } else if (prop && typeof prop === "object") {
    // Prop with configuration object
    if (typeof prop.default === "function") {
      return prop.default();
    }
    return prop.default !== undefined ? prop.default : getDefaultValueFromType(prop.type);
  }
  return undefined;
}

export function inferControlType(prop: any): ControlType {
  if (typeof prop === "function") {
    return getControlTypeFromConstructor(prop);
  } else if (prop && typeof prop === "object") {
    return getControlTypeFromConstructor(prop.type);
  }
  return "text";
}

function getControlTypeFromConstructor(type: any): ControlType {
  if (!type) return "text";

  if (type === String) return "text";
  if (type === Number) return "number";
  if (type === Boolean) return "boolean";
  if (type === Array) return "text"; // Arrays as JSON strings for simplicity

  // Handle union types and complex types
  if (Array.isArray(type)) {
    // If it's an array of constructors, use the first one
    return getControlTypeFromConstructor(type[0]);
  }

  return "text";
}

function getDefaultValueFromType(type: any): any {
  if (!type) return "";

  if (type === String) return "";
  if (type === Number) return 0;
  if (type === Boolean) return false;
  if (type === Array) return [];
  if (type === Object) return {};

  if (Array.isArray(type)) {
    return getDefaultValueFromType(type[0]);
  }

  return "";
}

export function propsToControls(
  props: any,
  overrides: AutoControlConfig = {},
): Record<string, ControlConfig> {
  const controls: Record<string, ControlConfig> = {};

  for (const [key, prop] of Object.entries(props)) {
    const defaultValue = extractPropDefaultValue(prop);
    const inferredType = inferControlType(prop);

    // Start with inferred configuration
    const controlConfig: ControlConfig = {
      type: inferredType,
      value: defaultValue,
      label: key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()),
    };

    // Enhance based on type
    if (inferredType === "number") {
      Object.assign(controlConfig, {
        min: 0,
        max: 100,
        step: 1,
      });
    } else if (inferredType === "range") {
      Object.assign(controlConfig, {
        min: 0,
        max: 100,
        step: 1,
      });
    }

    // Handle prop with options (like union types)
    if (prop && typeof prop === "object" && prop.type) {
      if (Array.isArray(prop.type)) {
        // This is likely a union type, treat as select
        const options = prop.type
          .filter((t) => typeof t === "function" && t !== Array && t !== Object)
          .map((t) => {
            if (t === String) return "string";
            if (t === Number) return "number";
            if (t === Boolean) return "boolean";
            return String(t);
          })
          .filter(Boolean);

        if (options.length > 0) {
          controlConfig.type = "select";
          controlConfig.options = options;
        }
      }
    }

    // Apply user overrides
    if (overrides[key]) {
      Object.assign(controlConfig, overrides[key]);
    }

    controls[key] = controlConfig;
  }

  return controls;
}
