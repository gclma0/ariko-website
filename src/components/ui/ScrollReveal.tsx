"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const revealClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
      ? "reveal-right"
      : "reveal";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${revealClass} ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}
