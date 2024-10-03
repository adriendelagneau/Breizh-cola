"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { SponsortMusic } from "@/utils/data";
import MagneticButtons from "./MagneticButtons";

gsap.registerPlugin(Flip);

const FlipLayout = () => {
  const [layout, setLayout] = useState("stack");
  const containerRef = useRef(null);

  // Flip layout logic
  const flipLayout = () => {
    const state = Flip.getState(".circle", {
      props: ["borderRadius", "width", "height"], // Track borderRadius, width, and height
    });

    // Toggle the layout between 'grid' and 'stack'
    setLayout((prevLayout) => (prevLayout === "grid" ? "stack" : "grid"));

    // Ensure DOM has updated before triggering the animation
    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.75,
        absolute: true, // Ensure elements animate in place
        scale: true, // Enable scaling effect
        stagger: 0.1, // Stagger animations for a smoother effect
        spin: true, // Add spin for more dramatic effect
        zIndex: true, // Fix z-index layering issues
        ease: "power1.out", // Smooth easing
      });
    });
  };

  return (
    <>
      <div
        className="relative flex items-center justify-center my-10 cursor-pointer h-[40vh]"
        ref={containerRef}
      >
        <div className={layout === "grid" ? "grid grid-cols-5 gap-2" : "flex"}>
          {SponsortMusic.map((s, i) => (
            <img
              key={i}
              className={`circle w-32 h-32 border-2 dark:border-mainColor border-secondColor ${
                layout === "grid" ? "rounded-lg" : "rounded-full -ml-10"
              }`}
              src={s.src}
              alt="Placeholder"
            />
          ))}
        </div>
      </div>
      <div className="w-full text-center">
        
      <MagneticButtons>
          <button
          onClick={flipLayout}
          className="text-secondColor dark:text-secondDarkColor rotate-12 border-secondColor   h-[75px]  text-xl uppercase rounded-[50%] cursor-pointer w-[150px]  border-2 font-bold hover:text-mainColor   hover:bg-secondColor dark:hover:text-mainDarkColor dark:hover:bg-secondDarkColor dark:border-secondDarkColor 2xl:-rotate-6">
            voir
          </button>
        </MagneticButtons>
             </div>
    </>
  );
};

export default FlipLayout;
