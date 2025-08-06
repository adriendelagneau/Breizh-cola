"use client";

import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useRef, useEffect, useMemo } from "react";
import { createNoise3D } from "simplex-noise";
import * as THREE from "three";

import { useBubbleStore } from "@/lib/store/useZuStore";

// Initialize 3D noise function
const noise3D = createNoise3D();

// Reusable Object3D to avoid creating new objects each frame
const o = new THREE.Object3D();

/**
 * Bubbles component renders an instanced mesh of rising and drifting spheres.
 */
export function Bubbles({
  count = 400, // Number of bubbles
  speed = 5, // General upward speed
  bubbleSize = 0.01, // Radius of each bubble
  opacity = 0.3, // Bubble transparency
  repeat = true, // Whether to loop bubbles after they rise
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null); // Reference to the instanced mesh
  const bubbleSpeed = useRef(new Float32Array(count)); // Stores individual speeds per bubble

  // Speed boundaries based on the speed prop
  const minSpeed = speed * 0.0015;
  const maxSpeed = speed * 0.0075;

  // Zustand store: whether the animation is playing
  const isPlaying = useBubbleStore((state) => state.isPlaying);

  // Memoize geometry to avoid recreating it on every render
  const geometry = useMemo(
    () => new THREE.SphereGeometry(bubbleSize, 16, 16),
    [bubbleSize]
  );

  // Memoize material for reuse and cleanup
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        transparent: true,
        opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        color: "#591420",
      }),
    [opacity]
  );

  // Dispose of geometry and material when the component unmounts
  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  // Initialize bubble positions and speeds
  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    if (isPlaying) {
      // Place each bubble randomly at the bottom with a random speed
      for (let i = 0; i < count; i++) {
        o.position.set(
          gsap.utils.random(-4, 4), // Random X between -4 and 4
          -2, // Start at bottom
          gsap.utils.random(-4, 4) // Random Z
        );
        o.updateMatrix(); // Update matrix from new position
        mesh.setMatrixAt(i, o.matrix); // Store matrix in instance
        bubbleSpeed.current[i] = gsap.utils.random(minSpeed, maxSpeed); // Assign speed
      }
    } else {
      // Move bubbles out of view when paused
      for (let i = 0; i < count; i++) {
        o.position.set(0, -10, 0);
        o.updateMatrix();
        mesh.setMatrixAt(i, o.matrix);
      }
    }

    mesh.instanceMatrix.needsUpdate = true; // Notify Three.js to update GPU buffers
  }, [isPlaying, count, minSpeed, maxSpeed]);

  // Per-frame animation update
  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh || !isPlaying) return;

    const time = clock.getElapsedTime(); // Get time in seconds

    for (let i = 0; i < count; i++) {
      mesh.getMatrixAt(i, o.matrix); // Read current transform
      o.position.setFromMatrixPosition(o.matrix); // Extract position

      // Move upward
      o.position.y += bubbleSpeed.current[i];

      // Apply horizontal noise-based drift
      const driftX = noise3D(i * 0.1, o.position.y * 0.2, time * 0.2);
      const driftZ = noise3D(i * 0.2 + 100, o.position.y * 0.2, time * 0.2);

      o.position.x += driftX * 0.002; // X-axis noise movement
      o.position.z += driftZ * 0.002; // Z-axis noise movement

      // If the bubble goes too high, reset it to the bottom (if repeat is enabled)
      if (o.position.y > 4 && repeat) {
        o.position.y = -2;
        o.position.x = gsap.utils.random(-4, 4);
        o.position.z = gsap.utils.random(-4, 4);
      }

      // Write updated position back to instance
      o.updateMatrix();
      mesh.setMatrixAt(i, o.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true; // Ensure the updated matrices are rendered
  });

  // JSX return: instanced mesh with shared geometry/material
  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]} // Dummy placeholders for geometry/material
      position={[0, 0, 0]}
      material={material}
      geometry={geometry}
    />
  );
}
