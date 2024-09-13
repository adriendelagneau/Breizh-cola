"use client"

import React from 'react'
import { useSmallMenu } from '@/store/zuStore';

const BurgerIcon = () => {
  // State to toggle the menu open/closed
  const { isSmallMenuOpen, toggleSmallMenu } = useSmallMenu((state) => ({
    isSmallMenuOpen: state.isSmallMenuOpen,
    toggleSmallMenu: state.toggleSmallMenu,
  }));

  return (
    <div>
      <button 
        onClick={toggleSmallMenu} 
        className="relative group"
      >
        <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px]">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-transform duration-300 origin-center overflow-hidden">
            <div 
              className={`bg-secondColor dark:bg-secondDarkColor h-[2px] w-7 transform transition-transform duration-300 origin-left ${isSmallMenuOpen ? 'rotate-[42deg]' : ''}`}
            ></div>
            <div 
              className={`bg-secondColor dark:bg-secondDarkColor h-[2px] w-1/2 rounded transform transition-transform duration-300 ${isSmallMenuOpen ? '-translate-x-10' : ''}`}
            ></div>
            <div 
              className={`bg-secondColor dark:bg-secondDarkColor h-[2px] w-7 transform transition-transform duration-300 origin-left ${isSmallMenuOpen ? '-rotate-[42deg]' : ''}`}
            ></div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default BurgerIcon
