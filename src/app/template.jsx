"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/animations";


export default function Template({ children }) {

  
  useEffect(() => {
    
    animatePageIn();
  }, []);

  return (
    <div className="capitalize text-9xl">
      <div
        id="transition-element"
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-secondColor font font-creamCake text-mainColor dark:text-mainDarkColor dark:bg-secondDarkColor"
      >breizh cola</div>
      {children}
    </div>
  );
}