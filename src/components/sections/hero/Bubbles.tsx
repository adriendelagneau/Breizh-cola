"use client";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useBubbleStore } from "@/lib/store/useZuStore";

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

  // Access play/pause state from useBubbleStore
  const isPlaying = useBubbleStore((state) => state.isPlaying);

  const geometry = new THREE.SphereGeometry(bubbleSize, 16, 16);
  const material = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity,
  });

  // Effect to initialize or clear bubbles based on play/pause state
  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    if (isPlaying) {
      // Initialize bubbles at the bottom when playing
      for (let i = 0; i < count; i++) {
        o.position.set(
          gsap.utils.random(-4, 4), // Random x position
          -2, // Starting y position below the screen
          gsap.utils.random(-4, 4) // Random z position
        );
        o.updateMatrix();
        mesh.setMatrixAt(i, o.matrix);
        bubbleSpeed.current[i] = gsap.utils.random(minSpeed, maxSpeed);
      }
    } else {
      // Clear all bubbles by resetting positions when stopped
      for (let i = 0; i < count; i++) {
        o.position.set(0, -10, 0); // Move out of view
        o.updateMatrix();
        mesh.setMatrixAt(i, o.matrix);
      }
    }

    // Mark instance matrix for update
    mesh.instanceMatrix.needsUpdate = true;

    return () => {
      // Clean up geometry and material on unmount
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
    };
  }, [isPlaying, count, minSpeed, maxSpeed]);

  useFrame(() => {
    if (!meshRef.current || !isPlaying) return;

    material.color = new THREE.Color("#591420");

    for (let i = 0; i < count; i++) {
      meshRef.current.getMatrixAt(i, o.matrix);
      o.position.setFromMatrixPosition(o.matrix);
      o.position.y += bubbleSpeed.current[i];

      if (o.position.y > 4 && repeat) {
        o.position.y = -2; // Reset to starting y position
        o.position.x = gsap.utils.random(-4, 4); // Randomize x and z again
        o.position.z = gsap.utils.random(-4, 4);
      }

      o.updateMatrix();
      meshRef.current.setMatrixAt(i, o.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
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
      style={{ position: "absolute", top: 20, right: 20 }}
    >
      {isPlaying ? "Pause Bubbles" : "Play Bubbles"}
    </button>
  );
}
