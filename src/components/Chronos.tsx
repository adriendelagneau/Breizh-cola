"use client";

import React, { useRef, useState, useEffect } from 'react';
import Years from './Years';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sections } from '@/lib/data';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Chronos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useGSAP(() => {
    const triggers = sectionsRef.current.map((section, index) =>
      ScrollTrigger.create({
        trigger: section!,
        start: 'top 20%', // Triggers slightly before center for smoother sync
        onEnter: () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setCurrentIndex(index), 50);
        },
        onEnterBack: () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setCurrentIndex(index), 50);
        },
        markers: true,
    
      })
    );

    return () => {
      triggers.forEach(trigger => trigger.kill());
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // 🔁 Force sync on first render (fixes initial mismatch)
  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  return (
    <div className='relative w-full'>
    
      <Years currentIndex={currentIndex} />
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={el => { sectionsRef.current[index] = el; }}
          id={section.id}
          className='w-full h-screen relative  text-5xl font-poppins px-6  '
          role="region"
          aria-label={`Section for the year ${section.year}`}
        >
          {index % 2 === 0 ? (
            <>
              <div className='absolute w-96 -translate-x-1/2 left-1/4 top-1/2 transform -translate-y-1/2 text-primary'>
                {section.text}
              </div>
              <Image
                src={section.image}
                alt={`Image for ${section.year}`}
                width={400}
                height={413}
                className='absolute -translate-x-1/2 left-3/4 top-1/2 transform -translate-y-1/2'
              />
            </>
          ) : (
            <>
              <Image
                src={section.image}
                alt={`Image for ${section.year}`}
                width={300}
                height={413}
                className='absolute -translate-x-1/2 left-1/4 top-1/2 transform -translate-y-1/2'
                />
              <div className='absolute w-96 -translate-x-1/2 left-3/4 top-1/2 transform -translate-y-1/2 text-primary'>
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
