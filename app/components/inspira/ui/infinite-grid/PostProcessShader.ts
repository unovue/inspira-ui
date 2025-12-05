import type { Renderer, Texture } from "ogl";
import { gsap } from "gsap";
import { Camera, Mesh, Plane, Program, RenderTarget, Transform, Vec2 } from "ogl";

// Import shaders as raw strings
import { postProcessFragmentShader, postProcessVertexShader } from "./shaders";

// OGL context type
type OGLContext = WebGL2RenderingContext & { renderer: Renderer; canvas: HTMLCanvasElement };

/**
 * @interface CustomPostProcessShaderParameters
 * @description Defines the initial parameters for the CustomPostProcessShader.
 * @property {number} [distortionIntensity] - Initial intensity of the distortion effect. Defaults to 0.
 * @property {number} [vignetteOffset] - Initial offset for the vignette effect (0.0 = center, 1.0 = edges). Defaults to 0.8.
 * @property {number} [vignetteDarkness] - Controls vignette transition smoothness (should be > vignetteOffset). Defaults to 1.0.
 */
interface CustomPostProcessShaderParameters {
  distortionIntensity?: number;
  vignetteOffset?: number;
  vignetteDarkness?: number;
}

/**
 * @class CustomPostProcessShader
 * @description A custom OGL-based post-processing shader for distortion and vignette effects.
 * It provides animatable properties for these effects via GSAP.
 */
export class CustomPostProcessShader {
  private gl: OGLContext;
  private program: Program | null;
  private renderTarget: RenderTarget | null;
  private mesh: Mesh | null;
  private geometry: Plane | null;
  private scene: Transform | null;
  private camera: Camera | null;

  /**
   * @private
   * @property {number} _distortionIntensity - Internal property for distortion intensity, animated by GSAP.
   */
  private _distortionIntensity: number = 0;

  /**
   * @private
   * @property {number} _vignetteOffset - Internal property for vignette offset (0.0-1.0 range), animated by GSAP.
   */
  private _vignetteOffset: number = 0.8;

  /**
   * @private
   * @property {number} _vignetteDarkness - Internal property for vignette transition end (should be > _vignetteOffset), animated by GSAP.
   */
  private _vignetteDarkness: number = 1.0;

  /**
   * Creates an instance of CustomPostProcessShader.
   * @param {OGLContext} gl - The OGL WebGL context
   * @param {CustomPostProcessShaderParameters} [initialParams={}] - Optional initial parameters for the shader effects.
   */
  constructor(gl: OGLContext, initialParams: CustomPostProcessShaderParameters = {}) {
    this.gl = gl;

    // Initialize internal properties from constructor parameters
    this._distortionIntensity = initialParams.distortionIntensity ?? 0;
    this._vignetteOffset = initialParams.vignetteOffset ?? 1.2;
    this._vignetteDarkness = initialParams.vignetteDarkness ?? 1.5;

    // Create render target
    this.renderTarget = new RenderTarget(gl, {
      width: gl.canvas.width,
      height: gl.canvas.height,
    });

    // Create geometry for full-screen quad
    this.geometry = new Plane(gl, {
      width: 2,
      height: 2,
    });

    // Create shader program
    this.program = new Program(gl, {
      vertex: postProcessVertexShader,
      fragment: postProcessFragmentShader,
      uniforms: {
        tDiffuse: { value: null }, // The input texture from the previous pass
        distortion: { value: new Vec2(0, 0) }, // This will be calculated from _distortionIntensity
        vignetteOffset: { value: this._vignetteOffset },
        vignetteDarkness: { value: this._vignetteDarkness },
      },
      transparent: false,
      cullFace: false,
    });

    // Create mesh
    this.mesh = new Mesh(gl, {
      geometry: this.geometry,
      program: this.program,
    });

    // Create a scene for the post-processing mesh
    this.scene = new Transform();
    this.mesh.setParent(this.scene);

    // Create an orthographic camera for post-processing
    this.camera = new Camera(gl, {
      left: -1,
      right: 1,
      bottom: -1,
      top: 1,
      near: 0,
      far: 2,
    });
    this.camera.position.set(0, 0, 1);

    // Immediately update uniforms based on initial values
    this.updateUniforms();
  }

  /**
   * @property {number} distortionIntensity - Getter/Setter for the distortion intensity.
   * When set, it updates the shader uniforms.
   */
  get distortionIntensity(): number {
    return this._distortionIntensity;
  }

  set distortionIntensity(value: number) {
    this._distortionIntensity = value;
    this.updateUniforms();
  }

