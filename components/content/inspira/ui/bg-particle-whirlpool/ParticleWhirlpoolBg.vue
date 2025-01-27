<template>
  <div
    ref="whirlpoolCanvasContainerRef"
    :class="cn('relative w-full h-full', $props.class)"
  >
    <canvas
      ref="whirlpoolCanvasRef"
      class="size-full"
    ></canvas>
    <div
      :style="{
        '--bubbles-blur': `${blur}px`,
      }"
      class="absolute inset-0 backdrop-blur-[--bubbles-blur]"
    ></div>

    <div class="absolute inset-0">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Vector3,
  MathUtils,
  AmbientLight,
  BoxGeometry,
  InstancedMesh,
  PointLight,
  WebGLRenderer,
  Scene,
  Object3D,
  Vector2,
  PerspectiveCamera,
  Raycaster,
  Plane,
  MeshBasicMaterial,
  InstancedBufferAttribute,
} from "three";
import { onMounted, onUnmounted, ref } from "vue";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { cn } from "@/lib/utils";

const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;

type Instance = {
  position: Vector3;
  scale: number;
  scaleZ: number;
  velocity: Vector3;
  attraction: number;
  vLimit: number;
};

const props = defineProps({
  particleCount: {
    type: Number,
    default: 2000,
  },
  class: String,
  blur: {
    type: Number,
    default: 0,
  },
});

const instances: Instance[] = [];
const target = new Vector3();
const dummyO = new Object3D();
const dummyV = new Vector3();
const pointer = new Vector2();

const light = new PointLight(0x0060ff, 0.5);
const raycaster = new Raycaster();

let renderer: WebGLRenderer;
let scene: Scene;
let camera: PerspectiveCamera;
let imesh: InstancedMesh;
let controls: OrbitControls;
let effectComposer: EffectComposer;

const whirlpoolCanvasContainerRef = ref<HTMLCanvasElement>();
const whirlpoolCanvasRef = ref<HTMLCanvasElement>();

loadParticleInstances();

function loadParticleInstances() {
  for (let i = 0; i < props.particleCount; i++) {
    instances.push({
      position: new Vector3(rndFS(200), rndFS(200), rndFS(200)),
      scale: rnd(0.2, 1),
      scaleZ: rnd(0.1, 1),
      velocity: new Vector3(rndFS(2), rndFS(2), rndFS(2)),
      attraction: 0.03 + rnd(-0.01, 0.01),
      vLimit: 1.2 + rnd(-0.1, 0.1),
    });
  }
}

