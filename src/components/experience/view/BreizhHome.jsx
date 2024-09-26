"use client";
import { Environment, Float, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { SodaZero } from "../model/SodaZero";



const BreizhHome = () => {
  const sodaRef = useRef(); // Reference to the SodaZeroMain object

  return (
    <div
      className="absolute z-20 w-full h-screen overflow-hidden pointer-events-none"
      id="titi"
      style={{ pointerEvents: "none" }}
    >
      <Canvas style={{ pointerEvents: "none" }} className="pointer-events-none">
        <Suspense>
          <Environment preset="city" />
          <OrthographicCamera
            makeDefault
            zoom={15}
            position={[0, 0, 50]}
          />
          <Float
            speed={3} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[0.2, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
<SodaZero />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BreizhHome;
