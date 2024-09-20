"use client"

import React, { useEffect, useRef } from 'react';
import { useCurrentIndexStore } from '@/store/zuStore'; 
import AnchorLink from './AnchorLinks';
import { sections } from '@/utils/data';
import { gsap } from 'gsap';
import Flip from 'gsap/Flip';

gsap.registerPlugin(Flip);

const CFooter = () => {
  const { currentIndex, setCurrentIndex } = useCurrentIndexStore(state => ({
    currentIndex: state.currentIndex,
    setCurrentIndex: state.setCurrentIndex,
  }));

  const activeNavRef = useRef(null);  // Ref for the active underline
  const linksRef = useRef([]);  // Ref for the nav links

  useEffect(() => {
    const links = linksRef.current;
    const activeNav = activeNavRef.current;

    if (links.length > 0 && activeNav) {
      // Ensure activeNav is already appended to the right element
      const currentLink = links[currentIndex];

      // Only move activeNav if it's not already inside the current link
      if (currentLink && !currentLink.contains(activeNav)) {
        const state = Flip.getState(activeNav); // Capture the initial state of the underline
        currentLink.appendChild(activeNav); // Append the underline to the active link
        Flip.from(state, {
          duration: 0.5,
          absolute: true,
        });
      }
    }
  }, [currentIndex]);  // Re-run when currentIndex changes

  const handleClick = (i) => {
    setCurrentIndex(i);  // Update Zustand store with the current index
  };

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);  // Store the refs of all nav links
    }
  };

  return (
    <div className='fixed bottom-0 left-0 z-20 w-full p-6 bg-mainColor dark:bg-mainDarkColor dark:text-secondDarkColor text-secondColor'>
      <ul className='flex gap-10 text-xl'>
        {sections.map((y, i) => (
          <div key={i} className="relative nav-item">
            <li
              ref={addToRefs}
              className={`text-4xl transition cursor-pointer font-poppins hover:scale-110 nav-link ${
                currentIndex === i ? 'text-activeColor' : ''
              }`}
              onClick={() => handleClick(i)}
            >
              <AnchorLink destination={y.id} name={y.year} />
            </li>
          </div>
        ))}
        {/* Active underline (rendered only once, outside the loop) */}
        <div 
          ref={activeNavRef} 
          className="active-nav h-1 bg-secondColor dark:bg-secondDarkColor rounded-lg absolute left-0 bottom-[-10px] w-full"
        ></div>
      </ul>
    </div>
  );
};

export default CFooter;
