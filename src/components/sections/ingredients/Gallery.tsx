"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef } from 'react'

type Props = {}

const Gallery = (props: Props) => {

  const img1Ref = useRef(null)
  const img2Ref = useRef(null)
  const img3Ref = useRef(null)
  const img4Ref = useRef(null)


  useGSAP(() => {
    const scrollTL = gsap.timeline({
      defaults: {
        duration: 2
      },
      scrollTrigger: {
        trigger: ".toto",
        start: "top 20%",
        end: "bottom bottom",

      }
    });

    scrollTL.from([img1Ref.current,img2Ref.current], {
      translateY: "90px",
      opacity: 0,
      rotate: 0, // Rotate to 6 degrees
      stagger: 0.2,
      duration: 1.3,
      ease: "back.out(1)"
    });

    const scrollTL2 = gsap.timeline({
      defaults: {
        duration: 2
      },
      scrollTrigger: {
        trigger: ".toto",
        start: "30% top",
        end: "bottom bottom",

      }
    });

    scrollTL2.from([img3Ref.current,img4Ref.current], {
      translateY: "90px",
      opacity: 0,
      rotate: 0, // Rotate to 6 degrees
      stagger: 0.2,
      duration: 1.3,
      ease: "back.out(1)"
    });
  })



  return (
    <div className='w-full h-[200vh] toto'>
      <div className='w-full h-screen relative'>
        <div
          ref={img1Ref}
          className='w-96 h-96  rounded absolute top-[36%] left-[13%] -rotate-12 opacity-1'>
          <Image
            fill
            className="object-cover rounded"
            alt='img'
            src={"https://res.cloudinary.com/dos8mey8r/image/upload/v1730380124/breizhCola/breizh-cola-posts-reseaux-sociaux-1F4_c9stwe.jpg"} />
        </div>
        <div 
          ref={img2Ref}
        className='w-96 h-96  rounded absolute top-[34%] right-[12%] opacity-1 rotate-3'>
          <Image
            fill
            className="object-cover rounded"
            alt='img'
            src={"https://res.cloudinary.com/dos8mey8r/image/upload/v1730381070/breizhCola/313258621_503993125105748_4908875908714121750_n_hwgmvo.jpg"} />
        </div>
      </div>
      <div className='w-full h-screen relative'>
        <div
          ref={img3Ref}
          className='w-96 h-96  rounded absolute top-[36%] left-[13%] -rotate-3 opacity-1'>
          <Image
            fill
            className="object-cover rounded"
            alt='img'
            src={"https://res.cloudinary.com/dos8mey8r/image/upload/v1730380326/breizhCola/breizh-cola-posts-reseaux-sociaux-1F3DD_xrxxjx.jpg"} />
        </div>
        <div 
          ref={img4Ref}
        className='w-96 h-96  rounded absolute top-[34%] right-[12%] opacity-1 rotate-12'>
          <Image
            fill
            className="object-cover rounded"
            alt='img'
            src={"https://res.cloudinary.com/dos8mey8r/image/upload/v1730385292/breizhCola/breizh-cola-posts-reseaux-sociaux-1F2_okg4ob.webp"} />
        </div>
      </div>

    </div>
  )
}

export default Gallery