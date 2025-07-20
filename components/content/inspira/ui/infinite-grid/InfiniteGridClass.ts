/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @fileoverview InfiniteGridClass - Three.js Infinite Scrolling Grid System
 *
 * A comprehensive Three.js-based infinite grid system that creates a seamless,
 * scrollable interface for displaying card-based content. The system uses a
 * 3x3 tile group architecture to create the illusion of infinite content while
 * maintaining optimal performance.
 *
 * Key Features:
 * - Infinite scrolling in all directions
 * - Interactive hover effects with background blur
 * - Click events with custom data dispatching
 * - Post-processing visual effects (distortion, vignette)
 * - GSAP-powered smooth animations and inertia
 * - Responsive viewport calculations
 * - Memory-efficient tile repositioning system
 *
 * Architecture Overview:
 * - Uses 9 tile groups arranged in a 3x3 pattern
 * - Each group contains a configurable grid of individual tiles
 * - Groups are repositioned as the user scrolls to maintain infinite effect
 * - Each tile has foreground (content) and background (blur) layers
 * - Textures are generated dynamically from card data using Canvas 2D API
 */

import * as THREE from "three";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { generateForegroundTexture, generateBackgroundTexture } from "./createTexture.js";

// Post-processing imports
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

import { CustomPostProcessShader } from "./PostProcessShader.js";

// Import shaders as raw strings
import gaussianBlurVertexShader from "./gaussianBlurVertex.glsl?raw";
import gaussianBlurFragmentShader from "./gaussianBlurFragment.glsl?raw";

gsap.registerPlugin(InertiaPlugin);

/**
 * Type definitions for the Infinite Grid system
 */

/**
 * Represents the data structure for a single card/tile in the grid
 */
export interface CardData {
  /** The main title text displayed on the card */
  title: string;
  /** Badge text (currently not implemented in rendering) */
  badge: string;
  /** Detailed description text (optional) */
  description?: string;
  /** Array of tag strings displayed as pills at the bottom */
  tags: string[];
  /** Date string displayed in the bottom-right corner */
  date: string;
  /** Optional image URL for the card's main image */
  image?: string;
}

/**
 * Configuration parameters for post-processing visual effects
 */
export interface PostProcessParams {
  /** Intensity of the barrel/pincushion distortion effect (0 = no distortion) */
  distortionIntensity?: number;
  /** Offset value for the vignette effect (higher = smaller dark area) */
  vignetteOffset?: number;
  /** Darkness intensity of the vignette effect (higher = darker edges) */
  vignetteDarkness?: number;
}

/**
 * Configuration options for initializing the infinite grid
 */
export interface InfiniteGridOptions {
  /** Number of columns in each grid section (default: 3) */
  gridCols?: number;
  /** Number of rows in each grid section (default: 3) */
  gridRows?: number;
  /** Gap between tiles in Three.js units (default: 0) */
  gridGap?: number;
  /** Size of each tile in Three.js units (default: 3) */
  tileSize?: number;
  /** Base Z position of the camera (default: 10) */
  baseCameraZ?: number;
  /** Whether to enable post-processing effects (default: true) */
  enablePostProcessing: boolean;
  /** Parameters for post-processing effects */
  postProcessParams: PostProcessParams;
}

/**
 * Simple 2D coordinate structure
 */
interface Position2D {
  /** X coordinate */
  x: number;
  /** Y coordinate */
  y: number;
}

/**
 * Tracks the current scroll state and behavior
 */
interface ScrollState {
  /** Scaling factor for scroll sensitivity */
  scale: number;
  /** Current scroll position */
  current: Position2D;
  /** Previous scroll position for delta calculations */
  last: Position2D;
}

/**
 * Data structure for each group of tiles (3x3 groups create infinite effect)
 */
interface TileGroupData {
  /** Base 3D position of the group in world space */
  basePos: THREE.Vector3;
  /** Additional offset for infinite scrolling wrapping */
  offset: Position2D;
}

/**
 * User data attached to each tile mesh for identification
 */
interface TileUserData {
  /** Index of the tile group this tile belongs to */
  groupIndex: number;
  /** Index of the tile within its group */
  tileIndex: number;
  /** Unique string identifier for the tile */
  tileKey: string;
}

/**
 * Event detail passed when a tile is clicked
 */
