import Chronos from '@/components/Chronos'
import VideoStory from '@/components/VideoStory'
import React from 'react'



const page = () => {
  return (
    <div className='bg-secondary'>
      {/* <VideoStory /> */}
      <Chronos />
      <div className='w-full h-screen bg-secondary'></div>
    </div>
  )
}

export default page