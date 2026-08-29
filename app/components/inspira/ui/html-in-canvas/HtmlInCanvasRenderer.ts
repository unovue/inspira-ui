export type ShaderUniformValue = boolean | number | readonly number[];
export type ShaderUniforms = Record<string, ShaderUniformValue>;

interface HtmlCanvasElement extends HTMLCanvasElement {
  requestPaint?: () => void;
}

interface HtmlCanvasContext extends CanvasRenderingContext2D {
  drawElementImage?: (element: Element, x: number, y: number) => void;
}

export function supportsHtmlInCanvas() {
  if (typeof document === "undefined") return false;

  const canvas = document.createElement("canvas") as HtmlCanvasElement;
  const context = canvas.getContext("2d") as HtmlCanvasContext | null;

  return Boolean(
    typeof context?.drawElementImage === "function" && typeof canvas.requestPaint === "function",
  );
}

interface RendererOptions {
  frameRate: number;
  hasContent: boolean;
  mouseDamping: number;
  onError: (message: string) => void;
  onReady: () => void;
  pixelRatio: number;
  shaderCode: string;
  speed: number;
  uniforms: ShaderUniforms;
  vertexShaderCode?: string;
}

interface ProgramResources {
  fragmentShader: WebGLShader;
  program: WebGLProgram;
  uniformTypes: Map<string, number>;
  vertexShader: WebGLShader;
}

const RESERVED_UNIFORMS = new Set([
  "iChannel0",
  "iChannelResolution",
  "iDate",
  "iFrame",
  "iFrameRate",
  "iHasContent",
  "iMouse",
  "iPointerAge",
  "iPointerEnergy",
  "iPointerInside",
  "iPointerVelocity",
  "iResolution",
  "iScrollVelocity",
  "iTime",
  "iTimeDelta",
]);
const ARRAY_UNIFORM_SUFFIX = /\[0\]$/;
const VERSION_DIRECTIVE = /^\s*#version\b/m;

const DEFAULT_VERTEX_SHADER = `
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

function createVertexShader(source = DEFAULT_VERTEX_SHADER) {
  return `#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec2 position;
layout(location = 1) in vec2 textureCoord;

uniform vec3 iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform float iFrameRate;
uniform int iFrame;
uniform vec4 iMouse;
uniform vec2 iPointerVelocity;
uniform float iPointerEnergy;
uniform float iPointerAge;
uniform float iPointerInside;
uniform float iScrollVelocity;
uniform vec4 iDate;
uniform float iHasContent;
uniform sampler2D iChannel0;
uniform vec3 iChannelResolution[4];

${source}
`;
}

function createFragmentShader(source: string) {
  return `#version 300 es
precision highp float;
precision highp int;

uniform vec3 iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform float iFrameRate;
uniform int iFrame;
uniform vec4 iMouse;
uniform vec2 iPointerVelocity;
uniform float iPointerEnergy;
uniform float iPointerAge;
uniform float iPointerInside;
uniform float iScrollVelocity;
uniform vec4 iDate;
uniform float iHasContent;
uniform sampler2D iChannel0;
uniform vec3 iChannelResolution[4];

out vec4 fragColor;