interface TileClickEventDetail {
  /** Index of the clicked tile's group */
  groupIndex: number;
  /** Index of the clicked tile within its group */
  tileIndex: number;
  /** The card data associated with the clicked tile */
  cardData: CardData;
}

/**
 * Pair of textures for each card (foreground content + background blur)
 */
interface CardTexturePair {
  /** Canvas texture containing the card's main content */
  foreground: THREE.CanvasTexture | null;
  /** Canvas texture containing the blurred background image */
  background: THREE.CanvasTexture | null;
}

/**
 * Camera viewport dimensions in world space
 */
interface Viewport {
  /** Width of the viewport in world units */
  width: number;
  /** Height of the viewport in world units */
  height: number;
}

// Custom event types
declare global {
  interface HTMLElementEventMap {
    tileClicked: CustomEvent<TileClickEventDetail>;
  }
}

/**
 * InfiniteGridClass - A Three.js-based infinite scrolling grid system
 *
 * This class creates an infinite, scrollable grid of tiles that displays card data.
 * It uses a 3x3 grid system where tiles are repositioned as the user scrolls to
 * create an infinite scrolling effect. Each tile can display custom content
 * with foreground and background textures.
 *
 * Key Features:
 * - Infinite scrolling in all directions using tile repositioning
 * - Interactive hover effects with background blur transitions
 * - Click events with custom event dispatching
 * - Optional post-processing effects (distortion, vignette)
 * - GSAP-powered smooth animations and inertia scrolling
 * - Responsive design with automatic viewport calculations
 *
 * @example
 * ```typescript
 * const grid = new InfiniteGridClass(
 *   containerElement,
 *   cardDataArray,
 *   {
 *     gridCols: 3,
 *     gridRows: 3,
 *     enablePostProcessing: true
 *   }
 * );
 * await grid.init();
 * ```
 */
export class InfiniteGridClass {
  /**
   * Core Container and Data Properties
   */

  /** The HTML element that contains the Three.js canvas */
  private container: HTMLElement;
  /** Array of card data to be displayed in the grid */
  private cardData: CardData[];
  /** Merged configuration options with defaults applied */
  private options: Required<InfiniteGridOptions>;

  /**
   * Grid Layout Properties (calculated once, read-only)
   */

  /** Gap between tiles in Three.js world units */
  private readonly GRID_GAP: number;
  /** Size of each individual tile in Three.js world units */
  private readonly TILE_SIZE: number;
  /** Total space occupied by one tile including gap */
  private readonly TILE_SPACE: number;
  /** Number of columns in each grid section */
  private readonly GRID_COLS: number;
  /** Number of rows in each grid section */
  private readonly GRID_ROWS: number;
  /** Total width of one grid section */
  private readonly GRID_WIDTH: number;
  /** Total height of one grid section */
  private readonly GRID_HEIGHT: number;
  /** Total width of all 3 grid sections (for infinite wrapping) */
  private readonly TOTAL_GRID_WIDTH: number;
  /** Total height of all 3 grid sections (for infinite wrapping) */
  private readonly TOTAL_GRID_HEIGHT: number;

  /**
   * Three.js Core Rendering Objects
   */

  /** Main Three.js scene containing all 3D objects */
  private scene: THREE.Scene;
  /** Perspective camera for viewing the scene */
  private camera: THREE.PerspectiveCamera | null;
  /** WebGL renderer for drawing to the canvas */
  private renderer: THREE.WebGLRenderer | null;
  /** Raycaster for mouse/touch interaction detection */
  private raycaster: THREE.Raycaster;
  /** 2D pointer coordinates in normalized device coordinates */
  private pointer: THREE.Vector2;

  /**
   * Post-Processing Pipeline Objects
   */

  /** Effect composer for post-processing passes */
  private composer: EffectComposer | null;
  /** Custom shader material for visual effects */
  private customPostProcessMaterial: CustomPostProcessShader | null;
  /** Shader pass containing the custom post-process material */
  private postProcessPass: ShaderPass | null;

  /**
   * Scene Objects and Data Structures
   */

