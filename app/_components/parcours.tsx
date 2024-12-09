"use client";

import { Fragment, useEffect, useRef, useState } from "react";
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
import { CustSeparator } from "./CustSeparator";
import { Badge } from "@/components/ui/badge";

const parcours = [
  {
    title: "2018 | Bac S",
    titleSecondary: (
      <>
        <Badge variant="secondary">2018</Badge>{" "}
        <h4 className="font-medium text-xs md:text-sm leading-5">
          Baccalauréat Scientifique, Guyane Française
        </h4>
      </>
    ),
    image: "azertyu",
  },
  {
    title: "2021 | STAPS",
    titleSecondary: (
      <>
        <Badge variant="secondary">2018-2021</Badge>
        <h4 className="font-medium text-xs md:text-sm leading-5">
          Licence Sciences Techniques des Activitées Physiques et Sportives,
          Liévin, 62800
        </h4>
      </>
    ),
    image: "fghjk",
  },
  {
    title: "2024 | Hapik",
    titleSecondary: (
      <>
        <Badge variant="secondary">2021-2024</Badge>
        <h4 className="font-medium text-xs md:text-sm leading-5">
          Cours d&apos;escalade de loisir pour enfant, Noyelles-Godault, 62950
        </h4>
      </>
    ),
    image: "fghjk",
  },
  {
    title: "2022 | Développeur autodidacte",
    titleSecondary: (
      <>
        <Badge variant="secondary">2022</Badge>
        <h4 className="font-medium text-xs md:text-sm leading-5">
          Apprentissage des fondamentaux pour le code en auto didacte
        </h4>
      </>
    ),
    image: "dfghj",
  },
  {
    title: "2024 | Openclassrooms",
    titleSecondary: (
      <>
        <Badge variant="secondary">2024</Badge>
        <h4 className="font-medium text-xs md:text-sm leading-5">
          Formation développeur web Openclassrooms alternance
        </h4>
      </>
    ),
    image: "dfghj",
  },
  {
    title: "2024 | Rudigis",
    titleSecondary: (
      <>
        <Badge variant="secondary">2024</Badge>
        <h4 className="font-medium text-xs md:text-sm leading-5">
          Alternance Développeur web chez Rudigis, Rennes, 35000
        </h4>
      </>
    ),
    image: "sdfghj",
  },
];

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
  const [parcoursSteps, setParcoursSteps] = useState<boolean[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
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

  const handleUpdateSteps = (step: number) => {
    const prevValues = parcoursSteps;
    prevValues[step] = true;
    setParcoursSteps(prevValues);
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
          height: "70px",
          width: "70px",
          position: "absolute",
          zIndex: "40",
          translate: `-80% -44%`,
          top: `${position.y}px`,
          left: `${position.x}px`,
          pointerEvents: "none",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease-out, transform 0.1s ease-out",
          rotate: animationClick ? "15deg" : "",
        }}
      />
      <div className="flex flex-col gap-4 w-fit m-2 md:m-4">
        {parcours.map((p, i) => (
          <Fragment key={i}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  onClick={() => handleUpdateSteps(i)}
                  variant={`${parcoursSteps[i] ? "secondary" : "outline"}`}
                  className="text-xs md:text-base"
                >
                  {p.title}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side="right"
                sideOffset={40}
                align="start"
                className="w-80"
              >
                <div className="grid gap-4">
                  <div className="space-y-2">
                    {p.titleSecondary}
                    <p className="text-sm text-muted-foreground"></p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            {i < parcours.length - 1 && (
              <CustSeparator progress={parcoursSteps[i] ? 100 : 0} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
