"use client";

import { View } from "@react-three/drei";

import { Bubbles } from "./Bubbles";
import Scene from "./Scene";

const BubblesComponent = () => {
  return (
    <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] h-screen w-full">
      <Bubbles count={400} speed={3} repeat={true} />
      <Scene />
    </View>
  );
};

export default BubblesComponent;
