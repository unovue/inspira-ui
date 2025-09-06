import { Renderer, Camera, Transform, Geometry, Program, Mesh } from "ogl";

export interface ShaderConfig {
  source: string;
}

export interface MouseState {
  x: number;
  y: number;
  clickX: number;
  clickY: number;
}

export interface HSVControls {
  hue: number; // 0-360
  saturation: number; // 0-1
  brightness: number; // 0-1
}

export type MouseMode = "click" | "hover";

export class InspiraShaderToy {
  private renderer: Renderer;
  private camera: Camera;
  private scene: Transform;
  private geometry: Geometry;
  private program: Program | null = null;
  private mesh: Mesh | null = null;

  // Timing
  private isPlaying: boolean = false;
  private firstDrawTime: number = 0;
  private prevDrawTime: number = 0;
  private targetFPS: number = 60;
  private frameInterval: number = 1000 / 60;
  private lastFrameTime: number = 0;

  // Callback
  private onDrawCallback?: () => void;

  // Uniforms
  private iFrame: number = 0;
  private iMouse: MouseState = { x: 0, y: 0, clickX: 0, clickY: 0 };
  private hsv: HSVControls = { hue: 0, saturation: 1, brightness: 1 };
  private _mouseMode: MouseMode = "click";
  private _mouseSensitivity: number = 1.0; // New: mouse sensitivity multiplier
  private _mouseDamping: number = 0.9; // New: mouse movement damping factor (0-1)

  private _speed: number = 1; // Speed multiplier

  // Shader source
  private shaderSource: string = "";

  private readonly vertexShader = `#version 300 es
    #ifdef GL_ES
    precision highp float;
    precision highp int;
    #endif
    in vec2 position;
    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  private readonly fragmentShaderHeader = `#version 300 es
    #ifdef GL_ES
    precision highp float;
    precision highp int;
    #endif
    
    uniform vec3      iResolution;     // viewport resolution (in pixels)
    uniform float     iTime;           // shader playback time (in seconds)
    uniform float     iTimeDelta;      // render time (in seconds)
    uniform float     iFrameRate;      // shader frame rate
    uniform int       iFrame;          // shader playback frame
    uniform vec4      iMouse;          // mouse pixel coords. xy: current, zw: click
    uniform vec4      iDate;           // (year, month, day, unixtime in seconds)
    uniform vec3      iHSV;            // HSV controls (hue, saturation, brightness)
    uniform float     iSpeed;          // speed multiplier
    
    out vec4 fragColor;
    
