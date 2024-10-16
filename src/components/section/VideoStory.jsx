'use client';

import React from 'react';

const VideoStory = () => {
  return (
    <div className='flex items-center justify-center w-full py-24'>

    <div className="h-[180px] w-[320px] xl:w-[1000px] xl:h-[562px] sm:w-[600px] sm:h-[338px]">
      <video
       className="object-cover w-full h-full"
       poster='/image/meme.jpg'
       controls>
        <source src="https://res.cloudinary.com/dos8mey8r/video/upload/v1729073767/breizhCola/video1_ghybkr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  );
};

export default VideoStory;
