"use client"

import React from 'react'
import Years from './Years'
import CFooter from './CFooter'

const Test = () => {
  return (
    <div className='sticky top-0 left-0 z-30 flex items-center justify-center w-full h-screen font-bold text-9xl font-poppins text-secondColor dark:text-secondDarkColor'>
      <CFooter />
      <Years />
    </div>
  )
}

export default Test
