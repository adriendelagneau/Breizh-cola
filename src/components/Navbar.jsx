"use client";

import React, { useState, useEffect, useRef } from 'react';
import BurgerIcon from './BurgerIcon';
import { useMenu, useSmallMenu } from '@/store/zuStore';
import { useTimelineStore } from '@/store/zuStore';
import ThemeSwitcher from './ThemeSwitcher';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import TransitionLink from './TransitionL';

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const navbarRef = useRef(null);
  const lastScrollTop = useRef(0);
  const { setSmallMenu } = useSmallMenu();
  const { setMenu } = useMenu();
  const { timeline } = useTimelineStore();

  // Update the state based on window width and ensure the navbar is shown on mobile
  const updateMedia = () => {
    const windowWidth = window.innerWidth;
    setIsDesktop(windowWidth > 1280);

    // If the screen width is greater than 1280px, close small menu
    if (windowWidth > 1280) {
      setSmallMenu(false);
    }

    // If screen width is less than 1280px, reset the navbar to be visible
    if (windowWidth < 1280) {
      gsap.to(navbarRef.current, { y: "0%", duration: 0 });
    }
  };

  useEffect(() => {
    // Set initial state
    updateMedia();

    // Add resize event listener
    window.addEventListener('resize', updateMedia);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  // Timeline animation applies to all screen sizes, bringing the navbar into view from -top-full to top-0
  useGSAP(() => {
    if (timeline) {
      timeline.to(
        navbarRef.current,
        { top: "0%", duration: 0.6, ease: "power4.out", delay: 1.5 },
        "one"
      );
    }
  }, [timeline]);

  useGSAP(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop.current && currentScrollTop > 200) {
        gsap.to(navbarRef.current, { translateY: "-100%", duration: 0.3 });
      } else if (currentScrollTop < lastScrollTop.current) {
        gsap.to(navbarRef.current, { translateY: "0%", duration: 0.3 });
      }
      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={navbarRef}
      className='fixed left-0 z-40 flex justify-between w-full h-20 p-1 -top-full bg-mainColor text-secondColor md:p-4 font-poppins dark:bg-mainDarkColor dark:text-secondDarkColor'
    >
      <div className='flex items-center font-bold uppercase sm:text-xl'>
        {isDesktop ? (
          <ul className='flex gap-3 text-xl font-bold uppercase'>
            <li
              className='relative cursor-pointer after:bg-secondColor after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all dark:after:bg-secondDarkColor'
              onClick={() => setMenu(true)}
            >
              produits
            </li>
            <TransitionLink
              href={"/chronology"}
              label={"historique"}
              myClass={
                "relative cursor-pointer after:bg-secondColor after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all dark:after:bg-secondDarkColor"
              }
            >
              historique
            </TransitionLink>

          </ul>
        ) : (
          <div className='flex items-center text-xl font-bold uppercase'>
            <BurgerIcon />
          </div>
        )}
      </div>
      <div className='absolute text-5xl capitalize -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-creamCake md:text-6x'>
        <TransitionLink href={"/"} label={"breizh cola"} myClass={" "}>breiz cola</TransitionLink>
      </div>
      <div className='flex items-center justify-end '>
        <div className='flex items-center text-xl font-bold uppercase cursor-pointer'>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
