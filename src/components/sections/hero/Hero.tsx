"use client"

import { View } from '@react-three/drei'
import React, { useRef } from 'react'
import Scene from './Scene'
import { Bubbles } from './Bubbles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMeshStore } from '@/lib/store/useZuStore'


const Hero = () => {

    const ready = useMeshStore((state) => state.ready);

    const titleRef = useRef(null);
    const title2Ref = useRef(null);
    const title3Ref = useRef(null);
    const title4Ref = useRef(null);
    const title5Ref = useRef(null);
    const title6Ref = useRef(null);
    const title7Ref = useRef(null);

    const landingRef = useRef(null);

    useGSAP(() => {

        if (!ready) return

        gsap.timeline()
            .to(
                [
                    titleRef.current,
                    title2Ref.current,
                    title3Ref.current,
                    title4Ref.current,
                    title5Ref.current,
                    title6Ref.current,
                    title7Ref.current,
                ],
                {
                    y: 0,
                    ease: "power4.out",
                    delay: 0.4,
                    stagger: {
                        amount: 1,
                    },
                }, 'one'
            )
    }, { dependencies: [ready] });

    return (
        <div className='w-full relative'>

            <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-full md:block">
                <Scene />
                <Bubbles count={400} speed={3} repeat={true} />
            </View>

            <div className='hero'>
                <div
                    ref={landingRef}
                    id="landing"
                    className="relative flex flex-col items-center w-full h-screen p-4 pt-32 overflow-hidden uppercase font-poppins bg-secondary  text-primary lg:justify-center lg:items-start 2xl:pl-24"
                >
                    <div className="flex overflow-hidden -skew-y-3">
                        <div
                            ref={titleRef}
                            className="inline pr-4 text-5xl translate-y-full   sm:text-6xl lg:text-8xl xl:text-[170px] md:text-7xl"
                        >
                            breizh
                        </div>
                        <div ref={title2Ref} className="flex text-5xl translate-y-full   sm:text-6xl lg:text-8xl xl:text-[170px] md:text-7xl">
                            cola
                        </div>
                    </div>
                    <div className="flex pt-12 overflow-hidden -skew-y-3">
                        <div
                            ref={title3Ref}
                            className="flex items-center mr-4 text-5xl translate-y-full   sm:text-6xl lg:text-8xl xl:text-[170px] md:text-7xl"
                        >
                            le
                        </div>
                        <div
                            ref={title4Ref}
                            className="inline text-5xl translate-y-full   sm:text-6xl lg:text-8xl text-stroke-primary text-secondary   xl:text-[170px] md:text-7xl"
                        >
                            cola
                        </div>
                        <div
                            ref={title5Ref}
                            className="flex items-center pl-4 text-5xl translate-y-full   sm:text-6xl lg:text-8xl xl:text-[170px] md:text-7xl"
                        >
                            du
                        </div>
                    </div>
                    <div className="flex pt-6 overflow-hidden -skew-y-3">
                        <div ref={title6Ref} className="inline pr-4 text-5xl translate-y-full   sm:text-6xl lg:text-8xl xl:text-[170px] md:text-7xl">
                            phare
                        </div>
                        <div
                            ref={title7Ref}
                            className="inline text-5xl translate-y-full   sm:text-6xl lg:text-8xl text-stroke-primary text-secondary  xl:text-[170px] md:text-7xl"
                        >
                            ouest
                        </div>
                    </div>
                </div>
                <div className='w-full min-h-screen bg-secondary'>two</div>
            </div>
        </div>
    )
}

export default Hero