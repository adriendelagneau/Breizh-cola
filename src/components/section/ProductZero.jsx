'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButtons from '../MagneticButtons';
import { useTimelineStore3 } from "@/store/zuStore";
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import BreizhZero from '../experience/view/BreizhZero';
import TransitionLink from '../TransitionLink';

gsap.registerPlugin(ScrollTrigger);

const ProductZero = () => {
  const sectionZeroRef = useRef(null);
  const refZero1 = useRef(null);
  const refZero2 = useRef(null);
  const refZero3 = useRef(null);
  const refZero4 = useRef(null);
  const refZero5 = useRef(null);
  const refZero6 = useRef(null);
  const refZero7 = useRef(null);
  const buttonRefZero = useRef(null);

  // Get the timeline and playTimeline3 from the store
  const { timeline3, playTimeline3 } = useTimelineStore3((state) => ({
    timeline3: state.timeline3,
    playTimeline3: state.playTimeline3,
  }));

  // Effect to add tweens to the timeline
  useEffect(() => {
    if (timeline3) {
      timeline3
        .to(
          [refZero1.current, refZero2.current, refZero3.current, refZero4.current, refZero5.current, refZero6.current, refZero7.current],
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power4.out',
            stagger: 0.05,
          }, "three"
        )
        .to(buttonRefZero.current, { scale: 1, ease: 'back.out'});
    }
  }, [timeline3]);

  // Effect to setup ScrollTrigger and play the timeline
  useGSAP(() => {
    if (timeline3 && sectionZeroRef.current) {
      const sectionWidth = sectionZeroRef.current.offsetWidth;

      ScrollTrigger.create({
        trigger: sectionZeroRef.current,
        start: `left+=${sectionWidth * 0.75}`,
        end: `+=${sectionWidth * 0.75}`,
        scrub: 1,
        markers: false,
        onEnter: () => {
          playTimeline3(); // Play the timeline when the trigger is reached
        },
      });
    }
  }, [timeline3, playTimeline3, sectionZeroRef]);

  return (
    <div ref={sectionZeroRef} className="relative top-0 left-0 flex flex-col items-center w-full min-h-screen xl:items-start xl:pl-6">
    <BreizhZero />
      <div
        className="relative scale-0 w-[150px] h-[75px] top-[50vh] sm:top-[57vh] left-20 sm:left-32 md:top-[64vh] md:left-44 sm:w-[200px] sm:h-[100px] 2xl:w-[360px] xl:w-[300px] xl:h-[200px] 2xl:h-[180px] md:w-[250px] md:h-[125px] xl:top-[50vh] xl:left-[56vw]"
        ref={buttonRefZero}
      >
        <MagneticButtons>
          <button className="text-mainColor dark:text-mainDarkColor rotate-12 border-mainColor h-[75px] sm:h-[100px] sm:w-[200px] text-lg sm:text-xl md:text-2xl 2xl:w-[360px] xl:w-[300px] xl:h-[150px] 2xl:h-[180px] xl:text-4xl uppercase rounded-[50%] cursor-pointer w-[150px] border-2 font-bold hover:text-secondColor md:w-[250px] md:h-[125px] hover:bg-mainColor dark:hover:text-secondDarkColor dark:hover:bg-mainDarkColor dark:border-mainDarkColor 2xl:-rotate-6">
            <TransitionLink href={"/products/zero"} label={"decouvrez le"}/>
          </button>
        </MagneticButtons>
      </div>

      <div className="flex flex-col gap-12 ml-3 text-3xl uppercase sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-poppins">
        <p className="flex gap-4 overflow-hidden">
          <span ref={refZero1} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            0%
          </span>
          <span ref={refZero2} className="overflow-hidden translate-y-full opacity-0 text-stroke-1 text-stroke-mainColor text-secondColor dark:text-secondDarkColor dark:text-stroke-mainDarkColor">
            Sucres
          </span>
        </p>
        <p className="flex gap-1 overflow-hidden">
          <span ref={refZero3} className="translate-y-full opacity-0 text-stroke-1 text-stroke-mainColor text-secondColor dark:text-stroke-secondColor dark:text-secondDarkColor">
            Un gout
          </span>
          <span ref={refZero4} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            intense
          </span>
        </p>
        <p className="flex gap-4 mt-12 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={refZero5} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            Zero 
          </span>
          <span ref={refZero6} className="translate-y-full opacity-0 text-stroke-1 text-stroke-mainColor text-secondColor dark:text-mainDarkColor dark:text-stroke-mainDarkColor">
            Calories
          </span>
        </p>

        <p className="flex gap-8 mt-2 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={refZero7} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            100% plaisir
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductZero;
