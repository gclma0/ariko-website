"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import styles from "./HeroSlider.module.css";

const SLIDES = [
  {
    id: 1,
    image: "/hero-port.jpg",
    tag: "Since 1968",
    headline: "Leading Exporter of Quality Mill Scale",
    subheadline: "from Bangladesh",
    description:
      "The 1st company in Bangladesh to export mill scale globally. Reliable supply chains, exceptional quality.",
    cta: { label: "Explore Export", href: "/export" },
    ctaSecondary: { label: "Contact Us", href: "/contact-us" },
  },
  {
    id: 2,
    image: "/hero-shipbreaking.jpg",
    tag: "4th Largest in Bangladesh",
    headline: "Comprehensive Ship Breaking",
    subheadline: "Operations Since 1981",
    description:
      "One of Bangladesh's most trusted ship scrapping operations. Safety-first, environmentally responsible.",
    cta: { label: "Ship Breaking", href: "/ship-breaking" },
    ctaSecondary: { label: "About Us", href: "/about-us" },
  },
  {
    id: 3,
    image: "/hero-solar.jpg",
    tag: "Clean Energy",
    headline: "Delivering Excellence with",
    subheadline: "Integrity & Mutual Benefits",
    description:
      "Expanding into solar power solutions — a sustainable future for Bangladesh and beyond.",
    cta: { label: "Solar Power", href: "/solar-power" },
    ctaSecondary: { label: "Our Story", href: "/about-us" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const goTo = useCallback(
    (index: number, dir: "next" | "prev") => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 600);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length, "prev");
  }, [current, goTo]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section
      className={styles.hero}
      aria-label="Hero slider"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Images */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`${styles.bgImage} ${i === current ? styles.bgActive : ""}`}
          aria-hidden="true"
        >
          <Image
            src={s.image}
            alt={s.headline}
            fill
            priority={i === 0}
            sizes="100vw"
            className={styles.image}
          />
          <div className={styles.overlay} />
        </div>
      ))}

      {/* Decorative grid */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div
          className={`${styles.textBlock} ${animating ? (direction === "next" ? styles.exitLeft : styles.exitRight) : styles.enter}`}
        >
          <div className={styles.tag}>{slide.tag}</div>
          <h1 className={styles.headline}>
            {slide.headline}
            <br />
            <span className="text-gradient">{slide.subheadline}</span>
          </h1>
          <p className={styles.description}>{slide.description}</p>
          <div className={styles.ctaGroup}>
            <Link href={slide.cta.href} className={styles.ctaPrimary} id={`hero-cta-${slide.id}`}>
              {slide.cta.label}
              <ArrowRight size={18} />
            </Link>
            <Link href={slide.ctaSecondary.href} className={styles.ctaSecondary}>
              {slide.ctaSecondary.label}
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className={styles.indicators}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
