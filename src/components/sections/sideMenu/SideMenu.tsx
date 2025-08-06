"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useMenuStore } from "@/lib/store/useZuStore";

const SideMenu = () => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const startCloseMenu = useMenuStore((state) => state.startCloseMenu);
  const finishCloseMenu = useMenuStore((state) => state.finishCloseMenu);
  // const openMenu = useMenuStore((state) => state.openMenu);

  const listRefs = useRef<HTMLLIElement[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const tlText = useRef<gsap.core.Timeline | null>(null);
  const tlMenu = useRef<gsap.core.Timeline | null>(null);

  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Animate text items in on open
  useGSAP(() => {
    if (!isMenuOpen) return;

    setIsAnimatingOut(false);

    tlText.current = gsap.timeline();

    gsap.set(listRefs.current, { y: "100%" });

    tlText.current.to(listRefs.current, {
      y: 0,
      ease: "power3.out",
      stagger: 0.13,
      delay: 0.2,
    });

    // Reset menu translateX in case it was translated out previously
    if (menuRef.current) {
      gsap.set(menuRef.current, { x: 0 });
    }
  }, [isMenuOpen]);

  // Handle close animation: text slides down, then menu slides left
  useGSAP(() => {
    if (!isMenuOpen && !isAnimatingOut && tlText.current && menuRef.current) {
      setIsAnimatingOut(true);
      startCloseMenu();

      // Reverse text animation (slide down)
      tlText.current
        .timeScale(1)
        .reverse()
        .eventCallback("onReverseComplete", () => {
          // After text animation reverse finishes, slide the menu out
          tlMenu.current = gsap.timeline({
            onComplete: () => {
              finishCloseMenu();
              setIsAnimatingOut(false);
            },
          });

          tlMenu.current.to(menuRef.current, {
            x: "-100%",
            ease: "power.inOut",
            duration: 0.2,
          });
        });
    }
  }, [isMenuOpen, isAnimatingOut, startCloseMenu, finishCloseMenu]);

  const handleClose = () => {
    // If animation is running or closing already, do nothing
    if (isAnimatingOut) return;

    // Trigger close animation sequence
    startCloseMenu();

    if (tlText.current) {
      setIsAnimatingOut(true);
      tlText.current
        .timeScale(1)
        .reverse()
        .eventCallback("onReverseComplete", () => {
          if (menuRef.current) {
            tlMenu.current = gsap.timeline({
              onComplete: () => {
                finishCloseMenu();
                setIsAnimatingOut(false);
              },
            });

            tlMenu.current.to(menuRef.current, {
              x: "-100%",
              ease: "power4.inOut",
              duration: 0.4,
            });
          }
        });
    } else {
      // fallback: just finish immediately
      finishCloseMenu();
    }
    document.body.style.overflowY = "";
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: "home", href: "/" },
    { label: "original", href: "/product/original" },
    { label: "zero", href: "/product/zero" },
    { label: "cherry", href: "/product/cherry" },
    { label: "lemon", href: "/product/lemon" },
    { label: "stevia", href: "/product/stevia" },
    { label: "history", href: "/chronology" },
  ];

  return (
    <div
      ref={menuRef}
      className="bg-primary font-poppins fixed top-20 left-0 z-50 flex h-[calc(100vh-5rem)] w-full -translate-x-full transform items-center justify-center transition-transform duration-300"
      role="dialog"
      aria-hidden={!isMenuOpen}
      //   style={{ transform: isMenuOpen ? "translateX(0)" : undefined }}
    >
      <ul className="text-secondary flex flex-col items-center gap-6 text-4xl uppercase">
        {menuItems.map((item, i) => (
          <div key={item.label} className="overflow-hidden">
            <li
              ref={(el) => {
                if (el) listRefs.current[i] = el;
              }}
              className="translate-y-full"
            >
              <Link href={item.href} onClick={handleClose}>
                {item.label}
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
