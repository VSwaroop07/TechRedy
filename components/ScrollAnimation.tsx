"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
  trigger?: "start" | "center" | "end";
  stagger?: number;
}

export default function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  className = "",
  trigger = "start",
  stagger = 0,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || typeof window === "undefined") return;

    const element = elementRef.current;
    const childElements = element.children;

    // Initial states based on direction
    const getInitialState = () => {
      switch (direction) {
        case "up":
          return { y: 60, opacity: 0 };
        case "down":
          return { y: -60, opacity: 0 };
        case "left":
          return { x: -60, opacity: 0 };
        case "right":
          return { x: 60, opacity: 0 };
        case "scale":
          return { scale: 0.8, opacity: 0 };
        case "fade":
          return { opacity: 0 };
        default:
          return { y: 60, opacity: 0 };
      }
    };

    const getFinalState = () => {
      switch (direction) {
        case "up":
        case "down":
          return { y: 0, opacity: 1 };
        case "left":
        case "right":
          return { x: 0, opacity: 1 };
        case "scale":
          return { scale: 1, opacity: 1 };
        case "fade":
          return { opacity: 1 };
        default:
          return { y: 0, opacity: 1 };
      }
    };

    // Set initial state
    gsap.set(
      childElements.length > 1 ? Array.from(childElements) : element,
      getInitialState()
    );

    // Create scroll trigger animation
    const animation = gsap.to(
      childElements.length > 1 ? Array.from(childElements) : element,
      {
        ...getFinalState(),
        duration,
        delay,
        stagger: childElements.length > 1 ? stagger : 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: `top ${
            trigger === "start" ? "80%" : trigger === "center" ? "50%" : "30%"
          }`,
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [direction, delay, duration, trigger, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
