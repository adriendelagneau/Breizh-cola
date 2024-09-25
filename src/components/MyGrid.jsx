"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const MyGrid = () => {
  // Array of refs for each figure
  const figuresRef = useRef([]);
  
  // Refs need to be initialized to an array of objects
  figuresRef.current = [];

  useEffect(() => {
    const images = figuresRef.current;

    // Set the initial bigImage as the first figure element
    let bigImage = images[0];

    // Add click event listeners to each figure element
    images.forEach((image) => {
      image.addEventListener("click", () => changeGrid(image));
    });

    // Cleanup event listeners on unmount
    return () => {
      images.forEach((image) => {
        image.removeEventListener("click", () => changeGrid(image));
      });
    };

    function changeGrid(image) {
      if (image === bigImage) return;

      // Get the current state of the grid
      let state = Flip.getState(images);

      // Swap the dataset attributes between the clicked image and the current big image
      bigImage.dataset.grid = image.dataset.grid;
      image.dataset.grid = "img-6";
      bigImage = image;

      // Animate the layout change using GSAP Flip
      Flip.from(state, {
        absolute: true,
        ease: "Power1.inOut",
      });
    }
  }, []);

  // Function to push refs dynamically
  const addToRefs = (el) => {
    if (el && !figuresRef.current.includes(el)) {
      figuresRef.current.push(el);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div
        className="grid grid-cols-3 grid-rows-3 gap-4 aspect-square w-[660px] mx-auto my-auto justify-center items-center"
      >
        <figure
          data-grid="img-6"
          className="relative col-span-2 row-span-2 bg-blue-500 aspect-square"
          ref={addToRefs} // Assign ref
        >
          <Image
            src={
              "https://res.cloudinary.com/dos8mey8r/image/upload/v1727247803/breizhCola/Bobital_jy5oyk.png"
            }
            alt="toto"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
        <figure
          data-grid="img-5"
          className="relative col-start-3 bg-blue-500 aspect-square"
          ref={addToRefs} // Assign ref
        >
          <Image
            src={
              "https://res.cloudinary.com/dos8mey8r/image/upload/v1727247803/breizhCola/Bobital_jy5oyk.png"
            }
            alt="toto"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
        <figure
          data-grid="img-4"
          className="relative col-start-3 row-start-2 bg-blue-500 aspect-square"
          ref={addToRefs} // Assign ref
        >
          <Image
            src={
              "https://res.cloudinary.com/dos8mey8r/image/upload/v1727247803/breizhCola/Bobital_jy5oyk.png"
            }
            alt="toto"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
        <figure
          data-grid="img-3"
          className="relative col-start-3 row-start-3 bg-blue-500 aspect-square"
          ref={addToRefs} // Assign ref
        >
          <Image
            src={
              "https://res.cloudinary.com/dos8mey8r/image/upload/v1727247803/breizhCola/Bobital_jy5oyk.png"
            }
            alt="toto"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
        <figure
          data-grid="img-2"
          className="relative col-start-2 row-start-3 bg-blue-500 aspect-square"
          ref={addToRefs} // Assign ref
        >
          <Image
            src={
              "https://res.cloudinary.com/dos8mey8r/image/upload/v1727247803/breizhCola/Bobital_jy5oyk.png"
            }
            alt="toto"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
        <figure
          data-grid="img-1"
          className="relative col-start-1 row-start-3 bg-blue-500 aspect-square"
          ref={addToRefs} // Assign ref
        >
          <Image
            src={
              "https://res.cloudinary.com/dos8mey8r/image/upload/v1727247803/breizhCola/Bobital_jy5oyk.png"
            }
            alt="toto"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
      </div>
    </div>
  );
};

export default MyGrid;
