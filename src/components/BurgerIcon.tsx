"use client"

import React, { useState } from 'react'

type Props = {}

const BurgerIcon = (props: Props) => {

  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState<boolean>(false);

  // Toggle function to open/close the menu
  const toggleSmallMenu = () => {
    setIsSmallMenuOpen((prevState) => !prevState);
  }
  return (
    <div>
    <button 
      onClick={toggleSmallMenu} 
      className="relative group"
    >
      <div className="relative flex overflow-hidden items-center justify-center w-[28px] h-[40px]">
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-transform duration-300 origin-center overflow-hidden">
          <div 
            className={`bg-secondColor dark:bg-mainColor h-[2px] w-7 transform transition-transform duration-300 origin-left ${isSmallMenuOpen ? 'rotate-[42deg]' : ''}`}
          ></div>
          <div 
            className={`bg-secondColor dark:bg-mainColor h-[2px] w-1/2 rounded transform transition-transform duration-300 ${isSmallMenuOpen ? '-translate-x-10 opacity-0' : ''}`}
          ></div>
          <div 
            className={`bg-secondColor dark:bg-mainColor h-[2px] w-7 transform transition-transform duration-300 origin-left ${isSmallMenuOpen ? '-rotate-[42deg]' : ''}`}
          ></div>
        </div>
      </div>
    </button>
  </div>
  )
}

export default BurgerIcon
