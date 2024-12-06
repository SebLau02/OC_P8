"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Animation from "@/public/assets/walk.json";
import { useEffect, useRef, useState } from "react";

export const Parcours = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [animationClick, setAnimationClick] = useState(false);
  const [speed, setSpeed] = useState(1.5);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const movementTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (lottieRef.current) {
      lottieRef.current.play();
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsVisible(false); // Cacher l'animation
    setTimeout(() => {
      lottieRef.current?.stop(); // Arrêter l'animation quand la souris quitte
    }, 300);
  };

  const handleClick = () => {
    setAnimationClick(true);
    setTimeout(() => {
      setAnimationClick(false);
    }, 100);
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed); // Appliquer la vitesse
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });

        if (!isVisible && isHovered) {
          lottieRef.current?.play(); // Relancer l'animation
          setIsVisible(true);
        }

        setSpeed(1.5); // Vitesse plus rapide lors du mouvement de la souris

        if (movementTimeoutRef.current) {
          clearTimeout(movementTimeoutRef.current);
        }

        movementTimeoutRef.current = setTimeout(() => {
          if (isHovered) {
            setSpeed(0.2); // Vitesse plus lente après l'inactivité
          } else {
            setIsVisible(false);
          }
        }, 100); // Pause après 100ms de non-mouvement
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
  }, [isVisible, isHovered, speed]);

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
