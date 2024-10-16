"use client";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTimelineStore } from "@/store/zuStore"; 
import { useGSAP } from "@gsap/react";
import BreizhHome from "../experience/view/BreizhHome";


gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const titleRef = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);
  const title4Ref = useRef(null);
  const title5Ref = useRef(null);
  const title6Ref = useRef(null);
  const title7Ref = useRef(null);
  const landingRef = useRef(null);

  // Access the timeline from Zustand store
  const { timeline } = useTimelineStore((state) => state); // Access the timeline from the store

  useGSAP(() => {
    if (timeline) {
      timeline
        .to(
          [
            titleRef.current,
            title2Ref.current,
            title3Ref.current,
            title4Ref.current,
            title5Ref.current,
            title6Ref.current,
            title7Ref.current,
          ],
          {
            y: 0,
            ease: "power4.out",
            delay: 1.8,
            stagger: {
              amount: 0.3,
            },
          }, 'one'
        )
        .then(() => {
          document.body.style.overflowY = "auto"; // Enable scroll after animation
        });
    }
  }, []); // Runs whenever timeline from the store changes

  return (
    <div
      ref={landingRef}
      id="landing"
      className="relative flex flex-col items-center w-full h-screen p-4 pt-32 overflow-hidden uppercase font-poppins bg-mainColor dark:bg-secondColor dark:text-mainColor text-secondColor lg:justify-center lg:items-start 2xl:pl-24"
    >
    <BreizhHome />
   
      <div className="flex overflow-hidden -skew-y-3">
        <div
          ref={titleRef}
          className="inline pr-4 text-5xl translate-y-full sm:text-6xl lg:text-8xl xl:text-9xl md:text-7xl"
        >
          breizh
        </div>
        <div ref={title2Ref} className="flex text-5xl translate-y-full sm:text-6xl lg:text-8xl xl:text-9xl md:text-7xl">
          cola
        </div>
      </div>
      <div className="flex pt-12 overflow-hidden -skew-y-3">
        <div
          ref={title3Ref}
          className="flex items-center mr-4 text-5xl translate-y-full sm:text-6xl lg:text-8xl xl:text-9xl md:text-7xl"
        >
          le
        </div>
        <div
          ref={title4Ref}
          className="inline text-5xl translate-y-full sm:text-6xl lg:text-8xl text-stroke-1 text-stroke-secondColor text-mainColor dark:text-stroke-mainColor dark:text-secondColor xl:text-9xl md:text-7xl"
        >
          cola
        </div>
        <div
          ref={title5Ref}
          className="flex items-center pl-4 text-5xl translate-y-full sm:text-6xl lg:text-8xl xl:text-9xl md:text-7xl"
        >
          du
        </div>
      </div>
      <div className="flex pt-6 overflow-hidden -skew-y-3">
        <div ref={title6Ref} className="inline pr-4 text-5xl translate-y-full sm:text-6xl lg:text-8xl xl:text-9xl md:text-7xl">
          phare
        </div>
        <div
          ref={title7Ref}
          className="inline text-5xl translate-y-full sm:text-6xl lg:text-8xl text-stroke-1 text-stroke-secondColor dark:text-stroke-mainColor text-mainColor dark:text-secondColor xl:text-9xl md:text-7xl"
        >
          ouest
        </div>
      </div>
    </div>
  );
};

export default Landing;
