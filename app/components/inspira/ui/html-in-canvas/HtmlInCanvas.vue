<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { ShaderUniforms } from "./HtmlInCanvasRenderer";
import { cn } from "@inspira-ui/plugins";
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  shallowRef,
  useTemplateRef,
  watch,
} from "vue";
import { captureElement } from "./captureElement";
import { HtmlInCanvasRenderer, supportsHtmlInCanvas } from "./HtmlInCanvasRenderer";

interface PaintableCanvas extends HTMLCanvasElement {
  onpaint: (() => void) | null;
  requestPaint?: () => void;
}

interface ElementImageContext extends CanvasRenderingContext2D {
  drawElementImage?: (element: Element, x: number, y: number) => void;
}

interface SelectionRect {
  height: number;
  left: number;
  top: number;
  width: number;
}

interface Props {
  shaderCode: string;
  vertexShaderCode?: string;
  uniforms?: ShaderUniforms;
  frameRate?: number;
  pixelRatio?: number;
  speed?: number;
  mouseDamping?: number;
  paused?: boolean;
  autoPause?: boolean;
  interactive?: boolean;
  class?: HTMLAttributes["class"];
}

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  uniforms: () => ({}),
  frameRate: 60,
  pixelRatio: 1,
  speed: 1,
  mouseDamping: 0.85,
  paused: false,
  autoPause: true,
  interactive: true,
});

const emit = defineEmits<{
  error: [message: string];
  ready: [];
  support: [supported: boolean];
}>();

const rootRef = useTemplateRef<HTMLElement>("rootRef");
const sourceRef = useTemplateRef<HTMLCanvasElement>("sourceRef");
const contentRef = useTemplateRef<HTMLElement>("contentRef");
const outputRef = useTemplateRef<HTMLCanvasElement>("outputRef");

const nativeSupported = shallowRef(false);
const rendererReady = shallowRef(false);
const inViewport = shallowRef(true);
const documentVisible = shallowRef(true);
const reducedMotion = shallowRef(false);
const selectionRects = shallowRef<SelectionRect[]>([]);

let renderer: HtmlInCanvasRenderer | undefined;
let sourceContext: ElementImageContext | null = null;
let resizeObserver: ResizeObserver | undefined;
let intersectionObserver: IntersectionObserver | undefined;
let mutationObserver: MutationObserver | undefined;
let motionQuery: MediaQueryList | undefined;
let cssWidth = 1;
let cssHeight = 1;
let captureFrame = 0;
let captureRevision = 0;

const shouldPlay = computed(
  () =>
    !props.paused &&
    !reducedMotion.value &&
    (!props.autoPause || (inViewport.value && documentVisible.value)),
);

function handleError(message: string) {
  emit("error", message);
}

function handleRendererError(message: string) {
  handleError(message);

  if (nativeSupported.value && sourceContext) void enableSnapshotFallback();
}

async function enableSnapshotFallback(message?: string) {
  if (message) handleError(message);
  if (sourceRef.value) (sourceRef.value as PaintableCanvas).onpaint = null;
  sourceContext = null;
  rendererReady.value = false;
  nativeSupported.value = false;
  emit("support", false);
  await nextTick();
  setupSnapshotCapture();
  syncSize();
}

function updatePlayback() {
  if (!renderer) return;

  if (shouldPlay.value) renderer.play();
  else {
    renderer.pause();
    renderer.requestRender();
  }
}

function requestPaint() {
  (sourceRef.value as PaintableCanvas | null)?.requestPaint?.();
}

function syncSize() {
  if (!rootRef.value) return;

  const rect = rootRef.value.getBoundingClientRect();
  cssWidth = Math.max(1, rect.width);
  cssHeight = Math.max(1, rect.height);
  const pixelRatio = Math.max(0.25, Math.min(props.pixelRatio, 2));
  const width = Math.max(1, Math.round(cssWidth * pixelRatio));
  const height = Math.max(1, Math.round(cssHeight * pixelRatio));

  if (sourceRef.value && (sourceRef.value.width !== width || sourceRef.value.height !== height)) {
    sourceRef.value.width = width;
    sourceRef.value.height = height;
  }

  renderer?.resize(cssWidth, cssHeight, pixelRatio);
  if (nativeSupported.value) requestPaint();
  else scheduleSnapshot();
  if (selectionRects.value.length) requestAnimationFrame(updateSelectionOverlay);
}

function captureNativeContent() {
  if (!sourceContext || !sourceRef.value || !contentRef.value || !renderer) return;

  try {
    sourceContext.reset();
    sourceContext.drawElementImage?.(contentRef.value, 0, 0);
    renderer.markContentDirty();
  } catch (error) {
    void enableSnapshotFallback(
      error instanceof Error ? error.message : "Unable to capture HTML content",
    );
  }
}

