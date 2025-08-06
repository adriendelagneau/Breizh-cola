precision mediump float;

uniform vec3 uColor;
uniform float uOpacity;

varying float vAlpha;

void main() {
  float dist = distance(gl_PointCoord, vec2(0.5));
  float circle = smoothstep(0.5, 0.2, dist);

  gl_FragColor = vec4(uColor, uOpacity * circle * vAlpha);
}
