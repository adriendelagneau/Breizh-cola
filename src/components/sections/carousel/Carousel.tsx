"use client";

import React, { useState, useRef } from "react";
import { Billboard, Center, Environment, View } from "@react-three/drei";
import gsap from "gsap";
import { Group, Object3DEventMap } from "three";

import FloatingCan from "@/components/FloatingCan";
import { SodaCanProps } from "@/components/SodaCan";
import { ArrowBigLeftDashIcon } from "lucide-react";
import clsx from "clsx";

const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
  { flavor: "original", color: "#591420", name: "The Original" },
  { flavor: "zero", color: "#000000", name: "Zero Sucres" },
  { flavor: "cherry", color: "#2e0823", name: "Cherry" },
  { flavor: "lime", color: "#254e00", name: "Lime Twist" },
  { flavor: "grape", color: "#3b0a45", name: "Grape Blast" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [angleOffset, setAngleOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Create a ref array for can refs — typed as Group or null
  const canRefs = useRef<(Group<Object3DEventMap> | null)[]>([]);

  const total = FLAVORS.length;
  const anglePerCan = (2 * Math.PI) / total;

  const rotateTo = (newIndex: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newAngle = -anglePerCan * newIndex;

    gsap.to(
      { val: angleOffset },
      {
        val: newAngle,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: function () {
          setAngleOffset(this.targets()[0].val);
        },
        onComplete: () => {
          setCurrentIndex(newIndex);
          setIsAnimating(false);
        },
      }
    );
  };

  // const activeIndex = ((currentIndex % total) + total) % total;

  return (
    <div className="carousel relative  w-full flex items-center justify-center overflow-hidden py-12">
      {/* Arrow Buttons */}
      <ArrowButton
        onClick={() => rotateTo(currentIndex - 1)}
        direction="left"
        label="Previous Flavor"
        disabled={isAnimating}
      />
      <ArrowButton
        onClick={() => rotateTo(currentIndex + 1)}
        direction="right"
        label="Next Flavor"
        disabled={isAnimating}
      />

      {/* 3D Carousel View */}
      <div className="relative z-30 w-full flex items-center justify-center px-4">
        <View className="h-[80vh] w-full">
          {FLAVORS.map((flavor, index) => {
            const angle = index * anglePerCan + angleOffset;

            const radiusX = 1.6;
            const radiusZ = 0.9;
            const x = Math.sin(angle) * radiusX;
            const z = Math.cos(angle) * radiusZ;

            // const isActive = index === activeIndex;

            return (
              <Center
                key={`${flavor.flavor}-${index}`}
                position={[x, -0.1, z]}
              >
                <Billboard lockX lockZ>
                  <FloatingCan
                    ref={(el) => {
                      canRefs.current[index] = el;
                    }}
                    flavor={flavor.flavor}
                    scale={0.8}
                    floatIntensity={0.1}
                    rotationIntensity={1}
                  />
                </Billboard>
              </Center>
            );
          })}

          {/* Lighting & HDRI */}
          <Environment
            files="/hdr/lobby.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
          <Environment files="/hdr/studio.hdr" environmentIntensity={0.5} />
          <directionalLight
            position={[0, 0, 5]}
            intensity={0.7}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <ambientLight intensity={10} />
          <pointLight position={[-0, 1, 3]} intensity={6} />
        </View>
      </div>
    </div>
  );
};

export default Carousel;

type ArrowButtonProps = {
  direction?: "right" | "left";
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

function ArrowButton({
  direction = "right",
  label,
  onClick,
  disabled = false,
}: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "p-3 absolute z-40 focus:outline-none focus-visible:ring-4 md:size-16 lg:size-20 transition",
        direction === "left" ? "left-38" : "right-38",
        disabled && "opacity-50"
      )}
    >
      <ArrowBigLeftDashIcon
        strokeWidth={1}
        size={82}
        className={clsx(
          "text-primary -rotate-3",
          direction === "right" && "-scale-x-100"
        )}
      />
      <span className="sr-only">{label}</span>
    </button>
  );
}