precision mediump float;

uniform float uTime;
attribute float aSpeed;
attribute float aOffset;

varying float vAlpha;

float noise(float x) {
  return fract(sin(x * 91.3458) * 47453.5453);
}

void main() {
  vec3 pos = position;

  float time = uTime + aOffset;
  pos.y = mod(pos.y + time * aSpeed, 6.0) - 3.0;

  pos.x += sin(pos.y + aOffset) * 0.1;
  pos.z += cos(pos.y + aOffset) * 0.1;

  vAlpha = 1.0 - smoothstep(2.0, 3.0, pos.y);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = 4.0;
}