  /** Array of Three.js groups, each containing one 3x3 section of tiles */
  private groupObjects: THREE.Group[];
  /** Map of tile keys to foreground mesh objects (clickable content) */
  private foregroundMeshMap: Map<string, THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>>;
  /** Map of tile keys to background mesh objects (blur effect on hover) */
  private backgroundMeshMap: Map<string, THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>>;
  /** Generated textures for all cards (foreground + background pairs) */
  private cardTextures: CardTexturePair[];
  /** Static shader uniforms for background materials */
  private staticUniforms: Map<string, any>;

  /**
   * User Interaction State
   */

  /** Key of the currently hovered tile (empty string if none) */
  private currentHoveredTileKey: string;
  /** Whether the user is currently dragging/scrolling */
  private isDown: boolean;
  /** Whether the scene has moved significantly during this interaction */
  private hasMovedSignificantly: boolean;
  /** Position where the current drag started */
  private startPosition: Position2D;
  /** Scroll position when the current drag started */
  private scrollPosition: Position2D;
  /** Current scroll state and behavior settings */
  private scroll: ScrollState;
  /** Direction of scroll movement for infinite wrapping logic */
  private direction: Position2D;
  /** GSAP InertiaPlugin tracker for smooth scroll transitions */
  private scrollTracker: any;

  /**
   * Animation Configuration Constants
   */

  /** Duration of hover transition animations in seconds */
  private readonly hoverTransitionDuration: number;
  /** GSAP easing function for hover animations */
  private readonly hoverEase: string;
  /** Initial opacity of background blur effect (0 = transparent) */
  private readonly initialBackgroundOpacity: number;
  /** Target opacity when background is hovered (1 = fully visible) */
  private readonly hoveredBackgroundOpacity: number;
  /** Maximum movement distance in pixels before click is disabled */
  private readonly maxClickMovement: number;

  /**
   * Animation Frame Management
   */

  /** RequestAnimationFrame ID for the main render loop */
  private animationFrameId: number | null;

  /**
   * Tile Group Data Structure
   */

  /** Array containing position data for all 9 tile groups (3x3 infinite grid) */
  private tileGroupsData: TileGroupData[];

  /**
   * Creates a new InfiniteGridClass instance
   *
   * @param containerElement - HTML element that will contain the Three.js canvas
   * @param cardData - Array of card data to display in the grid (defaults to empty array)
   * @param options - Configuration options (merged with defaults)
   *
   * @throws {Error} Throws if containerElement is null or undefined
   *
   * @example
   * ```typescript
   * const container = document.getElementById('grid-container');
   * const cards = [
   *   { title: 'Card 1', badge: 'NEW', description: '...', tags: ['tag1'], date: '2024' },
   *   // ... more cards
   * ];
   * const grid = new InfiniteGridClass(container, cards, {
   *   gridCols: 4,
   *   tileSize: 2.5,
   *   enablePostProcessing: true
   * });
   * ```
   */
  constructor(
    containerElement: HTMLElement,
    cardData: CardData[] = [],
    options: Partial<InfiniteGridOptions> = {},
  ) {
    if (!containerElement) {
      console.error("InfiniteGridClass: Container element is required.");
      throw new Error("Container element is required");
    }

    this.container = containerElement;
    this.cardData = cardData;

    // Merge options with defaults to ensure all properties are defined
    this.options = {
      gridCols: 3,
      gridRows: 3,
      gridGap: 0,
      tileSize: 3,
      baseCameraZ: 10,
      enablePostProcessing: true,
      postProcessParams: {
        distortionIntensity: 0.0,
        vignetteOffset: 0.0,
        vignetteDarkness: 0.0,
        ...options.postProcessParams,
      },
      ...options,
    };

    // Initialize grid properties
    this.GRID_GAP = this.options.gridGap;
    this.TILE_SIZE = this.options.tileSize;
    this.TILE_SPACE = this.TILE_SIZE + this.GRID_GAP;
    this.GRID_COLS = this.options.gridCols;
    this.GRID_ROWS = this.options.gridRows;
    this.GRID_WIDTH = this.TILE_SPACE * this.GRID_COLS;
    this.GRID_HEIGHT = this.TILE_SPACE * this.GRID_ROWS;
    this.TOTAL_GRID_WIDTH = this.GRID_WIDTH * 3;
    this.TOTAL_GRID_HEIGHT = this.GRID_HEIGHT * 3;

    // Initialize Three.js objects
    this.scene = new THREE.Scene();
    this.camera = null;
    this.renderer = null;
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    // Initialize post-processing
    this.composer = null;
    this.customPostProcessMaterial = null;
    this.postProcessPass = null;

    // Initialize maps and arrays
    this.groupObjects = [];
    this.foregroundMeshMap = new Map();
    this.backgroundMeshMap = new Map();
    this.cardTextures = [];
    this.staticUniforms = new Map();

    // Initialize interaction state
    this.currentHoveredTileKey = "";
    this.isDown = false;
    this.hasMovedSignificantly = false;
    this.startPosition = { x: 0, y: 0 };
    this.scrollPosition = { x: 0, y: 0 };
    this.scroll = {
      scale: 0.012,
      current: { x: 0, y: 0 },
      last: { x: 0, y: 0 },
    };
    this.direction = { x: 0, y: 0 };
    this.scrollTracker = InertiaPlugin.track(this.scroll.current, "x,y")[0];

    // Initialize animation properties
    this.hoverTransitionDuration = 0.6;
    this.hoverEase = "power2.out";
    this.initialBackgroundOpacity = 0.0;
    this.hoveredBackgroundOpacity = 1.0;
    this.maxClickMovement = 5; // pixels

    this.animationFrameId = null;
    this.tileGroupsData = [];

    // Bind event handlers to maintain proper 'this' context
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.handleTileClick = this.handleTileClick.bind(this);
    this.render = this.render.bind(this);
  }

