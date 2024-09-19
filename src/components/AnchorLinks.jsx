'use client' // If you're using NextJS
import React from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const AnchorLink = ({ destination, name }) => {
  const handleClick = () => {
    gsap.to(window, { duration: 0.3, scrollTo: `#${destination}` });
  };

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {name}
    </span>
  );
};

export default AnchorLink;
