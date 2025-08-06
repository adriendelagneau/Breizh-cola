precision mediump float;

varying float vOpacity;

void main() {
    vec3 color = vec3(1.0, 0.6, 0.7); // pinkish
    gl_FragColor = vec4(color, vOpacity * 0.4);

    // Soft edges (optional)
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
}
