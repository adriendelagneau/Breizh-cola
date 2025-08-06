"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface MarqueeProps {
  initialDirection?: number;
  speed?: number;
  sentence: string;
  bgColor?: string;
}

const Marquee = ({
  initialDirection = 1,
  speed = 1,
  sentence,
  bgColor = "#591420",
}: MarqueeProps) => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = -1;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let animationFrameId: number | null = null; 

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
      xPercent += 0.05 * speed * direction; // Adjust scrolling speed based on direction
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
        // pinSpacer: false,
        onUpdate: (e) => (direction = e.direction * initialDirection), // Update direction
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
  }, []);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="text-primary border-y-2 border-primary"
    >
      <div
        className={
          "relative flex h-[8vh] sm:h-[10vh] lg:h-[100px] xl:h-[130px] w-full overflow-hidden"
        }
      >
        <div className="absolute z-10 -translate-x-3   top-1/2  -translate-y-1/2 ">
          <div
            ref={slider}
            className="relative text-3xl sm:text-5xl lg:text-6xl xl:text-7xl capitalize whitespace-nowrap font-poppins "
          >
            <p className="relative pr-5 m-0" ref={firstText}>
              {sentence}
            </p>
            <p className="absolute top-0 left-[100%] m-0 pr-5" ref={secondText}>
              {sentence}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
