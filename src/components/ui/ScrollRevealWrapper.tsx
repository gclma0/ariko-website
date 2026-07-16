"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Reset visibility on transition/mount
    const elements = container.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right"
    );
    elements.forEach((el) => el.classList.remove("visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    // Initial check: if element is visible or above viewport, trigger immediately
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        // Trigger reveal for items already visible on screen
        setTimeout(() => el.classList.add("visible"), 50);
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
