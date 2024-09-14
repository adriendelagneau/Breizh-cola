import React from 'react';
import { Environment, Float, OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


const BreizhCherry = () => {
  return (
    <div className="absolute top-0 left-0 z-20 w-full h-screen pointer-events-none"  style={{ pointerEvents: 'none' }}>
      <Canvas style={{ pointerEvents: 'none' }} className="pointer-events-none">
        <Environment preset="sunset" />
        <OrthographicCamera makeDefault zoom={10} position={[0, 0, 50]} />
        <Float
          speed={3}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[0.2, 1]}
        >
         
        </Float>
      </Canvas>
    </div>
  );
};

export default BreizhCherry;