  /**
   * Initializes the infinite grid system asynchronously
   *
   * This method sets up all necessary components in the correct order:
   * 1. WebGL renderer and camera
   * 2. Post-processing pipeline (if enabled)
   * 3. Tile group positioning structure
   * 4. Texture generation for all card data
   * 5. 3D mesh creation and scene setup
   * 6. Event listeners for interaction
   * 7. Animation systems and render loop
   *
   * @returns Promise that resolves when initialization is complete
   *
   * @example
   * ```typescript
   * const grid = new InfiniteGridClass(container, cardData);
   * await grid.init(); // Wait for all textures to load and scene to be ready
   * // Grid is now interactive and rendering
   * ```
   */
  public async init(): Promise<void> {
    this.setupRenderer();
    this.setupCamera();
    if (this.options.enablePostProcessing) {
      this.setupPostProcessing();
    }
    this.initializeTileGroups();
    await this.generateTexturesForCardData(this.cardData);
    this.createTiles();
    this.addEventListeners();
    this.animateInertiaScroll();

    this.updatePositions();
    this.render();

    // Animate Post-Processing parameters using the CustomPostProcessShader's method
    if (this.options.enablePostProcessing && this.customPostProcessMaterial) {
      this.customPostProcessMaterial.animate(
        -0.1, // Target distortionIntensity
        0.3, // Target vignetteOffset (where vignette starts - should be < 1.0)
        1.25, // Target vignetteDarkness (where vignette reaches max - should be > vignetteOffset)
        1.5, // Duration
        1.5, // Delay
        "power3.out", // Ease
      );
    }
  }

