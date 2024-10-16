"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useEffect } from "react";
import { useSmoothScroll } from "@/store/zuStore";
import { useSmallMenu } from "@/store/zuStore";

const MenuSmall = () => {

  const { isSmallMenuOpen } = useSmallMenu((state) => ({ isSmallMenuOpen: state.isSmallMenuOpen }));

  const menuRef = useRef(null);

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
      className="fixed z-30 w-full h-screen bg-mainColor dark:bg-secondColor dark:text-mainColor top-20 text-secondColor -left-full"
    >

    </div>
  );
};

export default MenuSmall;
