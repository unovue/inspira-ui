// Corrected GLSL for the vertex shader
varying vec2 vUv; // <-- Declare varying BEFORE main

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv; // built-in attribute 'uv'
}