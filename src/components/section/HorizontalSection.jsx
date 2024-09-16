"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'tailwindcss/tailwind.css';
import { useGSAP } from "@gsap/react";
import ProductOriginal from "./ProductOriginal";
import ProductZero from "./ProductZero";
import ProductCherry from "./ProductCherry";

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
          <ProductOriginal />
        </div>
        <div className="flex items-center justify-center w-[100vw] h-full bg-secondColor dark:bg-secondDarkColor">
        <ProductZero containerRef={scrollContainerRef} />
        </div>
        <div className="flex items-center justify-center w-[100vw] h-full bg-secondColor dark:bg-secondDarkColor">
          <ProductCherry containerRef={scrollContainerRef} />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;

