"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrollDirection, setScrollDirection] = useState<string>("");
  const [lastScroll, setLastScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setScrollDirection("down");
      } else if (currentScroll < lastScroll) {
        setScrollDirection("up");
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header className={`relative min-h-[56px]`}>
      <div
        className={`fixed top-0 left-0 bg-background w-full z-30 flex justify-evenly align-center py-3 shadow-md transition-transform ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Link className="text-base sm:text-2xl" href="#works">
          collaborations
        </Link>
        <Link className="text-base sm:text-2xl" href="#about">
          à propos
        </Link>
        <Link className="text-base sm:text-2xl" href="#contact">
          contact
        </Link>
      </div>
    </header>
  );
};