function setupScene() {
  if (!whirlpoolCanvasRef.value) {
    throw new Error("Canvas not initialized");
  }

  const width = whirlpoolCanvasRef.value.clientWidth;
  const height = whirlpoolCanvasRef.value.clientHeight;

  // Set Renderer
  renderer = new WebGLRenderer({
    canvas: whirlpoolCanvasRef.value,
    antialias: true,
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.autoClear = false;

  // Camera
  camera = new PerspectiveCamera();
  camera.aspect = width / height;
  camera.position.set(0, 0, 200);
  camera.updateProjectionMatrix();

  const ambientLight = new AmbientLight(0x808080);
  const pointLight1 = new PointLight(0xff6000);

  const pointLight2 = new PointLight(0xff6000, 0.5);
  pointLight2.position.set(100, 0, 0);

  const pointLight3 = new PointLight(0x0000ff, 0.5);
  pointLight3.position.set(-100, 0, 0);

  const boxGeometry = new BoxGeometry(2, 2, 10);
  const standardMaterial = new MeshBasicMaterial({
    transparent: true,
    opacity: 0.9,
  });

  imesh = new InstancedMesh(boxGeometry, standardMaterial, props.particleCount);

  scene = new Scene();
  scene.add(ambientLight);
  scene.add(pointLight1);
  scene.add(light);
  scene.add(pointLight2);
  scene.add(pointLight3);

  scene.add(imesh);

  controls = new OrbitControls(camera, renderer.domElement);

  effectComposer = new EffectComposer(renderer);
  effectComposer.setSize(width, height);
  effectComposer.addPass(new RenderPass(scene, camera));

  const unrealBloomPass = new UnrealBloomPass(new Vector2(width, height), 1, 0, 0);

  effectComposer.addPass(unrealBloomPass);
}

function init() {
  for (let i = 0; i < props.particleCount; i++) {
    const { position, scale, scaleZ } = instances[i];
    dummyO.position.copy(position);
    dummyO.scale.set(scale, scale, scaleZ);
    dummyO.updateMatrix();
    imesh.setMatrixAt(i, dummyO.matrix);
  }

  const colors = new Float32Array(props.particleCount * 3); // Each color is an RGB triplet

  for (let i = 0; i < props.particleCount; i++) {
    // Assign random colors
    colors[i * 3] = rnd(0, 1); // Red component
    colors[i * 3 + 1] = rnd(0, 1); // Green component
    colors[i * 3 + 2] = rnd(0, 1); // Blue component
  }

  imesh.instanceColor = new InstancedBufferAttribute(colors, 3); // Add the colors as an attribute
  imesh.instanceMatrix.needsUpdate = true;
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  light.position.copy(target);

  for (let i = 0; i < props.particleCount; i++) {
    const { position, scale, scaleZ, velocity, attraction, vLimit } = instances[i];

    dummyV.copy(target).sub(position).normalize().multiplyScalar(attraction);

    velocity.add(dummyV).clampScalar(-vLimit, vLimit);
    position.add(velocity);

    dummyO.position.copy(position);
    dummyO.scale.set(scale, scale, scaleZ);
    dummyO.lookAt(dummyV.copy(position).add(velocity));
    dummyO.updateMatrix();
    imesh.setMatrixAt(i, dummyO.matrix);
  }
  imesh.instanceMatrix.needsUpdate = true;

  effectComposer.render();
}

onMounted(() => {
  setupScene();
  init();
  animate();

  whirlpoolCanvasContainerRef.value?.addEventListener("mousemove", onPointerMove);
  whirlpoolCanvasContainerRef.value?.addEventListener("touchmove", onPointerMove);
  window.addEventListener("resize", onWindowResize);
});

function onPointerMove(event: MouseEvent | TouchEvent) {
  if (!renderer || !camera) return;

  let clientX: number;
  let clientY: number;

  // Check if it's a touch event
  if (event instanceof TouchEvent) {
    clientX = event.touches[0].clientX;
    clientY = event.touches[0].clientY;
  } else {
    clientX = (event as MouseEvent).clientX;
    clientY = (event as MouseEvent).clientY;
  }

  const rect = whirlpoolCanvasContainerRef.value!.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  // Check if the pointer is within the bounds of the canvas
  if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
    // Pointer is within canvas bounds
    pointer.x = (x / rect.width) * 2 - 1;
    pointer.y = -(y / rect.height) * 2 + 1;

    // Update the target position in 3D space
    raycaster.setFromCamera(pointer, camera);
    const planeZ = new Plane(new Vector3(0, 0, 1), 0);
    const point = new Vector3();
    raycaster.ray.intersectPlane(planeZ, point);
    target.copy(point);
  } else {
    // Pointer is outside canvas bounds
    // Set target to center of canvas in 3D space
    target.set(0, 0, 0); // Or any default position you prefer
  }
}

function onWindowResize() {
  if (!whirlpoolCanvasRef.value || !renderer || !camera || !effectComposer) return;

  const width = whirlpoolCanvasContainerRef.value!.clientWidth;
  const height = whirlpoolCanvasContainerRef.value!.clientHeight;

  // Update camera
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Update renderer size
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Update effect composer size
  effectComposer.setSize(width, height);
}

onUnmounted(() => {
  window.removeEventListener("mousemove", onPointerMove);
  window.removeEventListener("resize", onWindowResize);
});
</script>
