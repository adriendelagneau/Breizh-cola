'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { infosText } from '@/utils/data';
import { splitWords } from '@/utils/splitters';

gsap.registerPlugin(ScrollTrigger);




const Infos = () => {
  const refs = useRef([]);
  const container = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 640px)", () => {
      // Animation for mobile devices
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top 70%',
          end: `+=${window.innerHeight * 1.2}`, // Custom end for mobile
          once: true,
          toggleActions: 'play none none none',
        },
        opacity: 1,
        ease: 'none',
        stagger: 0.05,
      });
    });

    mm.add("(min-width: 640px) and (max-width: 1024px)", () => {
      // Animation for tablet devices
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top 85%',
          end: `+=${window.innerHeight * 1.2}`, // Custom end for tablets
          once: true,
          toggleActions: 'play none none none',
        },
        opacity: 1,
        ease: 'power1.out', // Slightly different easing for tablets
        stagger: 0.08, // Adjust stagger for larger screens
      });
    });

    mm.add("(min-width: 1025px)", () => {
      // Animation for desktop devices
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top 85%',
          end: `+=${window.innerHeight * 0.9}`, // Custom end for desktop
          once: true,
          toggleActions: 'play none none none',
        },
        opacity: 1,
        ease: 'power3.out', // Slower easing for desktop
        stagger: 0.1, // Adjust stagger for smoother reveal on large screens
      });
    });

  }, []);


  return (
    
      
    <div ref={container} className="flex flex-col items-center justify-center w-full gap-12 p-10 mx-auto my-12 text-xl font-extrabold dark:text-secondDarkColor text-secondColor sm:text-2xl lg:text-4xl font-poppins max-w-screen-2xl">
      {infosText.map((phrase, index) => (
        <div key={index} className="flex flex-wrap gap-2 my-6 lg:leading-[3.25rem]">
          {splitWords(phrase, refs)}
        </div>
      ))}
    </div>
    
  );
};

export default Infos;
