"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";
import { useCurrentIndexStore, useTimelineStore2, useTimelineStore3, useTimelineStore4 } from "@/store/zuStore";

export default function TransitionLink({
  href,
  label,
  myClass
}) {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  const { reverseTimeline2 } = useTimelineStore2(); // Access reverse method from Zustand store
  const { reverseTimeline3 } = useTimelineStore3(); // Access reverse method from Zustand store
  const { reverseTimeline4 } = useTimelineStore4(); // Access reverse method from Zustand store
  const { resetCurrentIndex } = useCurrentIndexStore(); // Access reset method for current index


  const handleClick = () => {
    if (href !== pathname) {
      // Add the onComplete callback to the animation
      animatePageOut(href, router, () => {
        // This will execute once the animation completes
        reverseTimeline2();
        reverseTimeline3();
        reverseTimeline4();

        // Step 4: Reset current index
        resetCurrentIndex(); // Reset the index to 0
      });
    }
  };

  return (
    <div
      className={`${myClass} cursor-pointer`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
}
