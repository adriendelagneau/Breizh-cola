'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButtons from '../MagneticButtons';
import { useTimelineStore2 } from "@/store/zuStore";  // Import the timeline hook from your store
import TransitionLink from '../TransitionLink';
import BreizhOrange from '../experience/view/BreizhOrange';

gsap.registerPlugin(ScrollTrigger);

const ProductOriginal = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const buttonRef = useRef(null);
  const screenRef = useRef(null);

  // Get the timeline and playTimeline2 from the store
  const { timeline2, playTimeline2 } = useTimelineStore2((state) => ({
    timeline2: state.timeline2,
    playTimeline2: state.playTimeline2,
  }));

  // Effect to add tweens to the timeline
  useEffect(() => {
    if (timeline2) {
      // Adding tweens to the timeline
      timeline2
        .to(
          [
            ref1.current,
            ref2.current,
            ref3.current,
            ref4.current,
            ref5.current,
            ref6.current,
            ref7.current,
          ],
          {
            y: 0,
            duration: 0.6,
            ease: 'power4.out',
            stagger: 0.05,
          }, "two"
        )
        .to(buttonRef.current, { scale: 1, ease: 'back.out' }, "two");
    }
  }, [timeline2]);

  // Effect to setup ScrollTrigger and play the timeline
  useEffect(() => {
    if (timeline2 && screenRef.current) {
      ScrollTrigger.create({
        trigger: screenRef.current,
        start: 'top 50%', // Adjust the trigger point as needed
        once: true,      // Ensure the animation only happens once
        onEnter: () => {
          playTimeline2(); // Play the timeline when the trigger is reached
        },
      });
    }
  }, [timeline2, playTimeline2]);

  return (
    <div className="relative top-0 left-0 flex flex-col items-center w-full min-h-screen xl:items-start xl:pl-6" ref={screenRef}>
    
    <BreizhOrange />
      <div
        className="relative scale-0 w-[150px] h-[75px] top-[50vh] sm:top-[57vh] left-20 sm:left-32 md:top-[64vh] md:left-44 sm:w-[200px] sm:h-[100px] 2xl:w-[360px] xl:w-[300px] xl:h-[200px] 2xl:h-[180px] md:w-[250px] md:h-[125px] xl:top-[50vh] xl:left-[56vw]"
        ref={buttonRef}
      >
        <MagneticButtons>
          <button className="text-mainColor dark:text-mainDarkColor rotate-12 border-mainColor  h-[75px] sm:h-[100px] sm:w-[200px] text-lg sm:text-xl md:text-2xl 2xl:w-[360px] xl:w-[300px] xl:h-[150px] 2xl:h-[180px] xl:text-4xl uppercase rounded-[50%] cursor-pointer w-[150px]  border-2 font-bold hover:text-secondColor  md:w-[250px] md:h-[125px] hover:bg-mainColor dark:hover:text-secondDarkColor dark:hover:bg-mainDarkColor dark:border-mainDarkColor 2xl:-rotate-6">
            <TransitionLink href={"/products/original"} label={"découvrez le"}/>
          </button>
        </MagneticButtons>
      </div>

      <div className="flex flex-col gap-12 ml-3 text-3xl uppercase sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-poppins">
        <p className="flex gap-4 overflow-hidden">
          <span ref={ref1} className="translate-y-full text-mainColor dark:text-mainDarkColor">
            la recette
          </span>
          <span
            ref={ref2}
            className="overflow-hidden translate-y-full text-stroke-1 text-stroke-mainColor text-secondColor dark:text-secondDarkColor dark:text-stroke-mainDarkColor"
          >
            originale
          </span>
        </p>
        <p className="flex gap-1 overflow-hidden">
          <span
            ref={ref3}
            className="translate-y-full text-stroke-1 text-stroke-mainColor text-secondColor dark:text-stroke-secondColor dark:text-secondDarkColor"
          >
            Son
          </span>
          <span ref={ref4} className="overflow-hidden translate-y-full text-mainColor dark:text-mainDarkColor">
            secret ?
          </span>
        </p>
        <p className="flex gap-4 mt-12 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={ref5} className="translate-y-full text-mainColor dark:text-mainDarkColor">
            le dosage
          </span>
          <span
            ref={ref6}
            className="translate-y-full text-stroke-1 text-stroke-mainColor text-secondColor dark:text-stroke-mainDarkColor dark:text-secondDarkColor"
          >
            parfait
          </span>
        </p>

        <p className="flex gap-8 mt-2 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={ref7} className="translate-y-full text-mainColor dark:text-mainDarkColor">
            des ingredients
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductOriginal;
