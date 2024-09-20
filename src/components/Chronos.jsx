"use client"

import React, { useEffect, useRef } from 'react';
import Years from './Years';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sections } from '@/utils/data';
import { useCurrentIndexStore } from '@/store/zuStore';
import CFooter from './CFooter';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Chronos = () => {
  const { currentIndex, setCurrentIndex } = useCurrentIndexStore(state => ({
    currentIndex: state.currentIndex,
    setCurrentIndex: state.setCurrentIndex,
  }));
  
  const sectionsRef = useRef([]);

  useGSAP(() => {
    const triggers = sectionsRef.current.map((section, index) =>
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentIndex(index),
        onEnterBack: () => setCurrentIndex(index),
        markers: false // Disable markers
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
          className={`w-full h-[150vh] relative`} 
          id={section.id}
          ref={el => sectionsRef.current[index] = el}
        >
          {/* Alternate text and image position */}
          {index % 2 === 0 ? (
            <>
              <div className='absolute transform -translate-x-1/2 left-1/4 dark:text-secondDarkColor text-secondColor'>
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
              <div className='absolute transform -translate-x-1/2 left-3/4 dark:text-secondDarkColor text-secondColor'>
                {section.text}
              </div>
            </>
          )}
        </div>
      ))}
            <CFooter />
    </div>
  );
};

export default Chronos;
