/* eslint-disable */
export const inspiraImageParticles = () => {
  "use strict";

  const _requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      setTimeout(callback, 10);
    };
  const PI2 = Math.PI * 2;
  let imageData, renderCount;
  let index, startIndex, layerIndex;
  let origin, particle, touch, touchIndex, rect;
  let x, y, z, dX, dY, dZ, distance;
  let force, angle, intensity, vertices;
  let canvas, context, data, r, g, b, a;
  let tick;
  let rotationX = 0;
  let rotationY = 0;

  class InspiraImageParticle {
    constructor(optionsParam) {
      let options = {};
      if (optionsParam) {
        if (optionsParam.nodeName) {
          options = JSON.parse(JSON.stringify(optionsParam.dataset));
          if (optionsParam.nodeName === "IMG") {
            options.image = optionsParam;
          } else {
            options.wrapperElement = optionsParam;
          }
        } else {
          options = optionsParam;
        }
      }
      this.state = "stopped";
      this.touches = [];
      this.on("imageLoaded", this._onImageLoaded);
      this._initImage(options);
    }

    on(event, fn) {
      this.events = this.events || {};
      this.events[event] = this.events[event] || [];
      this.events[event].push(fn);
    }

    emit(event, params) {
      const events = this.events[event];
      if (events && events.length) {
        for (let eventIndex = 0; eventIndex < events.length; eventIndex++) {
          const cb = events[eventIndex];
          cb.call(this, params);
        }
      }
    }

    get renderer() {
      return this._renderer;
    }

    set renderer(value) {
      this._renderer = value;
      this._draw = this["_" + value + "Renderer"];
      try {
        this["_" + value + "InitContext"]();
      } catch (e) {
        console.log(e);
        if (value !== "default") {
          this.renderer = "default";
        }
      }
    }

    set color(value) {
      this.colorArr = this._parseColor(value);
      if (this.colorArr) {
        if (isNaN(this.colorArr[3])) {
          this.colorArr[3] = 255;
        }
        if (0 < this.colorArr[3] && this.colorArr[3] <= 1) {
          this.colorArr[3] *= 255;
        }
      }
    }

    start(optionsParam) {
      const options = optionsParam || {};
      this.initPosition = options.initPosition || this.initPosition;
      this.initDirection = options.initDirection || this.initDirection;
      if (this.canvas) {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.display = "";
      }
      this._initOrigins();
      this._initParticles();
      this._webglSetAttributes();
      if (this.state !== "running") {
        this.state = "running";
        if (!this.disableInteraction) {
          if ("ontouchstart" in window || window.navigator.msPointerEnabled) {
            document.body.addEventListener("touchstart", this._touchHandler);
            document.body.addEventListener("touchmove", this._touchHandler);
            document.body.addEventListener("touchend", this._clearTouches);
            document.body.addEventListener("touchcancel", this._clearTouches);
          } else {
            this.canvas.addEventListener("mousemove", this._mouseHandler);
            this.canvas.addEventListener("mouseout", this._clearTouches);
            this.canvas.addEventListener("click", this._clickHandler);
          }
        }
        this._animate();
      }
    }

    stop(optionsParam) {
      const options = optionsParam || {};
      this.fadePosition = options.fadePosition || this.fadePosition;
      this.fadeDirection = options.fadeDirection || this.fadeDirection;
      this._fade();
      document.body.removeEventListener("touchstart", this._touchHandler);
      document.body.removeEventListener("touchmove", this._touchHandler);
      document.body.removeEventListener("touchend", this._clearTouches);
      document.body.removeEventListener("touchcancel", this._clearTouches);
      if (this.canvas) {
        this.canvas.removeEventListener("mousemove", this._mouseHandler);
        this.canvas.removeEventListener("mouseout", this._clearTouches);
        this.canvas.removeEventListener("click", this._clickHandler);
      }
    }

    _animate() {
      if (this.state !== "stopped") {
        this._calculate();
        this._draw();
        _requestAnimationFrame(() => this._animate());
      } else {
        this.emit("stopped");
      }
    }

    get _mouseHandler() {
      return (e) => {
        this.touches = [
          {
            x: e.offsetX,
            y: e.offsetY,
            z: 49 + (this.layerCount - 1) * this.layerDistance,
            force: 1,
          },
        ];
      };
    }

    get _clickHandler() {
      return (e) => {
        const strength = this.clickStrength;
        this.origins.map((o) => (o.z -= strength));
        setTimeout(() => {
          this.origins.map((o) => (o.z += strength));
        }, 100);
      };
    }

    get _touchHandler() {
      return (e) => {
        this.touches = [];
        rect = this.canvas.getBoundingClientRect();
        for (touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) {
          touch = e.changedTouches[touchIndex];
          if (touch.target === this.canvas) {
            this.touches.push({
              x: touch.pageX - rect.left,
              y: touch.pageY - rect.top,
              z: 49 + (this.layerCount - 1) * this.layerDistance,
              force: touch.force || 1,
            });
            e.preventDefault();
          }
        }
      };
    }

    get _clearTouches() {
      return (e) => {
        this.touches = [];
      };
    }

    _onImageLoaded(options) {
      this.imageWidth = this.image.naturalWidth || this.image.width;
      this.imageHeight = this.image.naturalHeight || this.image.height;
      this.imageRatio = this.imageWidth / this.imageHeight;
      this.width = this.width || this.imageWidth;
      this.height = this.height || this.imageHeight;
      this.renderSize = (this.width + this.height) / 4;
      if (this.srcImage) {
        this.srcImage.style.display = "none";
      }
      this._initSettings(options);
      this._initContext(options);
      this._initResponsive(options);
      this.start();
    }

    _initImage(options) {
      this.srcImage = options.image;
      if (!this.srcImage && options.imageId) {
        this.srcImage = document.getElementById(options.imageId);
      }
      this.imageUrl = options.imageUrl || this.srcImage.src;
      this.image = document.createElement("img");
      this.wrapperElement = options.wrapperElement || this.srcImage.parentElement;
      this.image.onload = () => this.emit("imageLoaded", options);
      this.image.crossOrigin = "Anonymous";
      if (options.addTimestamp) {
        if (/\?/.test(this.imageUrl)) {
          this.imageUrl += "&d=" + Date.now();
        } else {
          this.imageUrl += "?d=" + Date.now();
        }
      }
      this.image.src = this.imageUrl;
    }

    _initContext(options) {
      this.canvas = options.canvas;
      if (!this.canvas && !this.context && this.wrapperElement) {
        this.canvas = document.createElement("canvas");
        this.wrapperElement.appendChild(this.canvas);
      }
      if (this.convas) {
        this.convas.style.display = "none";
      }
      this.context = options.context;
      this.renderer = options.renderer || "default";
    }

    _defaultInitContext(options) {
      this.context = this.context || this.canvas.getContext("2d");
    }

    _webglInitContext() {
      this.context =
        this.context ||
        this.canvas.getContext("webgl2") ||
        this.canvas.getContext("experimental-webgl");
      this.fragmentShaderScript = `#version 300 es
    
            precision highp float;
    
            in vec4 vColor;
            out vec4 fragColor;
    
            void main(void) {
              // fragColor = vec4(1, 1, 1, 0.1);
              fragColor = vColor;
            }
          `;

      this.vertexShaderScript = `#version 300 es
    
            precision highp float;
    
            in vec3 vertexPosition;
            in vec4 vertexColor;
            uniform vec3 vertexOffset;
            uniform float pointSize;
            uniform float depth;
            vec3 mirror = vec3(1, -1, 1);
    
            uniform mat4 modelViewMatrix;
            uniform mat4 perspectiveMatrix;
            uniform mat4 rotationMatrix;
    
            out vec4 vColor;
    
            void main(void) {
              gl_Position = rotationMatrix * perspectiveMatrix * modelViewMatrix * vec4(mirror * vertexPosition + vertexOffset, vertexPosition);
              gl_PointSize = pointSize + max((log(vertexPosition.z) - 3.91) * depth, -pointSize + 1.0);
              vColor = vertexColor;
            }
          `;
      this.context.viewport(0, 0, this.width, this.height);
      const vertexShader = this.context.createShader(this.context.VERTEX_SHADER);
      this.context.shaderSource(vertexShader, this.vertexShaderScript);
      this.context.compileShader(vertexShader);
      if (!this.context.getShaderParameter(vertexShader, this.context.COMPILE_STATUS)) {
        console.log(this.context.getShaderInfoLog(vertexShader));
      }
      const fragmentShader = this.context.createShader(this.context.FRAGMENT_SHADER);
      this.context.shaderSource(fragmentShader, this.fragmentShaderScript);
      this.context.compileShader(fragmentShader);
      if (!this.context.getShaderParameter(fragmentShader, this.context.COMPILE_STATUS)) {
        console.log(this.context.getShaderInfoLog(fragmentShader));
      }
      this.program = this.context.createProgram();
      this.context.attachShader(this.program, vertexShader);
      this.context.attachShader(this.program, fragmentShader);
      this.context.linkProgram(this.program);
      this.context.useProgram(this.program);
      this.vertexPosition = this.context.getAttribLocation(this.program, "vertexPosition");
      this.context.enableVertexAttribArray(this.vertexPosition);
      this.vertexColor = this.context.getAttribLocation(this.program, "vertexColor");
      this.context.enableVertexAttribArray(this.vertexColor);
      this.context.clearColor(0.0, 0.0, 0.0, 0.0);
      this.context.enable(this.context.BLEND);
      this.context.disable(this.context.DEPTH_TEST);
      this.context.blendFunc(this.context.SRC_ALPHA, this.context.ONE);
      this.vertexBuffer = this.context.createBuffer();
      this.context.bindBuffer(this.context.ARRAY_BUFFER, this.vertexBuffer);
      this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);
      this.vertexOffset = this.context.getUniformLocation(this.program, "vertexOffset");
      this.context.uniform3f(this.vertexOffset, 0, 0, 1000);
      this.context.vertexAttribPointer(this.vertexPosition, 3.0, this.context.FLOAT, false, 28, 0);
      this.context.vertexAttribPointer(this.vertexColor, 4.0, this.context.FLOAT, false, 28, 12);
      this.uModelViewMatrix = this.context.getUniformLocation(this.program, "modelViewMatrix");
      this.uPerspectiveMatrix = this.context.getUniformLocation(this.program, "perspectiveMatrix");
      this.uRotationMatrix = this.context.getUniformLocation(this.program, "rotationMatrix");
      this.uPointSize = this.context.getUniformLocation(this.program, "pointSize");
      this.uDepth = this.context.getUniformLocation(this.program, "depth");
      // this.uVertexColors = this.context.getUniformLocation(this.program, 'vertexColors');
      // this.uVertexIndex = this.context.getUniformLocation(this.program, 'vertexIndex');

      this._webglSetAttributes();
    }

    _webglSetAttributes() {
      if (this.renderer === "webgl") {
        var fieldOfView = 1;
        var aspectRatio = this.canvas.width / this.canvas.height;
        var nearPlane = 10;
        var farPlane = 100;
        var top = nearPlane * Math.tan((fieldOfView * Math.PI) / 360.0);
        var bottom = -top;
        var right = top * aspectRatio;
        var left = -right;
        var a = (right + left) / (right - left);
        var b = (top + bottom) / (top - bottom);
        var c = (farPlane + nearPlane) / (farPlane - nearPlane);
        var d = (2 * farPlane * nearPlane) / (farPlane - nearPlane);
        var x = (2 * nearPlane) / (right - left);
        var y = (2 * nearPlane) / (top - bottom);

        var perspectiveMatrix = [x, 0, a, 0, 0, y, b, 0, 0, 0, c, d, 0, 0, -1, 0];
        var modelViewMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        this.context.viewport(0, 0, this.width, this.height);
        this.context.uniformMatrix4fv(
          this.uModelViewMatrix,
          false,
          new Float32Array(perspectiveMatrix),
        );
        this.context.uniformMatrix4fv(
          this.uPerspectiveMatrix,
          false,
          new Float32Array(modelViewMatrix),
        );
        this.context.uniform1f(this.uPointSize, this.particleSize);
        this.context.uniform1f(this.uDepth, this.depth);
        // this.context.uniform4fv(this.uVertexColors, new Float32Array(this.vertexColors));
        // this.context.uniform1f(this.uVertexIndex, 0);
        this._updateRotation();
      }
    }

    _updateRotation() {
      const a = Math.cos(rotationX);
      const b = Math.sin(rotationX);
      const c = Math.cos(rotationY);
      const d = Math.sin(rotationY);
      var rotationMatrix = [c, 0, d, 0, 0, a, -b, 0, -c, b, a, 0, 0, 0, 0, 1];
      this.context.uniformMatrix4fv(this.uRotationMatrix, false, new Float32Array(rotationMatrix));
    }

    _webglRenderer() {
      vertices = new Float32Array(this.vertices);
      this.context.bufferData(this.context.ARRAY_BUFFER, vertices, this.context.STATIC_DRAW);
      this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);
      this.context.drawArrays(this.context.POINTS, 0, this.particles.length);
      this.context.flush();
    }

    _initSettings(options) {
      this.width = options.width * 1 || this.width;
      this.height = options.height * 1 || this.height;
      this.maxWidth = options.maxWidth;
      this.maxHeight = options.maxHeight;
      this.minWidth = options.minWidth;
      this.minHeight = options.minHeight;
      if (this.maxWidth) {
        if (/%$/.test(this.maxWidth)) {
          this.maxWidth = (this.width * this.maxWidth.replace("%", "")) / 100;
        } else {
          this.maxWidth *= 1;
        }
      }
      if (this.maxHeight) {
        if (/%$/.test(this.maxHeight)) {
          this.maxHeight = (this.height * this.maxHeight.replace("%", "")) / 100;
        } else {
          this.maxHeight *= 1;
        }
      }
      if (this.minWidth) {
        if (/%$/.test(this.minWidth)) {
          this.minWidth = (this.width * this.minWidth.replace("%", "")) / 100;
        } else {
          this.minWidth *= 1;
        }
      }
      if (this.minHeight) {
        if (/%$/.test(this.minHeight)) {
          this.minHeight = (this.height * this.minHeight.replace("%", "")) / 100;
        } else {
          this.minHeight *= 1;
        }
      }
      this.alphaFade = 0.4;
      this.gravity = options.gravity * 1 || 0.08;
      this.particleGap = options.particleGap * 1 || 3;
      this.particleSize = options.particleSize * 1 || 1;
      this.layerCount = options.layerCount * 1 || 1;
      this.depth = options.depth * 1 || 1;
      this.rotationDuration = options.rotationDuration * 1 || 0;
      this.growDuration = options.growDuration * 1 || 200;
      this.waitDuration = options.waitDuration * 1 || 200;
      this.shrinkDuration = options.shrinkDuration * 1 || 200;
      this.shrinkDistance = options.shrinkDistance * 1 || 50;
      this.threeDimensional =
        options.threeDimensional !== undefined && options.threeDimensional !== "false"
          ? !!options.threeDimensional
          : false;
      this.lifeCycle =
        options.lifeCycle !== undefined && options.lifeCycle !== "false"
          ? !!options.lifeCycle
          : false;
      this.layerDistance = options.layerDistance || this.particleGap;
      this.initPosition = options.initPosition || "random";
      this.initDirection = options.initDirection || "random";
      this.fadePosition = options.fadePosition || "none";
      this.fadeDirection = options.fadeDirection || "none";
      this.noise = isNaN(options.noise * 1) ? 10 : options.noise * 1;
      this.disableInteraction = options.disableInteraction;
      this.mouseForce = options.mouseForce * 1 || 30;
      this.clickStrength = options.clickStrength * 1 || 0;
      this.color = options.color;
      this.colorArr = options.colorArr || this.colorArr;
    }

    _initResponsive(options) {
      this.responsiveWidth = this.wrapperElement && options.responsiveWidth;
      if (this.responsiveWidth) {
        this.on("stopped", () => {
          this.width = this.wrapperElement.clientWidth;
          this.start();
        });
        this.wrapperElement.addEventListener("resize", () => {
          if (this.width !== this.wrapperElement.clientWidth) {
            this.stop();
          }
        });
        this.width = this.wrapperElement.clientWidth;
      }
    }

    _calculate() {
      this.vertices = this.renderer === "webgl" ? [] : false;

      renderCount = 0;
      for (index = 0; index < this.particles.length; index++) {
        origin = this.origins[index];
        particle = this.particles[index];
        dX = origin.x - particle.x + (Math.random() - 0.5) * this.noise;
        dY = origin.y - particle.y + (Math.random() - 0.5) * this.noise;
        dZ = origin.z - particle.z + ((Math.random() - 0.5) * this.noise) / 1000;
        distance = Math.sqrt(dX * dX + dY * dY + dZ * dZ);
        force = distance * 0.01;
        particle.vx += force * (dX / distance) * this.speed;
        particle.vy += force * (dY / distance) * this.speed;
        particle.vz += force * (dZ / distance) * this.speed;
        for (touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
          touch = this.touches[touchIndex];
          dX = particle.x - touch.x;
          dY = particle.y - touch.y;
          dZ = particle.z - touch.z;
          distance = Math.sqrt(dX * dX + dY * dY + dZ * dZ);
          force = (this.mouseForce * touch.force) / distance;
          particle.vx += force * (dX / distance) * this.speed;
          particle.vy += force * (dY / distance) * this.speed;
          particle.vz += force * (dZ / distance) * this.speed;
        }
        particle.vx *= this.gravityFactor;
        particle.vy *= this.gravityFactor;
        particle.vz *= this.gravityFactor;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        if (
          0 > particle.x ||
          particle.x >= this.width ||
          0 > particle.y ||
          particle.y >= this.height
        ) {
          particle.isHidden = true;
          if (this.state === "stopping") {
            particle.isDead = true;
          }
        } else {
          if (this.state === "stopping" && !particle.isDead) {
            renderCount++;
          }
          particle.isHidden = false;
        }
        if (this.vertices) {
          x = particle.x - this.width / 2;
          y = particle.y - this.height / 2;
          z = particle.z;
          a = origin.vertexColors[3];
          if (this.lifeCycle) {
            origin.tick += 1;
            if (origin.tick >= 0) {
              if (origin.tick < this.growDuration) {
                a = a * (origin.tick / this.growDuration);
                // z -= 50 * (tick / this.shrinkDuration);
              } else {
                tick = origin.tick - this.growDuration - this.waitDuration;
                if (tick >= 0 && tick <= this.shrinkDuration) {
                  touch = this.touches[touchIndex];
                  // rotationX = Math.PI / 2 + Math.cos(dX * Math.PI / 2) * dX * Math.PI * 0.1;
                  // rotationY = Math.PI / 2 + Math.cos(dY * Math.PI / 2) * dY * Math.PI * 0.1;
                  distance = Math.sqrt(x * x + y * y + (z - 50) * (z - 50));
                  // distance = Math.sqrt(x * x + y * y);
                  force = tick / this.shrinkDuration;
                  x += this.shrinkDistance * (x / distance) * force;
                  y += this.shrinkDistance * (y / distance) * force;
                  z += this.shrinkDistance * ((z - 50) / distance) * force;
                  a *= 1 - force;
                  if (tick === this.shrinkDuration) {
                    origin.tick = 0;
                  }
                }
              }
            } else {
              a = 0;
            }
          }
          this.vertices.push(
            x,
            y,
            z,
            origin.vertexColors[0],
            origin.vertexColors[1],
            origin.vertexColors[2],
            a,
          );
        }
      }
      if (this.state === "stopping" && renderCount === 0) {
        this.state = "stopped";
      }
    }

    _defaultRenderer() {
      this.depth = Math.max((this.layerDistance * this.layerCount) / 2, this.mouseForce);
      this.minZ = -this.depth;
      this.maxZ = this.depth;
      imageData = this.context.createImageData(this.width, this.height);

      for (index = 0; index < this.origins.length; index++) {
        origin = this.origins[index];
        particle = this.particles[index];
        if (!particle.isDead && !particle.isHidden) {
          x = ~~particle.x;
          y = ~~particle.y;
          a = origin.color[3];
          if (this.alphaFade > 0 && this.layerCount > 1) {
            z = Math.max(Math.min(particle.z, this.maxZ), this.minZ) - this.minZ;
            a = a * (1 - this.alphaFade) + a * this.alphaFade * (z / (this.maxZ - this.minZ));
            a = Math.max(Math.min(~~a, 255), 0);
          }
          startIndex = (x + y * this.width) * 4;
          imageData.data[startIndex + 0] = origin.color[0];
          imageData.data[startIndex + 1] = origin.color[1];
          imageData.data[startIndex + 2] = origin.color[2];
          imageData.data[startIndex + 3] = a;
        }
      }
      this.context.putImageData(imageData, 0, 0);
    }

    _initParticles() {
      this.particles = undefined;
      this.particles = [];
      for (index = 0; index < this.origins.length; index++) {
        origin = this.origins[index];
        particle = {};
        this._initParticlePosition(origin, particle);
        this._initParticleDirection(particle);
        this.particles.push(particle);
      }
    }

    _initParticlePosition(origin, particle) {
      particle.z = 0;
      switch (this.initPosition) {
        case "random": {
          particle.x = Math.random() * this.width;
          particle.y = Math.random() * this.height;
          break;
        }
        case "top": {
          particle.x = Math.random() * this.width * 3 - this.width;
          particle.y = -Math.random() * this.height;
          break;
        }
        case "left": {
          particle.x = -Math.random() * this.width;
          particle.y = Math.random() * this.height * 3 - this.height;
          break;
        }
        case "bottom": {
          particle.x = Math.random() * this.width * 3 - this.width;
          particle.y = this.height + Math.random() * this.height;
          break;
        }
        case "right": {
          particle.x = this.width + Math.random() * this.width;
          particle.y = Math.random() * this.height * 3 - this.height;
          break;
        }
        case "misplaced": {
          particle.x = origin.x + Math.random() * this.width * 0.3 - this.width * 0.1;
          particle.y = origin.y + Math.random() * this.height * 0.3 - this.height * 0.1;
          break;
        }
        default: {
          particle.x = origin.x;
          particle.y = origin.y;
        }
      }
    }

    _fade() {
      if (
        this.fadePosition === "explode" ||
        this.fadePosition === "top" ||
        this.fadePosition === "left" ||
        this.fadePosition === "bottom" ||
        this.fadePosition === "right"
      ) {
        this.state = "stopping";
      } else {
        this.state = "stopped";
      }
      if (this.origins) {
        for (index = 0; index < this.origins.length; index++) {
          this._fadeOriginPosition(this.origins[index]);
          this._fadeOriginDirection(this.particles[index]);
        }
      }
    }

    _fadeOriginPosition(origin) {
      switch (this.fadePosition) {
        case "random": {
          origin.x = Math.random() * this.width * 2 - this.width;
          origin.y = Math.random() * this.height * 2 - this.height;
          if (origin.x > 0) origin.x += this.width;
          if (origin.y > 0) origin.y += this.height;
          break;
        }
        case "top": {
          origin.x = Math.random() * this.width * 3 - this.width;
          origin.y = -Math.random() * this.height;
          break;
        }
        case "left": {
          origin.x = -Math.random() * this.width;
          origin.y = Math.random() * this.height * 3 - this.height;
          break;
        }
        case "bottom": {
          origin.x = Math.random() * this.width * 3 - this.width;
          origin.y = this.height + Math.random() * this.height;
          break;
        }
        case "right": {
          origin.x = this.width + Math.random() * this.width;
          origin.y = Math.random() * this.height * 3 - this.height;
          break;
        }
        default: {
          // Stay in place
        }
      }
    }

    _initParticleDirection(particle) {
      particle.vz = 0;
      switch (this.initDirection) {
        case "random": {
          angle = Math.random() * Math.PI * 2;
          intensity = Math.random();
          particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
          particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
          break;
        }
        case "top": {
          angle = Math.random() * Math.PI - Math.PI / 2;
          intensity = Math.random();
          particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
          particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
          break;
        }
        case "left": {
          angle = Math.random() * Math.PI + Math.PI;
          intensity = Math.random();
          particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
          particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
          break;
        }
        case "bottom": {
          angle = Math.random() * Math.PI + Math.PI / 2;
          intensity = Math.random();
          particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
          particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
          break;
        }
        case "right": {
          angle = Math.random() * Math.PI;
          intensity = Math.random();
          particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
          particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
          break;
        }
        default: {
          particle.vx = 0;
          particle.vy = 0;
        }
      }
    }

    _fadeOriginDirection(particle) {
      switch (this.fadeDirection) {
        case "random": {
          angle = Math.random() * Math.PI * 2;
          intensity = Math.random();
          particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
          particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
          break;
        }
        case "top": {
          angle = Math.random() * Math.PI - Math.PI / 2;
          intensity = Math.random();
          particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
          particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
          break;
        }
        case "left": {
          angle = Math.random() * Math.PI + Math.PI;
          intensity = Math.random();
          particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
          particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
          break;
        }
        case "bottom": {
          angle = Math.random() * Math.PI + Math.PI / 2;
          intensity = Math.random();
          particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
          particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
          break;
        }
        case "right": {
          angle = Math.random() * Math.PI;
          intensity = Math.random();
          particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
          particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
          break;
        }
        default: {
          particle.vx = 0;
          particle.vy = 0;
        }
      }
    }

    _initOrigins() {
      canvas = document.createElement("canvas");
      if (this.responsiveWidth) {
        this.width = this.wrapperElement.clientWidth;
      }
      this.ratio =
        Math.min(this.width, this.maxWidth || Number.POSITIVE_INFINITY) /
        Math.min(this.height, this.maxHeight || Number.POSITIVE_INFINITY);
      if (this.ratio < this.imageRatio) {
        this.renderWidth = ~~Math.min(
          this.width || Number.POSITIVE_INFINITY,
          this.minWidth || this.imageWidth || Number.POSITIVE_INFINITY,
          this.maxWidth || Number.POSITIVE_INFINITY,
        );
        this.renderHeight = ~~(this.renderWidth / this.imageRatio);
      } else {
        this.renderHeight = ~~Math.min(
          this.height || Number.POSITIVE_INFINITY,
          this.minHeight || this.imageHeight || Number.POSITIVE_INFINITY,
          this.maxHeight || Number.POSITIVE_INFINITY,
        );
        this.renderWidth = ~~(this.renderHeight * this.imageRatio);
      }
      this.offsetX = ~~((this.width - this.renderWidth) / 2);
      this.offsetY = ~~((this.height - this.renderHeight) / 2);
      canvas.width = this.renderWidth;
      canvas.height = this.renderHeight;
      context = canvas.getContext("2d");
      context.drawImage(this.image, 0, 0, this.renderWidth, this.renderHeight);
      data = context.getImageData(0, 0, this.renderWidth, this.renderHeight).data;
      this.origins = undefined;
      this.origins = [];
      const duration = this.growDuration + this.waitDuration + this.shrinkDuration;
      for (x = 0; x < this.renderWidth; x += this.particleGap) {
        for (y = 0; y < this.renderHeight; y += this.particleGap) {
          index = (x + y * this.renderWidth) * 4;
          a = data[index + 3];
          if (a > 0) {
            const seed = Math.random();
            tick = -Math.floor(seed * duration);
            if (this.colorArr) {
              for (layerIndex = 0; layerIndex < this.layerCount; layerIndex++) {
                this.origins.push({
                  x: this.offsetX + x,
                  y: this.offsetY + y,
                  z: layerIndex * this.layerDistance + 50,
                  color: this.colorArr,
                  tick,
                  seed,
                  vertexColors: this.colorArr.map((c) => c / 255),
                });
              }
            } else {
              r = data[index];
              g = data[index + 1];
              b = data[index + 2];
              for (layerIndex = 0; layerIndex < this.layerCount; layerIndex++) {
                this.origins.push({
                  x: this.offsetX + x,
                  y: this.offsetY + y,
                  z: layerIndex * this.layerDistance + 50,
                  color: [r, g, b, a],
                  tick,
                  seed,
                  vertexColors: [r / 255, g / 255, b / 255, a / 255],
                });
              }
            }
          }
        }
      }
      this.speed = Math.log(this.origins.length) / 10;
      this.gravityFactor = 1 - this.gravity * this.speed;
    }

    _parseColor(strParam) {
      let color;
      if (typeof strParam !== "string") {
        return undefined;
      }
      const str = strParam.replace(" ", "");

      if ((color = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(str))) {
        color = [parseInt(color[1], 16), parseInt(color[2], 16), parseInt(color[3], 16)];
      } else if ((color = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(str))) {
        color = [
          parseInt(color[1], 16) * 17,
          parseInt(color[2], 16) * 17,
          parseInt(color[3], 16) * 17,
        ];
      } else if ((color = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(str))) {
        color = [+color[1], +color[2], +color[3], +color[4]];
      } else if ((color = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(str))) {
        color = [+color[1], +color[2], +color[3]];
      } else return undefined;

      return color;
    }
  }

  return {
    InspiraImageParticle,
  };
};
