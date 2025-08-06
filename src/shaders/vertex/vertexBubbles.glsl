uniform float uTime;

attribute float aSpeed;
attribute vec3 aOffset;

varying float vOpacity;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    vec3 pos = position;

    float time = uTime * aSpeed;

    // Bubble float upward and noise-based drift
    pos.y += time;

    float noiseX = sin(aOffset.x * 10.0 + time * 2.0) * 0.2;
    float noiseZ = cos(aOffset.z * 10.0 + time * 2.0) * 0.2;

    pos.x += noiseX;
    pos.z += noiseZ;

    // Pass opacity for fragment shader
    vOpacity = 1.0 - smoothstep(0.0, 4.0, pos.y);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos + aOffset, 1.0);
}

