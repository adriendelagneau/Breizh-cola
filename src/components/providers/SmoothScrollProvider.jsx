"use client"

import { useEffect } from "react";
import ReactLenis, { useLenis } from "@studio-freight/react-lenis";
import { useSmoothScroll } from "@/store/zuStore";


export function SmoothScrollProvider({ children }) {
  const lenis = useLenis();
  const isActive = useSmoothScroll((state) => state.isActive)

  useEffect(() => {
    if (lenis) {
      if (isActive) {
        lenis.start();
      } else {
        lenis.stop();
      }
    }
  }, [isActive, lenis]);


  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}
