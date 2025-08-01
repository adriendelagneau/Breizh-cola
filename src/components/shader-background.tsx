// ShaderBackground.tsx
'use client';

import { useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';
import fragmentShader from '../vertex/fragmentBg.glsl';
import vertexShader from '../vertex/vertexBg.glsl';

export default function ShaderBackground({ flavor }: { flavor: string }) {
  const { viewport } = useThree();

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(flavor === 'cherry' ? '#ff007f' : '#007fff') },
  }), [flavor]);

  useThree(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
