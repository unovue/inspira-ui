<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

export type DitheringMode = "bayer" | "halftone" | "noise" | "crosshatch";
export type ColorMode = "original" | "grayscale" | "duotone" | "custom";

export interface Props {
  /** Source image URL */
  src: string;
  /** Size of the dithering grid cells */
  gridSize?: number;
  /** Type of dithering pattern */
  ditherMode?: DitheringMode;
  /** Color processing mode */
  colorMode?: ColorMode;
  /** Invert the dithered output colors */
  invert?: boolean;
  /** Pixelation multiplier (1 = no pixelation, higher = more pixelated) */
  pixelRatio?: number;
  /** Primary color for duotone mode */
  primaryColor?: string;
  /** Secondary color for duotone mode */
  secondaryColor?: string;
  /** Custom color palette array for custom mode */
  customPalette?: string[];
  /** Brightness adjustment (-1 to 1) */
  brightness?: number;
  /** Contrast adjustment (0 to 2, 1 = normal) */
  contrast?: number;
  /** Background color behind the dithered image */
  backgroundColor?: string;
  /** Object fit behavior */
  objectFit?: "cover" | "contain" | "fill" | "none";
  /** Threshold bias for dithering (0 to 1) */
  threshold?: number;
  /** Enable animation effect */
  animated?: boolean;
  /** Animation speed (lower = slower) */
  animationSpeed?: number;
  /** Additional CSS classes for the container */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  gridSize: 4,
  ditherMode: "bayer",
  colorMode: "original",
  invert: false,
  pixelRatio: 1,
  primaryColor: "#000000",
  secondaryColor: "#ffffff",
  customPalette: () => ["#000000", "#ffffff"],
  brightness: 0,
  contrast: 1,
  backgroundColor: "transparent",
  objectFit: "cover",
  threshold: 0.5,
  animated: false,
  animationSpeed: 0.02,
});

// 4x4 Bayer matrix for ordered dithering
const BAYER_MATRIX_4x4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

// 8x8 Bayer matrix for finer dithering
const BAYER_MATRIX_8x8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

const containerRef = useTemplateRef("containerRef");
const canvasRef = useTemplateRef("canvasRef");
const animationRef = ref<number | null>(null);
const timeRef = ref<number>(0);
const imageRef = ref<HTMLImageElement | null>(null);
const imageDataRef = ref<ImageData | null>(null);
const dimensions = ref({ width: 0, height: 0 });

function parseColor(color: string): [number, number, number] {
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    if (hex.length === 3) {
      return [
        Number.parseInt(hex[0] + hex[0], 16),
        Number.parseInt(hex[1] + hex[1], 16),
        Number.parseInt(hex[2] + hex[2], 16),
      ];
    }
    return [
      Number.parseInt(hex.slice(0, 2), 16),
      Number.parseInt(hex.slice(2, 4), 16),
      Number.parseInt(hex.slice(4, 6), 16),
    ];
  }
  const match = color.match(/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/i);
  if (match) {
    return [Number.parseInt(match[1]), Number.parseInt(match[2]), Number.parseInt(match[3])];
  }
  return [0, 0, 0];
}

