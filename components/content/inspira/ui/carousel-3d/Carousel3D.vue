<template>
  <div
    ref="carouselContainer"
    :class="cn('w-full h-[60vh] relative', props.containerClass)"
  >
    <div
      :class="
        cn('absolute top-[40%] translate-y-[-50%] left-0 w-full h-[80%] z-[100]', props.class)
      "
      @mousedown="onClick"
      @mouseup="onMouseUp"
      @mousemove="onMouseMove"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
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
const mouseDownX = ref(0);
const touchMoveX = ref(0);
const touchStartX = ref(0);
const isClicked = ref(false);
const lastPercentage = ref(0);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 1, 5000);
let renderer: CSS3DRenderer;

const radius = ref(750);

let carousel: THREE.Object3D;
let animationController: AnimationPlaybackControls | null = null;

onMounted(() => {
  if (!import.meta.client) return;

  if (!carouselContainer.value) return;

  renderer = new CSS3DRenderer();
  camera.aspect = window.innerWidth / window.innerHeight;

  const width = carouselContainer.value.clientWidth;
  const height = carouselContainer.value.clientHeight;

  renderer.setSize(width, height);
  carouselContainer.value.appendChild(renderer.domElement);

  camera.position.z = 550;
  camera.position.y = 70;

  carousel = new THREE.Object3D();
  scene.add(carousel);

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

  carousel.rotation.y = THREE.MathUtils.degToRad(-16);

  carousel.rotation.x = THREE.MathUtils.degToRad(20);
  carousel.rotation.y = 0;
  carousel.rotation.z = 0;

  startContinuousRotation();

  window.addEventListener("resize", onWindowResize);
});

function startContinuousRotation() {
  // We’ll rotate from the current `carousel.rotation.y`
  // to that value + 2π (one full revolution).
  const fromVal = carousel.rotation.y;
  const toVal = fromVal + Math.PI * 2;

  animate(fromVal, toVal, {
    duration: 20,
    ease: "linear",
    repeat: Infinity, // loop forever
    repeatType: "loop", // after finishing, jump back to `fromVal`
    onUpdate: (latest) => {
      // Update the actual Three.js rotation
      carousel.rotation.y = latest;
      // Re-render on each tick
      renderer.render(scene, camera);
    },
  });
}

function onClick(event: MouseEvent) {
  if (!import.meta.client) return;

  mouseDownX.value = event.clientX;
  isClicked.value = true;

  if (animationController) {
    animationController.stop();
    animationController = null;
  }
}

function onMouseUp() {
  if (!import.meta.client) return;
  isClicked.value = false;
  lastPercentage.value = 0;
  startContinuousRotation();
}

function onMouseMove(event: MouseEvent) {
  if (!isClicked.value || !import.meta.client) {
    return;
  }

  const mouseDelta = mouseDownX.value - event.clientX;
  const maxDelta = window.innerWidth;
  const percentage = (mouseDelta / maxDelta) * -50;

  // Calculate the new "Y" rotation for the carousel
  const newY = carousel.rotation.y + (lastPercentage.value - percentage);

  // Animate from current `carousel.rotation.y` to `newY`
  animationController = animate(carousel.rotation.y, newY, {
    // For a similar feel to "power2.out", just use "easeOut"
    ease: "easeOut",
    // If you want a quick/instant animate, you could do duration: 0 or 0.1
    duration: 0.3,
    onUpdate: (latest) => {
      carousel.rotation.y = latest;
      renderer.render(scene, camera);
    },
  });

  lastPercentage.value = percentage;
}

function onTouchStart(event: TouchEvent) {
  if (!import.meta.client) return;
  touchStartX.value = event.touches[0].clientX;
  isClicked.value = true;

  if (animationController) {
    animationController.stop();
    animationController = null;
  }
}

function onTouchMove(event: TouchEvent) {
  if (!isClicked.value || !import.meta.client) return;
  event.preventDefault();

  touchMoveX.value = event.touches[0].clientX;
  const touchDelta = touchStartX.value - touchMoveX.value;
  const maxDelta = window.innerWidth;

  // Calculate the new percentage
  const percentage = (touchDelta / maxDelta) * -15;

  // Determine the new target rotation
  const newY = carousel.rotation.y + (lastPercentage.value - percentage);

  // Animate the carousel's rotation from the current y to newY
  animate(carousel.rotation.y, newY, {
    // Similar to "power2.out" in GSAP
    ease: "easeOut",
    // Adjust duration to taste
    duration: 0.3,
    onUpdate: (latest) => {
      // Update the actual Three.js rotation
      carousel.rotation.y = latest;
      // Re-render on each animation frame
      renderer.render(scene, camera);
    },
  });

  // Store the current percentage for next movement
  lastPercentage.value = percentage;
}

function onTouchEnd() {
  if (!import.meta.client) return;
  isClicked.value = false;
  lastPercentage.value = 0;
  startContinuousRotation();
}

function onWindowResize() {
  if (!import.meta.client) return;
  if (!carouselContainer.value) return;

  const width = carouselContainer.value.clientWidth;
  const height = carouselContainer.value.clientHeight;
  radius.value = width / 3;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

onBeforeUnmount(() => {
  if (!carouselContainer.value) return;

  if (carouselContainer.value && import.meta.client) {
    carouselContainer.value.removeChild(renderer.domElement);
  }
  if (import.meta.client) {
    window.removeEventListener("resize", onWindowResize);

    if (animationController) {
      animationController.stop();
      animationController = null;
    }
  }
});
</script>
