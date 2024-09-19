"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Years = ({ currentIndex, sections }) => {
  const listRef = useRef(null);
  const liRefs = useRef([]);

  useEffect(() => {
    if (listRef.current) {
      // Animate the current li differently
      liRefs.current.forEach((li, i) => {
        if (i === currentIndex) {
          gsap.to(li, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out', // Add easing to make the transition smoother
          });
        } else {
          gsap.to(li, {
            scale: 0.4,
            duration: 0.5,
            ease: 'power2.out', // Same easing for non-active elements
          });
        }
      });
    }

    // Optional cleanup if needed
    return () => {
      liRefs.current.forEach((li) => {
        gsap.killTweensOf(li); // Clear any ongoing animations
      });
    };
  }, [currentIndex]);

  return (
    <div className='fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen font-bold text-9xl font-poppins text-mainColor'>
      <div className='overflow-y-hidden h-[105px]'>
        <ul 
          ref={listRef} 
          className='relative transform'
          style={{ transform: `translateY(${-(currentIndex * 100) / sections.length}%)` }}
        >
          {sections.map((s, i) => (
            <li
              key={i}
              ref={el => liRefs.current[i] = el}
              className='h-[105px] flex items-center justify-center'
            >
              {s.year}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Years;
