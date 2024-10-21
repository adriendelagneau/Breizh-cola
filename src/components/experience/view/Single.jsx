"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Environment, Float, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Make sure to import this
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Single = ({ obj }) => {
  const modelRef = useRef(); // Reference for the 3D model
  const [ModelComponent, setModelComponent] = useState(null); // State for dynamically loaded model

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#ingredients",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        if (modelRef.current) {
          gsap.to(modelRef.current.rotation, {
            y: progress * Math.PI * 2,
            duration: 0.1,
            ease: "power2.out",
          });
        }
      },
    });
  }, []);

  useEffect(() => {
    const loadModel = async () => {
      let Model;
      switch (obj) {
        case "breizh-cola-original":
          Model = await import("../model/Original").then(mod => mod.Original); // Use .Original
          break;
        case "breizh-cola-zero":
          Model = await import("../model/Zero").then(mod => mod.Zero); // Adjust accordingly
          break;
        case "breizh-cola-cherry":
          Model = await import("../model/Cherry").then(mod => mod.Cherry); // Adjust accordingly
          break;
        default:
          Model = await import("../model/Original").then(mod => mod.Original); // Fallback model
          break;
      }
      setModelComponent(() => Model); // Set the dynamically imported model as the component
    };

    loadModel();
  }, [obj]); // Re-run effect when obj changes

  return (
    <div id="single" className="sticky top-0 left-0 z-20 w-full h-screen pointer-events-none">
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
            {ModelComponent && <ModelComponent ref={modelRef} />} {/* Render model only if loaded */}
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Single;
