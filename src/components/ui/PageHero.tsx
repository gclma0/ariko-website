"use client";

import Image from "next/image";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  image?: string;
  tag?: string;
  videoBackground?: string;
  heroImagePosition?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  image = "/hero-port.jpg",
  tag,
  videoBackground,
  heroImagePosition,
}: PageHeroProps) {
  return (
    <section
      className={`${styles.hero} ${videoBackground ? styles.heroVideo : ""}`}
      aria-label="Page header"
    >
      <div className={styles.bgWrap}>
        {videoBackground ? (
          <video
            src={videoBackground}
            autoPlay
            loop
            muted
            playsInline
            className={styles.bgVideo}
            ref={(el) => {
              if (el) el.playbackRate = 0.7;
            }}
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            className={styles.bgImage}
            style={heroImagePosition ? { objectPosition: heroImagePosition } : undefined}
          />
        )}
        <div className={videoBackground ? styles.overlayVideo : styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        {breadcrumb && (
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/" className={styles.breadcrumbLink}>Home</a>
            {breadcrumb.map((item, i) => (
              <span key={i} className={styles.breadcrumbItem}>
                <span className={styles.breadcrumbSep}>/</span>
                {item.href ? (
                  <a href={item.href} className={styles.breadcrumbLink}>{item.label}</a>
                ) : (
                  <span className={styles.breadcrumbCurrent}>{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {tag && <div className={styles.tag}>{tag}</div>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div className={styles.waveBottom} />
    </section>
  );
}
