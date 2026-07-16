"use client";

import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/data/company";
import styles from "./StatsBar.module.css";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  started: boolean;
}

function StatItem({ value, suffix, prefix, label, started }: StatItemProps) {
  const count = useCountUp(value, 2200, started);
  return (
    <div className={styles.statItem}>
      <div className={styles.statValue}>
        {prefix !== undefined ? prefix : ""}
        {count}
        {suffix ?? ""}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default function StatsBar() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.statsSection} ref={ref} aria-label="Company statistics">
      <div className={styles.glowBg} aria-hidden />
      <div className={`container ${styles.statsGrid}`}>
        {COMPANY.stats.map((stat, i) => (
          <StatItem
            key={i}
            value={stat.value}
            suffix={"suffix" in stat ? stat.suffix : undefined}
            prefix={"prefix" in stat ? String(stat.prefix) : undefined}
            label={stat.label}
            started={started}
          />
        ))}
      </div>
    </section>
  );
}
