import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { useGSAPTimeline2 } from "@/store/zuStore";
import { useGSAP } from '@gsap/react';

export function SodaOrange() {
  const { nodes, materials } = useGLTF('/model/soda-orange.glb');
  const meshRef = useRef();

  const timeline = useGSAPTimeline2((state) => state.timeline);

  useGSAP(() => {
    if (timeline && meshRef.current) {
      // Define GSAP matchMedia for responsive animations
      let mm = gsap.matchMedia();

      mm.add(
        {
          // Breakpoints based on your custom screen sizes
          '2xl': '(min-width: 1536px)',
          'xl': '(min-width: 1280px) and (max-width: 1535px)',
          'lg': '(min-width: 1024px) and (max-width: 1279px)',
          'md': '(min-width: 768px) and (max-width: 1023px)',
          'sm': '(min-width: 640px) and (max-width: 767px)',
          'xs': '(max-width: 639px)',
        },
        (context) => {
          const { conditions } = context;
          let scale, positionX, positionY;

          // Handle size and position based on each breakpoint
          if (conditions['2xl']) {
            scale = 11;
            positionX = 65;
            positionY = -37;
          } else if (conditions['xl']) {
            scale = 9.5;
            positionX = 54;
            positionY = -14;
          } else if (conditions['lg']) {
            scale = 9;
            positionX = 0;
            positionY = -45;
          } else if (conditions['md']) {
            scale = 7.6;
            positionX = 0;
            positionY = -45;
          } else if (conditions['sm']) {
            scale = 7.2;
            positionX = 0;
            positionY = -42;
          } else if (conditions['xs']) {
            scale = 6.5;
            positionX = 0;
            positionY = -30;
          }

          // Set initial position and scale
          gsap.set(meshRef.current.scale, { x: scale, y: scale, z: scale });
          gsap.set(meshRef.current.position, { x: positionX, y: positionY });

          // Add animations to the timeline
          // timeline
          //   .to(
          //     meshRef.current.rotation,
          //     {
          //       y: Math.PI * 2,
          //       duration: 0.9,
          //       ease: 'power2.inOut',
          //     },
          //     "tt"
          //   )
          //   .to(
          //     meshRef.current.position,
          //     {
          //       x: positionX + 47,  // Moves the object based on screen size
          //       duration: 0.9,
          //       ease: 'power2.inOut',
          //     },
          //     "tt"
          //   );
        }
      );

      return () => {
        // Clean up matchMedia listener when component unmounts
        mm.revert();
      };
    }
  }, [timeline]);

  return (
    <group ref={meshRef} dispose={null} rotation={[0,0,Math.PI * 0.04]}>
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
