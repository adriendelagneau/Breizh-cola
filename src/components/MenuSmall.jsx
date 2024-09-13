"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useEffect } from "react";
import { useSmoothScroll } from "@/store/zuStore";
import { useSmallMenu } from "@/store/zuStore";

const MenuSmall = () => {

  const { isSmallMenuOpen } = useSmallMenu((state) => ({ isSmallMenuOpen: state.isSmallMenuOpen }));

  const menuRef = useRef(null);
  const lRef = useRef(null)
  const dropdownRef = useRef(null);
  const { isActive, toggleSmoothState } = useSmoothScroll((state) => ({
    isActive: state.isActive,
    toggleSmoothState: state.toggleSmoothState,
  }));
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };


  useGSAP(() => {
    if (dropdownOpen) {
      gsap.timeline()
        .to(dropdownRef.current, {
          height: "auto",
          duration: 0.2,
          opacity: 1,
          ease: "power.out",
        })

    } else {
      gsap.timeline()
        .to(dropdownRef.current, {
          height: 0,
          duration: 0.2,
          ease: "power.in",
        })
    }
  }, [dropdownOpen]);

  useGSAP(() => {
    const tlOpen = gsap.timeline({
      paused: true,
      onStart: () => {
        isActive == true && toggleSmoothState();
        document.body.style.overflow = "hidden";
      },
    }).to(menuRef.current, { left: "0%", duration: 0.3 });

    const tlClose = gsap.timeline({
      paused: true,
      onComplete: () => {
        isActive == false && toggleSmoothState();
        document.body.style.overflow = "auto";
      },
    }).to(menuRef.current, { left: "-100%", duration: 0.3 });

    if (isSmallMenuOpen) {
      tlOpen.play();
    } else {
      tlClose.play();
    }
  }, [isSmallMenuOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed z-30 w-full h-screen bg-mainColor top-20 text-secondColor -left-full"
    >
      <ul className="w-full h-full bg-gradient-to-b from-red-800 to-red-950">
        <li
          className="flex flex-col items-center justify-center w-full py-6 text-4xl font-bold uppercase cursor-pointer bg-gradient-to-b from-red-800 to-red-950"
          onClick={toggleDropdown}
        >
          produits
        </li>
        <li className="w-full h-[3px] bg-secondColor"></li>
        <ul
          ref={dropdownRef}
          className="h-0 overflow-hidden font-bold uppercase opacity-0"
        >
          <li className="py-4 text-2xl text-center text-white">Link</li>
          <li className="py-4 text-2xl text-center text-white">Link</li>
          <li className="py-4 text-2xl text-center text-white">Link</li>
        </ul>
        <li ref={lRef} className="w-full h-[3px] bg-secondColor opacity-0"></li>
        <li className="flex items-center justify-center w-full py-6 text-4xl font-bold uppercase cursor-pointer bg-gradient-to-b from-red-800 to-red-950">
          historique
        </li>
        <li className="w-full h-[3px] bg-secondColor"></li>
      </ul>
    </div>
  );
};

export default MenuSmall;
