"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/animations";


export default function Template({ children }) {

  
  useEffect(() => {
    
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="transition-element"
        className="fixed top-0 left-0 z-50 w-screen h-screen bg-black"
      ></div>
      {children}
    </div>
  );
}