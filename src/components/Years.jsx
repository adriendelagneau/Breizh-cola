import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { sections } from '@/utils/data';
import { useCurrentIndexStore } from '@/store/zuStore';

const Years = () => {
  const listRef = useRef(null);
  const liRefs = useRef([]);

  const { currentIndex } = useCurrentIndexStore(state => state);

  useEffect(() => {
    if (listRef.current) {
      // Animate the current li differently
      liRefs.current.forEach((li, i) => {
        if (i === currentIndex) {
          gsap.to(li, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          });
        } else {
          gsap.to(li, {
            scale: 0.4,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      });
    }

    // Optional cleanup if needed
    return () => {
      liRefs.current.forEach((li) => {
        gsap.killTweensOf(li);
      });
    };
  }, [currentIndex]);

  return (
    <div className='fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen font-bold text-9xl font-poppins text-secondColor dark:text-secondDarkColor'>
      <div className='overflow-y-hidden h-[105px]'>
        <ul 
          ref={listRef} 
          className='relative transition transform'
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
