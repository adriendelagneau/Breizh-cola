"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SponsortMusic } from "@/utils/data";
import Music from "../Music";

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
    <div className="py-12">
      <Music />
      {/* Grid container */}
      <div ref={containerRef}>
        <div className="grid grid-cols-3 gap-2 w-[340px] mx-auto sm:w-[400px] md:w-[460px] lg:grid-cols-4 lg:w-[600px] xl:w-[700px] xl:gap-6">
          {SponsortMusic.map((image, index) => (
            <Link key={index} href={image.linkUrl} passHref>
              <div className="relative w-24 h-24 rounded-lg sm:w-28 sm:h-28 grid-item aspect-square md:w-32 md:h-32 xl:w-36 xl:h-36">
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

export default SponsortsMusic;
