// app/hooks/useScrollTriggerRefresh.ts
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollTriggerRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    // Delay ensures layout is rendered
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]); // reruns on navigation
}
