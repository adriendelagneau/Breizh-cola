"use client";

import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useCurrentIndexStore, useTimelineStore2, useTimelineStore3, useTimelineStore4 } from "@/store/zuStore";


const TransitionLink = ({ href, label, myClass }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [transitionBloc, setTransitionBloc] = useState(null);
  const { resetTimeline2 } = useTimelineStore2(); 
  const { resetTimeline3 } = useTimelineStore3(); 
  const { resetTimeline4 } = useTimelineStore4(); 
  const { resetCurrentIndex } = useCurrentIndexStore();


  useEffect(() => {
    // Ensure that document querying only happens on the client
    if (typeof document !== 'undefined') {
      setTransitionBloc(document.querySelector('#transition-element'));
    }
  }, []);

  const handleClick = () => {
    if (href !== pathname && transitionBloc) {
      // Start the transition animation
      gsap
        .to(transitionBloc, {
          left: 0,
          duration: 0.6,
        })
        .then(() => router.push(href)) // Navigate to the new route
        .then(() => {
           
            resetTimeline2();
            resetTimeline3();
            resetTimeline4();
            resetCurrentIndex(); 
    })

    }
  };

  return (
    <div className={`${myClass} cursor-pointer`} onClick={handleClick}>
      {label}
    </div>
  );
};

export default TransitionLink;
