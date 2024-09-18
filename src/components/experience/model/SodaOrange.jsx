'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { useTimelineStore2 } from "@/store/zuStore"; // Import the hook from your store

export function SodaOrange() {
  const { nodes, materials } = useGLTF('/model/soda-orange.glb');
  const meshRef = useRef();
  
  // Get the timeline from the store
  const { timeline2 } = useTimelineStore2((state) => state);

  useEffect(() => {
    if (timeline2 && meshRef.current) {
      // Start from scale 0
      meshRef.current.scale.set(0, 0, 0);

      // Add the animation to the timeline
      timeline2.to(
        meshRef.current.scale,
        {
          x: 12,
          y: 12,
          z: 12,
          duration: 0.6,
          delay: 0.9,
          ease: 'power3.out',
        },
        'two' // GSAP label for syncing animations
      );
    }
  }, [timeline2]);

  return (
    <group ref={meshRef} dispose={null} rotation={[0, 0, -Math.PI * 0.04]} scale={12} position={[60, -40, 0]}>
      <group rotation={[-Math.PI / 2, 0, Math.PI * 0.8]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.aiStandardSurface4SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.aiStandardSurface2SG} />
        <mesh geometry={nodes.Object_4001.geometry} material={materials['Material.005']} />
      </group>
    </group>
  );
}

// Preload the GLTF model
useGLTF.preload('/model/soda-orange.glb');
