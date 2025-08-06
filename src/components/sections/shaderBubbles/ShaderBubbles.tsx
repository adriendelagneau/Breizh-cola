"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import fragmentShader from "../../../shaders/fragment/fragmentBubbles.glsl";
import vertexShader from "../../../shaders/vertex/vertexBubbles.glsl";

export default function ShaderBubbles() {
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}
