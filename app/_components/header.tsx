"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { socials } from "../config/data";
import { badgeVariants } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { FileUser, Info, Puzzle } from "lucide-react";

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
    <header className={`static sm:relative min-h-0 sm:min-h-[56px]`}>
      <div
        className={`flex fixed top-full sm:top-0 left-0 bg-background w-full z-30 justify-center gap-10 md:gap-20 items-center py-3 shadow-md border-t transition-transform ${
          scrollDirection === "down"
            ? "translate-y-0 sm:-translate-y-full"
            : "-translate-y-full sm:translate-y-0"
        }`}
      >
        <Link href="#about">
          <span className="hidden sm:block text-2xl">Qui suis-je ?</span>
          <Button
            variant={"outline"}
            size={"icon"}
            className="flex sm:hidden rounded-full w-10 h-10"
          >
            <Info />
          </Button>
        </Link>
        <Link href="#works">
          <span className="hidden sm:block text-2xl">Contributions</span>
          <Button
            variant={"outline"}
            size={"icon"}
            className="flex sm:hidden rounded-full w-10 h-10"
          >
            <Puzzle />
          </Button>
        </Link>
        <Link href="#curriculum">
          <span className="hidden sm:block text-2xl">Curriculum</span>

          <Button
            variant={"outline"}
            className="flex sm:hidden rounded-full w-10 h-10"
          >
            <FileUser />
          </Button>
        </Link>

        <div className="hidden sm:flex flex-wrap gap-2 absolute right-4 top-1/2 -translate-y-1/2">
          {socials({ size: 16, className: "ml-0 lg:ml-2" }).map((social, i) => (
            <Link
              target={social.url === "#contact" ? "" : "_blank"}
              href={social.url}
              key={i}
            >
              <Button
                variant={"outline"}
                className="rounded-full lg:rounded-md w-10 h-10 lg:w-fit"
              >
                <span className="hidden lg:block text-sm">{social.label}</span>
                {social.icon}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
