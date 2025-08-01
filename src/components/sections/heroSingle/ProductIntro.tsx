
"use client"

import { useRef } from "react";
import {splitWords} from "@/lib/splitters"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const ProductIntro = () => {
  
  const refs = useRef([]);
  const container = useRef(null);
  
  const infosText = ['Lorem ipsum deleniti consectetur itaque quas obcaecati! Beatae, assumenda. Corrupti minima nam soluta facilis corporis explicabo incidunt officiis unde maiores excepturi? Non nesciunt deserunt dolorem culpa', 'tyfytfy uy yu gyugyu uy uy ']
  
  
  useGSAP(() => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: 'top 85%',
        end: `+=${window.innerHeight * 0.7}`, // Custom end for desktop
        once: true,
        toggleActions: 'play none none none',
      },
      opacity: 1,
      ease: 'power3.out', // Slower easing for desktop
      stagger: 0.1, // Adjust stagger for smoother reveal on large screens
    });
  });
  
  
  
  
  return (
    <div className='min-h-screen w-full text-7xl p-24 font-poppins text-primary leading-loose relative z-50 bg-gradient-custom uppercase'>

 
    <div ref={container} className="flex flex-col items-center justify-center w-full gap-12 p-10 mx-auto my-12  text-primary text-6xl font-poppins max-w-screen-2xl">
    {infosText.map((phrase, index) => (
      <div key={index} className="flex flex-wrap gap-2 my-6 leading-tight">
        {splitWords(phrase, refs)}
      </div>
    ))}
  </div>
    </div>
  
  )
}

export default ProductIntro