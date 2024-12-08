"use client";

import { useEffect, useRef, useState } from "react";
import { LottieRefCurrentProps } from "lottie-react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Animation from "@/public/assets/walk.json";
import dynamic from "next/dynamic";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Parcours = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [animationClick, setAnimationClick] = useState(false);
  const [speed, setSpeed] = useState(1.5);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const movementTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true); // Vérifie que l'environnement est côté client
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (lottieRef.current) {
      lottieRef.current.play();
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsVisible(false);
    setTimeout(() => {
      lottieRef.current?.stop();
    }, 300);
  };

  const handleClick = () => {
    setAnimationClick(true);
    setTimeout(() => {
      setAnimationClick(false);
    }, 100);
  };

  useEffect(() => {
    if (isClient && lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });

        if (!isVisible && isHovered) {
          lottieRef.current?.play();
          setIsVisible(true);
        }

        setSpeed(1.5);

        if (movementTimeoutRef.current) {
          clearTimeout(movementTimeoutRef.current);
        }

        movementTimeoutRef.current = setTimeout(() => {
          if (isHovered) {
            setSpeed(0.2);
          } else {
            setIsVisible(false);
          }
        }, 100);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
      if (movementTimeoutRef.current) {
        clearTimeout(movementTimeoutRef.current);
      }
    };
  }, [isClient, isVisible, isHovered, speed]);

  if (!isClient) return null;

  return (
    <div
      className="min-h-[300px] mt-5 relative overflow-hidden p-2 md:p-4"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={Animation}
        loop={true}
        autoplay={false}
        style={{
          height: "100px",
          width: "100px",
          position: "absolute",
          translate: `-80% -44%`,
          top: `${position.y}px`,
          left: `${position.x}px`,
          pointerEvents: "none",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease-out, transform 0.1s ease-out",
          rotate: animationClick ? "15deg" : "",
        }}
      />
      <div className="flex flex-col gap-2 w-fit">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Bac S - 2018</Button>
          </PopoverTrigger>
          <PopoverContent
            side="right"
            sideOffset={40}
            align="start"
            className="w-80"
          >
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">
                  Bacalauréat Scientifique - 2018
                </h4>
                <p className="text-sm text-muted-foreground">image bac s</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Separator orientation="vertical" asChild />

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline"> STAPS - 2021</Button>
          </PopoverTrigger>
          <PopoverContent
            side="right"
            sideOffset={40}
            align="start"
            className="w-80"
          >
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">STAPS - 2021</h4>
                <p className="text-sm text-muted-foreground">image staps</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Développeur autodidacte - 2022</Button>
          </PopoverTrigger>
          <PopoverContent
            side="right"
            sideOffset={40}
            align="start"
            className="w-80"
          >
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">
                  Apprentissage des fondamentaux du code - 2022
                </h4>
                <p className="text-sm text-muted-foreground">image code</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Openclasserooms - 2024</Button>
          </PopoverTrigger>
          <PopoverContent
            side="right"
            sideOffset={40}
            align="start"
            className="w-80"
          >
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">
                  Début formation chez Openclassrooms - 2024
                </h4>
                <p className="text-sm text-muted-foreground">image OC</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Développeur chez Rudigis - 2024</Button>
          </PopoverTrigger>
          <PopoverContent
            side="right"
            sideOffset={40}
            align="start"
            className="w-80"
          >
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">
                  Début alternance chez Rudigis - 2024
                </h4>
                <p className="text-sm text-muted-foreground">image rudigis</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
