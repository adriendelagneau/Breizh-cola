"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticButtons({
  children,
}: {
  children: React.ReactElement;
}) {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!magnetic.current) return;

    const node = magnetic.current;

    const xTo = gsap.quickTo(node, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(node, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = node.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return React.isValidElement(children)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? React.cloneElement(children as React.ReactElement<any>, { ref: magnetic })
    : null;
}
