"use client";

import { useMenu, useSmoothScroll } from "@/store/zuStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import BurgerIconMenu from "./BurgerIconMenu";
import TransitionLink from "./TransitionLink"; // Import TransitionLink component

const Menu = () => {
  const menu1Ref = useRef(null);
  const liRefs = useRef([]); // Array to store the refs for li divs
  const { isMenuOpen, setMenu } = useMenu();

  const { isActive, toggleSmoothState } = useSmoothScroll((state) => ({
    isActive: state.isActive,
    toggleSmoothState: state.toggleSmoothState,
  }));

  useGSAP(() => {
    // Timeline for menu open animation
    const tlOpen = gsap.timeline({
      paused: true,
      onStart: () => {
        if (isActive) toggleSmoothState();
        document.body.style.overflow = "hidden";
      },
    })
    .to(menu1Ref.current, { top: "0%", duration: 0.3 }) // Menu slides in
    .to(
      liRefs.current,
      { y: 0, duration: 0.3, stagger: 0.25, ease: "power4.out" }, // Animate to visible position
      "<0.4" // Start animation slightly after menu opening
    );

    // Timeline for menu close animation
    const tlClose = gsap.timeline({
      paused: true,
      onComplete: () => {
        if (!isActive) toggleSmoothState();
        document.body.style.overflow = "auto";
      },
    })
    .to(
      liRefs.current,
      { y: "100%", duration: 0.3, stagger: 0.25, ease: "power4.in" } // Animate out with y position
    )
    .to(menu1Ref.current, { top: "100vh", duration: 0.3 }); // Menu slides out

    // Play timelines based on menu state
    if (isMenuOpen) {
      tlOpen.play();
    } else {
      tlClose.play();
    }
  }, [isMenuOpen]);

  // Update the state based on window width
  const updateMedia = () => {
    if (window.innerWidth < 1024) setMenu(false);
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
      className="fixed left-0 z-40 w-full h-screen overflow-hidden bg-mainDarkColor dark:bg-secondDarkColor top-full"
    >
      <BurgerIconMenu />
      <ul className="flex flex-col items-center justify-center w-full h-full gap-4 uppercase text-8xl text-mainColor font-poppins dark:text-mainDarkColor">
        <li className="relative overflow-hidden">
          <div ref={(el) => liRefs.current[0] = el} className="translate-y-full">
            <TransitionLink href="/products/original" label="original" myClass="transition-link" /> {/* Using TransitionLink */}
          </div>
        </li>
        <li className="relative overflow-hidden">
          <div ref={(el) => liRefs.current[1] = el} className="translate-y-full">
            <TransitionLink href="/products/zero" label="zero" myClass="transition-link" /> {/* Using TransitionLink */}
          </div>
        </li>
        <li className="relative overflow-hidden">
          <div ref={(el) => liRefs.current[2] = el} className="translate-y-full">
            <TransitionLink href="/products/cherry" label="cherry" myClass="transition-link" /> {/* Using TransitionLink */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
