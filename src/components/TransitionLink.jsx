"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations"; 
import { useCurrentIndexStore, useTimelineStore2, useTimelineStore3, useTimelineStore4 } from "@/store/zuStore";

export default function TransitionLink({
  href,
  label,
  myClass
}) {
  const router = useRouter();
  const pathname = usePathname(); 

  const { reverseTimeline2 } = useTimelineStore2(); 
  const { reverseTimeline3 } = useTimelineStore3(); 
  const { reverseTimeline4 } = useTimelineStore4(); 
  const { resetCurrentIndex } = useCurrentIndexStore();


  const handleClick = () => {
    console.log(href, pathname)
    if (href !== pathname) {
      // Add the onComplete callback to the animation
      animatePageOut(href, router, () => {
    
        reverseTimeline2();
        reverseTimeline3();
        reverseTimeline4();
        resetCurrentIndex(); 
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
