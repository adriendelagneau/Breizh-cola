"use client"

import FloatingCan from '@/components/FloatingCan'
import { useGSAP } from '@gsap/react';
import { Environment } from '@react-three/drei';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { Group } from 'three'

type SceneProps = {
  flavor: "original" | "cherry" | "zero";   // Restrict flavor to these specific strings
};

const Scene = ({ flavor }: SceneProps) => { // Ensure flavor matches FlavorType
  const canRef = useRef<Group>(null);

  useGSAP(() => {
    if (canRef.current) {
      gsap.fromTo(canRef.current.scale, {
        x: 0,
        y: 0,
        z: 0
      }, {
        x: 0.85,
        y: 0.85,
        z: 0.85,
        ease: "back.out(1)"
      })


      // Scroll animation
      const scrollTL = gsap.timeline({
        defaults: {
          duration: 2
        },
        scrollTrigger: {
          trigger: ".hero-single",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5
        }
      });
      scrollTL
      .to(canRef.current.rotation, {y: Math.PI * 2}, 0)
      .to(canRef.current.position, {y: -0.55}, 0)

    }
  })

  return (
    <>
      <group rotation={[0, 0, 0.2]}>
        <FloatingCan
          ref={canRef}
          flavor={flavor}
          rotationIntensity={1}
          floatIntensity={1}
          floatSpeed={3}
        >
        </FloatingCan>
      </group>
      <ambientLight intensity={2} color={"#dddefa"} />
      <Environment files={"/hdr/field.hdr"} environmentIntensity={1.5} />
    </>
  )
}

export default Scene