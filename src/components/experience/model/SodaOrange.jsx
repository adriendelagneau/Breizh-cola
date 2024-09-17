import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { useGSAPTimeline2 } from "@/store/zuStore";
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

export function SodaOrange() {
  const { nodes, materials } = useGLTF('/model/soda-orange.glb');
  const meshRef = useRef();
  const [screenSize, setScreenSize] = useState('sm'); // State to track screen size

  const { timeline } = useGSAPTimeline2();


  useGSAP(() => {
    timeline.to(meshRef.current.position, {x:20, delay: 2}, "two")
  })



  return (
    <group ref={meshRef} dispose={null} rotation={[0,0,Math.PI * 0.04]} scale={12} position={[60,-40,0]}>
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
