"use client";

import React, { useRef, useState, useEffect } from "react";
import Years from "./Years";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sections } from "@/lib/data";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Chronos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useGSAP(() => {
    const triggers = sectionsRef.current.map((section, index) =>
      ScrollTrigger.create({
        trigger: section!,
        start: "top 20%", // Triggers slightly before center for smoother sync
        onEnter: () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setCurrentIndex(index), 50);
        },
        onEnterBack: () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setCurrentIndex(index), 50);
        },
        // markers: true,
      })
    );

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // 🔁 Force sync on first render (fixes initial mismatch)
  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  return (
    <div className="relative w-full">
      <Years currentIndex={currentIndex} />
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          id={section.id}
          className="w-full h-screen relative uppercase text-6xl font-poppins px-6  "
          role="region"
          aria-label={`Section for the year ${section.year}`}
        >
          {index % 2 === 0 ? (
            <>
              <div className="absolute -rotate-3  w-[480px] -translate-x-1/2 left-[20%] top-1/2 transform -translate-y-1/2 text-primary">
                {section.text}
              </div>
              <div
                className="absolute left-[80%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-primary rounded-sm border border-[#ccc] shadow-md 
                p-2 pt-2 pb-6 w-[500px] rotate-6"
              >
                <Image
                  src={section.image}
                  alt={`Image for ${section.year}`}
                  width={500}
                  height={413}
                  className="w-full h-auto object-cover sepia-70"
                />
              </div>
            </>
          ) : (
            <>
              <div
                className="absolute right-[80%] top-1/2 transform translate-x-1/2 -translate-y-1/2 
                bg-primary rounded-sm border border-[#ccc] shadow-md 
                p-2 pt-2 pb-6 w-[480px] -rotate-6"
              >
                <Image
                  src={section.image}
                  alt={`Image for ${section.year}`}
                  width={500}
                  height={413}
                  className="w-full h-auto object-cover sepia-70"
                />
              </div>
              <div className="absolute w-96 rotate-3 -translate-x-1/2 left-[80%] top-1/2 transform -translate-y-1/2 text-primary">
                {section.text}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chronos;
