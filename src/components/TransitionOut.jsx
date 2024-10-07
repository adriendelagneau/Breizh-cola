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
            // Access the position of the element
            const rect = transitionBloc.getBoundingClientRect();
            console.log('Element position:', rect.left);
           if(rect.left == 0){
                  gsap.to(transitionBloc, {
            left: '-100vw',
            duration: 0.6,
            delay: 0.3
          });
           }
        }
    }, [transitionBloc]);
  
    return (
        <></>
    )
}

export default TransitionOut;
