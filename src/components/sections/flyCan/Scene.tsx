"use client"

import FloatingCan from '@/components/FloatingCan';
import { useGSAP } from '@gsap/react';
import { Cloud, Clouds, Environment, OrbitControls, Text } from '@react-three/drei';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { Group } from 'three';
import * as THREE from "three";


type SkyDiveProps = {
  sentence: string | null;
  flavor: "original" | "zero" | "cherry";
};

const Scene = ({ sentence, flavor }: SkyDiveProps) => {

  const groupRef = useRef<Group>(null)
  const canRef = useRef<Group>(null)
  const cloud1Ref = useRef<Group>(null)
  const cloud2Ref = useRef<Group>(null)
  const cloudsRef = useRef<Group>(null)
  const wordsRef = useRef<Group>(null)

  const ANGLE = 75 * (Math.PI / 180);

  const getXPosition = (distance: number) => distance * Math.cos(ANGLE);
  const getYPosition = (distance: number) => distance * Math.sin(ANGLE);

  const getXYPositions = (distance: number) => ({
    x: getXPosition(distance),
    y: getYPosition(-1 * distance),
  });

  useGSAP(() => {
    if (
      !cloudsRef.current ||
      !canRef.current ||
      !wordsRef.current ||
      !cloud1Ref.current ||
      !cloud2Ref.current
    )
      return;


    // Set initial positions
    gsap.set(cloudsRef.current.position, { z: 10 });
    gsap.set(canRef.current.position, {
      ...getXYPositions(-4),
    });

    gsap.set(
      wordsRef.current.children.map((word) => word.position),
      { ...getXYPositions(7), z: 2 },
    );



    // Spinning can
    gsap.to(canRef.current.rotation, {
      y: Math.PI * 2,
      duration: 1.4,
      repeat: -1,
      ease: "none",
    });

    // Infinite cloud movement
    const DISTANCE = 15;
    const DURATION = 6;

    gsap.set([cloud2Ref.current.position, cloud1Ref.current.position], {
      ...getXYPositions(DISTANCE),
    });

    gsap.to(cloud1Ref.current.position, {
      y: `+=${getYPosition(DISTANCE * 2)}`,
      x: `+=${getXPosition(DISTANCE * -2)}`,
      ease: "none",
      repeat: -1,
      duration: DURATION,
    });

    gsap.to(cloud2Ref.current.position, {
      y: `+=${getYPosition(DISTANCE * 2)}`,
      x: `+=${getXPosition(DISTANCE * -2)}`,
      ease: "none",
      repeat: -1,
      delay: DURATION / 2,
      duration: DURATION,
    });


    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skydive",
        pin: true,
        start: "top top",
        end: "+=3000",
        scrub: 1.5,
      },
    });

    scrollTl
    .to(cloudsRef.current.position, { z: -5, duration: 0.3 }, 0)
    .to(canRef.current.position, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "back.out(1.7)",
  })

  .to(
    wordsRef.current.children.map((word) => word.position),
    {
        keyframes: [
            { x: 0, y: 0, z: -1 },
            { ...getXYPositions(-7), z: -7 },
        ],
        stagger: 0.3,
    },
    0,
)


  .to(canRef.current.position, {
    ...getXYPositions(4),
    duration: 0.5,
    ease: "back.in(1.7)",
})
.to(cloudsRef.current.position, { z: 7, duration: 0.5 });

  })


  return (
    <group ref={groupRef}>

      {/* Can */}
      <group rotation={[0, 0, 0.5]}>
        <FloatingCan
          ref={canRef}
          flavor={flavor}
          rotationIntensity={0}
          floatIntensity={3}
          floatSpeed={3}
        >
        </FloatingCan>
      </group>


      {/* Clouds */}
      <Clouds ref={cloudsRef}>
        <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
        <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
      </Clouds>


      {/* Text */}
      <group ref={wordsRef}>
        {sentence && <ThreeText sentence={sentence} color='hotpink' />}
      </group>

      {/* Lights */}
      <ambientLight intensity={2} color={"#dddefa"} />
      <Environment files={"/hdr/field.hdr"} environmentIntensity={1.5} />


      {/* <OrbitControls /> */}
    </group>
  )
}

export default Scene





function ThreeText({
  sentence,
  color = "hotpink",
}: {
  sentence: string;
  color?: string;
}) {
  const words = sentence.toUpperCase().split(" ");

  const material = new THREE.MeshLambertMaterial();
  // const isDesktop = useMediaQuery("(min-width: 950px)", true);

  return words.map((word: string, wordIndex: number) => (
    <Text
      key={`${wordIndex}-${word}`}
      // scale={isDesktop ? 1 : 0.5}
      color={color}
      material={material}
      font="/font/poppins-extrabold.ttf"
      fontWeight={900}
      anchorX={"center"}
      anchorY={"middle"}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?'"
    >
      {word}
    </Text>
  ));
}