"use client";

import { Environment, Float, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { SodaOriginal } from "../model/SodaOriginal";
import { SodaHome } from "../model/SodaHome";

const BreizhHome = () => {

  return (
    <div
      className="absolute z-20 w-full h-screen overflow-hidden pointer-events-none"
      id="titi"
      style={{ pointerEvents: "none" }}
    >
      <Canvas style={{ pointerEvents: "none" }} className="pointer-events-none">
        <Environment preset="city" />
        <OrthographicCamera makeDefault zoom={15} position={[0, 0, 50]} />
        <Float
          speed={3} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity
          floatingRange={[0.2, 1]} // Range of y-axis values the object will float within
        >
          <Suspense fallback={null}>
            {/* Pass the render callback to the SodaZero component */}
            <SodaHome />
          </Suspense>
        </Float>
      </Canvas>
    </div>
  );
};

export default BreizhHome;
