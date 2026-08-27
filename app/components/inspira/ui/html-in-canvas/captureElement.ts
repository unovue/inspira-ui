function copyElementState(source: Element, target: Element) {
  const style = getComputedStyle(source);
  const css = Array.from(
    style,
    (property) => `${property}:${style.getPropertyValue(property)};`,
  ).join("");
  target.setAttribute("style", css);

  if (source instanceof HTMLInputElement && target instanceof HTMLInputElement) {
    target.setAttribute("value", source.value);
    if (source.checked) target.setAttribute("checked", "");
  } else if (source instanceof HTMLTextAreaElement && target instanceof HTMLTextAreaElement) {
    target.textContent = source.value;
  } else if (source instanceof HTMLSelectElement && target instanceof HTMLSelectElement) {
    [...target.options].forEach((option, index) => {
      option.selected = source.options[index]?.selected ?? false;
    });
  }

  [...source.children].forEach((child, index) => {
    const clonedChild = target.children[index];
    if (clonedChild) copyElementState(child, clonedChild);
  });
}

function loadSvg(svg: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      resolve(image);
    };
    image.onerror = () => {
      reject(new Error("Unable to capture HTML fallback"));
    };
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  });
}

export async function captureElement(
  element: HTMLElement,
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
) {
  const clone = element.cloneNode(true) as HTMLElement;
  copyElementState(element, clone);

  const markup = new XMLSerializer().serializeToString(clone);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;height:${height}px;overflow:hidden">${markup}</div></foreignObject></svg>`;
  const image = await loadSvg(svg);
  const context = canvas.getContext("2d");

  if (!context) throw new Error("Unable to create HTML fallback texture");

  context.resetTransform();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
}
