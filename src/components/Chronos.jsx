"use client"

import React, { useState, useEffect, useRef } from 'react'
import Years from './Years'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
        markers: false // Enable markers to debug the scroll positions
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
    <div className='relative w-full h-auto font-creamCake'>
      <Years currentIndex={currentIndex} sections={sections} />

      {/* Section for Year 2003 */}
      <div 
        className='relative w-full h-screen' 
        id='year-2003'
        ref={el => sectionsRef.current[0] = el}
      >
        <div className='absolute text-6xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4 text-secondColor'>
          Text for Year 2003
        </div>
        <Image 
          src={"/image/BC-2015.jpg"} 
          alt='Historical image from the year 2015 BC' 
          width={300} 
          height={413} 
          className='absolute transform -translate-x-1/2 -translate-y-1/2 skew-y-12 top-1/2 left-1/4'
        />
      </div>

      {/* Section for Year 2007 */}
      <div 
        className='w-full h-[150vh] relative' 
        id='year-2007'
        ref={el => sectionsRef.current[1] = el}
      >
              <div className='absolute text-6xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 text-secondColor '>
          Text for Year 2003
          </div>
        <Image 
          src={"/image/BC-2015.jpg"} 
          alt='Historical image from the year 2015 BC' 
          width={300} 
          height={413} 
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4'
        />
      </div>

      {/* Section for Year 2011 */}
      <div 
        className='w-full h-[100vh] relative' 
        id='year-2011'
        ref={el => sectionsRef.current[2] = el}
      >
              <div className='absolute text-6xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4 text-secondColor'>
          Text for Year 2003
        </div>
        <Image 
          src={"/image/BC-2015.jpg"} 
          alt='Historical image from the year 2015 BC' 
          width={300} 
          height={413} 
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4'
        />
      </div>

      {/* Section for Year 2018 */}
      <div 
        className='w-full h-[200vh] relative' 
        id='year-2018'
        ref={el => sectionsRef.current[3] = el}
      >
              <div className='absolute text-6xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 text-secondColor '>
          Text for Year 2003
          </div>
        <Image 
          src={"/image/BC-2015.jpg"} 
          alt='Historical image from the year 2015 BC' 
          width={300} 
          height={413} 
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4'
        />
      </div>

      {/* Section for Year 2022 */}
      <div 
        className='w-full h-[150vh] relative' 
        id='year-2022'
        ref={el => sectionsRef.current[4] = el}
      >
        <div className='absolute text-6xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4 text-secondColor'>
          Text for Year 2003
        </div>
        <Image 
          src={"/image/BC-2015.jpg"} 
          alt='Historical image from the year 2015 BC' 
          width={300} 
          height={413} 
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4'
        />
      </div>

      {/* Section for Year 2025 */}
      <div 
        className='w-full h-[150vh] relative' 
        id='year-2025'
        ref={el => sectionsRef.current[5] = el}
      >
              <div className='absolute text-6xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 text-secondColor '>
          Text for Year 2003
          </div>
        <Image 
          src={"/image/BC-2015.jpg"} 
          alt='Historical image from the year 2015 BC' 
          width={300} 
          height={413} 
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4'
        />
      </div>

      {/* Section for Year 2028 */}
      <div 
        className='w-full h-[150vh] relative' 
        id='year-2028'
        ref={el => sectionsRef.current[6] = el}
      >
          <div className='absolute text-6xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4 text-secondColor'>
          Text for Year 2003
        </div>
        <Image 
          src={"/image/BC-2015.jpg"} 
          alt='Historical image from the year 2015 BC' 
          width={300} 
          height={413} 
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4'
        />
      </div>

      {/* Section for Year 2031 */}
      <div 
        className='w-full h-[150vh] relative' 
        id='year-2031'
        ref={el => sectionsRef.current[7] = el}
      >
              <div className='absolute text-6xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4 text-secondColor '>
          Text for Year 2003
          </div>
        <Image 
          src={"/image/BC-2015.jpg"} 
          alt='Historical image from the year 2015 BC' 
          width={300} 
          height={413} 
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4'
        />
      </div>

      {/* Section for Year 2035 */}
      <div 
        className='w-full h-[150vh] relative' 
        id='year-2035'
        ref={el => sectionsRef.current[8] = el}
      >
            <div className='absolute text-6xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4 text-secondColor'>
          Text for Year 2003
        </div>
        <Image 
          src={"/image/BC-2015.jpg"} 
          alt='Historical image from the year 2015 BC' 
          width={300} 
          height={413} 
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/4'
        />
      </div>

    </div>
  )
}

export default Chronos
