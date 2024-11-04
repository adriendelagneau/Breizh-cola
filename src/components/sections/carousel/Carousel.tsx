"use client"
import FloatingCan from '@/components/FloatingCan'
import { SodaCanProps } from '@/components/SodaCan';
import { Center, Environment, View } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import { Group } from 'three';
import { ArrowIcon } from './ArrowIcon';
import clsx from 'clsx';
import gsap from 'gsap';
import { WavyCircles } from './WavyCircles';

const SPINS_ON_CHANGE = 8;
const FLAVORS: {
    flavor: SodaCanProps["flavor"];
    color: string;
    name: string;
}[] = [
        { flavor: "original", color: "#591420", name: "The Original" },
        { flavor: "zero", color: "#000000", name: "Zero sucres" },
        { flavor: "cherry", color: "#33004c", name: "Cherry " },

    ];


type Props = {}

const Carousel = (props: Props) => {

    const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
    const sodaCanRef = useRef<Group>(null);


    function changeFlavor(index: number) {
        if (!sodaCanRef.current) return;

        const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

        const tl = gsap.timeline();

        tl.to(
            sodaCanRef.current.rotation,
            {
                y:
                    index > currentFlavorIndex
                        ? `-=${Math.PI * 2 * SPINS_ON_CHANGE}`
                        : `+=${Math.PI * 2 * SPINS_ON_CHANGE}`,
                ease: "power2.inOut",
                duration: 1,
            },
            0,
        )
            .to(
                ".wavy-circles-outer, .wavy-circles-inner",
                {
   
                    fill: FLAVORS[nextIndex].color,
                    ease: "power2.inOut",
                    duration: 1,
                },
                0,
            )
            .to(".text-wrapper", { duration: 0.2, y: -10, opacity: 0 }, 0)
            .to({}, { onStart: () => setCurrentFlavorIndex(nextIndex) }, 0.5)
            .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.7);
    }


    return (
        <div className="carousel relative grid min-h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-mainColor py-12 text-white"
        >

            <div className="background pointer-events-none absolute inset-0 opacity-90 " />

            <WavyCircles className="absolute left-1/2 top-1/2 h-screen -translate-x-1/2 -translate-y-1/2 text-[#591420]" />

            <div className="grid grid-cols-[auto,auto,auto] items-center">
                {/* Left */}
                <ArrowButton
                    onClick={() => changeFlavor(currentFlavorIndex + 1)}
                    direction="left"
                    label="Previous Flavor"
                />
                {/* Can */}
                <View className="aspect-square h-[70vmin] min-h-40">
                    <Center position={[0, -0.1, 1.5]}>
                        <FloatingCan
                            ref={sodaCanRef}
                            floatIntensity={0.3}
                            rotationIntensity={1}
                            flavor={FLAVORS[currentFlavorIndex].flavor}
                        />
                    </Center>

                    <Environment
                        files="/hdr/lobby.hdr"
                        environmentIntensity={0.6}
                        environmentRotation={[0, 3, 0]}
                    />
                    <directionalLight intensity={6} position={[0, 1, 1]} />
                </View>
                {/* Right */}
                <ArrowButton
                    onClick={() => changeFlavor(currentFlavorIndex - 1)}
                    direction="right"
                    label="Next Flavor"
                />
            </div>
        </div>
    )
}

export default Carousel





type ArrowButtonProps = {
    direction?: "right" | "left";
    label: string;
    onClick: () => void;
};

function ArrowButton({
    label,
    onClick,
    direction = "right",
}: ArrowButtonProps) {
    return (
        <button
            onClick={onClick}
            className="size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20"
        >
            <ArrowIcon className={clsx(direction === "right" && "-scale-x-100")} />
            <span className="sr-only">{label}</span>
        </button>
    );
}