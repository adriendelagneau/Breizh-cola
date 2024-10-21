"use client";

import { Environment, Float, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { useTimelineStore4 } from "@/store/zuStore";
import { useGSAP } from "@gsap/react";
import { Cherry } from "../model/Cherry";



const BreizhCherry = () => {
  
  const [screenSize, setScreenSize] = useState("sm");
  const [isLoaded, setIsLoaded] = useState(false); // Manage loading state
  const meshRef = useRef(null);

  // Get the timeline from the store
  const { timeline4 } = useTimelineStore4((state) => ({
    timeline4: state.timeline4,
  }));

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setScreenSize("2xl");
      } else if (width >= 1280) {
        setScreenSize("xl");
      } else if (width >= 1024) {
        setScreenSize("lg");
      } else if (width >= 768) {
        setScreenSize("md");
      } else if (width >= 640) {
        setScreenSize("sm");
      } else {
        setScreenSize("xs");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let scale, location, rotation;
  switch (screenSize) {
    case "xs":
      scale = [4, 4, 4];
      location = [0, -15, 0];
      rotation = [0, 0, 0];
      break;
    case "sm":
      scale = [5, 5, 5];
      location = [0, -18, 0];
      rotation = [0, 0.1, 0];
      break;
    case "md":
      scale = [5.5, 5.5, 5.5];
      location = [0, -22, 0];
      rotation = [0, 0.2, 0];
      break;
    case "lg":
      scale = [7, 7, 7];
      location = [20, -18, 0];
      rotation = [0, 0.3, 0];
      break;
    case "xl":
      scale = [8, 8, 8];
      location = [24, -20, 0];
      rotation = [0, 0.4, 0];
      break;
    case "2xl":
      scale = [12, 12, 12];
      location = [70, -35, 0];
      rotation = [0, 0, 0];
      break;
    default:
      scale = [5, 5, 5];
      location = [0, -18, 0];
      rotation = [0, 0, 0];
  }


  useGSAP(() => {
    if (isLoaded) {
      
      // Start from scale 0
      meshRef.current.scale.set(0, 0, 0);
      
      // Add the animation to the timeline
      timeline4.to(
        meshRef.current.scale,
        {
          x: 12,
          y: 12,
          z: 12,
          delay: 1.3,
          duration: 0.6,
          ease: 'power3.out',
        },
        'four' // GSAP label for syncing animations
      );
    }
  }, [isLoaded, screenSize, timeline4]);
  
  return (
    <div className="absolute top-0 left-0 z-20 w-full h-screen pointer-events-none" style={{ pointerEvents: 'none' }}>
      <Canvas style={{ pointerEvents: "none" }} className="pointer-events-none">
        <Suspense>
          <Environment preset="sunset" />
          <OrthographicCamera makeDefault zoom={10} position={[0, 0, 50]} />
          <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[0.2, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Cherry
              rotation={rotation}
              location={location}
              scale={scale}
              ref={meshRef}
              onLoaded={() => setIsLoaded(true)} // Set loaded state when model is fully loaded
            />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BreizhCherry;
