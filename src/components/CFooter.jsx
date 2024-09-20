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
      // Move the activeNav to the correct li without animation on first render
      const currentLink = links[currentIndex];

      if (currentLink && !currentLink.contains(activeNav)) {
        // Place the activeNav directly without animation for the initial render
        currentLink.appendChild(activeNav);
      }
    }
  }, []);  // Empty dependency array to run only once on mount

  useEffect(() => {
    const links = linksRef.current;
    const activeNav = activeNavRef.current;

    if (links.length > 0 && activeNav) {
      const currentLink = links[currentIndex];

      if (currentLink && !currentLink.contains(activeNav)) {
        // Animate the activeNav to the new position on click
        const state = Flip.getState(activeNav);
        currentLink.appendChild(activeNav);
        Flip.from(state, {
          duration: 0.5,
          absolute: true,
        });
      }
    }
  }, [currentIndex]);  // Re-run only when currentIndex changes

  const handleClick = (i) => {
    setCurrentIndex(i);  // Update Zustand store with the current index
  };

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);  // Store the refs of all nav links
    }
  };

  return (
    <div className='sticky bottom-0 left-0 z-0 flex flex-col justify-end w-full h-screen p-6 bg-mainColor dark:bg-mainDarkColor dark:text-secondDarkColor text-secondColor'>
      <ul className='flex gap-10 text-xl'>
        {sections.map((y, i) => (
          <div key={i} className="relative nav-item">
            <li
              ref={addToRefs}
              className={`text-4xl transition cursor-pointer font-poppins hover:scale-110 nav-link`}
              onClick={() => handleClick(i)}
            >
              <AnchorLink destination={y.id} name={y.year} />
            </li>
          </div>
        ))}
        {/* Active underline (rendered only once, outside the loop) */}
        <div 
          ref={activeNavRef} 
          className="active-nav h-[2px] bg-secondColor dark:bg-secondDarkColor rounded-lg absolute left-0 bottom-[-10px] w-full"
        ></div>
      </ul>
    </div>
  );
};

export default CFooter;
