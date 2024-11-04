"use client"

import { View } from '@react-three/drei'
import React from 'react'
import Scene from './Scene'

type Props = {}

const FlyCan = (props: Props) => {
  return (
    <div className='w-full h-screen relative skydive bg-mainColor'>
      <View className="skydive-scene pointer-events-none sticky top-0 z-50  hidden h-screen w-full md:block">
        <Scene flavor='original' sentence={"better faster stronger"} />
      </View>
    </div>
  )
}

export default FlyCan