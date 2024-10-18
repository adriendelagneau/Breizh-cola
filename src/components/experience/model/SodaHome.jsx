'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { useTimelineStore } from '@/store/zuStore' 
import { useGSAP } from '@gsap/react'

export function SodaHome(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/model/soda-zero.glb');
  const { timeline } = useTimelineStore();
  const [screenSize, setScreenSize] = useState('sm'); // State to track screen size

  // Function to handle resizing and updating the screen size state
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setScreenSize('2xl');    // 1536px and above
      } else if (width >= 1280) {
        setScreenSize('xl');     // 1280px to 1536px
      } else if (width >= 1024) {
        setScreenSize('lg');     // 1024px to 1280px
      } else if (width >= 768) {
        setScreenSize('md');     // 768px to 1024px
      } else if (width >= 640) {
        setScreenSize('sm');     // 640px to 768px
      } else {
        setScreenSize('xs');     // Below 640px
      }
    };

    handleResize(); // Run once on mount to set the initial state
    window.addEventListener('resize', handleResize); // Listen for window resize events
    return () => window.removeEventListener('resize', handleResize); // Clean up the listener on unmount
  }, []);

  // Apply animations and settings based on screen size
  useGSAP(() => {
    if (timeline) {
      let scale, position;

      // Set scale and position based on screen size
      switch (screenSize) {
        case 'xs':
          scale = { x: 4, y: 4, z: 4 };
          position = { x: 0, y: -15, z: 0 };
          break;
        case 'sm':
          scale = { x: 5, y: 5, z: 5 };
          position = { x: 0, y: -18, z: 0 };
          break;
        case 'md':
          scale = { x: 5.5, y: 5.5, z: 5.5 };
          position = { x: 0, y: -22, z: 0 };
          break;
        case 'lg':
          scale = { x: 7, y: 7, z: 7 };
          position = { x: 20, y: -18, z: 0 };
          break;
        case 'xl':
          scale = { x: 8, y: 8, z: 8 };
          position = { x: 24, y: -20, z: 0 };
          break;
        case '2xl':
          scale = { x: 7.5, y: 7.5, z: 7.5 };
          position = { x: 24, y: -23, z: 0 };
          break;
        default:
          scale = { x: 5, y: 5, z: 5 };
          position = { x: 0, y: -18, z: 0 };
      }

      // Set initial position and scale
      groupRef.current.position.set(position.x, position.y, position.z);
      groupRef.current.scale.set(0.1, 0.1, 0.1); // Start from 0 for animation

      // Animate the scale with GSAP after text animations
      timeline.to(
        groupRef.current.scale,
        {
          x: scale.x,
          y: scale.y,
          z: scale.z,
          duration: 0.6,
          delay: 2.5,
          ease: 'power3.out',
        },
        'one' // GSAP label for syncing animations
      );
    }
  }, [timeline, screenSize]); // Re-run effect when timeline or screen size changes

  return (
    <group ref={groupRef} {...props} dispose={null}>
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
