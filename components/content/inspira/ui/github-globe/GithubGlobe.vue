<template>
  <canvas ref="githubGlobeRef" class="w-96 h-96"></canvas>
</template>

<script lang="ts" setup>
// Download globe json file from https://geojson-maps.kyd.au/
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import ThreeGlobe from "three-globe";
import {
  AmbientLight,
  Color,
  DirectionalLight,
  Fog,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer,
} from "three";
import contries from "./globe.json";

const githubGlobeRef = ref<HTMLCanvasElement>();

let renderer: WebGLRenderer;
let scene: Scene;
let camera: PerspectiveCamera;
let controls: OrbitControls;

let globe: ThreeGlobe;

let halfX: number;
let halfY: number;

let mouseX: number;
let mouseY: number;

onMounted(() => {
  setupScene();
  initGlobe();
  animate();

  window.addEventListener("resize", onWindowResize, false);
  onWindowResize();
});

function setupScene() {
  if (!githubGlobeRef.value) {
    throw new Error("Canvas not initialized");
  }

  const width = githubGlobeRef.value.clientWidth;
  const height = githubGlobeRef.value.clientHeight;

  renderer = new WebGLRenderer({ canvas: githubGlobeRef.value, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.autoClear = false;

  scene = new Scene();

  camera = new PerspectiveCamera();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  const ambientLight = new AmbientLight(0xbbb, 0.3);
  scene.add(ambientLight);

  const dLight1 = new DirectionalLight(0xfff, 0.8);
  dLight1.position.set(-800, 2000, 400);
  camera.add(dLight1);

  const dLight2 = new DirectionalLight(0x7982f6, 1);
  dLight2.position.set(-200, 500, 200);
  camera.add(dLight2);

  const pLight = new PointLight(0x8566cc, 0.5);
  pLight.position.set(-200, 500, 200);
  camera.add(pLight);

  camera.position.setX(0);
  camera.position.setY(0);
  camera.position.setZ(400);

  scene.add(camera);

  scene.fog = new Fog(0x535ef3, 400, 2000);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.01;
  controls.enablePan = false;
  controls.minDistance = 200;
  controls.maxDistance = 500;
  controls.rotateSpeed = 0.8;
  controls.zoomSpeed = 1;
  controls.autoRotate = false;

  controls.minPolarAngle = Math.PI / 3.5;
  controls.maxPolarAngle = Math.PI - Math.PI / 3;
}

function initGlobe() {
  globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })
    .hexPolygonsData(contries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7)
    .showAtmosphere(true)
    .atmosphereColor("#3a228a")
    .atmosphereAltitude(0.25);

  globe.rotateY(-Math.PI * (5 / 9));
  globe.rotateZ(-Math.PI / 6);

  const globeMaterial = globe.globeMaterial() as unknown as {
    color: Color;
    emissive: Color;
    emissiveIntensity: number;
    shininess: number;
  };

  globeMaterial.color = new Color(0x3a228a);
  globeMaterial.emissive = new Color(0x220038);
  globeMaterial.emissiveIntensity = 0.1;
  globeMaterial.shininess = 0.9;

  scene.add(globe);
}

function onWindowResize() {
  if (!githubGlobeRef.value) {
    return;
  }

  const width = githubGlobeRef.value.clientWidth;
  const height = githubGlobeRef.value.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);

  halfX = width / 1.5;
  halfY = height / 1.5;
}

function animate() {
  const x =
    camera.position.x + Math.abs(mouseX) <= halfX / 2
      ? (mouseX / 2 - camera.position.x) * 0.005
      : 0;
  camera.position.setX(x);
  camera.lookAt(scene.position);
  controls.update();

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

function hexToRgb(color: string) {
  let hex = color.replace(/^#/, "");

  // If the hex code is 3 characters, expand it to 6 characters
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Parse the r, g, b values from the hex string
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255; // Extract the red component
  const g = (bigint >> 8) & 255; // Extract the green component
  const b = bigint & 255; // Extract the blue component

  // Return the RGB values as a string separated by spaces
  return {
    r,
    g,
    b,
  };
}
</script>
