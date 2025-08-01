"use client";

import { View } from '@react-three/drei';
import React from 'react'
import { Bubbles } from './Bubbles';

const BubbleComponent = () => {
  return (
    <div>
                  <View className="pointer-events-none sticky top-0 z-[100] -mt-[100vh] h-screen w-full md:block">
       
                <Bubbles count={400} speed={3} repeat={true} />
            </View>
    </div>
  )
}

export default BubbleComponent
