"use client";
import { View } from "@react-three/drei";
import ShaderBubbles from "./ShaderBubbles";

const BubblesShaderLayer = () => {
  return (
    <View className="fixed inset-0 -z-10 pointer-events-none">
      <ShaderBubbles />
    </View>
  );
};

export default BubblesShaderLayer;
