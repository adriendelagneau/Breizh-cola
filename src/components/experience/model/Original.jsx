'use client'

import React, { forwardRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

// ForwardRef allows the parent component to pass a ref down to the mesh
export const Original = forwardRef(({ scale, location, rotation, onLoaded }, ref) => {
  const { nodes, materials } = useGLTF('/model/soda-zero.glb'); // Load the GLTF model

  useEffect(() => {
    if (onLoaded) {
      onLoaded(); // Call the callback when the model is loaded
    }
  }, [onLoaded]); // Ensure the callback is called when the component mounts

  return (
    <group ref={ref} dispose={null}  position={location} scale={scale} rotation={rotation}>
      <group rotation={[-Math.PI / 2, 0.15, Math.PI * 0.8]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.aiStandardSurface4SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.aiStandardSurface2SG} />
        <mesh geometry={nodes.Object_4001.geometry} material={materials['Material.005']} />
      </group>
    </group>
  );
});

// Preload the GLTF model to improve loading times
useGLTF.preload('/model/soda-zero.glb');
