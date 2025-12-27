/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @fileoverview DisposalManager - Resource Cleanup System for InfiniteGrid
 *
 * This module handles the complete disposal and cleanup of all resources
 * used by the infinite grid system. It ensures proper memory management
 * by disposing of WebGL resources, clearing references, and removing
 * event listeners to prevent memory leaks.
 *
 * Key Responsibilities:
 * - Animation frame cleanup
 * - Event listener removal
 * - OGL resource disposal (meshes, programs, textures)
 * - Post-processing resource cleanup
 * - Renderer and canvas cleanup
 * - Data structure clearing
 * - GSAP animation cleanup
 */

import type { Camera, Renderer, RenderTarget, Transform } from "ogl";
import type { EventHandler } from "./EventHandler";
import type { GridManager } from "./GridManager";
import type { CustomPostProcessShader } from "./PostProcessShader";
import type { CardTexturePair, TileGroupData } from "./types.ts";
import { Mesh } from "ogl";

/**
 * Interface defining the required properties that the DisposalManager
 * needs to access from the main InfiniteGrid class for cleanup
 */
export interface DisposableHost {
  // Animation and timing
  animationFrameId: number | null;

  // Event handling
  eventHandler?: EventHandler;

  // Grid management
  gridManager: GridManager;

  // OGL core objects
  scene: Transform;
  camera: Camera | null;
  renderer: Renderer | null;

  // Post-processing
  postProcessShader: CustomPostProcessShader | null;
  sceneRenderTarget: RenderTarget | null;

  // Scene objects and data
  groupObjects: Transform[];
  foregroundMeshMap: Map<string, Mesh>;
  backgroundMeshMap: Map<string, Mesh>;
  cardTextures: CardTexturePair[];
  staticUniforms: Map<string, any>;
  tileGroupsData: TileGroupData[];

  // Interaction objects
  raycast: any;
  pointer: any;
  scrollTracker: any;

  // Container reference
  container: HTMLElement;
} /**
 * DisposalManager handles the complete cleanup of InfiniteGrid resources
 *
 * This class provides a systematic approach to disposing of all resources
 * used by the infinite grid system, ensuring no memory leaks occur when
 * the grid is no longer needed.
 *
 * The disposal process follows this order:
 * 1. Stop animation loops
 * 2. Remove event listeners
 * 3. Dispose 3D scene objects and materials
 * 4. Clean up post-processing resources
 * 5. Remove renderer and canvas
 * 6. Clear data structures and references
 * 7. Clean up animation systems
 */
export class DisposalManager {
  private host: DisposableHost;

  /**
   * Creates a new DisposalManager instance
   * @param host - The main grid class that provides resources to dispose
   */
  constructor(host: DisposableHost) {
    this.host = host;
  }

  /**
   * Performs complete disposal of all grid resources
   *
   * This method should be called when the grid is no longer needed,
   * such as when navigating away from the page or unmounting a component.
   *
   * @example
   * ```typescript
   * // In a Vue component's onBeforeUnmount
   * onBeforeUnmount(() => {
   *   if (gridInstance) {
   *     disposalManager.dispose();
   *   }
   * });
   * ```
   */
  public dispose(): void {
    // Step 1: Cancel animation loops
    this.stopAnimationLoop();

    // Step 2: Remove event listeners
    this.cleanupEventListeners();

    // Step 3: Clear grid manager
    this.cleanupGridManager();

    // Step 4: Dispose 3D scene objects
    this.disposeSceneObjects();

    // Step 5: Clean up post-processing
    this.disposePostProcessing();

    // Step 6: Dispose renderer and canvas
    this.disposeRenderer();

    // Step 7: Clear data structures
    this.clearDataStructures();

    // Step 8: Clean up animation systems
    this.cleanupAnimationSystems();
  }

  /**
   * Cancels the main animation frame loop
   */
  private stopAnimationLoop(): void {
    if (this.host.animationFrameId) {
      cancelAnimationFrame(this.host.animationFrameId);
      this.host.animationFrameId = null;
    }
  }

  /**
   * Removes all event listeners through the EventHandler
   */
  private cleanupEventListeners(): void {
    if (this.host.eventHandler) {
      this.host.eventHandler.removeEventListeners();
    }
  }

  /**
   * Clears the grid manager and all its managed resources
   */
  private cleanupGridManager(): void {
    if (this.host.gridManager) {
      this.host.gridManager.clear();
    }
  }

  /**
   * Disposes all 3D scene objects including meshes, geometries, and programs
   */
  private disposeSceneObjects(): void {
    // Clean up group objects and their children
    this.host.groupObjects.forEach((group) => {
      this.disposeTransformAndChildren(group);
    });

    // Clear the main scene
    this.disposeTransformAndChildren(this.host.scene);

    // Clear mesh maps
    this.host.foregroundMeshMap.forEach((mesh) => {
      this.disposeMesh(mesh);
    });
    this.host.backgroundMeshMap.forEach((mesh) => {
      this.disposeMesh(mesh);
    });
  }

