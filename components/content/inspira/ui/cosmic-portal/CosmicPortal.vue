<template>
  <div :class="['relative overflow-hidden h-full w-full', props.containerClass]">
    <canvas
      ref="canvasRef"
      :class="['absolute inset-0 h-full w-full block', props.class]"
    />
  </div>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { FXAAShader } from "three/addons/shaders/FXAAShader.js";

interface PortalParams {
  portalComplexity: number;
  crystalCount: number;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  vortexColor: string;
  rotationSpeed: number;
  bloomStrength: number;
  bloomRadius: number;
  bloomThreshold: number;
  dimensionShift: number;
}

const props = withDefaults(
  defineProps<Partial<PortalParams> & { class?: string; containerClass?: string }>(),
  {
    portalComplexity: 4,
    crystalCount: 12,
    primaryColor: "#9b59b6",
    secondaryColor: "#3498db",
    accentColor: "#e74c3c",
    vortexColor: "#2ecc71",
    rotationSpeed: 0.3,
    bloomStrength: 1.2,
    bloomRadius: 0.7,
    bloomThreshold: 0.2,
    dimensionShift: 4,
    class: "",
    containerClass: "",
  },
);

const params = ref<PortalParams>({
  portalComplexity: props.portalComplexity,
  crystalCount: props.crystalCount,
  primaryColor: props.primaryColor,
  secondaryColor: props.secondaryColor,
  accentColor: props.accentColor,
  vortexColor: props.vortexColor,
  rotationSpeed: props.rotationSpeed,
  bloomStrength: props.bloomStrength,
  bloomRadius: props.bloomRadius,
  bloomThreshold: props.bloomThreshold,
  dimensionShift: props.dimensionShift,
});

const canvasRef = ref<HTMLCanvasElement>();

// Three.js core objects
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let composer: EffectComposer;
let controls: OrbitControls;
let bloomPass: UnrealBloomPass;
let fxaaPass: ShaderPass;
let clock: THREE.Clock;

// Portal objects
let meshes: THREE.Object3D[] = [];
let materials: THREE.Material[] = [];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let portalMaterials: any[] = [];
let portalLights: THREE.Light[] = [];
let animationId: number;
let time = 0;

let resizeObserver: ResizeObserver;

function initThreeJS() {
  if (!canvasRef.value) return;

  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0015);
  scene.fog = new THREE.FogExp2(0x1a0033, 0.001);

  // Camera setup - get container dimensions first
  const container = canvasRef.value.parentElement;
  const width = container ? container.clientWidth : window.innerWidth;
  const height = container ? container.clientHeight : window.innerHeight;

  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 15);

  // Lighting
  scene.add(new THREE.AmbientLight(0x330066, 0.2));
  const mainLight = new THREE.DirectionalLight(0xffffff, 0.6);
  mainLight.position.set(10, 10, 5);
  scene.add(mainLight);

  // Portal lights
  const lightColors = [
    params.value.primaryColor,
    params.value.secondaryColor,
    params.value.accentColor,
    params.value.vortexColor,
  ];
  for (let i = 0; i < 6; i++) {
    const light = new THREE.PointLight(new THREE.Color(lightColors[i % 4]), 0.8, 20);
    scene.add(light);
    portalLights.push(light);
  }

  // Renderer setup - use the container dimensions
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  // Controls
  controls = new OrbitControls(camera, canvasRef.value);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
  controls.minDistance = 8;
  controls.maxDistance = 40;

  // Post-processing
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(width, height),
    params.value.bloomStrength,
    params.value.bloomRadius,
    params.value.bloomThreshold,
  );
  composer.addPass(bloomPass);

  fxaaPass = new ShaderPass(FXAAShader);
  const pixelRatio = renderer.getPixelRatio();
  fxaaPass.material.uniforms["resolution"].value.set(
    1 / (width * pixelRatio),
    1 / (height * pixelRatio),
  );
  composer.addPass(fxaaPass);

  clock = new THREE.Clock();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addPortalShader(material: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  material.onBeforeCompile = (shader: any) => {
    shader.uniforms.time = { value: 0 };
    shader.uniforms.pulseTime = { value: -1000 };
    shader.uniforms.portalSpeed = { value: 8.0 };
    shader.uniforms.portalColor = { value: new THREE.Color(params.value.accentColor) };
    shader.uniforms.dimensionShift = { value: 0 };

    shader.vertexShader = `varying vec3 vWorldPosition;\n` + shader.vertexShader;

    shader.fragmentShader =
      `
        uniform float time;
        uniform float pulseTime;
        uniform float portalSpeed;
        uniform vec3 portalColor;
        uniform float dimensionShift;
        varying vec3 vWorldPosition;\n` + shader.fragmentShader;

    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `#include <begin_vertex>
       vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
       float timeSincePortal = time - pulseTime;
       if(timeSincePortal > 0.0 && timeSincePortal < 3.0) {
         float portalRadius = timeSincePortal * portalSpeed;
         float currentRadius = length(vWorldPosition);
         float portalWidth = 1.5;
         float portalEffect = smoothstep(portalRadius - portalWidth, portalRadius, currentRadius) -
                             smoothstep(portalRadius, portalRadius + portalWidth, currentRadius);
         vec3 dimensionalColor = mix(portalColor, vec3(1.0, 0.5, 1.0), sin(dimensionShift * 3.14159) * 0.5 + 0.5);
         totalEmissiveRadiance += dimensionalColor * portalEffect * 4.0;
       }`,
    );
    portalMaterials.push(shader);
  };
}

