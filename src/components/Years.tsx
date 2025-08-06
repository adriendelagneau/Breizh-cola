"use client";

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { sections } from '@/lib/data';

interface YearsProps {
  currentIndex: number;
}

const Years = ({ currentIndex }: YearsProps) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(() => {
    liRefs.current.forEach((li, i) => {
      gsap.to(li, {
        scale: i === currentIndex ? 1 : 0.4,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  }, { dependencies: [currentIndex] });

  return (
    <div className='sticky top-0 -mt-[100vh] left-0 z-20 flex items-center justify-center w-full h-screen font-bold text-9xl font-poppins text-primary pointer-events-none'>
      <div className='overflow-hidden h-[105px]'>
        <ul
          ref={listRef}
          className='relative transition-transform'
          style={{ transform: `translateY(${-(currentIndex * 105)}px)` }}
        >
          {sections.map((s, i) => (
            <li
              key={i}
              ref={el => { liRefs.current[i] = el; }}
              className='h-[105px] flex items-center justify-center -skew-x-12 p-6'
            >
              {s.year}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Years;
