import React from 'react'
import { Copyright } from 'lucide-react'
import SocialLinks from './section/SocialLinks'

const Footer = () => {
  return (

    <div
      className='relative h-[100px] bg-secondColor text-mainColor dark:bg-secondDarkColor dark:text-mainDarkColor'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='fixed bottom-0 h-[100px] w-full flex items-center justify-between px-3'>

        <div className='flex items-center w-1/3'>
          <Copyright strokeWidth={1.5}/>
          <div className='pl-1 font-semibold capitalize text-md xl:text-xl'>copyright 2024</div>
        </div>

        <SocialLinks />

        <div className='w-1/3 text-3xl text-right capitalize sm:text-4xl font-creamCake 2xl:text-5xl'>breizh cola</div>

      </div>
    </div>

  )
}

export default Footer

