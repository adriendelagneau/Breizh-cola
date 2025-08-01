#pragma glslify: noise = require('glsl-noise/simplex/3d')

uniform float uTime;
varying vec2 vUv;

void main() {
  float n = noise(vec3(vUv * 6.0, uTime * 0.2)); // increase detail
  n = (n - 0.5) * 0.01; // center around 0, small variation range

  vec3 baseColor = vec3(0.349, 0.078, 0.125); // #591420
  vec3 color = baseColor + vec3(n);

  gl_FragColor = vec4(color, 1.0);
}
