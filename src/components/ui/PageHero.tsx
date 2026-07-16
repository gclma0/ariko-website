import Image from "next/image";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  image?: string;
  tag?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  image = "/hero-port.jpg",
  tag,
}: PageHeroProps) {
  return (
    <section className={styles.hero} aria-label="Page header">
      <div className={styles.bgWrap}>
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
        <div className={styles.gridPattern} />
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
