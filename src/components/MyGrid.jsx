"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Flip);

const MyGrid = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const images = gsap.utils.toArray(container.querySelectorAll("figure"));

    if (!images.length) {
      console.error("No figure elements found!");
      return;
    }

    // Initial big image is the first figure
    let bigImage = images[0];

    console.log("Initial bigImage:", bigImage);

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
      // Preventing the change if clicked on the current big image
      if (image === bigImage) return;

      // Logging state before change
      console.log("Before Flip:", {
        bigImage: bigImage.dataset.grid,
        clickedImage: image.dataset.grid,
      });

      // Get the current state of the grid
      let state = Flip.getState(images);

      // Swap the dataset attributes between the clicked image and the current big image
      const currentBigGrid = bigImage.dataset.grid;
      bigImage.dataset.grid = image.dataset.grid;
      image.dataset.grid = currentBigGrid;
      bigImage = image;

      console.log("After Swap:", {
        bigImage: bigImage.dataset.grid,
        clickedImage: image.dataset.grid,
      });

      // Animate the layout change using GSAP Flip
      Flip.from(state, {
        absolute: true,
        ease: "Power1.inOut",
        duration: 0.6, // Adding duration for clearer visibility
        onComplete: () => {
          console.log("Animation completed!");
        },
      });
    }
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        className="grid grid-cols-3 grid-rows-3 gap-4 aspect-square w-[660px] mx-auto my-auto justify-center items-center"
        ref={containerRef}
      >
        <figure data-grid="img-1" className="col-span-2 row-span-2 aspect-square bg-blue-500 relative">
          <Image
            src={
              "https://res.cloudinary.com/dos8mey8r/image/upload/v1727247803/breizhCola/Bobital_jy5oyk.png"
            }
            alt="toto"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
        <figure data-grid="img-2" className="col-start-3 aspect-square bg-blue-500 relative">
          <Image
            src={
              "https://res.cloudinary.com/dos8mey8r/image/upload/v1727247803/breizhCola/Bobital_jy5oyk.png"
            }
            alt="toto"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
        <figure data-grid="img-3" className="col-start-3 row-start-2 aspect-square bg-blue-500 relative">
          <Image
            src={
              "https://res.cloudinary.com/dos8mey8r/image/upload/v1727247803/breizhCola/Bobital_jy5oyk.png"
            }
            alt="toto"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
        <figure data-grid="img-4" className="col-start-3 row-start-3 aspect-square bg-blue-500 relative">
          <Image
            src={
              "https://res.cloudinary.com/dos8mey8r/image/upload/v1727247803/breizhCola/Bobital_jy5oyk.png"
            }
            alt="toto"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
        <figure data-grid="img-5" className="col-start-2 row-start-3 aspect-square bg-blue-500 relative">
          <Image
            src={
              "https://res.cloudinary.com/dos8mey8r/image/upload/v1727247803/breizhCola/Bobital_jy5oyk.png"
            }
            alt="toto"
            fill
            className="object-cover rounded-lg"
          />
        </figure>
        <figure data-grid="img-6" className="col-start-1 row-start-3 aspect-square bg-blue-500 relative">
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
