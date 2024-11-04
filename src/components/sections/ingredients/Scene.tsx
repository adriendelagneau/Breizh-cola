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

    if(canRef.current){

      const scrollTL1 = gsap.timeline({
        defaults: {
          duration: 2
        },
        scrollTrigger: {
          trigger: ".nutri",
          start: "top top",
          end: "+=1000",
          scrub: 1.5,
          markers: true,
          pin: true,
        }
      });
      scrollTL1.to(canRef.current.rotation, {
        y: Math.PI * 2
      })
    }
  })

  return (
    <>
      <group rotation={[0, 0, 0]}>
        <FloatingCan
          ref={canRef}
          flavor={flavor}
          rotationIntensity={0}
          floatIntensity={3}
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