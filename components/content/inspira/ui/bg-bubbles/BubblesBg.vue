<template>
  <div
    ref="bubbleParentContainer"
    class="relative h-72 w-full overflow-hidden"
  >
    <div ref="bubbleCanvasContainer"></div>
    <div
      :style="{
        '--bubbles-blur': `${blur}px`,
      }"
      class="absolute inset-0 z-[2] size-full backdrop-blur-[--bubbles-blur]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ShaderMaterial,
  SphereGeometry,
  Vector3,
  Color,
  MathUtils,
  Mesh,
  Clock,
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
} from "three";
import { ref, onMounted, onBeforeUnmount } from "vue";

defineProps({
  blur: {
    type: Number,
    default: 0,
  },
});

const bubbleParentContainer = ref<HTMLElement | null>(null);
const bubbleCanvasContainer = ref<HTMLElement | null>(null);
let renderer: WebGLRenderer;
let scene: Scene;
let camera: PerspectiveCamera;
let clock: Clock;
const spheres: Mesh[] = [];

const BG_COLOR_BOTTOM_BLUISH = rgb(170, 215, 217);
const BG_COLOR_TOP_BLUISH = rgb(57, 167, 255);
const BG_COLOR_BOTTOM_ORANGISH = rgb(255, 160, 75);
const BG_COLOR_TOP_ORANGISH = rgb(239, 172, 53);

const SPHERE_COLOR_BOTTOM_BLUISH = rgb(120, 235, 124);
const SPHERE_COLOR_TOP_BLUISH = rgb(0, 167, 255);
const SPHERE_COLOR_BOTTOM_ORANGISH = rgb(235, 170, 0);
const SPHERE_COLOR_TOP_ORANGISH = rgb(255, 120, 0);

const SPHERE_COUNT = 250;
const SPHERE_SCALE_COEFF = 3;
const ORBIT_MIN = SPHERE_SCALE_COEFF + 2;
const ORBIT_MAX = ORBIT_MIN + 10;
const RAND_SEED = 898211544;

const rand = seededRandom(RAND_SEED);

const { PI, cos, sin } = Math;
const PI2 = PI * 2;
const sizes = new Array(SPHERE_COUNT).fill(0).map(() => randRange(1) * Math.pow(randRange(), 3));
const orbitRadii = new Array(SPHERE_COUNT)
  .fill(0)
  .map(() => MathUtils.lerp(ORBIT_MIN, ORBIT_MAX, randRange()));
const thetas = new Array(SPHERE_COUNT).fill(0).map(() => randRange(PI2));
const phis = new Array(SPHERE_COUNT).fill(0).map(() => randRange(PI2));
const positions: [number, number, number][] = orbitRadii.map((rad, i) => [
  rad * cos(thetas[i]) * sin(phis[i]),
  rad * sin(thetas[i]) * sin(phis[i]),
  rad * cos(phis[i]),
]);

const sphereGeometry = new SphereGeometry(SPHERE_SCALE_COEFF);
const sphereMaterial = getGradientMaterial(
  SPHERE_COLOR_BOTTOM_BLUISH,
  SPHERE_COLOR_TOP_BLUISH,
  SPHERE_COLOR_BOTTOM_ORANGISH,
  SPHERE_COLOR_TOP_ORANGISH,
);

const bgGeometry = new SphereGeometry();
bgGeometry.scale(-1, 1, 1);
const bgMaterial = getGradientMaterial(
  BG_COLOR_BOTTOM_BLUISH,
  BG_COLOR_TOP_BLUISH,
  BG_COLOR_BOTTOM_ORANGISH,
  BG_COLOR_TOP_ORANGISH,
);
bgMaterial.uniforms.uTemperatureVariancePeriod.value = new Vector3(0, 0, 0.1);

function seededRandom(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x9e3779b9) | 0;
    var t = a ^ (a >>> 16);
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ (t >>> 15);
    t = Math.imul(t, 0x735a2d97);
    return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
  };
}

function randRange(n = 1) {
  return rand() * n;
}

function rgb(r: number, g: number, b: number) {
  return new Color(r / 255, g / 255, b / 255);
}

function getGradientMaterial(
  colorBottomWarm: Color,
  colorTopWarm: Color,
  colorBottomCool: Color,
  colorTopCool: Color,
) {
  return new ShaderMaterial({
    uniforms: {
      colorBottomWarm: {
        value: new Color().copy(colorBottomWarm),
      },
      colorTopWarm: {
        value: new Color().copy(colorTopWarm),
      },
      colorBottomCool: {
        value: new Color().copy(colorBottomCool),
      },
      colorTopCool: {
        value: new Color().copy(colorTopCool),
      },
      uTemperature: {
        value: 0.0,
      },
      uTemperatureVariancePeriod: {
        value: new Vector3(0.08, 0.1, 0.2),
      },
      uElapsedTime: {
        value: 0,
      },
    },
    vertexShader: `
      uniform vec4 uTemperatureVariancePeriod;
      uniform float uTemperature;
      uniform float uElapsedTime;
      varying float topBottomMix;
      varying float warmCoolMix;

      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        topBottomMix = normal.y;
        warmCoolMix = 0.6 * uTemperature +
          0.4 * (sin(
          (uElapsedTime + gl_Position.x) * uTemperatureVariancePeriod.x +
          (uElapsedTime + gl_Position.y) * uTemperatureVariancePeriod.y +
          (uElapsedTime + gl_Position.z) * uTemperatureVariancePeriod.z) * 0.5 + 0.5);
      }
    `,
    fragmentShader: `
      uniform vec3 colorBottomWarm;
      uniform vec3 colorTopWarm;
      uniform vec3 colorBottomCool;
      uniform vec3 colorTopCool;

      varying float topBottomMix;
      varying float warmCoolMix;

      void main() {
        gl_FragColor = vec4(mix(
          mix(colorTopCool, colorTopWarm, warmCoolMix),
          mix(colorBottomCool, colorBottomWarm, warmCoolMix),
          topBottomMix), 1.0);
      }
    `,
  });
}