  /**
   * @property {number} vignetteOffset - Getter/Setter for the vignette offset.
   * Controls where the vignette effect starts (0.0 = center, 1.0 = screen edges).
   * When set, it updates the shader uniforms.
   */
  get vignetteOffset(): number {
    return this._vignetteOffset;
  }

  set vignetteOffset(value: number) {
    this._vignetteOffset = value;
    this.updateUniforms();
  }

  /**
   * @property {number} vignetteDarkness - Getter/Setter for the vignette transition end.
   * Controls where the vignette reaches maximum darkness (should be > vignetteOffset for smooth transition).
   * When set, it updates the shader uniforms.
   */
  get vignetteDarkness(): number {
    return this._vignetteDarkness;
  }

  set vignetteDarkness(value: number) {
    this._vignetteDarkness = value;
    this.updateUniforms();
  }

  /**
   * @method updateUniforms
   * @description Updates all relevant uniforms of the shader material based on the current
   * internal `_distortionIntensity`, `_vignetteOffset`, and `_vignetteDarkness` properties.
   * This method should be called whenever the internal properties change to reflect
   * the changes in the shader.
   */
  updateUniforms(): void {
    if (!this.program) return;

    // Calculate distortion uniform based on current distortionIntensity and aspect ratio.
    // We'll use the current window aspect ratio, which is common for full-screen effects.
    const aspectRatio = window.innerWidth / window.innerHeight;
    // The distortion uniform is a vec2. We'll apply the intensity scaled by aspect ratio
    // to the x component and directly to the y component, allowing for non-uniform scaling
    // if the shader utilizes both.
    // Assuming the shader's `distortion.x` is the primary scalar for the effect,
    // and `distortion.y` can be used for secondary axis scaling or ignored.
    this.program.uniforms.distortion.value.set(
      this._distortionIntensity * aspectRatio,
      this._distortionIntensity,
    );

    this.program.uniforms.vignetteOffset.value = this._vignetteOffset;
    this.program.uniforms.vignetteDarkness.value = this._vignetteDarkness;
  }

  /**
   * @method animate
   * @description Animates the distortion and vignette parameters using GSAP.
   * @param {number} targetDistortion - The target distortion intensity value.
   * @param {number} targetVignetteOffset - The target vignette offset value.
   * @param {number} targetVignetteDarkness - The target vignette darkness value.
   * @param {number} [duration=1] - The duration of the animation in seconds.
   * @param {number} [delay=0] - The delay before the animation starts in seconds.
   * @param {string} [ease='power2.out'] - The GSAP ease function to use for the animation.
   */
  animate(
    targetDistortion: number,
    targetVignetteOffset: number,
    targetVignetteDarkness: number,
    duration: number = 1,
    delay: number = 0,
    ease: string = "power2.out",
  ): void {
    gsap.to(this, {
      distortionIntensity: targetDistortion,
      vignetteOffset: targetVignetteOffset,
      vignetteDarkness: targetVignetteDarkness,
      duration,
      delay,
      ease,
      onUpdate: () => this.updateUniforms(), // Ensure uniforms are updated during animation
    });
  }

  /**
   * @method setInputTexture
   * @description Sets the input texture for post-processing
   * @param {any} texture - The input texture (usually from a RenderTarget)
   */
  setInputTexture(texture: Texture): void {
    if (!this.program) return;
    this.program.uniforms.tDiffuse.value = texture;
  }

  /**
   * @method render
   * @description Renders the post-processing effect to the specified target or screen
   * @param {RenderTarget | null} target - The render target (null for screen)
   */
  render(target: RenderTarget | null = null): void {
    if (!this.scene || !this.camera) return;

    // Use OGL's renderer to render the post-processing scene
    const renderer = this.gl.renderer;
    if (target) {
      renderer.render({ scene: this.scene, camera: this.camera, target });
    } else {
      renderer.render({ scene: this.scene, camera: this.camera });
    }
  }

  /**
   * @method resize
   * @description Resizes the render target when the canvas size changes
   * @param {number} width - New width
   * @param {number} height - New height
   */
  resize(width: number, height: number): void {
    if (!this.renderTarget) return;
    this.renderTarget.setSize(width, height);
    this.updateUniforms();
  }

  /**
   * @method dispose
   * @description Cleans up WebGL resources
   */
  dispose(): void {
    // OGL resources are automatically cleaned up by the WebGL context
    // We just need to release references
    this.renderTarget = null;
    this.geometry = null;
    this.program = null;
    this.mesh = null;
    this.scene = null;
    this.camera = null;
  }
}
