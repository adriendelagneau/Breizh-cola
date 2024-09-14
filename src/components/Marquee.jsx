'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Marquee = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;
  let animationFrameId = null; // Store the animation frame ID

  const setSecondTextPosition = () => {
    if (secondText.current) {
      gsap.set(secondText.current, {
        left: secondText.current.getBoundingClientRect().width, // Recalculate text position
      });
    }
  };

  const animate = () => {
    if (firstText.current && secondText.current) {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }

      gsap.set([firstText.current, secondText.current], { xPercent: xPercent });
      xPercent += 0.1 * direction; // Adjust scrolling speed based on direction
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set the position of the second text initially
    setSecondTextPosition();

    // ScrollTrigger controlling the marquee direction based on scroll
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement, // Trigger on full document scroll
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        pinSpacer: false,
        onUpdate: (e) => (direction = e.direction * 1), // Update direction
      },
    });

    // Start the marquee animation
    animate();

    // Listen for window resize and update text position
    const handleResize = () => {
      setSecondTextPosition();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId); // Cancel animation loop
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill ScrollTrigger instances
      window.removeEventListener("resize", handleResize); // Cleanup resize listener
    };
  }, []);

  return (
    <div className="relative flex h-[18vh] sm:h-[20vh] lg:h-[24vh] w-full overflow-hidden bg-myWhite my-3 -skew-y-2">
      <div className="absolute z-10 -translate-x-3 text-secondColor bg-mainColor dark:bg-mainDarkColor top-2/4 border-y-[3px] border-skin-border border-secondColor dark:border-secondDarkColor dark:text-secondDarkColor">
        <div
          ref={slider}
          className="relative text-6xl capitalize whitespace-nowrap font-creamCake sm:text-7xl lg:text-8xl"
        >
          <p className="relative pr-5 m-0" ref={firstText}>
            breizh cola - breizh cola - breizh cola - breizh cola - breizh cola - breizh cola -
          </p>
          <p className="absolute top-0 left-[100%] m-0 pr-5" ref={secondText}>
            breizh cola - breizh cola - breizh cola - breizh cola - breizh cola - breizh cola -
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
