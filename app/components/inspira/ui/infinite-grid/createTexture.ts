/**
 * @fileoverview Card Texture Generation Utilities for OGL
 *
 * This module provides utilities for generating Canvas-based textures used
 * in the InfiniteGridClass system. Each card requires two textures:
 *
 * 1. Foreground Texture: Contains the main card content (title, image, tags, date)
 * 2. Background Texture: Contains a blurred, darkened version of the card image
 *
 * The textures are generated using HTML5 Canvas 2D API and converted to
 * OGL Textures with proper configuration.
 *
 * Key Features:
 * - Automatic text truncation with ellipsis
 * - Image loading with fallback handling
 * - Styled tag pills with rounded corners
 * - Responsive layout within fixed canvas dimensions
 * - Blur effects for background textures
 * - Proper error handling for failed image loads
 *
 * Usage:
 * ```typescript
 * import { generateForegroundTexture, generateBackgroundTexture } from './createTexture';
 *
 * const cardData = {
 *   title: "Project Title",
 *   image: "/path/to/image.jpg",
 *   tags: ["web", "ogl"],
 *   date: "2024"
 * };
 *
 * const foregroundTexture = await generateForegroundTexture(cardData, gl);
 * const backgroundTexture = await generateBackgroundTexture(cardData, gl);
 * ```
 */

// Card Texture Generation Utilities for OGL

import type { Renderer } from "ogl";
import { Texture } from "ogl"; // Required for OGL Texture

/**
 * Represents the data structure for a single card/tile
 * This interface must match the CardData interface in InfiniteGridClass.ts
 */
interface CardData {
  /** The main title text displayed prominently on the card */
  title: string;
  /** Badge text (currently not implemented in the rendering pipeline) */
  badge: string;
  /** Detailed description text for the card content (optional) */
  description?: string;
  /** Array of tag strings that will be displayed as styled pills */
  tags: string[];
  /** Date string displayed in the bottom-right corner */
  date: string;
  /** Optional image URL - falls back to '/photo.png' if not provided */
  image?: string;
}

/**
 * Canvas dimensions for all generated textures
 * These dimensions affect the resolution and memory usage of the textures
 */
const cardWidth = 512;
const cardHeight = 512;
const padding = 30;

/**
 * Creates a canvas element with 2D rendering context
 *
 * This helper function ensures consistent canvas setup across all texture
 * generation functions and provides proper error handling for context creation.
 *
 * @returns Object containing the canvas element and its 2D context
 * @throws {Error} If 2D context creation fails
 */
function createCanvasContext(): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement("canvas");
  canvas.width = cardWidth;
  canvas.height = cardHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to get 2D context for canvas");
  }
  return { canvas, ctx };
}

// Option 1: Pre-generate textures once, reuse them
const textureCache = new Map<string, Texture>();

/**
 * Generates the foreground texture for a card using Canvas 2D API
 *
 * This function creates the main visible content of each card including:
 * - Title text with automatic truncation and ellipsis
 * - Main image with aspect ratio preservation and centering
 * - Styled tag pills at the bottom
 * - Date text in the bottom-right corner
 * - Border outline around the entire card
 *
 * The generated texture is used for the front-facing mesh that users
 * can interact with (hover and click).
 *
 * @param data - Card data containing title, image, tags, date, etc.
 * @param renderer - OGL Renderer for texture creation
 * @returns Promise resolving to an OGL Texture
 *
 * @example
 * ```typescript
 * const cardData = {
 *   title: "Amazing Project",
 *   image: "/images/project.jpg",
 *   tags: ["web", "ogl"],
 *   date: "2024",
 *   badge: "NEW",
 *   description: "A cool project"
 * };
 * const texture = await generateForegroundTexture(cardData, renderer);
 * ```
 */
