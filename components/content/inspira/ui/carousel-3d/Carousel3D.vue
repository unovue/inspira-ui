<template>
  <div
    ref="carouselContainer"
    :class="cn('w-full h-[60vh] relative', props.containerClass)"
  >
    <div
      :class="
        cn('absolute top-[40%] translate-y-[-50%] left-0 w-full h-[80%] z-[100]', props.class)
      "
      @mousedown="onDragStart"
      @mouseup="onDragEnd"
      @mouseleave="onDragEnd"
      @mousemove="onMouseMove"
      @touchstart="onTouchStart"
      @touchend="onDragEnd"
      @touchmove="onTouchMove"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import { CSS3DRenderer, CSS3DObject } from "three/addons/renderers/CSS3DRenderer.js";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";
import { animate, type AnimationPlaybackControls } from "motion-v";

interface Props {
  items: unknown[];
  class?: HTMLAttributes["class"];
  containerClass?: HTMLAttributes["class"];
  width?: number;
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  class: "",
  containerClass: "",
  width: 450,
  height: 600,
  items: () => [],
});

const carouselContainer = ref<HTMLDivElement>();
const isDragging = ref(false);
const startX = ref(0);
const currentX = ref(0);
const sensitivity = 0.0025; // Adjusted rotation sensitivity for handleDrag

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 1, 5000);
let renderer: CSS3DRenderer;

const radius = ref(750);
let carousel: THREE.Object3D;
let continuousAnimation = ref<AnimationPlaybackControls | null>(null);

onMounted(() => {
  if (!carouselContainer.value) return;

  // Setup renderer
  renderer = new CSS3DRenderer();
  const width = carouselContainer.value.clientWidth;
  const height = carouselContainer.value.clientHeight;

  renderer.setSize(width, height);
  carouselContainer.value.appendChild(renderer.domElement);

  // Camera setup
  camera.position.z = 550;
  camera.position.y = 70;

  // Create carousel
  carousel = new THREE.Object3D();
  scene.add(carousel);

  // Add items
  props.items.forEach((image, index) => {
    const element = document.createElement("div");
    element.style.width = `${props.width}px`;
    element.style.height = `${props.height}px`;
    element.classList.add("rounded-lg");
    element.style.backgroundImage = `url(${image})`;
    element.style.backgroundSize = "cover";

    const object = new CSS3DObject(element);
    const angle = (index / props.items.length) * Math.PI * 2;
    object.position.setFromSphericalCoords(radius.value, Math.PI / 2, angle);
    object.lookAt(carousel.position);

    carousel.add(object);
  });

  // Initial rotation
  carousel.rotation.x = THREE.MathUtils.degToRad(20);
  startContinuousRotation();

  window.addEventListener("resize", onWindowResize);
});

function startContinuousRotation() {
  if (continuousAnimation.value) {
    continuousAnimation.value.stop();
  }

  const fromVal = carousel.rotation.y;
  const toVal = fromVal + Math.PI * 2;

  continuousAnimation.value = animate(fromVal, toVal, {
    duration: 20,
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",
    onUpdate: (latest) => {
      carousel.rotation.y = latest;
      renderer.render(scene, camera);
    },
  });
}

function onDragStart(event: MouseEvent | TouchEvent) {
  isDragging.value = true;
  startX.value = "touches" in event ? event.touches[0].clientX : event.clientX;
  currentX.value = startX.value;

  if (continuousAnimation.value) {
    continuousAnimation.value.stop();
    continuousAnimation.value = null;
  }
}

function onDragEnd() {
  if (!isDragging.value) return;
  isDragging.value = false;
  startContinuousRotation();
}

function onMouseMove(event: MouseEvent) {
  if (!isDragging.value) return;
  handleDrag(event.clientX);
}

function onTouchStart(event: TouchEvent) {
  onDragStart(event);
}

function onTouchMove(event: TouchEvent) {
  if (!isDragging.value) return;
  event.preventDefault();
  handleDrag(event.touches[0].clientX);
}

function handleDrag(clientX: number) {
  const deltaX = clientX - currentX.value;
  currentX.value = clientX;

  carousel.rotation.y += -deltaX * sensitivity;
  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!carouselContainer.value) return;

  const width = carouselContainer.value.clientWidth;
  const height = carouselContainer.value.clientHeight;

  radius.value = width / 3;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

onBeforeUnmount(() => {
  if (carouselContainer.value && renderer) {
    carouselContainer.value.removeChild(renderer.domElement);
  }
  window.removeEventListener("resize", onWindowResize);

  if (continuousAnimation.value) {
    continuousAnimation.value.stop();
  }
});
</script>
