/**
 * Type definitions for the Infinite Grid system
 */

import type { Texture, Vec3 } from "ogl";

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
export interface Position2D {
  /** X coordinate */
  x: number;
  /** Y coordinate */
  y: number;
}

/**
 * Tracks the current scroll state and behavior
 */
export interface ScrollState {
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
export interface TileGroupData {
  /** Base 3D position of the group in world space */
  basePos: Vec3;
  /** Additional offset for infinite scrolling wrapping */
  offset: Position2D;
}

/**
 * User data attached to each tile mesh for identification
 */
export interface TileUserData {
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
export interface TileClickEventDetail {
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
export interface CardTexturePair {
  /** Canvas texture containing the card's main content */
  foreground: Texture | null;
  /** Canvas texture containing the blurred background image */
  background: Texture | null;
}

/**
 * Camera viewport dimensions in world space
 */
export interface Viewport {
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
