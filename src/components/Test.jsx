"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Flip from 'gsap/Flip';

gsap.registerPlugin(Flip) 

const Test = () => {
  const activeNavRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const links = linksRef.current;
    const activeNav = activeNavRef.current;

    links.forEach((link) => {
      link.addEventListener('click', () => {
      
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
          duration: 0.5,
          absolute: true,
          ease: 'elastic.out(1, 0.5)',
        });
      });
    });

    // Trigger click on first link to set initial position
    if (links.length > 0) {
      links[0].click();
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  return (
    <nav className="flex justify-center py-12">
      <ul className="flex gap-20 text-xl list-none ">
        <div className="relative nav-item">
          <li ref={addToRefs} className="text-yellow-400 cursor-pointer nav-link ">
        <div className='text-yellow-400 cursor-pointer'>Home</div>
          </li>
          <div ref={activeNavRef} className="active-nav h-1 bg-secondColor dark:bg-secondDarkColor rounded-lg absolute left-0 bottom-[-10px] w-full"></div>
        </div>
        <div className="relative nav-item">
          <li ref={addToRefs} className="text-yellow-400 cursor-pointer nav-link">
            My Projects
          </li>
        </div>
        <div className="relative nav-item">
          <li ref={addToRefs} className="text-yellow-400 cursor-pointer nav-link">
            Contact
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Test;

