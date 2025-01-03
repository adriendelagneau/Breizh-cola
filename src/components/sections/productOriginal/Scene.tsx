"use client"

import FloatingCan from '@/components/FloatingCan'
import { useGSAP } from '@gsap/react'
import { Environment } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import { Group } from 'three'

gsap.registerPlugin(ScrollTrigger)

type SceneProps = {
    flavor: "original" | "cherry" | "zero";   // Restrict flavor to these specific strings
  };
  
  const Scene = ({ flavor }: SceneProps) => { // Ensure flavor matches FlavorType

  const canRef = useRef<Group>(null)

  useGSAP(() => {
        
    if(canRef.current){

      const scrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".product-original",
          start: "top 30%",
        }
      });
      
      scrollTL.fromTo(canRef.current.scale, {
        x: 0,
        y: 0,
        z: 0
      }, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.6,
        ease: "back.out"
      })
    }
  })

  return (
    <>
      <group rotation={[0, 0, -0.2]} position={[1.7, 0, 0]}>
        <FloatingCan
          ref={canRef}
          flavor={flavor}
          rotationIntensity={1}
          floatIntensity={1}
          floatSpeed={4}
        >
        </FloatingCan>
      </group>
      <ambientLight intensity={2} color={"#dddefa"} />
      <Environment files={"/hdr/field.hdr"} environmentIntensity={1.5} />
    </>
  )
}

export default Scene