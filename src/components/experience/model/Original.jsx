'use client'

import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'


export const Original = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/model/soda-zero.glb');

  return (
    <group ref={ref} {...props} dispose={null} position={[0,-40,0]} scale={10}>
      <group rotation={[-Math.PI / 2, 0.15, Math.PI * 0.8]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.aiStandardSurface4SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.aiStandardSurface2SG} />
        <mesh geometry={nodes.Object_4001.geometry} material={materials['Material.005']} />
      </group>
    </group>
  );
})

// Preload the GLTF model
useGLTF.preload('/model/soda-zero.glb');
