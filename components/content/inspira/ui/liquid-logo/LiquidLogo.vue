<template>
  <div
    v-if="processing && showProcessing"
    class="flex size-full items-center justify-center text-2xl font-bold text-primary/50"
  >
    <span> Processing Logo </span>
  </div>
  <canvas
    ref="liquidLogoRef"
    :class="cn('block size-full object-contain', props.class, { hidden: processing })"
  ></canvas>
</template>

<script lang="ts" setup>
import { type HTMLAttributes } from "vue";
import { liquidFragSource, vertexShaderSource } from "./shader";
import { parseLogoImage } from "./parseLogoImage";
import { cn } from "@/lib/utils";

interface Props {
  class?: HTMLAttributes["class"];
  imageUrl: string;
  patternScale?: number;
  refraction?: number;
  edge?: number;
  patternBlur?: number;
  liquid?: number;
  speed?: number;
  showProcessing?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  refraction: 0.015,
  edge: 0.4,
  patternScale: 2,
  patternBlur: 0.005,
  liquid: 0.07,
  speed: 0.3,
  showProcessing: true,
});

const imageData = ref<ImageData | null>(null);
const glRef = ref<WebGLRenderingContext | null>(null);
const uniforms = ref<Record<string, WebGLUniformLocation>>({});
const totalAnimationTime = ref(0);
const lastRenderTime = ref(0);
const liquidLogoRef = ref<HTMLCanvasElement | null>(null);
const processing = ref(false);

let renderId: number;
let cleanUpTexture: (() => void) | undefined;

onMounted(async () => {
  processing.value = true;

  await processImage();

  initShader();
  updateUniforms();
  cleanUpTexture = await cleanTexture();

  processing.value = false;

  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();

  animate();
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeCanvas);
  cancelAnimationFrame(renderId);
  if (cleanUpTexture) {
    cleanUpTexture();
  }
});

function updateUniforms() {
  if (!glRef.value || !uniforms.value) return;
  glRef.value.uniform1f(uniforms.value.u_edge, props.edge);
  glRef.value.uniform1f(uniforms.value.u_patternBlur, props.patternBlur);
  glRef.value.uniform1f(uniforms.value.u_time, 0);
  glRef.value.uniform1f(uniforms.value.u_patternScale, props.patternScale);
  glRef.value.uniform1f(uniforms.value.u_refraction, props.refraction);
  glRef.value.uniform1f(uniforms.value.u_liquid, props.liquid);
}

function initShader() {
  const canvas = liquidLogoRef.value;
  const gl = canvas?.getContext("webgl2", {
    antialias: true,
    alpha: true,
  });
  if (!canvas || !gl) {
    // "Failed to initialize shader. Does your browser support WebGL2?";
    return;
  }

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  function createShader(gl: WebGL2RenderingContext, sourceCode: string, type: number) {
    const shader = gl.createShader(type);
    if (!shader) {
      // "Failed to create shader";
      return null;
    }

    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      // "An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
  const fragmentShader = createShader(gl, liquidFragSource, gl.FRAGMENT_SHADER);
  const program = gl.createProgram();
  if (!program || !vertexShader || !fragmentShader) {
    // "Failed to create program or shaders";
    return;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    // "Unable to initialize the shader program: " + gl.getProgramInfoLog(program);
    return null;
  }

  function getUniforms(program: WebGLProgram, gl: WebGL2RenderingContext) {
    let uniforms: Record<string, WebGLUniformLocation> = {};
    let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
      let uniformName = gl.getActiveUniform(program, i)?.name;
      if (!uniformName) continue;
      uniforms[uniformName] = gl.getUniformLocation(program, uniformName) as WebGLUniformLocation;
    }
    return uniforms;
  }
  const unfm = getUniforms(program, gl);
  uniforms.value = unfm;

  // Vertex position
  const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  gl.useProgram(program);

  const positionLocation = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(positionLocation);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  glRef.value = gl;
}

function render(currentTime: number) {
  const deltaTime = currentTime - lastRenderTime.value;
  lastRenderTime.value = currentTime;

  // Update the total animation time and time uniform
  totalAnimationTime.value += deltaTime * props.speed;
  glRef.value!.uniform1f(uniforms.value.u_time, totalAnimationTime.value);
  // Draw!
  glRef.value!.drawArrays(glRef.value!.TRIANGLE_STRIP, 0, 4);
  // rAF
  renderId = requestAnimationFrame(render);
}

function animate() {
  // Kick off the render loop
  lastRenderTime.value = performance.now();
  renderId = requestAnimationFrame(render);

  return () => {
    cancelAnimationFrame(renderId);
  };
}

function resizeCanvas() {
  const canvasEl = liquidLogoRef.value;
  const gl = glRef.value;

  if (!canvasEl || !gl || !uniforms.value) return;
  const imgRatio = imageData.value ? imageData.value.width / imageData.value.height : 1;
  gl.uniform1f(uniforms.value.u_img_ratio, imgRatio);

  const side = 1000;
  canvasEl.width = side * devicePixelRatio;
  canvasEl.height = side * devicePixelRatio;
  gl.viewport(0, 0, canvasEl.height, canvasEl.height);
  gl.uniform1f(uniforms.value.u_ratio, 1);
  gl.uniform1f(uniforms.value.u_img_ratio, imgRatio);
}

async function processImage() {
  try {
    const { imageData: imgData } = await parseLogoImage(props.imageUrl);
    imageData.value = imgData;
  } catch (error) {
    // handle error
  }
}

async function cleanTexture() {
  const gl = glRef.value;
  if (!gl || !uniforms.value || !imageData.value) return;

  // Delete any existing texture first
  const existingTexture = gl.getParameter(gl.TEXTURE_BINDING_2D);
  if (existingTexture) {
    gl.deleteTexture(existingTexture);
  }

  const imageTexture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, imageTexture);

  // Set texture parameters before uploading the data
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  // Ensure power-of-two dimensions or use appropriate texture parameters
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

  try {
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      imageData.value.width,
      imageData.value.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      imageData.value.data,
    );

    gl.uniform1i(uniforms.value.u_image_texture, 0);
  } catch (e) {
    // handle error
  }

  return () => {
    // Cleanup texture when component unmounts or imageData changes
    if (imageTexture) {
      gl.deleteTexture(imageTexture);
    }
  };
}

// Update uniforms when relevant props change
watch(
  () => [props.edge, props.patternBlur, props.patternScale, props.refraction, props.liquid],
  updateUniforms,
);
</script>