export async function generateForegroundTexture(
  data: CardData,
  renderer: Renderer,
): Promise<Texture> {
  const cacheKey = `${data.title}-${data.tags?.join("-")}`;
  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey)!;
  }

  const { canvas, ctx } = createCanvasContext();

  // Set default styles
  ctx.fillStyle = "white";
  ctx.strokeStyle = "rgba(60, 60, 60, 1)";
  ctx.lineWidth = 1;

  // Card background and border (transparent for foreground to show background)
  ctx.beginPath();
  ctx.rect(0, 0, cardWidth, cardHeight);
  ctx.stroke(); // Draw border
  // ctx.fill() is not needed as background is transparent

  let currentY = padding;

  // Title Text
  ctx.font = "24px Arial, sans-serif";
  ctx.fillStyle = "white";
  ctx.textBaseline = "top";

  // Measure text to determine actual width
  const titleText = data.title;
  const titleMaxWidth = cardWidth - padding * 2;

  // For `ellipsis` and `wrap: 'none'`, we need to manually truncate
  let truncatedTitle = titleText;
  let textMetrics = ctx.measureText(truncatedTitle);

  // Simple truncation if text exceeds maxWidth
  while (textMetrics.width > titleMaxWidth && truncatedTitle.length > 3) {
    truncatedTitle = `${truncatedTitle.substring(0, truncatedTitle.length - 4)}...`;
    textMetrics = ctx.measureText(truncatedTitle);
  }
  ctx.fillText(truncatedTitle, padding, currentY);

  const headerHeight = 24; // Assuming 24px font height is a good approximation for header height

  currentY += headerHeight + 30; // Move Y cursor down

  const topElementsMaxY = currentY;
  const bottomReservedSpace = 100;
  const availableImageHeight = cardHeight - topElementsMaxY - bottomReservedSpace;
  const availableImageWidth = cardWidth - padding * 2;

  // Image Loading and Placement
  const imageObj = new Image();
  imageObj.crossOrigin = "anonymous";
  imageObj.src = data.image || "/photo.png"; // Fallback image

  const loadImagePromise = new Promise<void>((resolve) => {
    imageObj.onload = () => {
      let imgWidth = imageObj.naturalWidth;
      let imgHeight = imageObj.naturalHeight;
      const naturalAspectRatio = imgWidth / imgHeight;

      // Scale image to fit within available space, maintaining aspect ratio
      if (imgWidth > availableImageWidth || imgHeight > availableImageHeight) {
        if (availableImageWidth / naturalAspectRatio <= availableImageHeight) {
          imgWidth = availableImageWidth;
          imgHeight = availableImageWidth / naturalAspectRatio;
        } else {
          imgHeight = availableImageHeight;
          imgWidth = availableImageHeight * naturalAspectRatio;
        }
      }

      const imageX = padding + (availableImageWidth - imgWidth) / 2;
      const imageY = topElementsMaxY + (availableImageHeight - imgHeight) / 2;

      // Draw image (no direct cornerRadius for images in vanilla canvas,
      // you'd need to clip the path if truly desired. For simplicity, we draw directly).
      ctx.drawImage(imageObj, imageX, imageY, imgWidth, imgHeight);
      resolve();
    };

    imageObj.onerror = () => {
      console.error("Failed to load foreground image:", imageObj.src);
      // Placeholder text on image load error
      ctx.fillStyle = "gray";
      ctx.font = "30px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Image Error", cardWidth / 2, cardHeight / 2 - 50);
      resolve(); // Resolve to allow card generation to continue
    };
  });

  await loadImagePromise; // Wait for the image to load or fail

  // Tags
  let currentXForTags = padding;
  const tagFontSize = 16;
  const tagPaddingX = 15;
  const tagPaddingY = 8;
  const tagGap = 10;

  const tagsY = cardHeight - padding - tagFontSize - tagPaddingY;
  data.tags.forEach((tagText) => {
    ctx.font = `${tagFontSize}px Helvetica, Arial, sans-serif`;
    ctx.textBaseline = "middle"; // Align text vertically in the middle of the shape

    const textToDraw = `#${tagText.toUpperCase()}`;
    const textMetrics = ctx.measureText(textToDraw);
    const tagLabelWidth = textMetrics.width;

    const tagShapeWidth = tagLabelWidth + tagPaddingX;
    const tagShapeHeight = tagFontSize + tagPaddingY;

    // Draw rounded rectangle for tag shape
    ctx.fillStyle = "rgba(248,250, 252, 0.15)";
    drawRoundedRect(ctx, currentXForTags, tagsY, tagShapeWidth, tagShapeHeight, tagShapeHeight / 2); // Use half height for perfect pill shape
    ctx.fill();

    // Draw tag text
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(textToDraw, currentXForTags + tagShapeWidth / 2, tagsY + tagShapeHeight / 2); // Center text in shape

    currentXForTags += tagShapeWidth + tagGap;
  });

  // Date
  ctx.font = "20px Arial, sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.textAlign = "right"; // Align text to the right
  ctx.textBaseline = "bottom"; // Align text to the bottom of its bounding box
  ctx.fillText(data.date, cardWidth - padding, cardHeight - padding);

  const texture = new Texture(renderer.gl, {
    image: canvas,
    generateMipmaps: false,
    flipY: false,
  });

  textureCache.set(cacheKey, texture);
  return texture;
}

