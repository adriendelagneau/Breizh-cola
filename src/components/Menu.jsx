"use client";

import { useMenu, useSmoothScroll } from "@/store/zuStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import BurgerIcon2 from "./BurgerIcon2";


const Menu = () => {
  const menu1Ref = useRef(null);
  const { isMenuOpen, setMenu } = useMenu();

  const { isActive, toggleSmoothState } = useSmoothScroll((state) => ({
    isActive: state.isActive,
    toggleSmoothState: state.toggleSmoothState,
  }));
  
  useGSAP(() => {
    const tlOpen = gsap.timeline({
      paused: true,
      onStart: () => {
        isActive == true && toggleSmoothState();
        document.body.style.overflow = "hidden";
      },
    }).to(menu1Ref.current, { top: "0%", duration: 0.3 });

    const tlClose = gsap.timeline({
      paused: true,
      onComplete: () => {
        isActive == false && toggleSmoothState();
        document.body.style.overflow = "auto";
      },
    }).to(menu1Ref.current, { top: "100vh", duration: 0.3 });

    if (isMenuOpen) {
      tlOpen.play();
    } else {
      tlClose.play();
    }
  }, [isMenuOpen]);


  // Update the state based on window width
  const updateMedia = () => {
    window.innerWidth < 1024 && setMenu(false)
  };

  useEffect(() => {
    // Set initial state
    updateMedia();
    // Add resize event listener
    window.addEventListener('resize', updateMedia);
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div
      ref={menu1Ref}
      className="fixed left-0 z-30 w-full h-screen bg-mainDarkColor dark:bg-secondDarkColor  top-full"
    >
      <BurgerIcon2 />
    </div>
  );
};

export default Menu;