${source}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  fragColor = color;
}
`;
}

function createSurfaceVertices(segments = 32) {
  const vertices: number[] = [];

  for (let index = 0; index < segments; index += 1) {
    const u0 = index / segments;
    const u1 = (index + 1) / segments;
    const x0 = u0 * 2 - 1;
    const x1 = u1 * 2 - 1;

    vertices.push(
      x0,
      -1,
      u0,
      0,
      x1,
      -1,
      u1,
      0,
      x0,
      1,
      u0,
      1,
      x0,
      1,
      u0,
      1,
      x1,
      -1,
      u1,
      0,
      x1,
      1,
      u1,
      1,
    );
  }

  return new Float32Array(vertices);
}

export class HtmlInCanvasRenderer {
  private readonly gl: WebGL2RenderingContext;
  private readonly contentTexture: WebGLTexture;
  private readonly positionBuffer: WebGLBuffer;
  private readonly vertexArray: WebGLVertexArrayObject;
  private readonly onError: RendererOptions["onError"];
  private readonly onReady: RendererOptions["onReady"];
  private readonly vertexCount: number;

  private resources: ProgramResources | undefined;
  private animationFrame = 0;
  private contentDirty = false;
  private disposed = false;
  private elapsedTime = 0;
  private frame = 0;
  private frameInterval = 1000 / 60;
  private hasContent = false;
  private expectsContent = false;
  private lastFrameTime = 0;
  private mouseDamping = 0.85;
  private pixelRatio = 1;
  private playing = false;
  private ready = false;
  private speed = 1;
  private uniforms: ShaderUniforms = {};

  private width = 1;
  private height = 1;
  private pointerX = 0;
  private pointerY = 0;
  private targetPointerX = 0;
  private targetPointerY = 0;
  private clickX = 0;
  private clickY = 0;
  private pointerAge = 1000;
  private pointerEnergy = 0;
  private pointerInside = 0;
  private pointerPressed = false;
  private pointerVelocityX = 0;
  private pointerVelocityY = 0;
  private scrollVelocity = 0;
  private targetPointerInside = 0;

  constructor(
    private readonly output: HTMLCanvasElement,
    private readonly source: HTMLCanvasElement,
    options: RendererOptions,
  ) {
    const gl = output.getContext("webgl2", {
      alpha: true,
      antialias: false,
      depth: false,
      powerPreference: "high-performance",
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      stencil: false,
    });

    if (!gl || gl.isContextLost()) {
      throw new Error("WebGL 2 is not available");
    }

    this.gl = gl;
    this.onError = options.onError;
    this.onReady = options.onReady;
    this.expectsContent = options.hasContent;

    const positionBuffer = gl.createBuffer();
    const vertexArray = gl.createVertexArray();
    const contentTexture = gl.createTexture();

    if (!positionBuffer || !vertexArray || !contentTexture) {
      throw new Error("Unable to allocate WebGL resources");
    }

    this.positionBuffer = positionBuffer;
    this.vertexArray = vertexArray;
    this.contentTexture = contentTexture;

    const surfaceVertices = createSurfaceVertices();
    this.vertexCount = surfaceVertices.length / 4;

    gl.bindVertexArray(vertexArray);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, surfaceVertices, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 4 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(
      1,
      2,
      gl.FLOAT,
      false,
      4 * Float32Array.BYTES_PER_ELEMENT,
      2 * Float32Array.BYTES_PER_ELEMENT,
    );
    gl.bindVertexArray(null);

    gl.bindTexture(gl.TEXTURE_2D, contentTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 0]),
    );

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);

    this.setFrameRate(options.frameRate);
    this.setMouseDamping(options.mouseDamping);
    this.setPixelRatio(options.pixelRatio);
    this.setSpeed(options.speed);
    this.setUniforms(options.uniforms);

    if (!this.setShader(options.shaderCode, options.vertexShaderCode)) {
      throw new Error("Unable to compile HTML shader");
    }
  }

  private compileShader(type: number, source: string) {
    const shader = this.gl.createShader(type);
    if (!shader) throw new Error("Unable to create shader");

    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      const message = this.gl.getShaderInfoLog(shader) || "Unknown shader compilation error";
      this.gl.deleteShader(shader);
      throw new Error(message);
    }

    return shader;
  }

  private createProgram(shaderCode: string, vertexShaderCode?: string): ProgramResources {
    if (VERSION_DIRECTIVE.test(shaderCode)) {
      throw new Error("shaderCode must contain mainImage() without a #version directive");
    }
    if (vertexShaderCode && VERSION_DIRECTIVE.test(vertexShaderCode)) {
      throw new Error("vertexShaderCode must contain main() without a #version directive");
    }

    const vertexShader = this.compileShader(
      this.gl.VERTEX_SHADER,
      createVertexShader(vertexShaderCode),
    );
    let fragmentShader: WebGLShader;

    try {
      fragmentShader = this.compileShader(
        this.gl.FRAGMENT_SHADER,
        createFragmentShader(shaderCode),
      );
    } catch (error) {
      this.gl.deleteShader(vertexShader);
      throw error;
    }

    const program = this.gl.createProgram();
    if (!program) {
      this.gl.deleteShader(vertexShader);
      this.gl.deleteShader(fragmentShader);
      throw new Error("Unable to create shader program");
    }

    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);

    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      const message = this.gl.getProgramInfoLog(program) || "Unknown shader link error";
      this.gl.deleteProgram(program);
      this.gl.deleteShader(vertexShader);
      this.gl.deleteShader(fragmentShader);
      throw new Error(message);
    }

    const uniformTypes = new Map<string, number>();
    const count = this.gl.getProgramParameter(program, this.gl.ACTIVE_UNIFORMS) as number;

    for (let index = 0; index < count; index += 1) {
      const info = this.gl.getActiveUniform(program, index);
      if (info) uniformTypes.set(info.name.replace(ARRAY_UNIFORM_SUFFIX, ""), info.type);
    }

    return { fragmentShader, program, uniformTypes, vertexShader };
  }

  private deleteProgram(resources = this.resources) {
    if (!resources) return;

    this.gl.deleteProgram(resources.program);
    this.gl.deleteShader(resources.vertexShader);
    this.gl.deleteShader(resources.fragmentShader);
  }

  private getUniformLocation(name: string) {
    return this.resources ? this.gl.getUniformLocation(this.resources.program, name) : null;
  }

  private setBuiltInUniforms(delta: number) {
    const resolution = this.getUniformLocation("iResolution");
    const time = this.getUniformLocation("iTime");
    const timeDelta = this.getUniformLocation("iTimeDelta");
    const frameRate = this.getUniformLocation("iFrameRate");
    const frame = this.getUniformLocation("iFrame");
    const mouse = this.getUniformLocation("iMouse");
    const pointerVelocity = this.getUniformLocation("iPointerVelocity");
    const pointerEnergy = this.getUniformLocation("iPointerEnergy");
    const pointerAge = this.getUniformLocation("iPointerAge");
    const pointerInside = this.getUniformLocation("iPointerInside");
    const scrollVelocity = this.getUniformLocation("iScrollVelocity");
    const date = this.getUniformLocation("iDate");
    const hasContent = this.getUniformLocation("iHasContent");
    const channel = this.getUniformLocation("iChannel0");
    const channelResolution = this.getUniformLocation("iChannelResolution[0]");
    const now = new Date();

    if (resolution) this.gl.uniform3f(resolution, this.width, this.height, this.pixelRatio);
    if (time) this.gl.uniform1f(time, this.elapsedTime);
    if (timeDelta) this.gl.uniform1f(timeDelta, delta);
    if (frameRate) this.gl.uniform1f(frameRate, delta > 0 ? 1 / delta : 0);
    if (frame) this.gl.uniform1i(frame, this.frame);
    if (mouse) this.gl.uniform4f(mouse, this.pointerX, this.pointerY, this.clickX, this.clickY);
    if (pointerVelocity) {
      this.gl.uniform2f(pointerVelocity, this.pointerVelocityX, this.pointerVelocityY);
    }
    if (pointerEnergy) this.gl.uniform1f(pointerEnergy, this.pointerEnergy);
    if (pointerAge) this.gl.uniform1f(pointerAge, this.pointerAge);
    if (pointerInside) this.gl.uniform1f(pointerInside, this.pointerInside);
    if (scrollVelocity) this.gl.uniform1f(scrollVelocity, this.scrollVelocity);
    if (date) {
      const seconds =
        now.getHours() * 3600 +
        now.getMinutes() * 60 +
        now.getSeconds() +
        now.getMilliseconds() / 1000;
      this.gl.uniform4f(date, now.getFullYear(), now.getMonth() + 1, now.getDate(), seconds);
    }
    if (hasContent) this.gl.uniform1f(hasContent, this.hasContent ? 1 : 0);
    if (channel) this.gl.uniform1i(channel, 0);
    if (channelResolution) {
      this.gl.uniform3fv(
        channelResolution,
        new Float32Array([this.width, this.height, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
      );
    }
  }

  private setCustomUniform(name: string, value: ShaderUniformValue) {
    if (!this.resources || RESERVED_UNIFORMS.has(name)) return;

    const location = this.getUniformLocation(name);
    const type = this.resources.uniformTypes.get(name);
    if (!location || type === undefined) return;

    const values = Array.isArray(value) ? value : [value];
    const numbers = values.map((entry) => (typeof entry === "boolean" ? Number(entry) : entry));

    switch (type) {
      case this.gl.BOOL:
      case this.gl.INT:
        this.gl.uniform1i(location, Number(numbers[0]));
        break;
      case this.gl.BOOL_VEC2:
      case this.gl.INT_VEC2:
        this.gl.uniform2iv(location, numbers.slice(0, 2));
        break;
      case this.gl.BOOL_VEC3:
      case this.gl.INT_VEC3:
        this.gl.uniform3iv(location, numbers.slice(0, 3));
        break;
      case this.gl.BOOL_VEC4:
      case this.gl.INT_VEC4:
        this.gl.uniform4iv(location, numbers.slice(0, 4));
        break;
      case this.gl.FLOAT_VEC2:
        this.gl.uniform2fv(location, numbers.slice(0, 2));
        break;
      case this.gl.FLOAT_VEC3:
        this.gl.uniform3fv(location, numbers.slice(0, 3));
        break;
      case this.gl.FLOAT_VEC4:
        this.gl.uniform4fv(location, numbers.slice(0, 4));
        break;
      case this.gl.FLOAT_MAT2:
        this.gl.uniformMatrix2fv(location, false, numbers.slice(0, 4));
        break;
      case this.gl.FLOAT_MAT3:
        this.gl.uniformMatrix3fv(location, false, numbers.slice(0, 9));
        break;
      case this.gl.FLOAT_MAT4:
        this.gl.uniformMatrix4fv(location, false, numbers.slice(0, 16));
        break;
      default:
        this.gl.uniform1f(location, Number(numbers[0]));
    }
  }

  private uploadContent() {
    if (!this.contentDirty) return true;

    try {
      if (this.source.width < 1 || this.source.height < 1) {
        throw new Error("Unable to read HTML texture");
      }
      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.contentTexture);
      this.gl.texImage2D(
        this.gl.TEXTURE_2D,
        0,
        this.gl.RGBA,
        this.gl.RGBA,
        this.gl.UNSIGNED_BYTE,
        this.source,
      );

      const error = this.gl.getError();
      if (error !== this.gl.NO_ERROR) {
        throw new Error(`Unable to upload HTML texture (WebGL error ${error})`);
      }

      this.contentDirty = false;
      this.hasContent = true;
      return true;
    } catch (error) {
      this.contentDirty = false;
      this.onError(error instanceof Error ? error.message : "Unable to upload HTML texture");
      return false;
    }
  }

  private render(now: number, force = false) {
    if (!this.resources || this.disposed) return;

    if (!force && this.lastFrameTime && now - this.lastFrameTime < this.frameInterval) return;

    const delta = this.lastFrameTime ? Math.min((now - this.lastFrameTime) / 1000, 0.1) : 0;
    this.lastFrameTime = now;
    this.elapsedTime += delta * this.speed;
    this.pointerAge += delta;
    this.pointerEnergy *= Math.exp(-delta * 2.4);
    this.pointerVelocityX *= Math.exp(-delta * 5.5);
    this.pointerVelocityY *= Math.exp(-delta * 5.5);
    this.scrollVelocity *= Math.exp(-delta * 7.5);
    this.frame += 1;

    const smoothing = 1 - this.mouseDamping;
    this.pointerX += (this.targetPointerX - this.pointerX) * smoothing;
    this.pointerY += (this.targetPointerY - this.pointerY) * smoothing;
    this.pointerInside += (this.targetPointerInside - this.pointerInside) * smoothing;

    if (!this.uploadContent()) return;

    this.gl.viewport(0, 0, this.width, this.height);
    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.useProgram(this.resources.program);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.contentTexture);
    this.setBuiltInUniforms(delta);

    for (const [name, value] of Object.entries(this.uniforms)) {
      this.setCustomUniform(name, value);
    }

    this.gl.bindVertexArray(this.vertexArray);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertexCount);
    this.gl.bindVertexArray(null);

    if (!this.ready && (!this.expectsContent || this.hasContent)) {
      this.ready = true;
      this.onReady();
    }
  }

  private tick = (now: number) => {
    this.animationFrame = 0;
    if (!this.playing || this.disposed) return;

    this.render(now);
    this.schedule();
  };

  private schedule() {
    if (!this.animationFrame && !this.disposed) {
      this.animationFrame = requestAnimationFrame(this.tick);
    }
  }

  setShader(shaderCode: string, vertexShaderCode?: string) {
    try {
      const next = this.createProgram(shaderCode, vertexShaderCode);
      this.deleteProgram();
      this.resources = next;
      this.ready = false;
      this.requestRender();
      return true;
    } catch (error) {
      this.onError(error instanceof Error ? error.message : "Unable to compile HTML shader");
      return false;
    }
  }

  setUniforms(uniforms: ShaderUniforms) {
    this.uniforms = uniforms;
    this.requestRender();
  }

  setFrameRate(frameRate: number) {
    this.frameInterval = 1000 / Math.max(1, Math.min(frameRate, 120));
  }

  setMouseDamping(damping: number) {
    this.mouseDamping = Math.max(0, Math.min(damping, 0.99));
  }

  setPixelRatio(pixelRatio: number) {
    this.pixelRatio = Math.max(0.25, Math.min(pixelRatio, 2));
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  setContentAvailable(available: boolean) {
    this.expectsContent = available;
    if (!available) this.hasContent = false;
    this.requestRender();
  }

  resize(cssWidth: number, cssHeight: number, pixelRatio: number) {
    this.setPixelRatio(pixelRatio);
    this.width = Math.max(1, Math.round(cssWidth * this.pixelRatio));
    this.height = Math.max(1, Math.round(cssHeight * this.pixelRatio));

    if (this.output.width !== this.width || this.output.height !== this.height) {
      this.output.width = this.width;
      this.output.height = this.height;
    }

    if (!this.targetPointerX && !this.targetPointerY) {
      this.pointerX = this.targetPointerX = this.width / 2;
      this.pointerY = this.targetPointerY = this.height / 2;
    }

    this.requestRender();
  }

  setPointer(x: number, y: number, pressed = false) {
    const nextX = x * this.pixelRatio;
    const nextY = this.height - y * this.pixelRatio;
    const velocityX = nextX - this.targetPointerX;
    const velocityY = nextY - this.targetPointerY;
    const distance = Math.hypot(velocityX, velocityY);

    this.targetPointerX = nextX;
    this.targetPointerY = nextY;

    if (distance > 0.1) {
      this.pointerVelocityX = velocityX;
      this.pointerVelocityY = velocityY;
      this.pointerEnergy = Math.min(
        1,
        this.pointerEnergy + (distance / Math.max(this.width, this.height)) * 8,
      );
      this.pointerAge = 0;
    }

    if (pressed && !this.pointerPressed) {
      this.clickX = Math.max(1, this.targetPointerX);
      this.clickY = Math.max(1, this.targetPointerY);
    }
    if (!pressed && this.pointerPressed) {
      this.clickX = -Math.abs(this.clickX);
      this.clickY = -Math.abs(this.clickY);
    }

    this.pointerPressed = pressed;

    this.requestRender();
  }

  setPointerInside(inside: boolean) {
    this.targetPointerInside = inside ? 1 : 0;
    this.requestRender();
  }

  setScrollVelocity(deltaY: number) {
    const limit = Math.max(this.height, 1);
    this.scrollVelocity = Math.max(
      -limit,
      Math.min(limit, this.scrollVelocity + deltaY * this.pixelRatio),
    );
    this.requestRender();
  }

  releasePointer() {
    if (!this.pointerPressed) return;

    this.pointerPressed = false;
    this.clickX = -Math.abs(this.clickX);
    this.clickY = -Math.abs(this.clickY);
    this.requestRender();
  }

  markContentDirty() {
    this.contentDirty = true;
    this.requestRender();
  }

  requestRender() {
    if (this.playing) this.schedule();
    else this.render(performance.now(), true);
  }

  play() {
    if (this.playing || this.disposed) return;
    this.playing = true;
    this.lastFrameTime = 0;
    this.schedule();
  }

  pause() {
    this.playing = false;
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
  }

  dispose() {
    if (this.disposed) return;

    this.disposed = true;
    this.pause();
    this.deleteProgram();
    this.resources = undefined;
    this.gl.deleteTexture(this.contentTexture);
    this.gl.deleteBuffer(this.positionBuffer);
    this.gl.deleteVertexArray(this.vertexArray);
  }
}