/**
 * Generates the background texture for a card using Canvas 2D API
 *
 * This function creates a blurred, darkened version of the card's image
 * that serves as the background layer visible during hover effects.
 * The background provides visual depth and context while maintaining
 * readability of the foreground content.
 *
 * Processing steps:
 * 1. Loads the same image used in the foreground
 * 2. Scales it up for better blur coverage
 * 3. Applies canvas blur filter
 * 4. Adds a semi-transparent dark overlay
 * 5. Falls back to solid color if image loading fails
 *
 * @param data - Card data containing the image URL
 * @param renderer - OGL Renderer for texture creation
 * @returns Promise resolving to an OGL Texture for background layer
 *
 * @example
 * ```typescript
 * const backgroundTexture = await generateBackgroundTexture(cardData, renderer);
 * // Use this texture for the background mesh with shader material
 * ```
 */
export async function generateBackgroundTexture(
  data: CardData,
  renderer: Renderer,
): Promise<Texture> {
  const { canvas, ctx } = createCanvasContext();

  // Start with transparent background - image will fill the canvas
  // Alternative: ctx.fillStyle = 'rgba(0,0,0,0.5)' for solid fallback

  const backgroundImageObj = new Image();
  backgroundImageObj.crossOrigin = "Anonymous"; // Enable CORS for external images
  backgroundImageObj.src = data.image || "/photo.png"; // Use same image as foreground

  const loadBackgroundImagePromise = new Promise<void>((resolve) => {
    backgroundImageObj.onload = () => {
      const backgroundScale = 2.0; // Make background image larger for blur effect
      const bgImgWidth = backgroundImageObj.naturalWidth * backgroundScale;
      const bgImgHeight = backgroundImageObj.naturalHeight * backgroundScale;

      // Draw the image first
      ctx.drawImage(
        backgroundImageObj,
        (cardWidth - bgImgWidth) / 2,
        (cardHeight - bgImgHeight) / 2,
        bgImgWidth,
        bgImgHeight,
      );

      // Apply blur directly on the canvas content
      // Note: blur performance and quality can vary between browsers.
      // For more control/consistency, you might apply blur in a shader or pre-process images.
      ctx.filter = "blur(10px)"; // Adjust blur radius as needed
      ctx.drawImage(canvas, 0, 0); // Redraw the canvas content with blur
      ctx.filter = "none"; // Reset filter for subsequent draws

      // Add a semi-transparent overlay to darken/blend the background
      ctx.fillStyle = "rgba(0,0,0,0.4)"; // Dark overlay
      ctx.fillRect(0, 0, cardWidth, cardHeight);

      resolve();
    };

    backgroundImageObj.onerror = () => {
      console.warn("Failed to load background image:", backgroundImageObj.src);
      // Fallback to a solid color background if image fails to load
      // ctx.fillStyle = data.color1 || 'rgba(50,50,50,0.5)'; // Use a default dark gray if data.color1 is not present
      ctx.fillStyle = "rgba(0,0,0,0.5)"; // Fallback to semi-transparent black
      ctx.fillRect(0, 0, cardWidth, cardHeight);
      resolve();
    };
  });

  await loadBackgroundImagePromise; // Wait for background image to load or fail

  const backgroundTexture = new Texture(renderer.gl, {
    image: canvas,
    generateMipmaps: false,
    flipY: false,
  });

  return backgroundTexture;
}

/**
 * Helper function to draw a rounded rectangle using Canvas 2D API
 *
 * Canvas doesn't have a built-in rounded rectangle method, so this
 * function uses quadratic curves to create smooth corners. This is
 * used for drawing the tag pill backgrounds.
 *
 * @param ctx - The 2D rendering context to draw on
 * @param x - X coordinate of the top-left corner
 * @param y - Y coordinate of the top-left corner
 * @param width - Width of the rectangle
 * @param height - Height of the rectangle
 * @param radius - Corner radius in pixels
 */
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
): void {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Convenience function to generate both foreground and background textures
 *
 * This function generates both texture types in parallel for efficiency.
 * While the individual generation functions are typically used separately
 * in the main grid system, this function can be useful for testing or
 * simpler use cases.
 *
 * @param data - Card data for texture generation
 * @param renderer - OGL Renderer for texture creation
 * @returns Promise resolving to an object with both texture types
 *
 * @example
 * ```typescript
 * const { foreground, background } = await generateCardTextures(cardData, renderer);
 * // Use foreground for main mesh, background for hover effect
 * ```
 */
export async function generateCardTextures(
  data: CardData,
  renderer: Renderer,
): Promise<{
  foreground: Texture;
  background: Texture;
}> {
  const [foreground, background] = await Promise.all([
    generateForegroundTexture(data, renderer),
    generateBackgroundTexture(data, renderer),
  ]);
  return { foreground, background };
}
