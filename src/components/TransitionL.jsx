"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";

export default function TransitionLink({
  href,
  label,
  myClass
}) {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  const handleClick = () => {
    if (href !== pathname) {
      animatePageOut(href, router);
    }
  };

  return (
    <div
      className={`${myClass} cursor-pointer`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
}
