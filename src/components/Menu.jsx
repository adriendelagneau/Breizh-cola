"use client";

import { useMenu } from "@/store/zuStore"; // Import Zustand store
import { useEffect, useRef } from "react";
import BurgerIconMenu from "./BurgerIconMenu";
import TransitionLink from "./TransitionLink";
import gsap from "gsap";

const Menu = () => {
  const menu1Ref = useRef(null);
  const liRefs = useRef([]); // Array to store the refs for li divs
  const { isMenuOpen, playMenu, reverseMenu, timelineX } = useMenu(); // Access Zustand store

  useEffect(() => {
    // Initialize GSAP timeline from the Zustand store
    if (timelineX && !timelineX.isActive()) {
      timelineX
        .to(menu1Ref.current, { top: "0%", duration: 0.3 }) // Menu slides in
        .to(
          liRefs.current,
          { y: 0, duration: 0.3, stagger: 0.25, ease: "power4.out" }, // Animate each item
          "<0.4" // Start this animation slightly after the menu slides in
        );
        
      liRefs.current.forEach((li) => {
        gsap.set(li, { y: "100%" }); // Set initial position for each item
      });
    }
  }, [timelineX]);

  useEffect(() => {
    // Play or reverse the timeline based on the menu state
    if (isMenuOpen) {
      playMenu(); // Play GSAP animation when menu opens
    } else {
      reverseMenu(); // Reverse GSAP animation when menu closes
    }
  }, [isMenuOpen, playMenu, reverseMenu]);

  // Update the state based on window width
  const updateMedia = () => {
    if (window.innerWidth < 1024) {
      reverseMenu(); // Close menu if screen width is below 1024px
    }
  };

  useEffect(() => {
    // Add resize event listener
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div
      ref={menu1Ref}
      className="fixed left-0 z-40 w-full h-screen overflow-hidden bg-mainDarkColor dark:bg-secondDarkColor top-full"
    >
      <BurgerIconMenu />
      <ul className="flex flex-col items-center justify-center w-full h-full gap-4 uppercase text-8xl text-mainColor font-poppins dark:text-mainDarkColor">
        {["original", "zero", "cherry"].map((label, index) => (
          <li className="relative overflow-hidden" key={label}>
            <div
              ref={(el) => (liRefs.current[index] = el)}
              className="translate-y-full"
            >
              <TransitionLink
                href={`/products/breizh-cola-${label}`}
                label={label}
                myClass="transition-link"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
