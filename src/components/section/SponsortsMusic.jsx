"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const SponsortsMusic = () => {
  // Updated image array with link URLs
  const images = [
    {
      src: "/image/sponsorts/music/Bobital.png",
      linkUrl: "https://bobital.com", // Link to the Bobital website
    },
    {
      src: "/image/sponsorts/music/Au-pont-du-rock.png",
      linkUrl: "https://aupontdurock.com",
    },
    {
      src: "/image/sponsorts/music/Belle-ile-on-air.png",
      linkUrl: "https://belleileonair.com",
    },
    {
      src: "/image/sponsorts/music/AuBDM.png",
      linkUrl: "https://aubdm.com",
    },
    {
      src: "/image/sponsorts/music/Festival-chant-marin.png",
      linkUrl: "https://festivalchantmarin.com",
    },
    {
      src: "/image/sponsorts/music/festival-inter-celtique.png",
      linkUrl: "https://festival-interceltique.bzh",
    },
    {
      src: "/image/sponsorts/music/Jazz-en-ville.png",
      linkUrl: "https://jazzenville.com",
    },
    {
      src: "/image/sponsorts/music/Mlogo205X197-1.png",
      linkUrl: "https://mlogo.com",
    },
    {
      src: "/image/sponsorts/music/Motszik.png",
      linkUrl: "https://motszik.com",
    },
    {
      src: "/image/sponsorts/music/Roi-Arthur.png",
      linkUrl: "https://roiarthur.com",
    },
    {
      src: "/image/sponsorts/music/Roue-Waroch.png",
      linkUrl: "https://roue-waroch.com",
    },
    {
      src: "/image/sponsorts/music/Tombées-de-la-nuit.png",
      linkUrl: "https://tombeesdelanuit.com",
    },
    {
      src: "/image/sponsorts/music/Vieilles-Charrue.png",
      linkUrl: "https://vieillescharrues.com",
    },
  ];

  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".grid-item");

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
          trigger: containerRef.current,
          start: "top 40%", // Trigger when the top of the container is at 80% of viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="pb-24">
      <h2 className="my-12 text-4xl font-bold text-center capitalize font-poppins text-secondColor dark:text-secondDarkColor">
        Music
      </h2>

      {/* Grid container */}
      <div ref={containerRef}>
        <div className="grid grid-cols-3 gap-2 w-[340px] mx-auto sm:w-[400px] md:w-[460px] lg:grid-cols-4 lg:w-[600px] xl:w-[700px] xl:gap-6">
          {images.map((image, index) => (
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
