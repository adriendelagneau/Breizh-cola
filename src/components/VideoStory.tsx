"use client";

import React from "react";

const VideoStory = () => {
  return (
    <div className="h-screen w-full py-24 flex flex-col items-center ">
      <h1 className="font-poppins text-7xl uppercase text-primary py-20">
        {" "}
        l&apos; aventure Breizh Cola
      </h1>

      <div className="h-[180px] w-[320px] xl:w-[1000px] xl:h-[562px] sm:w-[600px] sm:h-[338px]">
        <video
          className="object-cover w-full h-full"
          poster="https://res.cloudinary.com/dos8mey8r/image/upload/v1729074431/breizhCola/meme_w645rs.jpg"
          controls
        >
          <source
            src="https://res.cloudinary.com/dos8mey8r/video/upload/v1729073767/breizhCola/video1_ghybkr.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoStory;
