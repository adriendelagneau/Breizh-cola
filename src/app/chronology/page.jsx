"use client";

import CFooter from '@/components/CFooter';
import Chronos from '@/components/Chronos';
import Screen from '@/components/section/Screen';
import TransitionOut from '@/components/TransitionOut';
import React from 'react'

const page = () => {

  return (
    <>
    <TransitionOut />
    <div className={`min-h-[150vh] dark:bg-mainDarkColor  bg-mainColor text-mainColor`}>
      <Screen />
      <Chronos />
    </div>
    </>
  )
}

export default page
