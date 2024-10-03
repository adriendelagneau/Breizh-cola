'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { useTimelineStore2 } from '@/store/zuStore' 
import { useGSAP } from '@gsap/react'

export function SodaOriginal(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/model/soda-zero.glb');
  const { timeline2 } = useTimelineStore2();

  useGSAP(() => {
         // Start from scale 0
         groupRef.current.scale.set(0, 0, 0);

         // Add the animation to the timeline
         timeline2.to(
           groupRef.current.scale,
           {
             x: 12,
             y: 12,
             z: 12,
             duration: 0.6,
             delay: 0.5,
             ease: 'power3.out',
           },
           'two' // GSAP label for syncing animations
         );
  }, [])


  return (
    <group ref={groupRef} {...props} dispose={null} position={[60,-40,0]}>
      <group rotation={[-Math.PI / 2, 0.15, Math.PI * 0.8]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.aiStandardSurface4SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.aiStandardSurface2SG} />
        <mesh geometry={nodes.Object_4001.geometry} material={materials['Material.005']} />
      </group>
    </group>
  );
}

// Preload the GLTF model
useGLTF.preload('/model/soda-zero.glb');
