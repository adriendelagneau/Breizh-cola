precision mediump float;
uniform float uTime;
varying vec2 vUv;

#define NUM_BUBBLES 8

// Returns a soft circular shape
float circle(vec2 uv, vec2 center, float radius, float blur) {
  float dist = length(uv - center);
  return smoothstep(radius, radius - blur, dist);
}

void main() {
  vec3 base = vec3(0.349, 0.078, 0.125); // #591420
  vec3 color = base;

  for (int i = 0; i < NUM_BUBBLES; i++) {
    // Offset position based on time (each bubble different)
    float t = uTime * 0.1 + float(i) * 10.0;
    vec2 center = vec2(
      0.5 + 0.4 * sin(t + float(i) * 1.3),
      0.5 + 0.4 * cos(t * 0.8 + float(i) * 2.1)
    );
    float radius = 0.2 + 0.05 * sin(t * 0.5 + float(i));
    float blur = 0.15;

    float bubble = circle(vUv, center, radius, blur);
    color += vec3(0.2, 0.05, 0.07) * bubble;
  }

  gl_FragColor = vec4(color, 1.0);
}
