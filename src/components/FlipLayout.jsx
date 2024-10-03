"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { SponsortMusic } from "@/utils/data";
import MagneticButtons from "./MagneticButtons";
import Link from "next/link";

gsap.registerPlugin(Flip);

const FlipLayout = () => {
  const [layout, setLayout] = useState("stack");
  const containerRef = useRef(null);

  // Flip layout logic
  const flipLayout = () => {
    const state = Flip.getState(".circle", {
      props: ["borderRadius"], 
    });

    // Toggle the layout between 'grid' and 'stack'
    setLayout((prevLayout) => (prevLayout === "grid" ? "stack" : "grid"));

    // Ensure DOM has updated before triggering the animation
    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.75,
        absolute: true, 
        scale: true, 
        stagger: 0.1, 
        spin: true, 
        zIndex: true, 
        ease: "power1.out", 
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
            <Link
              key={i}
              href={s.linkUrl}
              target="_blank" // Opens in new tab
              rel="noopener noreferrer" // Adds security to avoid exploitation
              className={`circle w-32 h-32 border-2 dark:border-mainColor border-secondColor ${
                layout === "grid" ? "rounded-lg" : "rounded-full -ml-10"
              } overflow-hidden`} 
            >
              <img
                className="object-cover w-full h-full" 
                src={s.src}
                alt="Placeholder"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full text-center">
        <MagneticButtons>
          <button
            onClick={flipLayout}
            className="text-secondColor dark:text-secondDarkColor rotate-12 border-secondColor h-[75px] text-xl uppercase rounded-[50%] cursor-pointer w-[150px] border-2 font-bold hover:text-mainColor hover:bg-secondColor dark:hover:text-mainDarkColor dark:hover:bg-secondDarkColor dark:border-secondDarkColor 2xl:-rotate-6"
          >
            voir
          </button>
        </MagneticButtons>
      </div>
    </>
  );
};

export default FlipLayout;
