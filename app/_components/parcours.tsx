"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Animation from "@/public/assets/walk.json";

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
    setIsClient(true);
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
    if (isClient) {
      if (lottieRef.current) {
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
    }
  }, [isClient, isVisible, isHovered, speed]);

  if (!isClient) return null;

  return (
    <div
      className="h-[300px] mt-5 border relative overflow-hidden"
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
    </div>
  );
};
