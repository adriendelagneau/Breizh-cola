"use client";

import React, { useRef } from 'react';
import BurgerIcon from './BurgerIcon';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useBubbleStore } from '@/hooks/useZuStore';




const Header = () => {

  const navbarRef = useRef(null);
  const lastScrollTop = useRef(0);

  const togglePlay = useBubbleStore((state) => state.togglePlay);


  useGSAP(() => {
      gsap.to(navbarRef.current,{ top: "0%", duration: 0.6, ease: "back.out(0.6)", delay: 2.1 });
  });

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
  });


  return (
    <nav
    ref={navbarRef}
      className='fixed left-0 z-50 flex justify-between w-full h-20 p-3 -top-full bg-secondColor text-mainColor md:p-4 font-poppins '
    >
      <div className='flex items-center font-bold uppercase sm:text-xl'>
        <ul className='flex gap-3 text-xl font-bold uppercase'>
          <li
            className='underline-effect'
          >
            produits
          </li>
          <Link
            className='underline-effect'
            href={"/chronology"}>History</Link>
        </ul>
      </div>
      <div className='absolute text-5xl capitalize -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-creamCake md:text-6xl'>
        <Link href={"/"}>Breizh Cola</Link>
      </div>
      <div className='flex items-center justify-end '>
        <div className='flex items-center text-xl font-bold uppercase cursor-pointer'>
          <div onClick={togglePlay}>bubbles</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
