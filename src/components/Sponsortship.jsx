"use client"

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { sponsortText } from '@/utils/data'; // Import the general sponsorship text
import { splitWords } from '@/utils/splitters';

gsap.registerPlugin(ScrollTrigger);

const Sponsorship = () => {
  const refs = useRef([]);
  const container = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 640px)", () => {
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top 70%',
          end: `+=${window.innerHeight * 0.6}`,
          once: true,
          toggleActions: 'play none none none',
        },
        opacity: 1,
        ease: 'none',
        stagger: 0.05,
      });
    });

    mm.add("(min-width: 640px) and (max-width: 1024px)", () => {
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top 80%',
          end: `+=${window.innerHeight * 0.95}`,
          once: true,
          toggleActions: 'play none none none',
        },
        opacity: 1,
        ease: 'power1.out',
        stagger: 0.08,
      });
    });

    mm.add("(min-width: 1025px)", () => {
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top 85%',
          end: `+=${window.innerHeight * 0.7}`,
          once: true,
          toggleActions: 'play none none none',
        },
        opacity: 1,
        ease: 'power3.out',
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <div ref={container} className="flex flex-col items-center justify-center w-full gap-12 p-10 mx-auto text-xl font-extrabold dark:text-secondDarkColor text-secondColor sm:text-2xl lg:text-4xl font-poppins max-w-screen-2xl">
      {sponsortText.map((phrase, index) => (
        <div key={index} className="flex flex-wrap gap-2 my-6 lg:leading-[3.25rem]">
          {splitWords(phrase, refs)}
        </div>
      ))}
    </div>
  );
};

export default Sponsorship;
