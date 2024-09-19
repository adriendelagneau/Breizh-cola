import React, { useState, useEffect, useRef } from 'react';
import Years from './Years';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sections } from '@/utils/data';
import { useCurrentIndexStore } from '@/store/zuStore';

gsap.registerPlugin(ScrollTrigger);

const Chronos = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const { currentIndex, setCurrentIndex } = useCurrentIndexStore(state => ({
    currentIndex: state.currentIndex,
    setCurrentIndex: state.setCurrentIndex,
  }));
  
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Create scroll triggers for each section
    sectionsRef.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentIndex(index),
        onEnterBack: () => setCurrentIndex(index),
        markers: false // Disable markers
      });
    });

    return () => {
      // Clean up scroll triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='relative w-full h-auto'>
      {/* Container for the fixed Years */}
      <div className="relative">
        {/* Ensure Years is fixed within the Chronos component */}
        <Years currentIndex={currentIndex} />
      </div>

      {/* Sections for each year */}
      {sections.map((section, index) => (
        <div 
          key={section.id} 
          className={`w-full h-[150vh] relative`} 
          id={section.id}
          ref={el => sectionsRef.current[index] = el}
        >
          <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 dark:text-secondDarkColor text-secondColor'>
            Text for Year {section.year}
          </div>
          <Image 
            src={"/image/BC-2015.jpg"} 
            alt={`Historical image from the year ${section.year}`} 
            width={300} 
            height={413} 
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4'
          />
        </div>
      ))}
    </div>
  );
};

export default Chronos;
