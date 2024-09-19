"use client";

import gsap from "gsap";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


const TransitionLink = ({ href, children, setMenuOpen, myClass }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

 


  const animate = () => {
    if (href === pathname) {
      return;
    }

    let TL = gsap.timeline();



    TL.to(["#transition0", "#transition1", "#transition2", "#transition3"], {
      top: "0",
      stagger: 0.24,
    }).then(() => {
        router.push(href)
        setMenuOpen && setMenuOpen(false)
          gsap.to(["#transition0", "#transition1", "#transition2", "#transition3"], {
              top: '-100%',
              stagger: 0.24,
              delay: 0.6,
            })
        })
  };

  return (
    <div className={myClass} onClick={animate}>
      {children}
    </div>
  );
};

export default TransitionLink;
