"use client";

import gsap from "gsap";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTimelineStore2, useTimelineStore3, useTimelineStore4, useCurrentIndexStore } from "@/store/zuStore";

const TransitionLink = ({ href, children, setMenuOpen, myClass }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  const { reverseTimeline2 } = useTimelineStore2(); // Access reverse method from Zustand store
  const { reverseTimeline3 } = useTimelineStore3(); // Access reverse method from Zustand store
  const { reverseTimeline4 } = useTimelineStore4(); // Access reverse method from Zustand store
  const { resetCurrentIndex } = useCurrentIndexStore(); // Access reset method for current index

  const animate = () => {
    if (href === pathname) {
      return; // Prevent animation if already on the same path
    }

    // Create a new GSAP timeline
    let TL = gsap.timeline();

    // Step 1: Animate "enter"
    TL.to(["#transition0", "#transition1", "#transition2", "#transition3"], {
      top: "0",
      stagger: 0.24,
    }).then(() => {
      // Step 2: Reverse the timelines
      reverseTimeline2();
      reverseTimeline3();
      reverseTimeline4();

      // Step 3: Navigate to the new route
      router.push(href);
      setMenuOpen && setMenuOpen(false);

      // Step 4: Reset current index
      resetCurrentIndex(); // Reset the index to 0

      // Step 5: Animate "back" effect after navigation
      gsap.to(["#transition0", "#transition1", "#transition2", "#transition3"], {
        top: "-100%",
        stagger: 0.24,
        delay: 0.6,
      });
    });
  };

  return (
    <div className={myClass} onClick={animate}>
      {children}
    </div>
  );
};

export default TransitionLink;
