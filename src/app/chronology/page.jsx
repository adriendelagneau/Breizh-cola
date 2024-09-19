"use client";

import CFooter from '@/components/CFooter';
import Chronos from '@/components/Chronos';
import Screen from '@/components/section/Screen';
import React from 'react'

const page = () => {

  return (
    <div className={`min-h-[150vh] dark:bg-mainDarkColor  bg-mainColor text-mainColor`}>
      <Screen />
      <Chronos />
      <CFooter />
    </div>
  )
}

export default page