function createScene() {
  const width = bubbleCanvasContainer.value?.clientWidth || 1;
  const height = bubbleCanvasContainer.value?.clientHeight || 1;
  // Set up the scene, camera, and renderer
  scene = new Scene();
  camera = new PerspectiveCamera(50, width / height, 1, 2000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 23;

  renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setClearColor(BG_COLOR_BOTTOM_BLUISH);

  // Add these properties to allow overlap
  sphereMaterial.depthWrite = false;
  sphereMaterial.depthTest = true; // Keep this true for depth sorting

  if (bubbleCanvasContainer.value) {
    bubbleCanvasContainer.value.appendChild(renderer.domElement);
  }

  // Create the background mesh
  const bgMesh = new Mesh(bgGeometry, bgMaterial);
  // Position the background far behind everything
  bgMesh.position.set(0, 0, -1); // Move the background far back

  // Disable depth testing for the background to ensure it's always behind other objects
  bgMesh.material.depthTest = false;
  bgMesh.renderOrder = -1; // Ensure the background is rendered first

  // Calculate the scale to ensure the background covers the full canvas
  const distance = camera.position.z; // Distance from the camera
  const aspect = camera.aspect;
  const frustumHeight = 2 * distance * Math.tan(MathUtils.degToRad(camera.fov) / 2);
  const frustumWidth = frustumHeight * aspect;

  // Scale the background geometry to match the camera's frustum size
  bgMesh.scale.set(
    frustumWidth / bgGeometry.parameters.radius,
    frustumHeight / bgGeometry.parameters.radius,
    1,
  );

  scene.add(bgMesh); // Add the backgrou

  // Create sphere meshes
  const orbitRadii = new Array(SPHERE_COUNT)
    .fill(0)
    .map(() => MathUtils.lerp(ORBIT_MIN, ORBIT_MAX, randRange()));
  const thetas = new Array(SPHERE_COUNT).fill(0).map(() => randRange(PI2));
  const phis = new Array(SPHERE_COUNT).fill(0).map(() => randRange(PI2));
  const positions = orbitRadii.map((rad, i) => [
    rad * cos(thetas[i]) * sin(phis[i]),
    rad * sin(thetas[i]) * sin(phis[i]),
    rad * cos(phis[i]),
  ]);

  for (let i = 0; i < SPHERE_COUNT; i++) {
    const sphere = new Mesh(sphereGeometry, sphereMaterial);
    const [x, y, z] = positions[i];
    const scaleVector = sizes[i];
    sphere.scale.set(scaleVector, scaleVector, scaleVector);
    sphere.position.set(x, y, z);
    spheres.push(sphere);
    scene.add(sphere);
  }

  clock = new Clock();
}

function animate() {
  requestAnimationFrame(animate);

  const elapsed = clock.getElapsedTime();
  const temperature = sin(elapsed * 0.5) * 0.5 + 0.5;

  bgMaterial.uniforms.uTemperature.value = temperature;
  bgMaterial.uniforms.uElapsedTime.value = elapsed;

  sphereMaterial.uniforms.uTemperature.value = temperature;
  sphereMaterial.uniforms.uElapsedTime.value = elapsed;

  // Floating effect for spheres
  spheres.forEach((sphere, index) => {
    const basePosition = positions[index];
    const floatFactor = 2; // Adjust this value to control float intensity
    const speed = 0.3; // Adjust this value to control float speed
    const floatY = sin(elapsed * speed + index) * floatFactor;
    sphere.position.y = basePosition[1] + floatY;
  });

  renderer.render(scene, camera);
}

function updateRendererSize() {
  const width = bubbleParentContainer.value?.clientWidth || 1;
  const height = bubbleParentContainer.value?.clientHeight || 1;

  // Update renderer size and aspect ratio
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Recalculate background mesh scale
  const distance = camera.position.z;
  const frustumHeight = 2 * distance * Math.tan(MathUtils.degToRad(camera.fov) / 2);
  const frustumWidth = frustumHeight * camera.aspect;

  // Get the background mesh and update its scale
  const bgMesh = scene.children.find(
    (obj) => obj instanceof Mesh && obj.geometry === bgGeometry,
  ) as Mesh;
  if (bgMesh) {
    bgMesh.scale.set(
      frustumWidth / bgGeometry.parameters.radius,
      frustumHeight / bgGeometry.parameters.radius,
      1,
    );
  }
}

onMounted(() => {
  createScene();
  updateRendererSize();
  window.addEventListener("resize", updateRendererSize);
  animate();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateRendererSize); // Cleanup on component unmount
});
</script>
