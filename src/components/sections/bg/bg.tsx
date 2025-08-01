"use client";

import { View } from "@react-three/drei";
import React from "react";
import Scene from "./Scene";

const Bg = () => {
  return (
    <View className="hero-scene pointer-events-none sticky top-0 z-40 -mt-[100vh] hidden h-screen w-full md:block">
    <Scene flavor="cherry" />
    </View>
  );
};

export default Bg;
