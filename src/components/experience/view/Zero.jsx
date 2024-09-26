import { SodaZeroMain } from '../model/SodaZeraMain'; // Adjust the import path
import { Suspense, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { Float, Environment, OrthographicCamera } from "@react-three/drei";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Zero = () => {
  const sodaRef = useRef(); // Reference to the SodaZeroMain object

  useGSAP(() => {
    console.log(sodaRef)
    ScrollTrigger.create({
      trigger: "#single", 
      start: "top top", 
      end: "bottom bottom", 
      scrub: true, 
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        
        // Check if sodaRef.current exists before applying animations
        if (sodaRef.current) {
          gsap.to(sodaRef.current.rotation, {
            x: scrollProgress * Math.PI * 2, // Rotate based on scroll
            y: scrollProgress * Math.PI * 2,
            z: scrollProgress * Math.PI * 2,
            duration: 0.1,
            ease: "power2.out",
          });

          gsap.to(sodaRef.current.position, {
            y: -scrollProgress * 10, // Move along the Y-axis based on scroll
            duration: 0.1,
            ease: "power2.out",
          });
        }
      },
    });
  }, []); // Empty dependency array to run this only once

  return (
    <div id="single" className="fixed top-0 left-0 z-20 w-full h-screen pointer-events-none">
      <Canvas style={{ pointerEvents: "none" }} className="pointer-events-none">
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <OrthographicCamera makeDefault zoom={10} position={[0, 0, 55]} />
          <Float speed={3} rotationIntensity={1} floatIntensity={1} floatingRange={[0.2, 1]}>
            <SodaZeroMain ref={sodaRef} /> {/* Ref to apply animations */}
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Zero;