function scheduleSnapshot() {
  if (nativeSupported.value || captureFrame) return;

  captureFrame = requestAnimationFrame(() => {
    captureFrame = 0;
    void captureSnapshot();
  });
}

async function captureSnapshot() {
  if (nativeSupported.value || !contentRef.value || !sourceRef.value || !renderer) return;

  const revision = ++captureRevision;

  try {
    await captureElement(contentRef.value, sourceRef.value, cssWidth, cssHeight);
    if (revision === captureRevision) renderer.markContentDirty();
  } catch (error) {
    if (revision !== captureRevision) return;
    rendererReady.value = false;
    handleError(error instanceof Error ? error.message : "Unable to capture HTML fallback");
  }
}

function setupSnapshotCapture() {
  mutationObserver?.disconnect();
  mutationObserver = undefined;

  if (nativeSupported.value || !contentRef.value) return;

  mutationObserver = new MutationObserver(scheduleSnapshot);
  mutationObserver.observe(contentRef.value, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
  });
  contentRef.value.addEventListener("load", scheduleSnapshot, true);
  void document.fonts?.ready.then(scheduleSnapshot);
  scheduleSnapshot();
}

function handlePointerMove(event: PointerEvent) {
  if (!props.interactive || !rootRef.value) return;

  const rect = rootRef.value.getBoundingClientRect();
  renderer?.setPointerInside(true);
  renderer?.setPointer(event.clientX - rect.left, event.clientY - rect.top, event.buttons > 0);
}

function handlePointerEnter() {
  if (props.interactive) renderer?.setPointerInside(true);
}

function handlePointerLeave() {
  if (!props.interactive) return;

  renderer?.setPointerInside(false);
  renderer?.releasePointer();
}

function handlePointerRelease() {
  if (props.interactive) renderer?.releasePointer();
}

function handlePointerDown(event: PointerEvent) {
  if (!props.interactive || !rootRef.value) return;

  const rect = rootRef.value.getBoundingClientRect();
  renderer?.setPointer(event.clientX - rect.left, event.clientY - rect.top, true);
}

function handleWheel(event: WheelEvent) {
  renderer?.setScrollVelocity(event.deltaY);
  if (selectionRects.value.length) requestAnimationFrame(updateSelectionOverlay);
}

function handleVisibilityChange() {
  documentVisible.value = document.visibilityState === "visible";
}

function updateSelectionOverlay() {
  if (nativeSupported.value || !rendererReady.value || !rootRef.value || !contentRef.value) {
    selectionRects.value = [];
    return;
  }

  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
    selectionRects.value = [];
    return;
  }

  const anchorInside = selection.anchorNode && contentRef.value.contains(selection.anchorNode);
  const focusInside = selection.focusNode && contentRef.value.contains(selection.focusNode);
  if (!anchorInside && !focusInside) {
    selectionRects.value = [];
    return;
  }

  const rootBounds = rootRef.value.getBoundingClientRect();
  selectionRects.value = [...selection.getRangeAt(0).getClientRects()].flatMap((rect) => {
    const left = Math.max(rect.left, rootBounds.left);
    const right = Math.min(rect.right, rootBounds.right);
    const top = Math.max(rect.top, rootBounds.top);
    const bottom = Math.min(rect.bottom, rootBounds.bottom);

    if (right <= left || bottom <= top) return [];

    return [
      {
        height: bottom - top,
        left: left - rootBounds.left,
        top: top - rootBounds.top,
        width: right - left,
      },
    ];
  });
}

function handleMotionChange(event: MediaQueryListEvent | MediaQueryList) {
  reducedMotion.value = event.matches;
}

async function initializeRenderer() {
  await nextTick();

  if (!sourceRef.value || !contentRef.value || !outputRef.value || !rootRef.value) return;

  // Size the experimental canvas before WebGL requests its first texture.
  // A 300x150 default frame is otherwise captured and replaced one frame later.
  syncSize();

  if (nativeSupported.value) {
    sourceContext = sourceRef.value.getContext("2d") as ElementImageContext | null;
    if (!sourceContext?.drawElementImage) await enableSnapshotFallback();
  }

  try {
    renderer = new HtmlInCanvasRenderer(outputRef.value, sourceRef.value, {
      frameRate: props.frameRate,
      hasContent: true,
      mouseDamping: props.mouseDamping,
      onError: handleRendererError,
      onReady: () => {
        rendererReady.value = true;
        emit("ready");
      },
      pixelRatio: props.pixelRatio,
      shaderCode: props.shaderCode,
      speed: props.speed,
      uniforms: props.uniforms,
      vertexShaderCode: props.vertexShaderCode,
    });
  } catch (error) {
    handleError(error instanceof Error ? error.message : "Unable to initialize HTML shader");
    emit("ready");
    return;
  }

  if (nativeSupported.value) {
    (sourceRef.value as PaintableCanvas).onpaint = captureNativeContent;
  } else setupSnapshotCapture();

  resizeObserver = new ResizeObserver(syncSize);
  resizeObserver.observe(rootRef.value);

  intersectionObserver = new IntersectionObserver(([entry]) => {
    inViewport.value = entry?.isIntersecting ?? true;
  });
  intersectionObserver.observe(rootRef.value);

  syncSize();
  updatePlayback();
}