function createCosmicBackground() {
  const count = 4000;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const radius = 80 + Math.random() * 50;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);

    const temp = Math.random();
    const color = new THREE.Color();
    if (temp < 0.15) color.setHSL(0.8, 0.8, 0.9);
    else if (temp < 0.4) color.setHSL(0.6, 0.6, 0.8);
    else if (temp < 0.7) color.setHSL(0.1, 0.3, 0.9);
    else color.setHSL(0.3, 0.7, 0.6);

    color.toArray(colors, i3);
  }

  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.3,
    vertexColors: true,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
  });

  const stars = new THREE.Points(geo, mat);
  scene.add(stars);
  meshes.push(stars);
  materials.push(mat);
}

function createPortalCore() {
  const geo = new THREE.SphereGeometry(0.8, 32, 32);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      pulseTime: { value: -1000 },
      dimensionShift: { value: 0 },
      color1: { value: new THREE.Color(params.value.primaryColor) },
      color2: { value: new THREE.Color(params.value.secondaryColor) },
      color3: { value: new THREE.Color(params.value.accentColor) },
    },
    vertexShader: `
      uniform float time;
      uniform float dimensionShift;
      varying vec3 vPos;
      varying vec3 vNorm;
      void main() {
        vPos = position;
        vNorm = normal;
        float warp = sin(position.x * 10.0 + time * 3.0) * 0.1;
        float shift = sin(dimensionShift * 6.28318) * 0.3;
        vec3 p = position * (1.0 + warp + shift);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float pulseTime;
      uniform float dimensionShift;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      varying vec3 vPos;
      varying vec3 vNorm;
      void main() {
        float noise = sin(vPos.x * 20.0 + time * 4.0) * cos(vPos.z * 15.0 + time * 3.0);
        vec3 baseColor = mix(color1, color2, 0.5 + 0.5 * sin(time * 2.0 + dimensionShift));
        vec3 finalColor = mix(baseColor, color3, noise * 0.3);

        float fresnel = pow(1.0 - abs(dot(vNorm, normalize(cameraPosition - vPos))), 3.0);
        finalColor = mix(finalColor, vec3(1.0), fresnel * 0.5);

        float timeSincePortal = time - pulseTime;
        if(timeSincePortal > 0.0 && timeSincePortal < 1.0) {
          float burst = 1.0 - timeSincePortal;
          finalColor += vec3(1.0) * burst * 3.0;
        }

        gl_FragColor = vec4(finalColor, 0.9);
      }
    `,
    transparent: true,
  });

  portalMaterials.push(mat);
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);
  meshes.push(mesh);
}

function createVortexRings() {
  const colors = [
    params.value.primaryColor,
    params.value.secondaryColor,
    params.value.accentColor,
    params.value.vortexColor,
  ];

  for (let ring = 0; ring < 5; ring++) {
    const radius = 2 + ring * 0.8;
    const geo = new THREE.TorusGeometry(radius, 0.05, 16, 64);
    const mat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(colors[ring % colors.length]),
      transparent: true,
      opacity: 0.7,
      metalness: 0.8,
      roughness: 0.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      emissive: new THREE.Color(colors[ring % colors.length]).multiplyScalar(0.2),
    });

    addPortalShader(mat);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = Math.PI * 0.1 * ring;
    mesh.rotation.z = Math.PI * 0.15 * ring;
    scene.add(mesh);
    meshes.push(mesh);
  }
}

