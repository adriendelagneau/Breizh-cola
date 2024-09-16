"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useGSAP(() => {
    const scrollWidth = scrollContainerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(scrollContainerRef.current, {
      x: -(scrollWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: true,
        start: "top top",
        end: () => `+=${scrollWidth - viewportWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Horizontally scrollable container */}
      <div ref={scrollContainerRef} className="flex w-[300vw] h-full">
        {/* Sections */}
        <div className="flex items-center justify-center w-[100vw] h-full bg-secondColor dark:bg-secondDarkColor">
   one
        </div>
        <div className="flex items-center justify-center w-[100vw] h-full bg-secondColor dark:bg-secondDarkColor">
     two
        </div>
        <div className="flex items-center justify-center w-[100vw] h-full bg-secondColor dark:bg-secondDarkColor">
     three
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;

