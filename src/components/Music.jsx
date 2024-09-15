'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitWords } from '@/utils/splitters';
import { sponsortsMusicText } from '@/utils/data'; 

gsap.registerPlugin(ScrollTrigger);

const Music = () => {
  const refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 640px)", () => {
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top 70%',
          end: `+=${window.innerHeight * 1.1}`,
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
          end: `+=${window.innerHeight * 0.8}`,
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

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={container}
      className="flex flex-col items-center justify-center w-full gap-12 p-10 text-2xl font-extrabold dark:text-secondDarkColor text-secondColor sm:text-4xl lg:text-5xl font-poppins"
    >
      {sponsortsMusicText.map((phrase, index) => (
        <div key={index} className="mb-6 paragraph">
          {splitWords(phrase, refs)}
        </div>
      ))}
    </div>
  );
};

export default Music;
