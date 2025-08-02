"use client"; 

import * as THREE from "three"; 
import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber"; 
import gsap from "gsap"; 
import { useBubbleStore } from "@/lib/store/useZuStore";
import { createNoise3D } from "simplex-noise"; 

// Initialize 3D noise function
const noise3D = createNoise3D();

// Reusable Object3D to avoid creating new objects each frame
const o = new THREE.Object3D();

/**
 * Bubbles component renders an instanced mesh of rising and drifting spheres.
 */
export function Bubbles({
  count = 300,        // Number of bubbles
  speed = 5,          // General upward speed
  bubbleSize = 0.01,  // Radius of each bubble
  opacity = 0.5,      // Bubble transparency
  repeat = true,      // Whether to loop bubbles after they rise
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null); // Reference to the instanced mesh
  const bubbleSpeed = useRef(new Float32Array(count)); // Stores individual speeds per bubble

  // Speed boundaries based on the speed prop
  const minSpeed = speed * 0.001;
  const maxSpeed = speed * 0.005;

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
        color: "#591420", // Dark reddish color
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
          -2,                        // Start at bottom
          gsap.utils.random(-4, 4)  // Random Z
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

/**
 * BubbleToggleButton renders a floating button that toggles bubble animation on/off.
 */
export function BubbleToggleButton() {
  // Zustand hooks for state
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
        zIndex: 1000, // Ensure it stays above the canvas
      }}
    >
      {isPlaying ? "Pause Bubbles" : "Play Bubbles"}
    </button>
  );
}
