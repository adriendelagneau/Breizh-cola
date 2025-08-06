"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductTitle = ({ name = "original" }: { name?: string }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const titleContainerRef = useRef(null);
  const subRef = useRef(null);

  useGSAP(() => {
    const refs = [ref1, ref2, ref3, ref4, ref5];
    const translateYValues = ["100%", "200%", "300%", "400%", "500%"];

    refs.forEach((ref, index) => {
      gsap.to(ref.current, {
        translateY: translateYValues[index],
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: titleContainerRef.current,
          start: "top top",
          end: "bottom 99%",
        },
      });
    });
  }, []);
  

  return (
    <div
      ref={titleContainerRef}
      className="absolute top-0 left-0 w-full h-screen"
      id="singleTtitle"
    >
      <div ref={subRef} className="relative ">
        <div
          className={`absolute top-0 z-10 uppercase -translate-x-1/2 opacity-100 left-1/2 text-9xl  text-primary   font-poppins`}
        >
          {name}
        </div>
        <div
          ref={ref1}
          className={`absolute top-0 uppercase -translate-x-1/2 left-1/2 text-9xl text-stroke text-stroke-primary text-primary  font-poppins opacity-70  `}
        >
          {name}
        </div>
        <div
          ref={ref2}
          className={`absolute top-0 uppercase -translate-x-1/2 left-1/2 text-9xl text-stroke text-stroke-primary text-primary  font-poppins opacity-50  `}
        >
          {name}
        </div>
        <div
          ref={ref3}
          className={`absolute top-0 uppercase -translate-x-1/2 left-1/2 text-9xl text-stroke text-stroke-primary text-primary  font-poppins opacity-30  `}
        >
          {name}
        </div>
        <div
          ref={ref4}
          className={`absolute top-0 uppercase -translate-x-1/2 left-1/2 text-9xl text-stroke text-stroke-primary text-primary  font-poppins opacity-10  `}
        >
          {name}
        </div>
        <div
          ref={ref5}
          className={`absolute top-0 uppercase -translate-x-1/2 left-1/2 text-9xl text-stroke text-stroke-primary text-primary  font-poppins opacity-5  `}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
