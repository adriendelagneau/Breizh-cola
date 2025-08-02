"use client";

import { View } from "@react-three/drei";
import React from "react";
import Scene from "./Scene";

const Bg = () => {
  return (
   <View className="pointer-events-none fixed inset-0 -z-20 h-screen w-full top-0 left-0">
      <Scene flavor="cherry" />
    </View>
  );
};

export default Bg;
