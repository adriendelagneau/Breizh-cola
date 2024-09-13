"use client"

import React from 'react'
import { useMenu } from '@/store/zuStore';

const BurgerIcon2 = () => {
  // State to toggle the menu open/closed
  const { toggleMenu } = useMenu((state) => ({toggleMenu: state.toggleMenu}));

  return (
    <div>
      <button 
        onClick={toggleMenu} 
        className="relative group"
      >
        <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px]">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div 
              className={`bg-secondColor dark:bg-mainColor h-[2px] w-7 transform transition-all duration-300 origin-left rotate-[42deg]`}
            ></div>
            <div 
              className={`bg-secondColor dark:bg-mainColor h-[2px] w-1/2 rounded transform transition-all duration-300 -translate-x-10`}
            ></div>
            <div 
              className={`bg-secondColor dark:bg-mainColor h-[2px] w-7 transform transition-all duration-300 origin-left -rotate-[42deg]`}
            ></div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default BurgerIcon2