function createFloatingCrystals() {
  const colors = [
    params.value.accentColor,
    params.value.vortexColor,
    params.value.primaryColor,
    params.value.secondaryColor,
  ];

  for (let i = 0; i < params.value.crystalCount; i++) {
    const geo = new THREE.OctahedronGeometry(0.3 + Math.random() * 0.4, 1);
    const mat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(colors[i % colors.length]),
      transparent: true,
      opacity: 0.8,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      emissive: new THREE.Color(colors[i % colors.length]).multiplyScalar(0.3),
    });

    addPortalShader(mat);
    const mesh = new THREE.Mesh(geo, mat);
    const angle = (i / params.value.crystalCount) * Math.PI * 2;
    const radius = 6 + Math.random() * 4;
    mesh.position.set(
      Math.cos(angle) * radius,
      (Math.random() - 0.5) * 8,
      Math.sin(angle) * radius,
    );
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(mesh);
    meshes.push(mesh);
  }
}

function createDimensionalStreams() {
  const colors = [params.value.vortexColor, params.value.primaryColor, params.value.secondaryColor];

  for (let i = 0; i < 8; i++) {
    const points = [];
    const segments = 120;

    for (let j = 0; j <= segments; j++) {
      const t = j / segments;
      const angle = t * Math.PI * 12 + i * Math.PI * 0.25;
      const radius = 3 + Math.sin(t * Math.PI * 6) * 1.5;
      const height = (t - 0.5) * 15;

      points.push(new THREE.Vector3(Math.cos(angle) * radius, height, Math.sin(angle) * radius));
    }

    const curve = new THREE.CatmullRomCurve3(points);
    const geo = new THREE.TubeGeometry(curve, segments, 0.02, 8, false);
    const mat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(colors[i % colors.length]),
      transparent: true,
      opacity: 0.6,
      metalness: 1.0,
      roughness: 0.0,
      emissive: new THREE.Color(colors[i % colors.length]).multiplyScalar(0.4),
    });

    addPortalShader(mat);
    const stream = new THREE.Mesh(geo, mat);
    scene.add(stream);
    meshes.push(stream);
  }
}

function createPortalFrame() {
  const frameGeo = new THREE.TorusGeometry(7, 0.2, 16, 64);
  const frameMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(params.value.primaryColor),
    transparent: true,
    opacity: 0.4,
    metalness: 1.0,
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.0,
    emissive: new THREE.Color(params.value.primaryColor).multiplyScalar(0.5),
  });

  addPortalShader(frameMat);
  const frame = new THREE.Mesh(frameGeo, frameMat);
  scene.add(frame);
  meshes.push(frame);
}

function createEnergyParticles() {
  const count = 1500;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const r = 2 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.08,
    color: params.value.vortexColor,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.8,
  });

  const particles = new THREE.Points(geo, mat);
  scene.add(particles);
  meshes.push(particles);
  materials.push(mat);
}

