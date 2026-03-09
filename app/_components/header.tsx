"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { socials } from "../config/data";
import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

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
        className={`fixed top-0 left-0 bg-background w-full z-30 flex justify-evenly items-center py-3 shadow-md transition-transform ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Link className="text-base sm:text-2xl" href="#works">
          Contributions
        </Link>
        <Link className="text-base sm:text-2xl" href="#about">
          À propos
        </Link>

        <div className="flex flex-wrap gap-2">
          {socials({ size: 16, className: "ml-2" }).map((social, i) => (
            <Link
              target={social.url === "#contact" ? "" : "_blank"}
              href={social.url}
              key={i}
              className={buttonVariants({
                variant: "outline",
                className: "font-caption rounded-full border-custom md:text-sm",
              })}
            >
              {social.label} {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
