export function range(
  value: number,
  min: number,
  max: number,
  step = 1,
): [number, number, number, number] {
  return [value, min, max, step];
}

export function select(
  defaultValue: string,
  options: (string | { label: string; value: string })[],
) {
  return {
    type: "select" as const,
    options,
    default: defaultValue,
  };
}

export function shaderToyControls() {
  return {
    hue: range(0, 0, 360),
    saturation: range(1, 0, 1, 0.01),
    brightness: range(1, 0, 2, 0.01),
    speed: range(1, 0, 10, 0.01),
    mouseSensitivity: range(1, 0, 5, 0.01),
    damping: range(0, 0, 1, 0.01),
    noise: {
      opacity: range(0, 0, 2, 0.1),
      scale: range(1, 0, 1, 0.01),
    },
  };
}