function getLuminance(r: number, g: number, b: number): number {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

const parsedPrimaryColor = computed(() => parseColor(props.primaryColor));
const parsedSecondaryColor = computed(() => parseColor(props.secondaryColor));
const parsedCustomPalette = computed(() => props.customPalette.map(parseColor));

function applyDithering(
  ctx: CanvasRenderingContext2D,
  displayWidth: number,
  displayHeight: number,
  time: number = 0,
) {
  const canvas = canvasRef.value;
  if (!canvas || !imageDataRef.value) return;

  // Clear with background
  if (props.backgroundColor !== "transparent") {
    ctx.fillStyle = props.backgroundColor;
    ctx.fillRect(0, 0, displayWidth, displayHeight);
  } else {
    ctx.clearRect(0, 0, displayWidth, displayHeight);
  }

  const sourceData = imageDataRef.value.data;
  const sourceWidth = imageDataRef.value.width;
  const sourceHeight = imageDataRef.value.height;

  const effectivePixelSize = Math.max(1, Math.floor(props.gridSize * props.pixelRatio));
  const matrixSize = props.gridSize <= 4 ? 4 : 8;
  const bayerMatrix = props.gridSize <= 4 ? BAYER_MATRIX_4x4 : BAYER_MATRIX_8x8;
  const matrixScale = matrixSize === 4 ? 16 : 64;

  // Process pixels
  for (let y = 0; y < displayHeight; y += effectivePixelSize) {
    for (let x = 0; x < displayWidth; x += effectivePixelSize) {
      // Map display coordinates to source image coordinates
      const srcX = Math.floor((x / displayWidth) * sourceWidth);
      const srcY = Math.floor((y / displayHeight) * sourceHeight);
      const srcIdx = (srcY * sourceWidth + srcX) * 4;

      let r = sourceData[srcIdx] || 0;
      let g = sourceData[srcIdx + 1] || 0;
      let b = sourceData[srcIdx + 2] || 0;
      const a = sourceData[srcIdx + 3] || 0;

      if (a < 10) continue; // Skip fully transparent pixels

      // Apply brightness and contrast
      r = clamp((r - 128) * props.contrast + 128 + props.brightness * 255, 0, 255);
      g = clamp((g - 128) * props.contrast + 128 + props.brightness * 255, 0, 255);
      b = clamp((b - 128) * props.contrast + 128 + props.brightness * 255, 0, 255);

      // Calculate luminance
      const luminance = getLuminance(r, g, b) / 255;

      // Get dither threshold based on mode
      let ditherThreshold: number;
      const matrixX = Math.floor(x / props.gridSize) % matrixSize;
      const matrixY = Math.floor(y / props.gridSize) % matrixSize;

      switch (props.ditherMode) {
        case "bayer":
          ditherThreshold = bayerMatrix[matrixY][matrixX] / matrixScale;
          break;
        case "halftone": {
          const angle = Math.PI / 4;
          const scale = props.gridSize * 2;
          const rotX = x * Math.cos(angle) + y * Math.sin(angle);
          const rotY = -x * Math.sin(angle) + y * Math.cos(angle);
          const pattern = (Math.sin(rotX / scale) + Math.sin(rotY / scale) + 2) / 4;
          ditherThreshold = pattern;
          break;
        }
        case "noise": {
          const noiseVal = Math.sin(x * 12.9898 + y * 78.233 + time * 100) * 43758.5453;
          ditherThreshold = noiseVal - Math.floor(noiseVal);
          break;
        }
        case "crosshatch": {
          const line1 = (x + y) % (props.gridSize * 2) < props.gridSize ? 1 : 0;
          const line2 =
            (x - y + props.gridSize * 4) % (props.gridSize * 2) < props.gridSize ? 1 : 0;
          ditherThreshold = (line1 + line2) / 2;
          break;
        }
        default:
          ditherThreshold = bayerMatrix[matrixY][matrixX] / matrixScale;
      }

      // Adjust threshold with user setting
      ditherThreshold = ditherThreshold * (1 - props.threshold) + props.threshold * 0.5;

      // Determine output color based on color mode
      let outputColor: [number, number, number];

      switch (props.colorMode) {
        case "grayscale": {
          const shouldBeDark = luminance < ditherThreshold;
          outputColor = shouldBeDark ? [0, 0, 0] : [255, 255, 255];
          break;
        }
        case "duotone": {
          const shouldBeDark = luminance < ditherThreshold;
          outputColor = shouldBeDark ? parsedPrimaryColor.value : parsedSecondaryColor.value;
          break;
        }
        case "custom": {
          if (parsedCustomPalette.value.length === 2) {
            const shouldBeDark = luminance < ditherThreshold;
            outputColor = shouldBeDark
              ? parsedCustomPalette.value[0]
              : parsedCustomPalette.value[1];
          } else {
            // Quantize to closest palette color with dithering
            const adjustedLuminance = luminance + (ditherThreshold - 0.5) * 0.5;
            const paletteIndex = Math.floor(
              clamp(adjustedLuminance, 0, 1) * (parsedCustomPalette.value.length - 1),
            );
            outputColor = parsedCustomPalette.value[paletteIndex];
          }
          break;
        }
        case "original":
        default: {
          // Apply dithering while preserving colors
          const ditherAmount = ditherThreshold - 0.5;
          const adjustedR = clamp(r + ditherAmount * 64, 0, 255);
          const adjustedG = clamp(g + ditherAmount * 64, 0, 255);
          const adjustedB = clamp(b + ditherAmount * 64, 0, 255);

          // Quantize to fewer levels for dithered look
          const levels = 4;
          outputColor = [
            Math.round(adjustedR / (255 / levels)) * (255 / levels),
            Math.round(adjustedG / (255 / levels)) * (255 / levels),
            Math.round(adjustedB / (255 / levels)) * (255 / levels),
          ];
          break;
        }
      }

      // Apply inversion
      if (props.invert) {
        outputColor = [255 - outputColor[0], 255 - outputColor[1], 255 - outputColor[2]];
      }

      // Draw the pixel
      ctx.fillStyle = `rgb(${outputColor[0]}, ${outputColor[1]}, ${outputColor[2]})`;
      ctx.fillRect(x, y, effectivePixelSize, effectivePixelSize);
    }
  }
}

function processImage(img: HTMLImageElement) {
  const canvas = canvasRef.value;
  if (!canvas || dimensions.value.width === 0 || dimensions.value.height === 0) return;

  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  const displayWidth = dimensions.value.width;
  const displayHeight = dimensions.value.height;

  canvas.width = Math.floor(displayWidth * dpr);
  canvas.height = Math.floor(displayHeight * dpr);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.resetTransform();
  ctx.scale(dpr, dpr);

  // Create offscreen canvas to get image data
  const offscreen = document.createElement("canvas");
  const iw = img.naturalWidth || displayWidth;
  const ih = img.naturalHeight || displayHeight;

  let dw = displayWidth;
  let dh = displayHeight;
  let dx = 0;
  let dy = 0;

  if (props.objectFit === "cover") {
    const scale = Math.max(displayWidth / iw, displayHeight / ih);
    dw = Math.ceil(iw * scale);
    dh = Math.ceil(ih * scale);
    dx = Math.floor((displayWidth - dw) / 2);
    dy = Math.floor((displayHeight - dh) / 2);
  } else if (props.objectFit === "contain") {
    const scale = Math.min(displayWidth / iw, displayHeight / ih);
    dw = Math.ceil(iw * scale);
    dh = Math.ceil(ih * scale);
    dx = Math.floor((displayWidth - dw) / 2);
    dy = Math.floor((displayHeight - dh) / 2);
  } else if (props.objectFit === "fill") {
    dw = displayWidth;
    dh = displayHeight;
  } else {
    dw = iw;
    dh = ih;
    dx = Math.floor((displayWidth - dw) / 2);
    dy = Math.floor((displayHeight - dh) / 2);
  }

  offscreen.width = displayWidth;
  offscreen.height = displayHeight;
  const offCtx = offscreen.getContext("2d");
  if (!offCtx) return;

  offCtx.drawImage(img, dx, dy, dw, dh);

  try {
    imageDataRef.value = offCtx.getImageData(0, 0, displayWidth, displayHeight);
  } catch {
    console.error("Could not get image data. CORS issue?");
    return;
  }

  // Initial render
  applyDithering(ctx, displayWidth, displayHeight, 0);

  // Setup animation if enabled
  if (props.animated) {
    const animate = () => {
      timeRef.value += props.animationSpeed;
      applyDithering(ctx, displayWidth, displayHeight, timeRef.value);
      animationRef.value = requestAnimationFrame(animate);
    };
    animationRef.value = requestAnimationFrame(animate);
  }
}

function loadImage() {
  if (animationRef.value) {
    cancelAnimationFrame(animationRef.value);
    animationRef.value = null;
  }

  // If image is already loaded, reprocess it
  if (imageRef.value && imageRef.value.complete) {
    processImage(imageRef.value);
  } else {
    // Load the image
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = props.src;

    img.onload = () => {
      imageRef.value = img;
      processImage(img);
    };

    img.onerror = () => {
      console.error("Failed to load image for DitherShader:", props.src);
    };
  }
}

// Setup resize observer
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  const container = containerRef.value;
  if (!container) return;

  resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) {
        dimensions.value = { width, height };
      }
    }
  });

  resizeObserver.observe(container);
});

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
  if (animationRef.value) {
    cancelAnimationFrame(animationRef.value);
  }
});

// Watch for changes that should trigger reprocessing
watch(
  [
    () => props.src,
    () => dimensions.value,
    () => props.objectFit,
    () => props.animated,
    () => props.animationSpeed,
    () => props.gridSize,
    () => props.ditherMode,
    () => props.colorMode,
    () => props.invert,
    () => props.pixelRatio,
    () => props.primaryColor,
    () => props.secondaryColor,
    () => props.customPalette,
    () => props.brightness,
    () => props.contrast,
    () => props.backgroundColor,
    () => props.threshold,
  ],
  () => {
    loadImage();
  },
  { deep: true },
);
</script>

<template>
  <div
    ref="containerRef"
    :class="props.class"
    class="relative h-full w-full"
  >
    <canvas
      ref="canvasRef"
      class="absolute inset-0 h-full w-full"
      style="image-rendering: pixelated"
      aria-label="Dithered image"
      role="img"
    />
  </div>
</template>
