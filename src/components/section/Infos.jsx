'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useGSAP } from '@gsap/react';
import { splitWords } from '@/utils/splitters';
import { infosText } from '@/utils/data';

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
          end: `+=${window.innerHeight * 1.1}`, // Custom end for mobile
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
          start: 'top 80%',
          end: `+=${window.innerHeight * 0.8}`, // Custom end for tablets
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
          end: `+=${window.innerHeight * 0.7}`, // Custom end for desktop
          once: true,
          toggleActions: 'play none none none',
        },
        opacity: 1,
        ease: 'power3.out', // Slower easing for desktop
        stagger: 0.1, // Adjust stagger for smoother reveal on large screens
      });
    });

  }, []);

  // const splitWords = (phrase) => {
  //   return phrase.split(" ").map((word, i) => {
  //     const letters = splitLetters(word);
  //     return <p key={word + "_" + i} className="inline-block mr-2">{letters}</p>;
  //   });
  // };

  // const splitLetters = (word) => {
  //   return word.split("").map((letter, i) => (
  //     <span key={letter + "_" + i} ref={el => refs.current.push(el)} className="opacity-0">
  //       {letter}
  //     </span>
  //   ));
  // };

  return (
    <div ref={container} className="flex flex-col items-center justify-center w-full gap-12 p-10 mx-auto text-xl font-extrabold dark:text-secondDarkColor text-secondColor sm:text-2xl lg:text-5xl font-poppins max-w-screen-2xl">
      {infosText.map((phrase, index) => (
        <div key={index} className="mb-6 paragraph">
          {splitWords(phrase, refs)}
        </div>
      ))}
    </div>
  );
};

export default Infos;
