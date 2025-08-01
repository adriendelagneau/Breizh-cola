"use client";

import * as THREE from "three";
import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useBubbleStore } from "@/lib/store/useZuStore";
import { createNoise3D } from "simplex-noise";

const noise3D = createNoise3D();

const o = new THREE.Object3D();

export function Bubbles({
  count = 300,
  speed = 5,
  bubbleSize = 0.01,
  opacity = 0.5,
  repeat = true,
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const bubbleSpeed = useRef(new Float32Array(count));
  const minSpeed = speed * 0.001;
  const maxSpeed = speed * 0.005;

  const isPlaying = useBubbleStore((state) => state.isPlaying);

  // Memoize geometry and material for performance
  const geometry = useMemo(
    () => new THREE.SphereGeometry(bubbleSize, 16, 16),
    [bubbleSize]
  );

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        transparent: true,
        opacity,
        color: "#591420",
      }),
    [opacity]
  );

  // Dispose geometry and material on unmount
  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    if (isPlaying) {
      for (let i = 0; i < count; i++) {
        o.position.set(
          gsap.utils.random(-4, 4),
          -2,
          gsap.utils.random(-4, 4)
        );
        o.updateMatrix();
        mesh.setMatrixAt(i, o.matrix);
        bubbleSpeed.current[i] = gsap.utils.random(minSpeed, maxSpeed);
      }
    } else {
      for (let i = 0; i < count; i++) {
        o.position.set(0, -10, 0);
        o.updateMatrix();
        mesh.setMatrixAt(i, o.matrix);
      }
    }

    mesh.instanceMatrix.needsUpdate = true;
  }, [isPlaying, count, minSpeed, maxSpeed]);

useFrame(({ clock }) => {
  const mesh = meshRef.current;
  if (!mesh || !isPlaying) return;

  const time = clock.getElapsedTime();

  for (let i = 0; i < count; i++) {
    mesh.getMatrixAt(i, o.matrix);
    o.position.setFromMatrixPosition(o.matrix);

    // Vertical movement
    o.position.y += bubbleSpeed.current[i];

    // Add Perlin drift using noise3D
    const driftX = noise3D(i * 0.1, o.position.y * 0.2, time * 0.2);
    const driftZ = noise3D(i * 0.2 + 100, o.position.y * 0.2, time * 0.2);

    o.position.x += driftX * 0.002; // adjust for desired chaos
    o.position.z += driftZ * 0.002;

    // Reset if bubble goes too high
    if (o.position.y > 4 && repeat) {
      o.position.y = -2;
      o.position.x = gsap.utils.random(-4, 4);
      o.position.z = gsap.utils.random(-4, 4);
    }

    o.updateMatrix();
    mesh.setMatrixAt(i, o.matrix);
  }

  mesh.instanceMatrix.needsUpdate = true;
});


  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      position={[0, 0, 0]}
      material={material}
      geometry={geometry}
    />
  );
}

export function BubbleToggleButton() {
  const togglePlay = useBubbleStore((state) => state.togglePlay);
  const isPlaying = useBubbleStore((state) => state.isPlaying);

  return (
    <button
      onClick={togglePlay}
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        padding: "0.5rem 1rem",
        backgroundColor: "#591420",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {isPlaying ? "Pause Bubbles" : "Play Bubbles"}
    </button>
  );
}
