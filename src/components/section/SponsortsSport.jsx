"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sponsortsSport } from "@/utils/data";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const SponsortsSport = () => {
  // Updated image array with link URLs


  const container2Ref = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".grid-item2");

    // GSAP Animation with ScrollTrigger and random stagger
    gsap.fromTo(
      items,
      { scale: 0 }, // Start state: hidden
      {
        scale: 1,
        duration: 0.05,
        ease: "elastic.out(1,0.3)",
        stagger: {
          each: 0.05, // Delay for each item
          from: "random", // Random order of animation
        },
        scrollTrigger: {
          trigger: container2Ref.current,
          start: "top 40%", // Trigger when the top of the container is at 80% of viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div>
      <h2 className="mb-6 text-6xl font-bold text-center capitalize font-poppins text-mainColor dark:text-secondColor">
        sport
      </h2>
      {/* Grid container */}
      <div ref={container2Ref}>
        <div className="grid grid-cols-3 gap-2 w-[340px] mx-auto sm:w-[400px] md:w-[460px] lg:grid-cols-4 lg:w-[600px] xl:w-[700px] xl:gap-6">
          {sponsortsSport.map((image, index) => (
            <Link key={index} href={image.linkUrl} passHref>
              <div className="relative w-24 h-24 rounded-lg sm:w-28 sm:h-28 grid-item2 aspect-square md:w-32 md:h-32 xl:w-36 xl:h-36">
                <Image
                  src={image.src}
                  alt={`Sponsor Image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsortsSport;
