"use client";

import React, { useEffect, useRef, useState } from 'react';
import Years from './Years';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sections } from '@/utils/data';

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Chronos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const triggers = sectionsRef.current.map((section, index) =>
      ScrollTrigger.create({
        trigger: section!,
        start: 'center center',
        onEnter: () => setCurrentIndex(index),
        onEnterBack: () => setCurrentIndex(index),
        markers: true // Set to false in production
      })
    );

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, [setCurrentIndex]);

  return (
    <div className='relative top-0 left-0 w-full'>

<Years currentIndex={currentIndex} />
      {/* Custom rendering of sections */}
      {sections.map((section, index) => (
        <div 
          key={section.id} 
          className={`w-full h-[200vh] relative text-3xl font-poppins`} 
          id={section.id}
          ref={(el) => { sectionsRef.current[index] = el; }}  
        >
          {/* Alternate text and image position */}
          {index % 2 === 0 ? (
            <>
              <div className='absolute w-64 transform -translate-x-1/2 left-1/4 dark:text-secondDarkColor text-mainColor top-72'>
                {section.text}
              </div>
              <Image 
                src={section.image} 
                alt={`Historical image from the year ${section.year}`} 
                width={300} 
                height={413} 
                className='absolute transform -translate-x-1/2 left-3/4'
                layout="intrinsic"
              />
            </>
          ) : (
            <>
              <Image 
                src={section.image} 
                alt={`Historical image from the year ${section.year}`} 
                width={300} 
                height={413} 
                className='absolute transform -translate-x-1/2 left-1/4'
                layout="intrinsic"
              />
              <div className='absolute transform -translate-x-1/2 left-3/4 dark:text-secondDarkColor text-secondColor top-72'>
                {section.text}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chronos;
