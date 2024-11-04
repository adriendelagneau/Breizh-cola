import Chronos from '@/components/Chronos'
import VideoStory from '@/components/VideoStory'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <VideoStory />
      <Chronos />
    </div>
  )
}

export default page