onMounted(async () => {
  nativeSupported.value = supportsHtmlInCanvas();
  emit("support", nativeSupported.value);

  document.addEventListener("visibilitychange", handleVisibilityChange);
  document.addEventListener("selectionchange", updateSelectionOverlay);
  handleVisibilityChange();

  motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionQuery.addEventListener("change", handleMotionChange);
  handleMotionChange(motionQuery);

  await initializeRenderer();
});

onBeforeUnmount(() => {
  document.removeEventListener("visibilitychange", handleVisibilityChange);
  document.removeEventListener("selectionchange", updateSelectionOverlay);
  motionQuery?.removeEventListener("change", handleMotionChange);
  resizeObserver?.disconnect();
  intersectionObserver?.disconnect();
  mutationObserver?.disconnect();
  cancelAnimationFrame(captureFrame);
  captureRevision += 1;

  if (sourceRef.value) (sourceRef.value as PaintableCanvas).onpaint = null;
  contentRef.value?.removeEventListener("load", scheduleSnapshot, true);

  renderer?.dispose();
  renderer = undefined;
  sourceContext = null;
});

watch([() => props.shaderCode, () => props.vertexShaderCode], ([shaderCode, vertexShaderCode]) =>
  renderer?.setShader(shaderCode, vertexShaderCode),
);

watch(
  () => props.uniforms,
  (uniforms) => renderer?.setUniforms(uniforms),
  { deep: true },
);

watch(
  () => props.frameRate,
  (frameRate) => renderer?.setFrameRate(frameRate),
);

watch(
  () => props.mouseDamping,
  (mouseDamping) => renderer?.setMouseDamping(mouseDamping),
);

watch(
  () => props.speed,
  (speed) => renderer?.setSpeed(speed),
);

watch(
  () => props.pixelRatio,
  () => syncSize(),
);

watch(shouldPlay, updatePlayback);
</script>

<template>
  <div
    ref="rootRef"
    v-bind="$attrs"
    :class="cn('relative isolate block h-full w-full overflow-hidden', props.class)"
    @pointerdown="handlePointerDown"
    @pointerenter="handlePointerEnter"
    @pointerleave="handlePointerLeave"
    @pointermove="handlePointerMove"
    @pointercancel="handlePointerRelease"
    @pointerup="handlePointerRelease"
    @wheel.passive="handleWheel"
  >
    <canvas
      ref="sourceRef"
      layoutsubtree="true"
      :class="
        cn(
          nativeSupported
            ? 'absolute inset-0 block h-full w-full'
            : 'pointer-events-none absolute inset-0 block h-full w-full opacity-0',
        )
      "
    >
      <div
        v-if="nativeSupported"
        ref="contentRef"
        class="relative h-full w-full overflow-hidden"
      >
        <slot />
      </div>
    </canvas>

    <div
      v-if="!nativeSupported"
      :class="cn('absolute inset-0 h-full w-full', rendererReady ? 'opacity-0' : 'opacity-100')"
    >
      <div
        ref="contentRef"
        class="relative h-full w-full overflow-hidden"
      >
        <slot />
      </div>
    </div>

    <canvas
      ref="outputRef"
      aria-hidden="true"
      :class="
        cn(
          'pointer-events-none absolute inset-0 z-10 block h-full w-full transition-opacity duration-150',
          !rendererReady && 'opacity-0',
          rendererReady && 'opacity-100',
        )
      "
    />

    <div
      v-if="!nativeSupported && rendererReady && selectionRects.length"
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    >
      <span
        v-for="(rect, index) in selectionRects"
        :key="index"
        class="bg-primary/35 absolute"
        :style="{
          height: `${rect.height}px`,
          left: `${rect.left}px`,
          top: `${rect.top}px`,
          width: `${rect.width}px`,
        }"
      />
    </div>
  </div>
</template>
