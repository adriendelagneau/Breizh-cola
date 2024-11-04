"use client"

"use client"

import { useEffect, ReactNode } from "react";
import { ReactLenis, useLenis } from 'lenis/react';

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.start();
    }
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.2, duration: 0.9 }}>
      {children}
    </ReactLenis>
  );
}
