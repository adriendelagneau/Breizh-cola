'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButtons from '../MagneticButtons';
import { useGSAPTimeline3 } from "@/store/zuStore";  
import TransitionLink from '../TransitionLink';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ProductCherry = () => {
  const sectionRef = useRef(null);
  const refCherry1 = useRef(null);
  const refCherry2 = useRef(null);
  const refCherry3 = useRef(null);
  const refCherry4 = useRef(null);
  const refCherry5 = useRef(null);
  const refCherry6 = useRef(null);
  const refCherry7 = useRef(null);
  const buttonRefCherry = useRef(null);

  const timeline = useGSAPTimeline3((state) => state.timeline);  // Retrieve timeline from Zustand store

  useGSAP(() => {
    if (timeline && sectionRef.current) {
      const sectionWidth = sectionRef.current.offsetWidth;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `left+=${sectionWidth * 1.5}`,
        end: `+=${sectionWidth *1.5}`,
        scrub: 1,
        markers: false,
        onEnter: () => {
          timeline
            .to(
              [refCherry1.current, refCherry2.current, refCherry3.current, refCherry4.current, refCherry5.current, refCherry6.current, refCherry7.current],
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power4.out',
                stagger: 0.05,
              }
            )
            .to(buttonRefCherry.current, { scale: 1, ease: 'back.out' });
        },
      });
    }
  }, [timeline]);

  return (
    <div ref={sectionRef} className="relative top-0 left-0 flex flex-col items-center w-full min-h-screen xl:items-start xl:pl-6">
      <div
        className="relative scale-0 w-[150px] h-[75px] top-[50vh] sm:top-[57vh] left-20 sm:left-32 md:top-[64vh] md:left-44 sm:w-[200px] sm:h-[100px] 2xl:w-[360px] xl:w-[300px] xl:h-[200px] 2xl:h-[180px] md:w-[250px] md:h-[125px] xl:top-[50vh] xl:left-[56vw]"
        ref={buttonRefCherry}
      >
        <MagneticButtons>
          <button className="text-mainColor dark:text-mainDarkColor rotate-12 border-mainColor h-[75px] sm:h-[100px] sm:w-[200px] text-lg sm:text-xl md:text-2xl 2xl:w-[360px] xl:w-[300px] xl:h-[150px] 2xl:h-[180px] xl:text-4xl uppercase rounded-[50%] cursor-pointer w-[150px] border-2 font-bold hover:text-secondColor md:w-[250px] md:h-[125px] hover:bg-mainColor dark:hover:text-secondDarkColor dark:hover:bg-mainDarkColor dark:border-mainDarkColor 2xl:-rotate-6">
            <TransitionLink href={"/products/cherry"}>
              Decouvrez le
            </TransitionLink>
          </button>
        </MagneticButtons>
      </div>

      <div className="flex flex-col gap-1 ml-3 text-3xl uppercase sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-poppins">
        <p className="flex gap-4 overflow-hidden">
          <span ref={refCherry1} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            Cherry
          </span>
          <span ref={refCherry2} className="overflow-hidden translate-y-full opacity-0 text-stroke-1 text-stroke-mainColor text-secondColor dark:text-secondDarkColor dark:text-stroke-mainDarkColor">
            Flavored
          </span>
        </p>
        <p className="flex gap-1 overflow-hidden">
          <span ref={refCherry3} className="translate-y-full opacity-0 text-stroke-1 text-stroke-mainColor text-secondColor dark:text-stroke-secondColor dark:text-secondDarkColor">
            Un gout
          </span>
          <span ref={refCherry4} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            unique
          </span>
        </p>
        <p className="flex gap-4 mt-12 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={refCherry5} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            0% 
          </span>
          <span ref={refCherry6} className="translate-y-full opacity-0 text-stroke-1 text-stroke-mainColor text-secondColor dark:text-stroke-mainDarkColor dark:text-secondDarkColor">
            sugar
          </span>
        </p>

        <p className="flex gap-8 mt-2 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={refCherry7} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            100% plaisir
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCherry;
