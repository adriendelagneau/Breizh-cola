"use client";

import { Environment, Float, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useTimelineStore2 } from "@/store/zuStore";  // Import the timeline hook from your store
import { Original } from "../model/Original";

const BreizhOriginal = () => {
  const [screenSize, setScreenSize] = useState("sm");
  const [isLoaded, setIsLoaded] = useState(false); // Manage loading state
  const meshRef = useRef(null);

  // Get the timeline from the store
  const { timeline2 } = useTimelineStore2((state) => ({
    timeline2: state.timeline2,
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
      location = [110, -35, 0];
      rotation = [0, 0, 0];
      break;
    default:
      scale = [5, 5, 5];
      location = [0, -18, 0];
      rotation = [0, 0, 0];
  }

  // Effect to add animations to the timeline when isLoaded changes
  useEffect(() => {
    if (isLoaded) {
      // Clear previous tweens
      console.log('play')

      switch (screenSize) {
        case "lg":
          timeline2.to(meshRef.current.position, { x: 10, duration: 2 });
          break;
        case "sm":
          timeline2.to(meshRef.current.rotation, { y: Math.PI / 2, duration: 2 });
          break;
        case "md":
          timeline2.to(meshRef.current.scale, { x: 6, y: 6, z: 6, duration: 2 });
          break;
        // Add more cases as needed
        default:
          timeline2
          .to(meshRef.current.position, { x: 65,  duration: 0.6, delay: 0.8, }, "two")
          .to(meshRef.current.rotation, { y: Math.PI * 2,  duration: 0.6, delay: 0.8, }, "two")
          
          break;
      }

    }
  }, [isLoaded, screenSize, timeline2]);

  return (
    <div className="absolute top-0 left-0 z-20 w-full h-screen pointer-events-none">
      <Canvas style={{ pointerEvents: "none" }}>
        <Environment preset="sunset" />
        <OrthographicCamera makeDefault zoom={10} position={[0, 0, 50]} />
        <Float
          speed={3}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[0.2, 1]}
        >
          <Original
            rotation={rotation}
            location={location}
            scale={scale}
            ref={meshRef}
            onLoaded={() => setIsLoaded(true)} // Set loaded state when model is fully loaded
          />
        </Float>
      </Canvas>
    </div>
  );
};

export default BreizhOriginal;
