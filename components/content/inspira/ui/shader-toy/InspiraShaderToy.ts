import { Renderer, Camera, Transform, Geometry, Program, Mesh, RenderTarget, Texture } from "ogl";

export interface ShaderConfig {
  source?: string;
  iChannel0?: string;
  iChannel1?: string;
  iChannel2?: string;
  iChannel3?: string;
}

export interface MouseState {
  x: number;
  y: number;
  clickX: number;
  clickY: number;
}

export type MouseMode = "click" | "hover";

export type BufferKey = "A" | "B" | "C" | "D" | "Image";

export class InspiraShaderToy {
  private renderer: Renderer;
  private camera: Camera;
  private scene: Transform;
  private geometry: Geometry;

  // Timing
  private isPlaying: boolean = false;
  private firstDrawTime: number = 0;
  private prevDrawTime: number = 0;

  // Callback
  private onDrawCallback?: () => void;

  // Uniforms
  private iFrame: number = 0;
  private iMouse: MouseState = { x: 0, y: 0, clickX: 0, clickY: 0 };

  private _mouseMode: MouseMode = "click";

  // Shader common source
  private common: string = "";

  // Render passes variables
  private sourcecode: Record<BufferKey, string> = {} as Record<BufferKey, string>;
  private ichannels: Record<BufferKey, Record<number, string>> = {} as Record<
    BufferKey,
    Record<number, string>
  >;
  private renderTargets: Record<Exclude<BufferKey, "Image">, [RenderTarget, RenderTarget]> =
    {} as Record<Exclude<BufferKey, "Image">, [RenderTarget, RenderTarget]>;
  private programs: Record<BufferKey, Program | null> = {} as Record<BufferKey, Program | null>;
  private meshes: Record<BufferKey, Mesh | null> = {} as Record<BufferKey, Mesh | null>;
  private flip: Record<Exclude<BufferKey, "Image">, boolean> = {} as Record<
    Exclude<BufferKey, "Image">,
    boolean
  >;
  private textures: Record<string, Texture> = {};

  private readonly hdr = `#version 300 es
    #ifdef GL_ES
    precision highp float;
    precision highp int;
    precision mediump sampler3D;
    #endif
    #define texture2D texture
    uniform vec3      iResolution;           // viewport resolution (in pixels)
    uniform float     iTime;                 // shader playback time (in seconds)
    uniform float     iTimeDelta;            // render time (in seconds)
    uniform float     iFrameRate;            // shader frame rate
    uniform int       iFrame;                // shader playback frame
    uniform float     iChannelTime[4];       // channel playback time (in seconds)
    uniform vec3      iChannelResolution[4]; // channel resolution (in pixels)
    uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
    uniform sampler2D iChannel0;             // input channel 0
    uniform sampler2D iChannel1;             // input channel 1
    uniform sampler2D iChannel2;             // input channel 2
    uniform sampler2D iChannel3;             // input channel 3
    uniform vec4      iDate;                 // (year, month, day, unixtime in seconds)
    uniform float     iSampleRate;           // sound sample rate (i.e., 44100)
    out vec4          frag_out_color;
    void mainImage( out vec4 c, in vec2 f );
    void main( void )
    {
        vec4 color = vec4(0.0,0.0,0.0,0.0);
        mainImage( color, gl_FragCoord.xy );
        frag_out_color = vec4(color);
    }
    `;

  private readonly basicVertexShader = `#version 300 es
    #ifdef GL_ES
    precision highp float;
    precision highp int;
    precision mediump sampler3D;
    #endif
    in vec2 position;
    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
    }
    `;

