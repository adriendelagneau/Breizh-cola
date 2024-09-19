import React, { useState, useEffect, useRef } from 'react';
import Years from './Years';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Chronos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const sections = [
    { id: 'year-2003', year: 2003 },
    { id: 'year-2007', year: 2007 },
    { id: 'year-2011', year: 2011 },
    { id: 'year-2018', year: 2018 },
    { id: 'year-2022', year: 2022 },
    { id: 'year-2025', year: 2025 },  // New Section
    { id: 'year-2028', year: 2028 },  // New Section
    { id: 'year-2031', year: 2031 },  // New Section
    { id: 'year-2035', year: 2035 },  // New Section
  ];

  return (
    <div className='relative w-full h-auto'>
      {/* Container for the fixed Years */}
      <div className="relative">
        {/* Ensure Years is fixed within the Chronos component */}
        <Years currentIndex={currentIndex} sections={sections} />
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