    // HSV to RGB conversion
    vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }
    
    // RGB to HSV conversion
    vec3 rgb2hsv(vec3 c) {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }
    
    // Apply HSV adjustments
    vec3 applyHSV(vec3 color, vec3 hsvAdjust) {
        vec3 hsv = rgb2hsv(color);
        hsv.x = fract(hsv.x + hsvAdjust.x / 360.0);
        hsv.y = clamp(hsv.y * hsvAdjust.y, 0.0, 1.0);
        hsv.z = clamp(hsv.z * hsvAdjust.z, 0.0, 1.0);
        return hsv2rgb(hsv);
    }
    
    void mainImage(out vec4 c, in vec2 f);
    
    void main() {
        vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
        mainImage(color, gl_FragCoord.xy);
        
        // Apply HSV adjustments if not default
        if (iHSV.x != 0.0 || iHSV.y != 1.0 || iHSV.z != 1.0) {
            color.rgb = applyHSV(color.rgb, iHSV);
        }
        
        fragColor = color;
    }
  `;

  constructor(
    private container: HTMLElement,
    mouseMode?: MouseMode,
    fps?: number,
  ) {
    if (mouseMode) {
      this._mouseMode = mouseMode;
    }
    if (fps) {
      this.setFrameRate(fps);
    }

    // Create renderer with WebGL 2 context
    this.renderer = new Renderer({
      width: this.container.clientWidth,
      height: this.container.clientHeight,
      dpr: window.devicePixelRatio,
      alpha: true,
      depth: false,
      stencil: false,
      antialias: true,
      powerPreference: "high-performance",
    });

    // Ensure WebGL 2 context
    if (!this.renderer.gl || !(this.renderer.gl instanceof WebGL2RenderingContext)) {
      throw new Error("WebGL 2 not supported");
    }

    // Append canvas to container
    this.container.appendChild(this.renderer.gl.canvas);

    // Setup camera (orthographic for full-screen quad)
    this.camera = new Camera(this.renderer.gl);
    this.camera.position.z = 1;

    // Setup scene
    this.scene = new Transform();

    // Setup geometry (full-screen quad)
    this.geometry = new Geometry(this.renderer.gl, {
      position: {
        size: 2,
        data: new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1, -1, 1, 1, -1]),
      },
    });

    this.setup();
  }

  private setup(): void {
    this.setupMouseEvents();
    this.setupResizeHandler();
  }

  private setupMouseEvents(): void {
    const canvas = this.renderer.gl.canvas;
    let isMouseDown = false;

    const getScaledMousePos = (event: MouseEvent | Touch) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio;

      // Get mouse position relative to canvas
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Scale by DPR, apply sensitivity, and flip Y-axis
      return {
        x: x * dpr * this._mouseSensitivity,
        y: (canvas.height - y * dpr) * this._mouseSensitivity, // Flip Y to match GLSL coordinates
      };
    };

    canvas.addEventListener("mousemove", (event: MouseEvent) => {
      const { x: newX, y: newY } = getScaledMousePos(event);

      // Apply damping with configurable factor
      this.iMouse.x = this.iMouse.x * this._mouseDamping + newX * (1 - this._mouseDamping);
      this.iMouse.y = this.iMouse.y * this._mouseDamping + newY * (1 - this._mouseDamping);

      // Handle click coordinates based on mode
      if (this._mouseMode === "hover" && !isMouseDown) {
        this.iMouse.clickX = this.iMouse.x;
        this.iMouse.clickY = this.iMouse.y;
      } else if (isMouseDown) {
        this.iMouse.clickX = newX;
        this.iMouse.clickY = newY;
      }
    });

    canvas.addEventListener("mousedown", (event: MouseEvent) => {
      isMouseDown = true;
      const { x: clickX, y: clickY } = getScaledMousePos(event);

      if (this._mouseMode === "click") {
        this.iMouse.clickX = clickX;
        this.iMouse.clickY = clickY;
      }
    });

    canvas.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    // Handle touch events for mobile
    canvas.addEventListener("touchmove", (event: TouchEvent) => {
      event.preventDefault();
      const touch = event.touches[0];
      const { x: newX, y: newY } = getScaledMousePos(touch);

      this.iMouse.x = newX;
      this.iMouse.y = newY;

      if (this._mouseMode === "hover") {
        this.iMouse.clickX = newX;
        this.iMouse.clickY = newY;
      }
    });

    canvas.addEventListener("touchstart", (event: TouchEvent) => {
      event.preventDefault();
      isMouseDown = true;
      const touch = event.touches[0];
      const { x: clickX, y: clickY } = getScaledMousePos(touch);

      if (this._mouseMode === "click") {
        this.iMouse.clickX = clickX;
        this.iMouse.clickY = clickY;
      }
    });

    canvas.addEventListener("touchend", () => {
      isMouseDown = false;
    });
  }

  private setupResizeHandler(): void {
    const resizeObserver = new ResizeObserver(() => {
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;

      // Update renderer size
      this.renderer.setSize(width, height);

      // Update viewport
      this.renderer.gl.viewport(
        0,
        0,
        width * window.devicePixelRatio,
        height * window.devicePixelRatio,
      );

      // Update resolution uniform if program exists
      if (this.program) {
        this.program.uniforms.iResolution.value = [
          width * window.devicePixelRatio,
          height * window.devicePixelRatio,
          window.devicePixelRatio,
        ];
      }
    });

    resizeObserver.observe(this.container);
  }

  private compileProgram(): boolean {
    if (!this.shaderSource) return false;

    const fullFragmentShader = this.fragmentShaderHeader + this.shaderSource;

    try {
      const program = new Program(this.renderer.gl, {
        vertex: this.vertexShader,
        fragment: fullFragmentShader,
        uniforms: {
          iResolution: {
            value: [
              this.container.clientWidth * window.devicePixelRatio,
              this.container.clientHeight * window.devicePixelRatio,
              window.devicePixelRatio,
            ],
          },
          iTime: { value: 0 },
          iTimeDelta: { value: 0 },
          iFrameRate: { value: this.targetFPS },
          iFrame: { value: 0 },
          iMouse: { value: [0, 0, 0, 0] },
          iDate: { value: [0, 0, 0, 0] },
          iHSV: { value: [this.hsv.hue, this.hsv.saturation, this.hsv.brightness] },
          iSpeed: { value: this._speed },
        },
      });

      this.program = program;
      this.mesh = new Mesh(this.renderer.gl, {
        geometry: this.geometry,
        program,
      });

      return true;
    } catch (error) {
      console.error("Failed to compile shader:", error);
      return false;
    }
  }

  private draw(): void {
    if (!this.program || !this.mesh) {
      console.warn("Program or mesh not initialized");
      return;
    }

    const now = this.isPlaying ? Date.now() : this.prevDrawTime;

    // Frame rate limiting
    if (this.isPlaying && this.targetFPS < 60) {
      const elapsed = now - this.lastFrameTime;
      if (elapsed < this.frameInterval) {
        requestAnimationFrame(() => this.animate());
        return;
      }
      this.lastFrameTime = now - (elapsed % this.frameInterval);
    }

    const date = new Date(now);

    if (this.firstDrawTime === 0) {
      this.firstDrawTime = now;
    }

    if (this.onDrawCallback) {
      this.onDrawCallback();
    }

    const iTimeDelta = (now - this.prevDrawTime) * 0.001 * this._speed;
    const iTime = (now - this.firstDrawTime) * 0.001 * this._speed;
    const iDate = [date.getFullYear(), date.getMonth(), date.getDate(), date.getTime() * 0.001];

    if (this.program && this.mesh) {
      // Update uniforms
      this.program.uniforms.iResolution.value = [
        this.container.clientWidth * window.devicePixelRatio,
        this.container.clientHeight * window.devicePixelRatio,
        window.devicePixelRatio,
      ];
      this.program.uniforms.iTime.value = iTime;
      this.program.uniforms.iTimeDelta.value = iTimeDelta;
      this.program.uniforms.iFrameRate.value = this.targetFPS;
      this.program.uniforms.iFrame.value = this.iFrame;
      this.program.uniforms.iMouse.value = [
        this.iMouse.x,
        this.iMouse.y,
        this.iMouse.clickX,
        this.iMouse.clickY,
      ];
      this.program.uniforms.iDate.value = iDate;
      this.program.uniforms.iHSV.value = [this.hsv.hue, this.hsv.saturation, this.hsv.brightness];
      this.program.uniforms.iSpeed.value = this._speed;

      // Render
      this.renderer.render({ scene: this.mesh, camera: this.camera });
    }

    this.prevDrawTime = now;
    this.iFrame++;
  }

  private animate = (): void => {
    if (this.isPlaying) {
      this.draw();
      requestAnimationFrame(this.animate);
    }
  };

  // Public methods
  public setShader(config: ShaderConfig): boolean {
    this.shaderSource = config.source;
    const success = this.compileProgram();

    // If playing, trigger a redraw
    if (success && this.isPlaying) {
      this.draw();
    }

    return success;
  }

  public setHSV(hsv: Partial<HSVControls>): void {
    if (hsv.hue !== undefined) this.hsv.hue = hsv.hue;
    if (hsv.saturation !== undefined) this.hsv.saturation = hsv.saturation;
    if (hsv.brightness !== undefined) this.hsv.brightness = hsv.brightness;

    // Update immediately if not playing
    if (!this.isPlaying && this.program && this.mesh) {
      this.draw();
    }
  }

  public setHue(val: number) {
    this.hsv.hue = val;

    // Update immediately if not playing
    if (!this.isPlaying && this.program && this.mesh) {
      this.draw();
    }
  }

  public setSaturation(val: number) {
    this.hsv.saturation = val;

    // Update immediately if not playing
    if (!this.isPlaying && this.program && this.mesh) {
      this.draw();
    }
  }

  public setBrightness(val: number) {
    this.hsv.brightness = val;

    // Update immediately if not playing
    if (!this.isPlaying && this.program && this.mesh) {
      this.draw();
    }
  }

  public getHSV(): HSVControls {
    return { ...this.hsv };
  }
  // New speed methods
  public setSpeed(val: number): void {
    this._speed = Math.max(0, val);

    // Update immediately if not playing
    if (!this.isPlaying && this.program && this.mesh) {
      this.draw();
    }
  }

  public getSpeed(): number {
    return this._speed;
  }

  public setFrameRate(fps: number): void {
    this.targetFPS = Math.max(1, Math.min(60, fps));
    this.frameInterval = 1000 / this.targetFPS;
  }

  public getFrameRate(): number {
    return this.targetFPS;
  }

  public setOnDraw(callback: () => void): void {
    this.onDrawCallback = callback;
  }

  public time(): number {
    return (this.prevDrawTime - this.firstDrawTime) * 0.001 * this._speed;
  }

  public isPlayingState(): boolean {
    return this.isPlaying;
  }

  public reset(): void {
    const now = Date.now();
    this.firstDrawTime = now;
    this.prevDrawTime = now;
    this.lastFrameTime = now;
    this.iFrame = 0;
    this.draw();
  }

  public pause(): void {
    this.isPlaying = false;
  }

  public play(): void {
    if (!this.isPlaying) {
      this.isPlaying = true;
      const now = Date.now();
      const elapsed = this.prevDrawTime - this.firstDrawTime;
      this.firstDrawTime = now - elapsed;
      this.prevDrawTime = now;
      this.lastFrameTime = now;
      this.animate();
    }
  }

  public dispose(): void {
    this.pause();
    if (this.renderer.gl.canvas.parentElement) {
      this.renderer.gl.canvas.parentElement.removeChild(this.renderer.gl.canvas);
    }
  }

  // Getters and Setters
  public get mouseMode(): MouseMode {
    return this._mouseMode;
  }

  public set mouseMode(val: MouseMode) {
    this._mouseMode = val;
  }
  public get speed(): number {
    return this._speed;
  }

  public set speed(val: number) {
    this.setSpeed(val);
  }

  // New mouse sensitivity methods
  public setMouseSensitivity(sensitivity: number): void {
    this._mouseSensitivity = Math.max(0.1, Math.min(5.0, sensitivity)); // Clamp between 0.1 and 5.0
  }

  public getMouseSensitivity(): number {
    return this._mouseSensitivity;
  }

  // New mouse damping methods
  public setMouseDamping(damping: number): void {
    this._mouseDamping = Math.max(0, Math.min(0.99, damping)); // Clamp between 0 and 0.99
  }

  public getMouseDamping(): number {
    return this._mouseDamping;
  }
}
