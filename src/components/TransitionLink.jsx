"use client";

import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const TransitionLink = ({ href, label, myClass }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [transitionBloc, setTransitionBloc] = useState(null);

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
    //     .then(() => {
           
    //         reverseTimeline2();
    //         reverseTimeline3();
    //         reverseTimeline4();
    //         resetCurrentIndex(); 
    // })
        .then(() => router.push(href)) // Navigate to the new route
        .then(() => {
          // Once the route has changed, hide the transition
          gsap.to(transitionBloc, {
            left: '-100vw',
            duration: 0.6,
            delay: 1
          });
        });
    }
  };

  return (
    <div className={`${myClass} cursor-pointer`} onClick={handleClick}>
      {label}
    </div>
  );
};

export default TransitionLink;