  /**
   * Sets up the WebGL renderer with optimal settings
   *
   * Creates a WebGL renderer with antialiasing and transparency,
   * configures it for the container size, and appends the canvas
   * to the DOM.
   */
  private setupRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setClearColor(0x000000, 0); // Transparent background
    this.renderer.outputColorSpace = THREE.SRGBColorSpace; // Correct color space for modern displays
    this.container.appendChild(this.renderer.domElement);
  }

  /**
   * Sets up the perspective camera with proper positioning
   *
   * Creates a perspective camera with a 45-degree field of view,
   * positions it at the configured Z distance, and adds it to the scene.
   */
  private setupCamera(): void {
    const aspectRatio = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1000);
    this.camera.position.set(0, 0, this.options.baseCameraZ);
    this.scene.add(this.camera);
  }

  private setupPostProcessing(): void {
    if (!this.renderer) return;

    this.composer = new EffectComposer(this.renderer);
    this.composer.setPixelRatio(window.devicePixelRatio);
    this.composer.setSize(this.container.clientWidth, this.container.clientHeight);

    const renderPass = new RenderPass(this.scene, this.camera!);
    this.composer.addPass(renderPass);

    // Instantiate our custom post-processing shader material
    this.customPostProcessMaterial = new CustomPostProcessShader({
      distortionIntensity: this.options.postProcessParams.distortionIntensity,
      vignetteOffset: this.options.postProcessParams.vignetteOffset,
      vignetteDarkness: this.options.postProcessParams.vignetteDarkness,
    });

    // Create a ShaderPass using our custom material
    this.postProcessPass = new ShaderPass(this.customPostProcessMaterial);
    this.composer.addPass(this.postProcessPass);

    // Add OutputPass for correct sRGB conversion
    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
  }

  /**
   * Calculates the viewport dimensions in world space
   *
   * Uses the camera's field of view and position to determine how much
   * world space is visible. This is essential for infinite scrolling
   * calculations to know when tile groups need to be repositioned.
   *
   * @returns Viewport object with width and height in world units
   */
  private get viewport(): Viewport {
    if (!this.camera) {
      return { width: 0, height: 0 };
    }
    const fov = this.camera.fov * (Math.PI / 180); // Convert FOV to radians
    const viewHeight = 2 * Math.tan(fov / 2) * this.camera.position.z;
    return { width: viewHeight * this.camera.aspect, height: viewHeight };
  }

  /**
   * Initializes the 3x3 grid of tile groups for infinite scrolling
   *
   * Creates 9 tile groups arranged in a 3x3 pattern. Each group contains
   * a grid of tiles. As the user scrolls, groups are repositioned to
   * create the illusion of infinite content.
   */
  private initializeTileGroups(): void {
    this.tileGroupsData = [];
    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        this.tileGroupsData.push({
          basePos: new THREE.Vector3(this.GRID_WIDTH * c, this.GRID_HEIGHT * r, 0),
          offset: { x: 0, y: 0 },
        });
      }
    }
  }

  private createTiles(): void {
    this.tileGroupsData.forEach((groupData, groupIndex) => {
      const groupObject = new THREE.Group();
      groupObject.position.copy(groupData.basePos);
      this.scene.add(groupObject);
      this.groupObjects[groupIndex] = groupObject;

      const startX = -((this.GRID_COLS - 1) / 2) * this.TILE_SPACE;
      const startY = ((this.GRID_ROWS - 1) / 2) * this.TILE_SPACE;

      for (let row = 0; row < this.GRID_ROWS; row++) {
        for (let col = 0; col < this.GRID_COLS; col++) {
          const x = startX + col * this.TILE_SPACE;
          const y = startY - row * this.TILE_SPACE;

          const tileKey = this.getTileKey(groupIndex, row * this.GRID_COLS + col);

          // Create background mesh
          const backgroundMaterial = this.createBackgroundMaterial(
            groupIndex,
            row * this.GRID_COLS + col,
          );
          const backgroundMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(this.TILE_SIZE, this.TILE_SIZE),
            backgroundMaterial,
          );
          backgroundMesh.position.set(x, y, -0.01);
          this.backgroundMeshMap.set(tileKey, backgroundMesh);
          groupObject.add(backgroundMesh);

          // Create foreground mesh
          const foregroundMaterial = this.createForegroundMaterial(
            groupIndex,
            row * this.GRID_COLS + col,
          );
          const foregroundMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(this.TILE_SIZE, this.TILE_SIZE),
            foregroundMaterial,
          );
          foregroundMesh.position.set(x, y, 0);
          foregroundMesh.userData = {
            groupIndex,
            tileIndex: row * this.GRID_COLS + col,
            tileKey,
          } as TileUserData;
          this.foregroundMeshMap.set(tileKey, foregroundMesh);
          groupObject.add(foregroundMesh);
        }
      }
    });
  }

  private getTileKey(groupIndex: number, tileIndex: number): string {
    return `${groupIndex}-${tileIndex}`;
  }

  private getCardTextureIndex(groupIndex: number, tileIndex: number): number {
    const tilesPerGroup = this.GRID_COLS * this.GRID_ROWS;
    return (groupIndex * tilesPerGroup + tileIndex) % this.cardData.length;
  }

  private getCardForegroundTexture(
    groupIndex: number,
    tileIndex: number,
  ): THREE.CanvasTexture | null {
    if (this.cardTextures.length === 0) return null;
    const textureIndex = this.getCardTextureIndex(groupIndex, tileIndex);
    return this.cardTextures[textureIndex]?.foreground || null;
  }

  private getCardBackgroundTexture(
    groupIndex: number,
    tileIndex: number,
  ): THREE.CanvasTexture | null {
    if (this.cardTextures.length === 0) return null;
    const textureIndex = this.getCardTextureIndex(groupIndex, tileIndex);
    return this.cardTextures[textureIndex]?.background || null;
  }

  private createBackgroundMaterial(groupIndex: number, tileIndex: number): THREE.ShaderMaterial {
    const texture = this.getCardBackgroundTexture(groupIndex, tileIndex);
    const texWidth = texture?.image?.width || 512;
    const texHeight = texture?.image?.height || 512;

    const uniforms = {
      map: { value: texture },
      resolution: { value: new THREE.Vector2(texWidth, texHeight) },
      uOpacity: { value: this.initialBackgroundOpacity },
    };

    this.staticUniforms.set(this.getTileKey(groupIndex, tileIndex), uniforms);

    return new THREE.ShaderMaterial({
      vertexShader: gaussianBlurVertexShader,
      fragmentShader: gaussianBlurFragmentShader,
      uniforms: uniforms,
      transparent: true,
    });
  }

  private createForegroundMaterial(groupIndex: number, tileIndex: number): THREE.MeshBasicMaterial {
    const texture = this.getCardForegroundTexture(groupIndex, tileIndex);
    return new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });
  }

  private updatePositions(): void {
    const scrollX = this.scroll.current.x;
    const scrollY = this.scroll.current.y;

    // Update direction based on scroll movement
    if (this.scroll.current.y > this.scroll.last.y) {
      this.direction.y = -1;
    } else if (this.scroll.current.y < this.scroll.last.y) {
      this.direction.y = 1;
    } else {
      this.direction.y = 0;
    }

    if (this.scroll.current.x > this.scroll.last.x) {
      this.direction.x = -1;
    } else if (this.scroll.current.x < this.scroll.last.x) {
      this.direction.x = 1;
    } else {
      this.direction.x = 0;
    }

    this.tileGroupsData.forEach((groupData, i) => {
      const groupObject = this.groupObjects[i];

      if (groupObject) {
        const posX = groupData.basePos.x + scrollX + groupData.offset.x;
        const posY = groupData.basePos.y + scrollY + groupData.offset.y;

        const groupOffX = this.GRID_WIDTH / 2;
        const groupOffY = this.GRID_HEIGHT / 2;
        const viewportOff = {
          x: this.viewport.width / 2,
          y: this.viewport.height / 2,
        };

        // Handle infinite scrolling wrapping
        if (this.direction.x < 0 && posX - groupOffX > viewportOff.x) {
          groupData.offset.x -= this.TOTAL_GRID_WIDTH;
        } else if (this.direction.x > 0 && posX + groupOffX < -viewportOff.x) {
          groupData.offset.x += this.TOTAL_GRID_WIDTH;
        }

        if (this.direction.y < 0 && posY - groupOffY > viewportOff.y) {
          groupData.offset.y -= this.TOTAL_GRID_HEIGHT;
        } else if (this.direction.y > 0 && posY + groupOffY < -viewportOff.y) {
          groupData.offset.y += this.TOTAL_GRID_HEIGHT;
        }

        groupObject.position.x = groupData.basePos.x + scrollX + groupData.offset.x;
        groupObject.position.y = groupData.basePos.y + scrollY + groupData.offset.y;
        groupObject.position.z = groupData.basePos.z;
      }
    });
  }

  private onPointerDown(e: MouseEvent | TouchEvent): void {
    e.preventDefault();

    this.currentHoveredTileKey = "";
    this.isDown = true;
    this.hasMovedSignificantly = false;
    this.scrollPosition.x = this.scroll.current.x;
    this.scrollPosition.y = this.scroll.current.y;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    this.startPosition.x = clientX;
    this.startPosition.y = clientY;

    if (this.camera) {
      gsap.to(this.camera.position, {
        z: this.options.baseCameraZ * 1.3,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });
    }
  }

  private onPointerMove(e: MouseEvent | TouchEvent): void {
    if (!this.isDown) {
      this.handleHover(e);
      return;
    }

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    // Check if movement is significant enough to disable click
    const movementDistance = Math.sqrt(
      Math.pow(clientX - this.startPosition.x, 2) + Math.pow(clientY - this.startPosition.y, 2),
    );

    if (movementDistance > this.maxClickMovement) {
      this.hasMovedSignificantly = true;
    }

    const distanceX = (this.startPosition.x - clientX) * this.scroll.scale;
    const distanceY = (this.startPosition.y - clientY) * this.scroll.scale;

    gsap.to(this.scroll.current, {
      x: this.scrollPosition.x - distanceX,
      y: this.scrollPosition.y + distanceY,
      duration: 0.1,
      ease: "power1.out",
      overwrite: true,
      onUpdate: () => this.updatePositions(),
    });

    this.scroll.last.x = this.scroll.current.x;
    this.scroll.last.y = this.scroll.current.y;
  }

  private onPointerUp(): void {
    this.isDown = false;

    if (this.camera) {
      gsap.to(this.camera.position, {
        z: this.options.baseCameraZ,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });
    }

    const vx = this.scrollTracker.get("x");
    const vy = this.scrollTracker.get("y");

    this.animateInertiaScroll(vx, vy);
  }

  private animateInertiaScroll(vx: number | string = "auto", vy: number | string = "auto"): void {
    gsap.to(this.scroll.current, {
      inertia: {
        x: vx,
        y: vy,
        min: 60,
        resistance: 100,
      },
      ease: "power2.out",
      onUpdate: () => this.updatePositions(),
      onComplete: () => {
        this.direction.x = 0;
        this.direction.y = 0;
      },
    });
  }

  private handleHover(e: MouseEvent | TouchEvent): void {
    if (!this.renderer || e.target !== this.renderer.domElement) {
      return;
    }

    const rect = this.renderer.domElement.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera!);

    const interactableMeshes = Array.from(this.foregroundMeshMap.values());
    const intersects = this.raycaster.intersectObjects(interactableMeshes);

    let newHoveredTileKey = "";
    if (intersects.length > 0) {
      const userData = intersects[0].object.userData as TileUserData;
      newHoveredTileKey = userData.tileKey;
    }

    if (newHoveredTileKey !== this.currentHoveredTileKey) {
      if (this.currentHoveredTileKey) {
        const oldMesh = this.backgroundMeshMap.get(this.currentHoveredTileKey);
        if (oldMesh) this.fadeOutBackground(oldMesh);
      }

      this.currentHoveredTileKey = newHoveredTileKey;

      if (this.currentHoveredTileKey) {
        const newMesh = this.backgroundMeshMap.get(this.currentHoveredTileKey);
        if (newMesh) this.fadeInBackground(newMesh);
      }
    }
  }

  private fadeInBackground(mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>): void {
    if (
      mesh.material instanceof THREE.ShaderMaterial &&
      mesh.material.uniforms &&
      mesh.material.uniforms.uOpacity
    ) {
      gsap.to(mesh.material.uniforms.uOpacity, {
        value: this.hoveredBackgroundOpacity,
        duration: this.hoverTransitionDuration,
        ease: this.hoverEase,
        overwrite: true,
      });
    }
  }

  private fadeOutBackground(mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>): void {
    if (
      mesh.material instanceof THREE.ShaderMaterial &&
      mesh.material.uniforms &&
      mesh.material.uniforms.uOpacity
    ) {
      gsap.to(mesh.material.uniforms.uOpacity, {
        value: this.initialBackgroundOpacity,
        duration: this.hoverTransitionDuration,
        ease: this.hoverEase,
        overwrite: true,
      });
    }
  }

  private handleTileClick(e: MouseEvent | TouchEvent): void {
    if (this.isDown || !this.renderer) return;

    if (e.target !== this.renderer.domElement) {
      return;
    }

    // Only dispatch click event if the user hasn't moved significantly
    if (this.hasMovedSignificantly) {
      return;
    }

    const rect = this.renderer.domElement.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera!);
    const interactableMeshes = Array.from(this.foregroundMeshMap.values());
    const intersects = this.raycaster.intersectObjects(interactableMeshes);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      const userData = clickedObject.userData as TileUserData;
      const { groupIndex, tileIndex } = userData;
      alert(`Tile Clicked: Group ${groupIndex}, Tile ${tileIndex}`);

      const customEvent = new CustomEvent("tileClicked", {
        detail: {
          groupIndex,
          tileIndex,
          cardData: this.cardData[this.getCardTextureIndex(groupIndex, tileIndex)],
        },
      });
      this.container.dispatchEvent(customEvent);
    }
  }

  private async generateTexturesForCardData(data: CardData[]): Promise<void> {
    if (data.length === 0) {
      this.cardTextures = [];
      return;
    }

    const texturePromises = data.map(async (card): Promise<CardTexturePair> => {
      const foreground = await generateForegroundTexture(card);
      const background = await generateBackgroundTexture(card);
      return { foreground, background };
    });

    this.cardTextures = await Promise.all(texturePromises);
  }

  private addEventListeners(): void {
    this.container.addEventListener("mousedown", this.onPointerDown);
    this.container.addEventListener("mousemove", this.onPointerMove);
    this.container.addEventListener("mouseup", this.onPointerUp);
    this.container.addEventListener("touchstart", this.onPointerDown, { passive: false });
    this.container.addEventListener("touchmove", this.onPointerMove, { passive: false });
    this.container.addEventListener("touchend", this.onPointerUp, { passive: true });
    this.container.addEventListener("click", this.handleTileClick);

    window.addEventListener("resize", this.onWindowResize);
  }

  private onWindowResize(): void {
    const newWidth = this.container.clientWidth;
    const newHeight = this.container.clientHeight;

    if (this.camera) {
      this.camera.aspect = newWidth / newHeight;
      this.camera.updateProjectionMatrix();
    }
    if (this.renderer) {
      this.renderer.setSize(newWidth, newHeight);
    }
    if (this.composer) {
      this.composer.setSize(newWidth, newHeight);
      // Also trigger update on our custom shader material if it exists
      if (this.customPostProcessMaterial) {
        this.customPostProcessMaterial.updateUniforms();
      }
    }
  }

  private render(): void {
    this.animationFrameId = requestAnimationFrame(this.render);
    if (this.options.enablePostProcessing && this.composer) {
      this.composer.render();
    } else if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  /**
   * Completely disposes of the infinite grid and cleans up all resources
   *
   * This method performs thorough cleanup to prevent memory leaks:
   * - Cancels the animation frame loop
   * - Removes all event listeners
   * - Disposes all Three.js geometries, materials, and textures
   * - Clears all data structures and maps
   * - Removes the canvas from the DOM
   *
   * Call this method when the grid is no longer needed, such as when
   * navigating away from the page or unmounting the component.
   *
   * @example
   * ```typescript
   * // In a Vue component's onBeforeUnmount or React's useEffect cleanup
   * onBeforeUnmount(() => {
   *   if (gridInstance) {
   *     gridInstance.dispose();
   *     gridInstance = null;
   *   }
   * });
   * ```
   */
  public dispose(): void {
    // Cancel the render loop to prevent further frame requests
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    // Remove all event listeners to prevent memory leaks
    this.container.removeEventListener("mousedown", this.onPointerDown);
    this.container.removeEventListener("mousemove", this.onPointerMove);
    this.container.removeEventListener("mouseup", this.onPointerUp);
    this.container.removeEventListener("touchstart", this.onPointerDown);
    this.container.removeEventListener("touchmove", this.onPointerMove);
    this.container.removeEventListener("touchend", this.onPointerUp);
    this.container.removeEventListener("click", this.handleTileClick);

    window.removeEventListener("resize", this.onWindowResize);

    // Dispose all Three.js objects to free GPU memory
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      }
    });

    // Dispose composer and passes
    if (this.composer) {
      this.composer.passes.forEach((pass) => {
        if (typeof pass.dispose === "function") {
          pass.dispose();
        }
      });
      this.composer = null;
    }

    // Dispose custom post-process material
    if (this.customPostProcessMaterial) {
      this.customPostProcessMaterial.dispose();
      this.customPostProcessMaterial = null;
    }

    // Dispose renderer
    if (this.renderer) {
      this.renderer.dispose();
      if (this.renderer.domElement.parentNode === this.container) {
        this.container.removeChild(this.renderer.domElement);
      }
    }

    // Dispose textures
    this.cardTextures.forEach((set) => {
      set.foreground?.dispose();
      set.background?.dispose();
    });

    // Clear arrays and maps
    this.groupObjects = [];
    this.foregroundMeshMap.clear();
    this.backgroundMeshMap.clear();
    this.staticUniforms.clear();
  }
}
