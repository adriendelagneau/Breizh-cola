"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

import SocialLinks from "./SocialLinks";

const Social = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const img1Ref = useRef<HTMLDivElement | null>(null);
  const img2Ref = useRef<HTMLDivElement | null>(null);
  const img3Ref = useRef<HTMLDivElement | null>(null);
  const img4Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = event;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const xPercent = (clientX / width - 0.5) * 2; // Range from -1 to 1
      const yPercent = (clientY / height - 0.5) * 2; // Range from -1 to 1

      const imageRefs = [img1Ref, img2Ref, img3Ref, img4Ref];

      // Use a constant multiplier for all images
      const multiplier = 30;

      imageRefs.forEach((ref) => {
        if (ref.current) {
          const offsetX = xPercent * multiplier; // Consistent offset
          const offsetY = yPercent * multiplier; // Consistent offset

          gsap.to(ref.current, {
            x: offsetX,
            y: offsetY,
            ease: "power3.out",
            duration: 1.6,
          });
        }
      });
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[50vh] w-full items-center justify-center overflow-hidden"
    >
      <p className="font-poppins text-primary mb-36 -skew-y-3 text-5xl uppercase sm:text-6xl md:text-7xl">
        restez connectez
      </p>

      {/* <div
        ref={img1Ref}
        className='w-52 h-72 rounded absolute top-[18%] left-[10%] rotate-6'
      >
        <Image
          fill
          className='object-cover rounded'
          alt='Image 1'
          src="https://res.cloudinary.com/dos8mey8r/image/upload/v1730380124/breizhCola/breizh-cola-posts-reseaux-sociaux-1F4_c9stwe.jpg"
        />
      </div>

      <div
        ref={img2Ref}
        className='w-52 h-72 rounded absolute top-[60%] left-[20%] -rotate-3'
      >
        <Image
          fill
          className='object-cover rounded'
          alt='Image 2'
          src="https://res.cloudinary.com/dos8mey8r/image/upload/v1730381070/breizhCola/313258621_503993125105748_4908875908714121750_n_hwgmvo.jpg"
        />
      </div>

      <div
        ref={img3Ref}
        className='w-52 h-72 rounded absolute top-[16%] left-[80%] -rotate-6'
      >
        <Image
          fill
          className='object-cover rounded'
          alt='Image 3'
          src="https://res.cloudinary.com/dos8mey8r/image/upload/v1730380326/breizhCola/breizh-cola-posts-reseaux-sociaux-1F3DD_xrxxjx.jpg"
        />
      </div>

      <div
        ref={img4Ref}
        className='w-52 h-72 rounded absolute top-[70%] left-[70%] rotate-3'
      >
        <Image
          fill
          className='object-cover rounded'
          alt='Image 4'
          src="https://res.cloudinary.com/dos8mey8r/image/upload/v1730385292/breizhCola/breizh-cola-posts-reseaux-sociaux-1F2_okg4ob.webp"
        />
      </div> */}

      <SocialLinks />
    </div>
  );
};

export default Social;
