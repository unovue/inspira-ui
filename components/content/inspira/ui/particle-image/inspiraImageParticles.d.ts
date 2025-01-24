/**
 * Type definitions for inspiraImageParticles
 */

/**
 * Options for initializing the InspiraImageParticle class.
 */
interface InspiraImageParticleOptions {
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  gravity?: number;
  particleGap?: number;
  particleSize?: number;
  layerCount?: number;
  depth?: number;
  rotationDuration?: number;
  growDuration?: number;
  waitDuration?: number;
  shrinkDuration?: number;
  shrinkDistance?: number;
  threeDimensional?: boolean | string;
  lifeCycle?: boolean | string;
  layerDistance?: number;
  initPosition?: "random" | "top" | "left" | "bottom" | "right" | "misplaced" | "none";
  initDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
  fadePosition?: "explode" | "top" | "left" | "bottom" | "right" | "random" | "none";
  fadeDirection?: "random" | "top" | "left" | "bottom" | "right" | "none";
  noise?: number;
  disableInteraction?: boolean;
  mouseForce?: number;
  clickStrength?: number;
  color?: string;
  colorArr?: number[];
  image?: HTMLImageElement;
  imageId?: string;
  imageUrl?: string;
  wrapperElement?: HTMLElement;
  canvas?: HTMLCanvasElement;
  context?: CanvasRenderingContext2D | WebGL2RenderingContext | WebGLRenderingContext;
  renderer?: "default" | "webgl";
  addTimestamp?: boolean;
  responsiveWidth?: boolean;
}

/**
 * Interface for event handling methods.
 */
export interface EventHandlers {
  on(event: string, callback: (params?: unknow) => void): void;
  emit(event: string, params?: unknow): void;
}

/**
 * Interface containing all public property definitions for InspiraImageParticle.
 */
export interface InspiraImageParticleProps {
  // Public Properties
  state: string;
  touches: Array<{ x: number; y: number; z: number; force: number }>;
  colorArr: number[];
  vertices: Float32Array | false;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  events: { [key: string]: Function[] };
  canvas?: HTMLCanvasElement;
  context?: CanvasRenderingContext2D | WebGLRenderingContext;
  particles: unknow[];
  origins: unknow[];
  width: number;
  height: number;
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  alphaFade: number;
  gravity: number;
  particleGap: number;
  particleSize: number;
  layerCount: number;
  depth: number;
  rotationDuration: number;
  growDuration: number;
  waitDuration: number;
  shrinkDuration: number;
  shrinkDistance: number;
  threeDimensional: boolean;
  lifeCycle: boolean;
  layerDistance: number;
  initPosition: string;
  initDirection: string;
  fadePosition: string;
  fadeDirection: string;
  noise: number;
  disableInteraction: boolean;
  mouseForce: number;
  clickStrength: number;
  imageWidth: number;
  imageHeight: number;
  imageRatio: number;
  srcImage?: HTMLImageElement;
  image?: HTMLImageElement;
  imageUrl: string;
  wrapperElement?: HTMLElement;
  responsiveWidth: boolean;
  renderWidth: number;
  renderHeight: number;
  offsetX: number;
  offsetY: number;
  speed: number;
  gravityFactor: number;
  renderer: "default" | "webgl";
  color: string;
}

/**
 * InspiraImageParticle class for creating particle animations from images.
 */
export declare class InspiraImageParticle implements InspiraImageParticleProps, EventHandlers {
  constructor(options?: InspiraImageParticleOptions);

  // Public Methods
  on(event: string, fn: (params?: unknow) => void): void;
  emit(event: string, params?: unknow): void;

  start(options?: Partial<InspiraImageParticleOptions>): void;
  stop(options?: Partial<InspiraImageParticleOptions>): void;

  // Private Methods
  private _animate(): void;
  private _onImageLoaded(options: InspiraImageParticleOptions): void;
  private _initImage(options: InspiraImageParticleOptions): void;
  private _initContext(options: InspiraImageParticleOptions): void;
  private _defaultInitContext(options: InspiraImageParticleOptions): void;
  private _webglInitContext(): void;
  private _webglSetAttributes(): void;
  private _updateRotation(): void;
  private _defaultRenderer(): void;
  private _webglRenderer(): void;
  private _calculate(): void;
  private _fade(): void;
  private _initParticles(): void;
  private _initOrigins(): void;
  private _initParticlePosition(origin: unknow, particle: unknow): void;
  private _initParticleDirection(particle: unknow): void;
  private _fadeOriginPosition(origin: unknow): void;
  private _fadeOriginDirection(particle: unknow): void;
  private _parseColor(str: string): number[] | undefined;

  // Private Getters
  private get _mouseHandler(): (e: MouseEvent) => void;
  private get _clickHandler(): (e: MouseEvent) => void;
  private get _touchHandler(): (e: TouchEvent) => void;
  private get _clearTouches(): (e: Event) => void;
}

/**
 * Initializes the InspiraImageParticle module and returns the class.
 */
export declare const inspiraImageParticles: () => {
  InspiraImageParticle: typeof InspiraImageParticle;
};