  constructor(
    private container: HTMLElement,
    mouseMode?: MouseMode,
  ) {
    if (mouseMode) {
      this._mouseMode = mouseMode;
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
      position: { size: 2, data: new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1, -1, 1, 1, -1]) },
    });

    this.setup();
  }

  private setup(): void {
    // Initialize all buffer keys
    (["A", "B", "C", "D", "Image"] as BufferKey[]).forEach((key) => {
      this.sourcecode[key] = "";
      this.ichannels[key] = {};
      this.programs[key] = null;
      this.meshes[key] = null;

      if (key !== "Image") {
        const bufferKey = key as Exclude<BufferKey, "Image">;
        this.renderTargets[bufferKey] = [
          new RenderTarget(this.renderer.gl, {
            width: this.container.clientWidth,
            height: this.container.clientHeight,
            type: this.renderer.gl.FLOAT,
            format: this.renderer.gl.RGBA,
            internalFormat: (this.renderer.gl as WebGL2RenderingContext).RGBA32F,
            minFilter: this.renderer.gl.LINEAR,
            magFilter: this.renderer.gl.LINEAR,
            wrapS: this.renderer.gl.CLAMP_TO_EDGE,
            wrapT: this.renderer.gl.CLAMP_TO_EDGE,
          }),
          new RenderTarget(this.renderer.gl, {
            width: this.container.clientWidth,
            height: this.container.clientHeight,
            type: this.renderer.gl.FLOAT,
            format: this.renderer.gl.RGBA,
            internalFormat: (this.renderer.gl as WebGL2RenderingContext).RGBA32F,
            minFilter: this.renderer.gl.LINEAR,
            magFilter: this.renderer.gl.LINEAR,
            wrapS: this.renderer.gl.CLAMP_TO_EDGE,
            wrapT: this.renderer.gl.CLAMP_TO_EDGE,
          }),
        ];
        this.flip[bufferKey] = false;
      }
    });

    // Setup mouse events
    this.setupMouseEvents();

    // Setup resize handler
    this.setupResizeHandler();
  }

  private setupMouseEvents(): void {
    const canvas = this.renderer.gl.canvas;
    let isMouseDown = false;

    function getScaledMousePos(event: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio;

      // Get mouse position relative to canvas
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Scale by DPR and flip Y-axis
      return {
        x: x * dpr,
        y: canvas.height - y * dpr, // Flip Y to match GLSL coordinates
      };
    }

    canvas.addEventListener("mousemove", (event: MouseEvent) => {
      const { x: newX, y: newY } = getScaledMousePos(event);

      // Smoothing/damping
      this.iMouse.x = this.iMouse.x * 0.9 + newX * 0.1;
      this.iMouse.y = this.iMouse.y * 0.9 + newY * 0.1;

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
      const { x: newX, y: newY } = getScaledMousePos(touch as unknown as MouseEvent);

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
      const { x: clickX, y: clickY } = getScaledMousePos(touch as unknown as MouseEvent);

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
    if (this.container) {
      const resizeObserver = new ResizeObserver(() => {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        // Update renderer size
        this.renderer.setSize(width, height);

        // Update viewport
        this.renderer.gl.viewport(0, 0, width * window.devicePixelRatio, height * devicePixelRatio);

        this.updateRenderTargets();
      });

      resizeObserver.observe(this.container);
    }
  }

  private updateRenderTargets(): void {
    (["A", "B", "C", "D"] as Exclude<BufferKey, "Image">[]).forEach((key) => {
      this.renderTargets[key][0].setSize(this.container.clientWidth, this.container.clientHeight);
      this.renderTargets[key][1].setSize(this.container.clientWidth, this.container.clientHeight);
    });
  }

  private compileProgram(key: BufferKey): Program | null {
    if (!this.sourcecode[key]) return null;

    const source = this.hdr + this.common + this.sourcecode[key];

    try {
      const program = new Program(this.renderer.gl, {
        vertex: this.basicVertexShader,
        fragment: source,
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
          iFrameRate: { value: 60 },
          iFrame: { value: 0 },
          iChannelTime: { value: [0, 0, 0, 0] },
          iChannelResolution: { value: new Float32Array(12) },
          iChannel0: { value: null },
          iChannel1: { value: null },
          iChannel2: { value: null },
          iChannel3: { value: null },
          iMouse: { value: [0, 0, 0, 0] },
          iDate: { value: [0, 0, 0, 0] },
          iSampleRate: { value: 44100 },
        },
      });

      return program;
    } catch (error) {
      console.error(`Failed to compile program for ${key}:`, error);
      return null;
    }
  }

  private setShader(config: ShaderConfig | null, key: BufferKey): void {
    if (config) {
      if (config.source) {
        this.sourcecode[key] = config.source;
        const program = this.compileProgram(key);
        if (program) {
          this.programs[key] = program;
          this.meshes[key] = new Mesh(this.renderer.gl, { geometry: this.geometry, program });
        } else {
          console.error(`Failed to compile ${key}`);
        }
      }

      for (let i = 0; i < 4; i++) {
        const channelKey = `iChannel${i}` as keyof ShaderConfig;
        const s = config[channelKey];
        if (s === "A" || s === "B" || s === "C" || s === "D") {
          this.ichannels[key][i] = s;
        }
      }
    } else {
      this.sourcecode[key] = "";
      this.programs[key] = null;
      this.meshes[key] = null;
    }
  }

  private draw(): void {
    const now = this.isPlaying ? Date.now() : this.prevDrawTime;
    const date = new Date(now);

    if (this.firstDrawTime === 0) {
      this.firstDrawTime = now;
    }

    if (this.onDrawCallback) {
      this.onDrawCallback();
    }

    const iTimeDelta = (now - this.prevDrawTime) * 0.001;
    const iTime = (now - this.firstDrawTime) * 0.001;
    const iDate = [date.getFullYear(), date.getMonth(), date.getDate(), date.getTime() * 0.001];

    const iChannelTimes = [iTime, iTime, iTime, iTime];
    const iChannelResolutions = new Float32Array([
      this.container.clientWidth * window.devicePixelRatio,
      this.container.clientHeight * window.devicePixelRatio,
      window.devicePixelRatio,
      this.container.clientWidth * window.devicePixelRatio,
      this.container.clientHeight * window.devicePixelRatio,
      window.devicePixelRatio,
      this.container.clientWidth * window.devicePixelRatio,
      this.container.clientHeight * window.devicePixelRatio,
      window.devicePixelRatio,
      this.container.clientWidth * window.devicePixelRatio,
      this.container.clientHeight * window.devicePixelRatio,
      window.devicePixelRatio,
    ]);

    (["A", "B", "C", "D", "Image"] as BufferKey[]).forEach((key) => {
      const program = this.programs[key];
      const mesh = this.meshes[key];

      if (program && mesh) {
        // Set render target
        let target: RenderTarget | null = null;
        if (key !== "Image") {
          const bufferKey = key as Exclude<BufferKey, "Image">;
          target = this.flip[bufferKey]
            ? this.renderTargets[bufferKey][1]
            : this.renderTargets[bufferKey][0];
        }

        // Set input textures
        for (let i = 0; i < 4; i++) {
          const chkey = this.ichannels[key][i];
          if (chkey && chkey !== "Image") {
            const bufferKey = chkey as Exclude<BufferKey, "Image">;
            const texture = this.flip[bufferKey]
              ? this.renderTargets[bufferKey][0].texture
              : this.renderTargets[bufferKey][1].texture;
            program.uniforms[`iChannel${i}`].value = texture;
          }
        }

        // Update uniforms
        program.uniforms.iResolution.value = [
          this.container.clientWidth * window.devicePixelRatio,
          this.container.clientHeight * window.devicePixelRatio,
          window.devicePixelRatio,
        ];
        program.uniforms.iTime.value = iTime;
        program.uniforms.iTimeDelta.value = iTimeDelta;
        program.uniforms.iFrameRate.value = 60;
        program.uniforms.iFrame.value = this.iFrame;
        program.uniforms.iChannelTime.value = iChannelTimes;
        program.uniforms.iChannelResolution.value = iChannelResolutions;
        program.uniforms.iMouse.value = [
          this.iMouse.x,
          this.iMouse.y,
          this.iMouse.clickX,
          this.iMouse.clickY,
        ];
        program.uniforms.iDate.value = iDate;
        program.uniforms.iSampleRate.value = 44100;

        // Render
        if (target) {
          this.renderer.render({ scene: mesh, camera: this.camera, target });
        } else {
          this.renderer.render({ scene: mesh, camera: this.camera });
        }

        // Flip buffer
        if (key !== "Image") {
          const bufferKey = key as Exclude<BufferKey, "Image">;
          this.flip[bufferKey] = !this.flip[bufferKey];
        }
      }
    });

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
  public setCommon(source?: string): void {
    this.common = source || "";
    (["A", "B", "C", "D", "Image"] as BufferKey[]).forEach((key) => {
      if (this.programs[key]) {
        const program = this.compileProgram(key);
        if (program) {
          this.programs[key] = program;
          this.meshes[key] = new Mesh(this.renderer.gl, { geometry: this.geometry, program });
        }
      }
    });
  }

  public setBufferA(config: ShaderConfig | null): void {
    this.setShader(config, "A");
  }

  public setBufferB(config: ShaderConfig | null): void {
    this.setShader(config, "B");
  }

  public setBufferC(config: ShaderConfig | null): void {
    this.setShader(config, "C");
  }

  public setBufferD(config: ShaderConfig | null): void {
    this.setShader(config, "D");
  }

  public setImage(config: ShaderConfig | null): void {
    this.setShader(config, "Image");
  }

  public setOnDraw(callback: () => void): void {
    this.onDrawCallback = callback;
  }

  public addTexture(texture: Texture, key: string): void {
    this.textures[key] = texture;
  }

  public time(): number {
    return (this.prevDrawTime - this.firstDrawTime) * 0.001;
  }

  public isPlayingState(): boolean {
    return this.isPlaying;
  }

  public reset(): void {
    const now = Date.now();
    this.firstDrawTime = now;
    this.prevDrawTime = now;
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
      this.animate();
    }
  }

  public dispose(): void {
    this.pause();
  }

  // Getter Setter
  public get mouseMode(): MouseMode {
    return this._mouseMode;
  }

  public set mouseMode(val: MouseMode) {
    this._mouseMode = val;
  }
}
