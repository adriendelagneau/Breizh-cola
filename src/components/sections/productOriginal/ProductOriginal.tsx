"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButtons from "@/components/MagneticButtons";
import Scene from "./Scene";
import { View } from "@react-three/drei";
import Link from "next/link";

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

  return (
    <div
      className="relative top-0 left-0 flex flex-col items-center w-full min-h-screen xl:items-start xl:pl-6 bg-secondary overflow-hidden product-original"
      ref={screenRef}
    >
      <View className=" pointer-events-none absolute top-0 z-30  hidden h-screen w-full md:block">
        <Scene flavor="original" />
      </View>
      <div
        className="relative  w-[150px] h-[75px] top-[50vh] sm:top-[57vh] left-20 sm:left-32 md:top-[64vh] md:left-44 sm:w-[200px] sm:h-[100px] 2xl:w-[360px] xl:w-[300px] xl:h-[200px] 2xl:h-[180px] md:w-[250px] md:h-[125px] xl:top-[50vh] xl:left-[56vw]"
        ref={buttonRef}
      >
        <MagneticButtons>
          <button className="text-primary  rotate-12  h-[75px] sm:h-[100px] sm:w-[200px] text-lg sm:text-xl md:text-2xl 2xl:w-[360px] xl:w-[300px] xl:h-[150px] 2xl:h-[180px] xl:text-4xl uppercase rounded-[50%] cursor-pointer w-[150px]  border-2 font-bold   md:w-[250px] md:h-[125px] bg-secondary  2xl:-rotate-6 hover:bg-primary hover:text-secondary">
            <Link href={"/product/original"}>decouvrez-le</Link>
          </button>
        </MagneticButtons>
      </div>

      <div className="flex flex-col gap-12 ml-3 text-3xl uppercase sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-poppins">
        <p className="flex gap-4 overflow-hidden">
          <span ref={ref1} className=" text-primary ">
            la recette
          </span>
          <span
            ref={ref2}
            className="overflow-hidden  text-stroke-1 text-stroke-primary text-secondary  "
          >
            originale
          </span>
        </p>
        <p className="flex gap-1 overflow-hidden">
          <span
            ref={ref3}
            className=" text-stroke-1 text-stroke-primary text-secondary  "
          >
            Son
          </span>
          <span ref={ref4} className="overflow-hidden  text-primary ">
            secret ?
          </span>
        </p>
        <p className="flex gap-4 mt-12 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={ref5} className=" text-primary ">
            le dosage
          </span>
          <span
            ref={ref6}
            className=" text-stroke-1 text-stroke-primary text-secondary  "
          >
            parfait
          </span>
        </p>

        <p className="flex gap-8 mt-2 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={ref7} className=" text-primary ">
            des ingredients
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductOriginal;
