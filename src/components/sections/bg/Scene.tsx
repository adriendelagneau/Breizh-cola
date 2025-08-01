// components/Scene.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import ShaderBackground from '@/components/shader-background';

export default function Scene({ flavor }: { flavor: string }) {
  return (

      <ShaderBackground flavor={flavor} />
  
  );
}
