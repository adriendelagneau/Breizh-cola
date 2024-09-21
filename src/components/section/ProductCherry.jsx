'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButtons from '../MagneticButtons';
import { useTimelineStore4 } from "@/store/zuStore";
import TransitionLink from '../TransitionLink';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const ProductCherry = () => {
  const section3Ref = useRef(null);  // Reference to the entire section
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const buttonRef = useRef(null);

  // Access the timeline and playTimeline4 from the store
  const { timeline4, playTimeline4 } = useTimelineStore4((state) => ({
    timeline4: state.timeline4,
    playTimeline4: state.playTimeline4,
  }));

  // Effect to create and add tweens to the timeline
  useGSAP(() => {
    if (timeline4) {
      timeline4
        .to(
          [ref1.current, ref2.current, ref3.current, ref4.current, ref5.current, ref6.current, ref7.current],
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power4.out',
            stagger: 0.05,
          }
        )
        .to(buttonRef.current, { scale: 1, ease: 'back.out' });
    }
  }, [timeline4]);

  // Effect to setup ScrollTrigger
  useGSAP(() => {
    if (timeline4 && section3Ref.current) {
      const section3Width = section3Ref.current.offsetWidth; // Get the width of the section

      ScrollTrigger.create({
        trigger: section3Ref.current,
        start: `left+=${section3Width * 0.75}`,
        end: `+=${section3Width * 0.75}`,
        scrub: 1,
        markers: false,
        onEnter: () => {
          playTimeline4(); // Play the timeline when the scroll trigger activates
        },
      });
    }
  }, [timeline4, playTimeline4]);

  return (
    <div ref={section3Ref} className="relative top-0 left-0 flex flex-col items-center w-full min-h-screen xl:items-start xl:pl-6">

      <div
        className="relative scale-0 w-[150px] h-[75px] top-[50vh] sm:top-[57vh] left-20 sm:left-32 md:top-[64vh] md:left-44 sm:w-[200px] sm:h-[100px] 2xl:w-[360px] xl:w-[300px] xl:h-[200px] 2xl:h-[180px] md:w-[250px] md:h-[125px] xl:top-[50vh] xl:left-[56vw]"
        ref={buttonRef}
      >
        <MagneticButtons>
          <button className="text-mainColor dark:text-mainDarkColor rotate-12 border-mainColor h-[75px] sm:h-[100px] sm:w-[200px] text-lg sm:text-xl md:text-2xl 2xl:w-[360px] xl:w-[300px] xl:h-[150px] 2xl:h-[180px] xl:text-4xl uppercase rounded-[50%] cursor-pointer w-[150px] border-2 font-bold hover:text-secondColor md:w-[250px] md:h-[125px] hover:bg-mainColor dark:hover:text-secondDarkColor dark:hover:bg-mainDarkColor dark:border-mainDarkColor 2xl:-rotate-6">
          <TransitionLink href={"/products/cherry"} label={"découvrez le"}/>
          </button>
        </MagneticButtons>
      </div>

      <div className="flex flex-col gap-12 ml-3 text-3xl uppercase sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-poppins">
        <p className="flex gap-4 overflow-hidden">
          <span ref={ref1} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            notes
          </span>
          <span ref={ref2} className="overflow-hidden translate-y-full opacity-0 text-stroke-1 text-stroke-mainColor text-secondColor dark:text-secondDarkColor dark:text-stroke-mainDarkColor">
            gourmande
          </span>
        </p>
        <p className="flex gap-1 overflow-hidden">
          <span ref={ref3} className="translate-y-full opacity-0 text-stroke-1 text-stroke-mainColor text-secondColor dark:text-stroke-secondColor dark:text-secondDarkColor">
            de cerises
          </span>
          <span ref={ref4} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            griottes
          </span>
        </p>
        <p className="flex gap-4 mt-12 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={ref5} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            et toujours
          </span>
          <span ref={ref6} className="translate-y-full opacity-0 text-stroke-1 text-stroke-mainColor text-secondColor dark:text-mainDarkColor dark:text-stroke-mainDarkColor">
            aussi
          </span>
        </p>

        <p className="flex gap-8 mt-2 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={ref7} className="translate-y-full opacity-0 text-mainColor dark:text-mainDarkColor">
            rafraichissant
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCherry;
