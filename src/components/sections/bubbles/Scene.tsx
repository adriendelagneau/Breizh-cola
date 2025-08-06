"use client";

import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Scene() {
  return (
    <group>
      <directionalLight
        position={[0, 0, 5]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <ambientLight intensity={8} />
      <pointLight position={[-0, 1, 3]} intensity={3.4} />
      <Environment files={"/hdr/studio.hdr"} environmentIntensity={0.3} />
    </group>
  );
}

export default Scene;
