'use client';

import React from 'react';

const VideoStory = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>

    <div className="h-[720px] w-[1080px]">
      <video
       className="object-cover w-full h-full"
       poster='/image/meme.jpg'
       controls>
        <source src="/video/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  );
};

export default VideoStory;
