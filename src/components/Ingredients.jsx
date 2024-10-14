"use client"

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nutritionel from "./Nutritionel";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const Ingredients = ({ ingredients, nutritionel}) => {

  
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    // Get the reference for the section
    const sectionElement = sectionRef.current;

    // Set up the GSAP animation for pinning
    gsap.fromTo(
      sectionElement,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          //markers: true, 
        },
      }
    );


  }, []);
  
  return (
    <div ref={sectionRef} id="ingredients" className="flex w-full h-screen px-20">
      <div className="flex flex-col justify-center w-1/2 gap-12 text-xl">
        <div>
          <h3 className="mb-12 text-3xl font-poppins">Ingrédients:</h3>
          <p className="text-2xl font-bold">{ingredients}</p>
        </div>
        <Nutritionel nutritionel={nutritionel} />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Ingredients;
