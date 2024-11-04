"use client"

import React from 'react'
import ProductTitle from './ProductTittle'
import { View } from '@react-three/drei'
import Scene from './Scene'
import ProductIntro from './ProductIntro'

type Props = {}

const HeroSingle = (props: Props) => {
  return (
    <div className='relative hero-single'>
    <View className="hero-single-scene pointer-events-none sticky top-0 z-30  hidden h-screen w-full md:block">
        <Scene flavor='original' />
      </View>
    <ProductTitle />
    <ProductIntro />
    </div>
  )
}

export default HeroSingle