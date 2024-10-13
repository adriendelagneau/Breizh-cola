"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const Gimg = () => {
    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);
    let requestAnimationFrameId = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.01;

    const manageMouseMove = (e) => {
        const { movementX, movementY } = e;
        xForce += movementX * speed;
        yForce += movementY * speed;

        if (requestAnimationFrameId == null) {
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    };

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
        <main onMouseMove={manageMouseMove} className="relative w-full h-screen overflow-hidden">
            {/* Plane 1 */}
            <div ref={plane1} className="absolute w-full h-screen">
                <div className="absolute h-[300px] w-[200px] top-[5%] left-[8%] overflow-hidden filter brightness-80">
                    <Image
                        src={"/image/BC-2015.jpg"}
                        alt="image"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[300px] w-[200px] top-[55%] left-[12%] overflow-hidden">
                    <Image
                        src={"/image/66753631.jpg"}
                        alt="image"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[300px] w-[200px] top-[35%] left-[70%] overflow-hidden">
                    <Image
                        src={"/image/01.jpg"}
                        alt="image"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Plane 2 */}
            <div ref={plane2} className="absolute top-0 left-0 w-full h-screen">
                <div className="absolute h-[300px] w-[200px] top-[10%] left-[28%] overflow-hidden">
                    <Image
                        src={"/image/campagne-bc-breizh-ile.jpg"}
                        alt="image"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[300px] w-[200px] top-[50%] left-[50%] overflow-hidden">
                    <Image
                        src={"/image/unnamed.jpg"}
                        alt="image"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[200px] w-[300px] top-[8%] left-[75%] overflow-hidden">
                    <Image
                        src={"/image/meme.jpg"}
                        alt="image"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Plane 3 */}
            <div ref={plane3} className="absolute top-0 left-0 w-full h-screen">
                <div className="absolute h-[180px] w-[180px] top-[15%] left-[50%] overflow-hidden filter brightness-90">
                    <Image
                        src={"/image/02.png"}
                        alt="image"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[250px] w-[250px] top-[62%] left-[34%] overflow-hidden">
                    <Image
                        src={"/image/03.png"}
                        alt="image"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute h-[220px] w-[220px] top-[50%] left-[85%] overflow-hidden">
                    <Image
                        src={"/image/04.jpg"}
                        alt="image"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Center Title */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2">
                <h1 className="text-5xl font-poppins">Images Gallery</h1>
            </div>
        </main>
    );
};

export default Gimg;
