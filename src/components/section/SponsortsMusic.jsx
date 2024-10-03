"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SponsortMusic } from "@/utils/data";


gsap.registerPlugin(ScrollTrigger);

const SponsortsMusic = () => {

  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".grid-item");

    gsap.fromTo(
      items,
      { scale: 0 }, 
      {
        scale: 1,
        duration: 0.05,
        ease: "elastic.out(1,0.3)",
        stagger: {
          each: 0.05,
          from: "random", 
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="py-2">
   <h3 className="text-5xl uppercase font-poppins">music</h3>
      {/* Grid container */}
      <div ref={containerRef}>
        <div className="grid grid-cols-3 gap-1 w-[250px] mx-auto sm:w-[400px] md:w-[460px] lg:grid-cols-4 lg:w-[540px] ">
          {SponsortMusic.map((image, index) => (
            <Link key={index} href={image.linkUrl} passHref>
              <div className="relative w-20 h-20 rounded-lg sm:w-28 sm:h-28 grid-item aspect-square md:w-32 md:h-32 ">
                <Image
                  src={image.src}
                  alt={`Sponsor Image ${index + 1}`}
                  fill
                  className="object-cover border-2 rounded-lg border-secondColor dark:border-secondDarkColor"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsortsMusic;
