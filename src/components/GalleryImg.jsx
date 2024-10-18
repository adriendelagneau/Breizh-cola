"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import MagneticButtons from './MagneticButtons';

const GalleryImg = () => {
    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);
    let requestAnimationFrameId = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.01;

    const manageMouseMove = (e) => {

        if (window.innerWidth > 1080) {
            
            const { movementX, movementY } = e;
            xForce += movementX * speed;
            yForce += movementY * speed;
            
            if (requestAnimationFrameId == null) {
                requestAnimationFrameId = requestAnimationFrame(animate);
            }
        };
        
    }
    const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);
        gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
        gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` });
        gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` });

        if (Math.abs(xForce) < 0.01) xForce = 0;
        if (Math.abs(yForce) < 0.01) yForce = 0;

        if (xForce !== 0 || yForce !== 0) {
            requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
    };

    return (
        <main onMouseMove={manageMouseMove} className="relative w-full h-screen overflow-hidden bg-blue-200">
            {/* Plane 1 */}
            <div ref={plane1} className="absolute w-full h-screen">
                <div className="absolute h-[150px] w-[100px] top-[3%] left-[5%] overflow-hidden filter brightness-80 -rotate-6 md:w-[133px] md:h-[200px]">
                    <Image
                        src={"/image/BC-2015.jpg"}
                        alt="image"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[150px] w-[100px] bottom-[5%] right-[6%] overflow-hidden rotate-2 md:w-[133px] md:h-[200px]">
                    <Image
                        src={"/image/66753631.jpg"}
                        alt="image"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[150px] w-[100px] top-[20%] left-[70%] overflow-hidden -rotate-3 md:w-[133px] md:h-[200px]">
                    <Image
                        src={"/image/01.jpg"}
                        alt="image"
                        fill={true}
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Plane 2 */}
            <div ref={plane2} className="absolute top-0 left-0 w-full h-screen">
                <div className="absolute h-[150px] w-[100px] top-[45%] left-[5%] overflow-hidden -rotate-3 md:w-[133px] md:h-[200px]">
                    <Image
                        src={"/image/campagne-bc-breizh-ile.jpg"}
                        alt="image"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[150px] w-[100px] top-[65%] left-[40%] overflow-hidden rotate-6 md:w-[133px] md:h-[200px]">
                    <Image
                        src={"/image/unnamed.jpg"}
                        alt="image"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[100px] w-[150px] top-[4%] left-[50%] overflow-hidden rotate-3">
                    <Image
                        src={"/image/meme.jpg"}
                        alt="image"
                        fill={true}
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Plane 3 */}
            <div ref={plane3} className="absolute top-0 left-0 w-full h-screen">
                <div className="absolute h-[100px] w-[100px] top-[23%] left-[30%] overflow-hidden filter brightness-90 rotate-2  md:w-[100px] md:h-[100px]">
                    <Image
                        src={"/image/02.png"}
                        alt="image"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[100px] w-[100px] bottom-[8%] left-[14%] overflow-hidden rotate-6  md:w-[100px] md:h-[100px]">
                    <Image
                        src={"/image/03.png"}
                        alt="image"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[80px] w-[80px] top-[50%] left-[75%] overflow-hidden rotate-6 md:w-[100px] md:h-[100px]">
                    <Image
                        src={"/image/04.jpg"}
                        alt="image"
                        fill={true}
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Center Title */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2">
                <h1 className="flex flex-col items-center gap-2 text-2xl font-poppins md:text-3xl">
                    <div className='text-5xl capitalize font-creamCake md:text-6xl'>breizh cola</div>
                    <div className='uppercase font-poppins'>the story</div>
                    <MagneticButtons>
                        <button
                            className="text-secondColor lg:text-xl rotate-12 border-secondColor h-[50px] text-lg uppercase rounded-[50%] cursor-pointer w-[100px] border-2 font-bold hover:text-mainColor bg-mainColor hover:bg-secondColor dark:hover:text-secondColor dark:hover:bg-mainColor dark:border-mainColor dark:bg-secondColor dark:text-mainColor 2xl:-rotate-6 lg:mt-16 lg:w-[150px] lg:h-[75px]"
                        >
                            voir
                        </button>
                    </MagneticButtons>
                </h1>
            </div>
        </main>
    );
};

export default GalleryImg;
