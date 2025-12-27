/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @fileoverview InfiniteGridClass - OGL Infinite Scrolling Grid System
 *
 * A comprehensive OGL-based infinite grid system that creates a seamless,
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

import type { Mesh } from "ogl";
import type { DisposableHost } from "./DisposalManager";
import type { EventHandlerHost } from "./EventHandler";
import type { GridManagerHost } from "./GridManager";
import type {
  CardData,
  CardTexturePair,
  InfiniteGridOptions,
  Position2D,
  ScrollState,
  TileGroupData,
  Viewport,
} from "./types.ts";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Camera, Raycast, Renderer, RenderTarget, Transform, Vec2 } from "ogl";
import { DisposalManager } from "./DisposalManager";
import { EventHandler } from "./EventHandler";
import { GridManager } from "./GridManager";

import { CustomPostProcessShader } from "./PostProcessShader";

gsap.registerPlugin(InertiaPlugin);

/**
 * InfiniteGridClass - An OGL-based infinite scrolling grid system
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
export class InfiniteGridClass implements EventHandlerHost, DisposableHost, GridManagerHost {
  /**
   * Core Container and Data Properties
   */

  /** The HTML element that contains the OGL canvas */
  public container: HTMLElement;
  /** Array of card data to be displayed in the grid */
  public cardData: CardData[];
  /** Merged configuration options with defaults applied */
  public options: Required<InfiniteGridOptions>;

  /**
   * Grid Layout Properties (calculated once, read-only)
   */

  /** Gap between tiles in OGL world units */
  public readonly GRID_GAP: number;
  /** Size of each individual tile in OGL world units */
  public readonly TILE_SIZE: number;
  /** Total space occupied by one tile including gap */
  public readonly TILE_SPACE: number;
  /** Number of columns in each grid section */
  public readonly GRID_COLS: number;
  /** Number of rows in each grid section */
  public readonly GRID_ROWS: number;
  /** Total width of one grid section */
  public readonly GRID_WIDTH: number;
  /** Total height of one grid section */
  public readonly GRID_HEIGHT: number;
  /** Total width of all 3 grid sections (for infinite wrapping) */
  private readonly TOTAL_GRID_WIDTH: number;
  /** Total height of all 3 grid sections (for infinite wrapping) */
  private readonly TOTAL_GRID_HEIGHT: number;

  /**
   * OGL Core Rendering Objects
   */

  /** Main OGL scene containing all 3D objects */
  public scene: Transform;
  /** Perspective camera for viewing the scene */
  public camera: Camera | null;
  /** WebGL renderer for drawing to the canvas */
  public renderer: Renderer | null;
  /** 2D pointer coordinates for interaction */
  public pointer: Vec2;
  /** Raycast utility for mouse/touch interaction */
  public raycast: Raycast;

  /**
   * Post-Processing Objects
   */

  /** Post-processing shader for visual effects (distortion, vignette) */
  public postProcessShader: CustomPostProcessShader | null;
  /** Render target for capturing the scene before post-processing */
  public sceneRenderTarget: RenderTarget | null;

  /**
   * Scene Objects and Data Structures
   */

  /** Array of OGL transforms, each containing one 3x3 section of tiles */
  public groupObjects: Transform[];
  /** Map of tile keys to foreground mesh objects (clickable content) */
  public foregroundMeshMap: Map<string, Mesh>;
  /** Map of tile keys to background mesh objects (blur effect on hover) */
  public backgroundMeshMap: Map<string, Mesh>;
  /** Generated textures for all cards (foreground + background pairs) */
  public cardTextures: CardTexturePair[];
  /** Static shader uniforms for background materials */
  public staticUniforms: Map<string, any>;

  /**
   * User Interaction State
   */

  /** Key of the currently hovered tile (empty string if none) */
  public currentHoveredTileKey: string;
  /** Whether the user is currently dragging/scrolling */
  public isDown: boolean;
  public isHoveringCanvas: boolean;
  /** Whether the scene has moved significantly during this interaction */
  public hasMovedSignificantly: boolean;
  /** Position where the current drag started */
  public startPosition: Position2D;
  /** Scroll position when the current drag started */
  public scrollPosition: Position2D;
  /** Current scroll state and behavior settings */
  public scroll: ScrollState;
  /** Direction of scroll movement for infinite wrapping logic */
  private direction: Position2D;
  /** GSAP InertiaPlugin tracker for smooth scroll transitions */
  public scrollTracker: any;

  /**
   * Animation Configuration Constants
   */

  /** Duration of hover transition animations in seconds */
  public readonly hoverTransitionDuration: number;
  /** GSAP easing function for hover animations */
  public readonly hoverEase: string;
  /** Initial opacity of background blur effect (0 = transparent) */
  public readonly initialBackgroundOpacity: number;
  /** Target opacity when background is hovered (1 = fully visible) */
  public readonly hoveredBackgroundOpacity: number;
  /** Maximum movement distance in pixels before click is disabled */
  public readonly maxClickMovement: number;

  /**
   * Animation Frame Management
   */

  /** RequestAnimationFrame ID for the main render loop */
  public animationFrameId: number | null;

  /**
   * Tile Group Data Structure
   */

  /** Array containing position data for all 9 tile groups (3x3 infinite grid) */
  public tileGroupsData: TileGroupData[];

  /**
   * Modular System Components
   */

  /** Event handler for managing user interactions */
  public eventHandler?: EventHandler;
  /** Grid manager for handling grid creation and management */
  public gridManager: GridManager;
  /** Disposal manager for resource cleanup */
  private disposalManager: DisposalManager;

  /**
   * Creates a new InfiniteGridClass instance
   *
   * @param containerElement - HTML element that will contain the OGL canvas
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
        vignetteOffset: 1.2, // Set outside screen bounds to disable vignette initially
        vignetteDarkness: 1.5,
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

    // Initialize OGL objects
    this.scene = new Transform();
    this.camera = null;
    this.renderer = null;
    this.pointer = new Vec2();
    this.raycast = new Raycast();

    // Initialize post-processing
    this.postProcessShader = null;
    this.sceneRenderTarget = null;

    // Initialize maps and arrays
    this.groupObjects = [];
    this.foregroundMeshMap = new Map();
    this.backgroundMeshMap = new Map();
    this.cardTextures = [];
    this.staticUniforms = new Map();

    // Initialize interaction state
    this.currentHoveredTileKey = "";
    this.isDown = false;
    this.isHoveringCanvas = false;
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

    // Initialize modular components
    this.eventHandler = new EventHandler(this);
    this.gridManager = new GridManager(this);
    this.disposalManager = new DisposalManager(this);

    // Bind remaining methods to maintain proper 'this' context
    this.render = this.render.bind(this);
  }

  /**
   * Initializes the infinite grid system asynchronously
   *
   * This method sets up all necessary components in the correct order:
   * 1. WebGL renderer and camera
   * 2. Tile group positioning structure
   * 3. Texture generation for all card data
   * 4. 3D mesh creation and scene setup
   * 5. Event listeners for interaction
   * 6. Animation systems and render loop
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
    this.setupPostProcessing();

    // Initialize grid using the modular system
    await this.gridManager.initialize();

    // Initialize event handling using the modular system
    if (this.eventHandler) {
      this.eventHandler.initialize();
    }

    this.animateInertiaScroll();
    this.animatePostProcessing(
      -0.1, // Target distortionIntensity
      0.3, // Target vignetteOffset (where vignette starts - should be < 1.0)
      1.25, // Target vignetteDarkness (where vignette reaches max - should be > vignetteOffset)
      1.5, // Duration
      1.5, // Delay
      "power3.out", // Ease
    );

    this.updatePositions();
    this.render();
  }

  /**
   * Sets up the WebGL renderer with optimal settings
   *
   * Creates an OGL renderer with antialiasing and transparency,
   * configures it for the container size, and appends the canvas
   * to the DOM.
   */
  private setupRenderer(): void {
    const gl =
      this.container.ownerDocument.createElement("canvas").getContext("webgl2") ||
      this.container.ownerDocument.createElement("canvas").getContext("webgl");
    if (!gl) {
      throw new Error("WebGL not supported");
    }

    this.renderer = new Renderer({
      canvas: gl.canvas as HTMLCanvasElement,
      width: this.container.clientWidth,
      height: this.container.clientHeight,
      dpr: window.devicePixelRatio,
      alpha: true,
      antialias: true,
    });

    // Set canvas styles
    this.renderer.gl.canvas.style.width = "100%";
    this.renderer.gl.canvas.style.height = "100%";

    this.container.appendChild(this.renderer.gl.canvas);
  }

  /**
   * Sets up the perspective camera with proper positioning
   *
   * Creates a perspective camera with a 45-degree field of view,
   * positions it at the configured Z distance.
   */
  private setupCamera(): void {
    const aspectRatio = this.container.clientWidth / this.container.clientHeight;
    this.camera = new Camera(this.renderer!.gl, {
      fov: 45,
      aspect: aspectRatio,
      near: 1,
      far: 1000,
    });
    this.camera.position.set(0, 0, this.options.baseCameraZ);
  }

  /**
   * Sets up post-processing effects if enabled
   *
   * Creates a render target for capturing the scene before post-processing
   * and initializes the post-processing shader with configured parameters.
   */
  private setupPostProcessing(): void {
    if (!this.options.enablePostProcessing || !this.renderer) {
      return;
    }

    // Create render target for capturing the scene
    this.sceneRenderTarget = new RenderTarget(this.renderer.gl, {
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    });

    // Create post-processing shader
    this.postProcessShader = new CustomPostProcessShader(
      this.renderer.gl as any, // Type assertion needed for OGL context
      this.options.postProcessParams,
    );
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

  public updatePositions(): void {
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

  public animateInertiaScroll(vx: number | string = "auto", vy: number | string = "auto"): void {
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

  /**
   * Gets all interactive meshes for raycasting
   * @returns Array of foreground meshes that can be interacted with
   */
  public getInteractiveMeshes(): Mesh[] {
    return this.gridManager.getInteractiveMeshes();
  }

  /**
   * Updates mouse/touch coordinates for raycasting
   * @param clientX - X coordinate in client space
   * @param clientY - Y coordinate in client space
   */
  public updatePointerCoordinates(clientX: number, clientY: number): void {
    if (!this.renderer) return;

    // Convert to normalized device coordinates (-1 to 1)
    const rect = this.renderer.gl.canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((clientY - rect.top) / rect.height) * 2 - 1); // Flip Y coordinate

    this.pointer.set(x, y);
  }

  /**
   * Performs raycasting and returns hit results
   * @returns Array of hit meshes ordered by distance
   */
  public performRaycast(): Mesh[] {
    if (!this.camera || !this.renderer) return [];

    // Update raycast with current camera and mouse position
    this.raycast.castMouse(this.camera, this.pointer);

    // Get all interactive meshes
    const meshes = this.getInteractiveMeshes();

    // Perform intersection test
    const hits = this.raycast.intersectBounds(meshes);

    return hits;
  }

  /**
   * Extracts tile key from a mesh using its userData
   * @param mesh - The mesh to get the tile key from
   * @returns The tile key or empty string if not found
   */
  public getTileKeyFromMesh(mesh: Mesh): string {
    return this.gridManager.getTileKeyFromMesh(mesh);
  }

  public fadeInBackground(mesh: Mesh): void {
    if (mesh.program && mesh.program.uniforms.uOpacity) {
      gsap.to(mesh.program.uniforms.uOpacity, {
        value: this.hoveredBackgroundOpacity,
        duration: this.hoverTransitionDuration,
        ease: this.hoverEase,
        overwrite: true,
      });
    }
  }

  public fadeOutBackground(mesh: Mesh): void {
    if (mesh.program && mesh.program.uniforms.uOpacity) {
      gsap.to(mesh.program.uniforms.uOpacity, {
        value: this.initialBackgroundOpacity,
        duration: this.hoverTransitionDuration,
        ease: this.hoverEase,
        overwrite: true,
      });
    }
  }

  /**
   * Gets the card data for a specific tile
   * @param groupIndex - The group index of the tile
   * @param tileIndex - The tile index within the group
   * @returns The card data for the tile
   */
  public getCardDataForTile(groupIndex: number, tileIndex: number): CardData {
    return this.gridManager.getCardDataForTile(groupIndex, tileIndex);
  }

  private render(): void {
    this.scroll.last.x = this.scroll.current.x;
    this.scroll.last.y = this.scroll.current.y;
    this.updatePositions();

    if (this.renderer && this.camera) {
      if (this.options.enablePostProcessing && this.postProcessShader && this.sceneRenderTarget) {
        // Render scene to render target first
        this.renderer.render({
          scene: this.scene,
          camera: this.camera,
          target: this.sceneRenderTarget,
        });

        // Debug: Check if render target has a texture
        if (!this.sceneRenderTarget.texture) {
          console.error("PostProcessing: Render target has no texture");
        }

        // Set the rendered scene as input to post-processing shader
        this.postProcessShader.setInputTexture(this.sceneRenderTarget.texture);

        // Render post-processing effect to screen
        this.postProcessShader.render(null); // null = render to screen
      } else {
        // Direct render without post-processing
        this.renderer.render({ scene: this.scene, camera: this.camera });
      }
    }

    this.animationFrameId = requestAnimationFrame(this.render);
  }

  /**
   * Animates the post-processing effects
   *
   * @param targetDistortion - Target distortion intensity (0 = no distortion)
   * @param targetVignetteOffset - Target vignette offset (0.0-1.0)
   * @param targetVignetteDarkness - Target vignette darkness (should be > offset)
   * @param duration - Animation duration in seconds
   * @param delay - Animation delay in seconds
   * @param ease - GSAP ease function
   *
   * @example
   * ```typescript
   * // Animate to strong distortion and vignette
   * grid.animatePostProcessing(0.5, 0.6, 0.9, 2.0);
   *
   * // Reset to no effects
   * grid.animatePostProcessing(0, 0.8, 1.0, 1.0);
   * ```
   */
  public animatePostProcessing(
    targetDistortion: number,
    targetVignetteOffset: number,
    targetVignetteDarkness: number,
    duration: number = 1,
    delay: number = 0,
    ease: string = "power2.out",
  ): void {
    if (this.postProcessShader) {
      this.postProcessShader.animate(
        targetDistortion,
        targetVignetteOffset,
        targetVignetteDarkness,
        duration,
        delay,
        ease,
      );
    }
  }

  /**
   * Toggles post-processing on/off for debugging
   * @param enabled - Whether to enable post-processing
   */
  public setPostProcessingEnabled(enabled: boolean): void {
    this.options.enablePostProcessing = enabled;
  }

  /**
   * Gets the current distortion intensity
   */
  public get distortionIntensity(): number {
    return this.postProcessShader?.distortionIntensity ?? 0;
  }

  /**
   * Sets the distortion intensity (0 = no distortion)
   */
  public set distortionIntensity(value: number) {
    if (this.postProcessShader) {
      this.postProcessShader.distortionIntensity = value;
    }
  }

  /**
   * Gets the current vignette offset
   */
  public get vignetteOffset(): number {
    return this.postProcessShader?.vignetteOffset ?? 0.8;
  }

  /**
   * Sets the vignette offset (0.0 = center, 1.0 = edges)
   */
  public set vignetteOffset(value: number) {
    if (this.postProcessShader) {
      this.postProcessShader.vignetteOffset = value;
    }
  }

  /**
   * Gets the current vignette darkness
   */
  public get vignetteDarkness(): number {
    return this.postProcessShader?.vignetteDarkness ?? 1.0;
  }

  /**
   * Sets the vignette darkness (should be > vignetteOffset)
   */
  public set vignetteDarkness(value: number) {
    if (this.postProcessShader) {
      this.postProcessShader.vignetteDarkness = value;
    }
  }

  /**
   * Completely disposes of the infinite grid and cleans up all resources
   *
   * This method now uses the DisposalManager for systematic cleanup to prevent memory leaks.
   * The disposal manager handles:
   * - Cancels the animation frame loop
   * - Removes all event listeners
   * - Disposes all OGL geometries, materials, and textures
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
    this.disposalManager.dispose();
  }

  /**
   * Gets the event handler instance for advanced event management
   * @returns The EventHandler instance or undefined if not initialized
   */
  public getEventHandler(): EventHandler | undefined {
    return this.eventHandler;
  }

  /**
   * Gets the grid manager instance for advanced grid management
   * @returns The GridManager instance
   */
  public getGridManager(): GridManager {
    return this.gridManager;
  }

  /**
   * Gets the disposal manager instance for advanced cleanup control
   * @returns The DisposalManager instance
   */
  public getDisposalManager(): DisposalManager {
    return this.disposalManager;
  }

  /**
   * Updates card data and regenerates the grid
   * @param newCardData - The new card data to display
   * @returns Promise that resolves when update is complete
   */
  public async updateCardData(newCardData: CardData[]): Promise<void> {
    this.cardData = newCardData;
    await this.gridManager.updateCardData(newCardData);
  }

  /**
   * Gets statistics about the current grid
   * @returns Object containing grid statistics
   */
  public getGridStats() {
    return this.gridManager.getGridStats();
  }

  /**
   * Validates that all resources have been properly disposed
   * Useful for debugging memory leaks
   * @returns True if disposal was successful, false if issues were found
   */
  public validateDisposal(): boolean {
    return this.disposalManager.validateDisposal();
  }

  /**
   * Performs a partial cleanup that preserves the core structure
   * but clears dynamic content. Useful for reinitialization scenarios.
   */
  public partialCleanup(): void {
    this.disposalManager.partialCleanup();
  }
}