function createSpaceDistortion() {
  const geo = new THREE.SphereGeometry(12, 64, 64);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      dimensionShift: { value: 0 },
      color1: { value: new THREE.Color(params.value.primaryColor) },
      color2: { value: new THREE.Color(params.value.vortexColor) },
    },
    vertexShader: `
      uniform float time;
      uniform float dimensionShift;
      varying vec3 vNorm;
      varying vec3 vPos;
      void main() {
        vNorm = normal;
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float dimensionShift;
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec3 vNorm;
      varying vec3 vPos;
      void main() {
        vec3 viewDir = normalize(cameraPosition - vPos);
        float fresnel = pow(1.0 - abs(dot(vNorm, viewDir)), 4.0);

        float distortion = sin(vPos.x * 0.5 + time * 2.0) * cos(vPos.y * 0.7 + time * 1.5);
        vec3 color = mix(color1, color2, distortion * 0.5 + 0.5 + dimensionShift * 0.3);

        gl_FragColor = vec4(color, fresnel * 0.3);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const distortion = new THREE.Mesh(geo, mat);
  scene.add(distortion);
  meshes.push(distortion);
  materials.push(mat);
}

function createPortalScene() {
  // Clean up existing meshes
  meshes.forEach((mesh) => scene.remove(mesh));
  materials.forEach((mat) => mat.dispose());
  meshes = [];
  materials = [];
  portalMaterials = [];

  // Create portal components
  createCosmicBackground();
  createPortalCore();
  createVortexRings();
  createFloatingCrystals();
  createDimensionalStreams();
  createPortalFrame();
  createEnergyParticles();
  createSpaceDistortion();
}

function handleResize() {
  if (!camera || !renderer || !composer || !canvasRef.value) return;

  const container = canvasRef.value.parentElement;
  if (!container) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  // Update camera
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Update renderer and composer
  renderer.setSize(width, height);
  composer.setSize(width, height);

  // Update FXAA pass
  const pixelRatio = renderer.getPixelRatio();
  fxaaPass.material.uniforms["resolution"].value.set(
    1 / (width * pixelRatio),
    1 / (height * pixelRatio),
  );
}

function animate() {
  animationId = requestAnimationFrame(animate);

  const delta = clock.getDelta();
  time = clock.getElapsedTime();

  // Update shader uniforms
  portalMaterials.forEach((shader) => {
    if (shader.uniforms) {
      if (shader.uniforms.time) shader.uniforms.time.value = time;
      if (shader.uniforms.dimensionShift)
        shader.uniforms.dimensionShift.value = params.value.dimensionShift;
    }
  });

  materials.forEach((mat) => {
    if (mat.uniforms) {
      if (mat.uniforms.time) mat.uniforms.time.value = time;
      if (mat.uniforms.dimensionShift)
        mat.uniforms.dimensionShift.value = params.value.dimensionShift;
    }
  });

  // Animate portal lights
  portalLights.forEach((light, i) => {
    const angle = time * 0.3 + (i / 6) * Math.PI * 2;
    const radius = 10 + Math.sin(time * 0.5 + i) * 3;
    light.position.x = Math.cos(angle) * radius;
    light.position.z = Math.sin(angle) * radius;
    light.position.y = Math.sin(time * 0.4 + i * 0.7) * 5;
  });

  // Animate meshes
  meshes.forEach((mesh, i) => {
    if (!mesh.rotation) return;
    const speed = params.value.rotationSpeed;
    mesh.rotation.y += delta * speed * (i % 2 ? -1 : 1) * 0.3;
    mesh.rotation.x += delta * speed * 0.1;

    // Animate particle positions
    if (mesh.material && mesh.material.type === "PointsMaterial") {
      const positions = mesh.geometry.attributes.position.array;
      for (let j = 0; j < positions.length; j += 3) {
        positions[j] += Math.sin(time + j) * 0.001;
        positions[j + 1] += Math.cos(time + j) * 0.001;
        positions[j + 2] += Math.sin(time * 0.7 + j) * 0.001;
      }
      mesh.geometry.attributes.position.needsUpdate = true;
    }
  });

  controls.update();
  composer.render();
}

function cleanup() {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }

  // Dispose of Three.js objects
  meshes.forEach((mesh) => {
    if (mesh.geometry) mesh.geometry.dispose();
    if (mesh.material) {
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((mat) => mat.dispose());
      } else {
        mesh.material.dispose();
      }
    }
  });

  materials.forEach((mat) => mat.dispose());

  if (renderer) {
    renderer.dispose();
  }

  if (controls) {
    controls.dispose();
  }

  window.removeEventListener("resize", handleResize);
}

// Exposed methods
function activatePortal() {
  portalMaterials.forEach((mat) => {
    if (mat.uniforms && mat.uniforms.pulseTime) {
      mat.uniforms.pulseTime.value = time;
    }
  });
}

function shiftDimensions() {
  const colors = [
    "#9b59b6",
    "#3498db",
    "#e74c3c",
    "#2ecc71",
    "#f39c12",
    "#e67e22",
    "#1abc9c",
    "#34495e",
  ];
  params.value.primaryColor = colors[Math.floor(Math.random() * colors.length)];
  params.value.secondaryColor = colors[Math.floor(Math.random() * colors.length)];
  params.value.accentColor = colors[Math.floor(Math.random() * colors.length)];
  params.value.vortexColor = colors[Math.floor(Math.random() * colors.length)];
  params.value.dimensionShift = Math.random();
  createPortalScene();
}

// Expose methods to parent component
defineExpose({
  activatePortal,
  shiftDimensions,
});

onMounted(() => {
  initThreeJS();
  createPortalScene();
  // Use ResizeObserver instead of window resize
  if (canvasRef.value?.parentElement) {
    resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(canvasRef.value.parentElement);
  }
  animate();
});

onUnmounted(() => {
  cleanup();
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>
