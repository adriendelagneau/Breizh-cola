"use client"

import gsap from 'gsap';
import React, { useEffect, useState } from 'react'

const TransitionOut = () => {
    const [transitionBloc, setTransitionBloc] = useState(null);

    useEffect(() => {
        // Ensure that document querying only happens on the client
        if (typeof document !== 'undefined') {
          setTransitionBloc(document.querySelector('#transition-element'));
        }
    }, []);

    useEffect(() => {
        if (transitionBloc) {
            const rect = transitionBloc.getBoundingClientRect();

           if(rect.left == 0){
                  gsap.to(transitionBloc, {
            left: '-100vw',
            duration: 0.6,
            delay: 0.5
          });
           }
        }
    }, [transitionBloc]);
  
    return (
        <></>
    )
}

export default TransitionOut;
