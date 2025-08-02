"use client";

import { View } from "@react-three/drei";
import React from "react";
import { Bubbles } from "./Bubbles";
import Scene from "./Scene";

const BubblesComponent = () => {
  return (
  
      <View className="hero-scene pointer-events-none sticky top-0 z-40 -mt-[100vh] hidden h-screen w-full md:block">
        <Bubbles count={400} speed={3} repeat={true} />
          <Scene />
      </View>
   
  );
};

export default BubblesComponent;
