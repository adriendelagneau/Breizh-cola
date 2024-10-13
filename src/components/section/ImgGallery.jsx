"use clent"

import Image from 'next/image'
import React from 'react'

const ImgGallery = () => {
  return (

    <div className='relative w-full h-screen overflow-hidden'>
        
    <div className='relative h-[300px] w-[200px]'>
      <Image 
      src={"/image/BC-2015.jpg"} 
      alt={"toto"}
      fill
      className="object-cover rounded-lg"/>
    </div>
    
    <div className='relative h-[300px] w-[200px]'>
      <Image 
      src={"/image/BC-2015.jpg"} 
      alt={"toto"}
      fill
      className="object-cover rounded-lg"/>
    </div>

    <div className='relative h-[300px] w-[200px]'>
      <Image 
      src={"/image/BC-2015.jpg"} 
      alt={"toto"}
      fill
      className="object-cover rounded-lg"/>
    </div>

    <div className='relative h-[300px] w-[200px]'>
      <Image 
      src={"/image/BC-2015.jpg"} 
      alt={"toto"}
      fill
      className="object-cover rounded-lg"/>
    </div>

    <div className='relative h-[300px] w-[200px]'>
      <Image 
      src={"/image/BC-2015.jpg"} 
      alt={"toto"}
      fill
      className="object-cover rounded-lg"/>
    </div>

    <div className='relative h-[300px] w-[200px]'>
      <Image 
      src={"/image/BC-2015.jpg"} 
      alt={"toto"}
      fill
      className="object-cover rounded-lg"/>
    </div>
      </div>
  )
}

export default ImgGallery
