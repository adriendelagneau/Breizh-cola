"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";

import MagneticButtons from "@/components/MagneticButtons";
import { View } from "@react-three/drei";
import Scene from "./Scene";

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
  const buttonRef = useRef(null);

  return (
    <div
      ref={sectionZeroRef}
      className="relative top-0 left-0 flex flex-col items-center w-full min-h-screen xl:items-start xl:pl-6 overflow-hidden product-zero"
    >
      <View className=" pointer-events-none absolute top-0 z-30  hidden h-screen w-full md:block">
        <Scene flavor="zero" />
      </View>
      <div
        className="relative  w-[150px] h-[75px] top-[50vh] sm:top-[57vh] left-20 sm:left-32 md:top-[64vh] md:left-44 sm:w-[200px] sm:h-[100px] 2xl:w-[360px] xl:w-[300px] xl:h-[200px] 2xl:h-[180px] md:w-[250px] md:h-[125px] xl:top-[50vh] xl:left-[56vw]"
        ref={buttonRef}
      >
        <MagneticButtons>
          <Link href={"/"}>
            <button className="text-primary  rotate-12 hover:bg-primary hover:text-secondary  h-[75px] sm:h-[100px] sm:w-[200px] text-lg sm:text-xl md:text-2xl 2xl:w-[360px] xl:w-[300px] xl:h-[150px] 2xl:h-[180px] xl:text-4xl uppercase rounded-[50%] cursor-pointer w-[150px]   font-bold  md:w-[250px] md:h-[125px] bg-secondary border-2 border-primary  2xl:-rotate-6 ">
              decouvrez-le
            </button>
          </Link>
        </MagneticButtons>
      </div>

      <div className="flex flex-col gap-12 ml-3 text-3xl uppercase sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-poppins">
        <p className="flex gap-4 overflow-hidden">
          <span ref={refZero1} className="text-primary ">
            0%
          </span>
          <span
            ref={refZero2}
            className="overflow-hidden text-stroke-1 text-stroke-primary text-secondary  "
          >
            Sucres
          </span>
        </p>
        <p className="flex gap-1 overflow-hidden">
          <span
            ref={refZero3}
            className="text-stroke-1 text-stroke-primary text-secondary  "
          >
            Un gout
          </span>
          <span ref={refZero4} className="text-primary">
            intense
          </span>
        </p>
        <p className="flex gap-4 mt-12 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={refZero5} className="text-primary ">
            Zero
          </span>
          <span
            ref={refZero6}
            className="text-stroke-1 text-stroke-primary text-secondary  "
          >
            Calories
          </span>
        </p>

        <p className="flex gap-8 mt-2 overflow-hidden text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span ref={refZero7} className="text-primary ">
            100% plaisir
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductZero;
