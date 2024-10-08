"use client"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Environment, Float, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Original } from "../model/Original";
import { Zero } from "../model/Zero"; // Import other models
import { Cherry } from "../model/Cherry"; // Import other models
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Single = ({ obj }) => {
  const modelRef = useRef(); // Reference for the 3D model

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#single",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        if (modelRef.current) {
          // Rotate or animate the model based on scroll progress
          gsap.to(modelRef.current.rotation, {
            y: progress * Math.PI * 2, // Rotate the model based on scroll
            duration: 0.1,
            ease: "power2.out",
          });
        }
      },
    });

   
  }, []);

  let ModelComponent;

  switch (obj) {
    case 'breizh-cola-original':
      ModelComponent = Original;
      break;
    case 'breizh-cola-zero':
      ModelComponent = Zero;
      break;
    case 'breizh-cola-cherry':
      ModelComponent = Cherry;
      break;
    default:
      ModelComponent = Original;
      break;
  }

  return (
    <div id="single" className="fixed top-0 left-0 z-20 w-full h-screen pointer-events-none">
      <Canvas style={{ pointerEvents: "none" }} className="pointer-events-none">
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <OrthographicCamera makeDefault zoom={10} position={[0, 0, 50]} />
          <Float
            speed={3}
            rotationIntensity={1}
            floatIntensity={1}
            floatingRange={[0.2, 1]}
          >
            <ModelComponent ref={modelRef} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};


export default Single