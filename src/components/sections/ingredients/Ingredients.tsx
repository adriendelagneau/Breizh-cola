"use client"

import { View } from "@react-three/drei"
import Scene from "./Scene"
import Gallery from "./Gallery"
import Nutri from "./Nutri"

type Props = {}

const Ingredients = (props: Props) => {
  return (
    <div className=' relative'>
    <View className="hero-single-scene pointer-events-none sticky top-0 z-30  hidden h-screen w-full md:block">
        <Scene flavor='original' />
      </View>
<Nutri />
      <Gallery />
    </div>
  )
}

export default Ingredients