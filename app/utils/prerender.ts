export const addPrerenderPath = (path: string) => {
  const event = useRequestEvent();
  if (event) {
    event.node.res.setHeader(
      "x-nitro-prerender",
      [event.node.res.getHeader("x-nitro-prerender"), path]
        .filter(Boolean)
        .join(",")
    );
  }
};
