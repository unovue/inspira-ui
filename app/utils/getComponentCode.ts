export interface ComponentCodeArgs {
  id: string;
  fileName: string;
  type: "ui" | "examples" | "configs";
}

let rawComponent: Record<string, () => Promise<unknown>> = {};

export function getComponentCode(args: ComponentCodeArgs) {
  const componentPath = `../components/inspira/${args.type}/${args.id}/${args.fileName}`;
  rawComponent = import.meta.glob(`../components/inspira/**/*.{vue,ts,js,d.ts}`, {
    query: "?raw",
    import: "default",
  });

  return rawComponent[componentPath];
}
