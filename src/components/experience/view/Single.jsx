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
  const [screenSize, setScreenSize] = useState("sm"); // Manage screen size state

  // Function to determine scale, location, and rotation based on screen size
  const getModelProperties = (screenSize) => {
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
        scale = [10, 10, 10];
        location = [0, -30, 0];
        rotation = [0, 0, 0];
        break;
      default:
        scale = [5, 5, 5];
        location = [0, -18, 0];
        rotation = [0, 0, 0];
    }

    return { scale, location, rotation };
  };

  // Update screen size state on window resize
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

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set up GSAP scroll trigger animation for the model rotation
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#singleTtitle",
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

  // Load the model dynamically based on the `obj` prop
  useEffect(() => {
    const loadModel = async () => {
      let Model;
      switch (obj) {
        case "breizh-cola-original":
          Model = await import("../model/Original").then((mod) => mod.Original);
          break;
        case "breizh-cola-zero":
          Model = await import("../model/Zero").then((mod) => mod.Zero);
          break;
        case "breizh-cola-cherry":
          Model = await import("../model/Cherry").then((mod) => mod.Cherry);
          break;
        default:
          Model = await import("../model/Original").then((mod) => mod.Original);
          break;
      }
      setModelComponent(() => Model); // Set the dynamically imported model as the component
    };

    loadModel();
  }, [obj]); // Re-run effect when obj changes

  // Get model properties based on the current screen size
  const { scale, location, rotation } = getModelProperties(screenSize);

  return (
    <div id="single" className="sticky top-[10vh] left-0 z-20 w-full h-screen pointer-events-none">
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
            {ModelComponent && (
              <ModelComponent
                ref={modelRef}
                scale={scale}
                location={location}
                rotation={rotation}
              /> // Pass dynamically calculated scale, location, and rotation
            )}
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Single;