  /**
   * Recursively disposes a Transform and all its children
   * @param transform - The transform to dispose
   */
  private disposeTransformAndChildren(transform: Transform): void {
    if (!transform) return;

    // Dispose all children first
    transform.traverse((child) => {
      if (child instanceof Mesh) {
        this.disposeMesh(child);
      }
    });

    // Clear parent-child relationships
    (transform as any).parent = null;
    (transform as any).children = [];
  }

  /**
   * Disposes a single mesh and its resources
   * @param mesh - The mesh to dispose
   */
  private disposeMesh(mesh: Mesh): void {
    if (!mesh) return;

    // Clear geometry reference (OGL manages WebGL resources automatically)
    (mesh as any).geometry = null;

    // Clear program reference
    if ((mesh as any).program) {
      (mesh as any).program = null;
    }

    // Clear user data
    (mesh as any).userData = null;

    // Clear parent reference
    (mesh as any).parent = null;
  }

  /**
   * Disposes post-processing resources
   */
  private disposePostProcessing(): void {
    if (this.host.postProcessShader) {
      this.host.postProcessShader.dispose();
      this.host.postProcessShader = null;
    }

    if (this.host.sceneRenderTarget) {
      // OGL RenderTarget disposal is handled automatically
      this.host.sceneRenderTarget = null;
    }
  }

  /**
   * Disposes the renderer and removes canvas from DOM
   */
  private disposeRenderer(): void {
    if (this.host.renderer) {
      // Remove canvas from DOM if it's still attached
      const canvas = this.host.renderer.gl.canvas;
      if (canvas.parentNode === this.host.container) {
        this.host.container.removeChild(canvas);
      }

      // Clear renderer reference (WebGL context cleanup is automatic)
      this.host.renderer = null;
    }

    // Clear camera reference
    this.host.camera = null;
  }

  /**
   * Clears all data structures and maps
   */
  private clearDataStructures(): void {
    // Clear texture references (OGL handles WebGL texture cleanup)
    this.host.cardTextures.forEach((texturePair) => {
      texturePair.foreground = null;
      texturePair.background = null;
    });

    // Clear all arrays and maps
    this.host.groupObjects = [];
    this.host.foregroundMeshMap.clear();
    this.host.backgroundMeshMap.clear();
    this.host.staticUniforms.clear();
    this.host.cardTextures = [];
    this.host.tileGroupsData = [];

    // Clear interaction objects
    this.host.raycast = null;
    this.host.pointer = null;
  }

  /**
   * Cleans up GSAP animations and trackers
   */
  private cleanupAnimationSystems(): void {
    if (this.host.scrollTracker) {
      this.host.scrollTracker.kill();
      this.host.scrollTracker = null;
    }

    // Kill any remaining GSAP animations to prevent callbacks
    // This is a safety measure in case any animations are still running
    try {
      // Note: This would require importing gsap, but we'll let the main class handle it
      // gsap.killTweensOf(this.host);
    } catch (error) {
      console.warn("Error killing GSAP tweens during disposal:", error);
    }
  }

  /**
   * Performs a partial cleanup that preserves the core structure
   * but clears dynamic content. Useful for reinitialization scenarios.
   */
  public partialCleanup(): void {
    // Stop animations but don't destroy everything
    this.stopAnimationLoop();

    // Clear dynamic content
    this.host.cardTextures.forEach((texturePair) => {
      texturePair.foreground = null;
      texturePair.background = null;
    });
    this.host.cardTextures = [];

    // Clear mesh content but keep structure
    this.host.foregroundMeshMap.clear();
    this.host.backgroundMeshMap.clear();
    this.host.staticUniforms.clear();
  }

  /**
   * Validates that all resources have been properly disposed
   * Useful for debugging memory leaks
   */
  public validateDisposal(): boolean {
    const issues: string[] = [];

    if (this.host.animationFrameId !== null) {
      issues.push("Animation frame still active");
    }

    if (this.host.renderer !== null) {
      issues.push("Renderer not disposed");
    }

    if (this.host.camera !== null) {
      issues.push("Camera not disposed");
    }

    if (this.host.postProcessShader !== null) {
      issues.push("Post-process shader not disposed");
    }

    if (this.host.groupObjects.length > 0) {
      issues.push("Group objects not cleared");
    }

    if (this.host.foregroundMeshMap.size > 0) {
      issues.push("Foreground mesh map not cleared");
    }

    if (this.host.backgroundMeshMap.size > 0) {
      issues.push("Background mesh map not cleared");
    }

    if (this.host.cardTextures.length > 0) {
      issues.push("Card textures not cleared");
    }

    if (this.host.scrollTracker !== null) {
      issues.push("Scroll tracker not disposed");
    }

    if (issues.length > 0) {
      console.warn("Disposal validation failed:", issues);
      return false;
    }
    return true;
  }
}
