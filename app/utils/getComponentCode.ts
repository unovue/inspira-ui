export interface ComponentCodeArgs {
  id: string;
  fileName: string;
  type: "ui" | "examples" | "configs";
}

const rawComponents = import.meta.glob<string>("~/components/inspira/**/*.{vue,ts,js,d.ts}", {
  query: "?raw",
  import: "default",
});

export function getComponentCode(args: ComponentCodeArgs) {
  const normalizedSuffix = `/components/inspira/${args.type}/${args.id}/${args.fileName}`;

  const match = Object.entries(rawComponents).find(([path]) =>
    path.replaceAll("\\", "/").endsWith(normalizedSuffix),
  );

  return match?.[1];
}
