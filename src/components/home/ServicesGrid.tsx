import Link from "next/link";
import { ArrowRight, TrendingUp, Ship, Sun, Package } from "lucide-react";
import styles from "./ServicesGrid.module.css";

const SERVICES = [
  {
    id: "export",
    icon: TrendingUp,
    tag: "Core Business",
    title: "Export Division",
    description:
      "Pioneers of mill scale export from Bangladesh since 2005. We also export zinc oxide, PET flakes, leather goods, vegetables, and jute products to global markets.",
    href: "/export",
    accentColor: "#00c8e8",
    delay: 0,
  },
  {
    id: "import",
    icon: Package,
    tag: "Since 2004",
    title: "Import Division",
    description:
      "Authorized HKS Japan dealer for Bangladesh since 2004. We import premium auto spare parts, aggregate, and coal to meet industrial demand.",
    href: "/import",
    accentColor: "#0080ff",
    delay: 0.1,
  },
  {
    id: "ship-breaking",
    icon: Ship,
    tag: "Est. 1981",
    title: "Ship Breaking",
    description:
      "As the 4th largest ship scraper in Bangladesh, we dismantle vessels with strict safety and environmental protocols. Part of East Queen Group's legacy.",
    href: "/ship-breaking",
    accentColor: "#c9a84c",
    delay: 0.2,
  },
  {
    id: "solar",
    icon: Sun,
    tag: "Green Future",
    title: "Solar Power",
    description:
      "Expanding into renewable energy with comprehensive solar power solutions for commercial and industrial clients across Bangladesh.",
    href: "/solar-power",
    accentColor: "#00c8e8",
    delay: 0.3,
  },
];

export default function ServicesGrid() {
  return (
    <section className={`section ${styles.servicesSection}`} aria-labelledby="services-heading">
      <div className="container">
        <div className={`${styles.sectionHeader} reveal`}>
          <div className="divider" />
          <p className={styles.sectionEyebrow}>What We Do</p>
          <h2 id="services-heading" className={styles.sectionTitle}>
            A Diversified Trading{" "}
            <span className="text-gradient">Conglomerate</span>
          </h2>
          <p className={styles.sectionDesc}>
            From steel scrap to solar energy — East Queen Group operates across multiple
            high-impact sectors, serving clients in over 20 countries.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className={`${styles.card} reveal`}
                style={{ transitionDelay: `${service.delay}s` }}
              >
                <div
                  className={styles.cardGlow}
                  style={{ background: `radial-gradient(circle at top left, ${service.accentColor}15, transparent 60%)` }}
                />
                <div
                  className={styles.iconWrap}
                  style={{ "--service-color": service.accentColor } as React.CSSProperties}
                >
                  <Icon size={28} />
                </div>
                <span className={styles.cardTag}>{service.tag}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <Link href={service.href} className={styles.cardLink} id={`service-${service.id}`}>
                  Learn More
                  <ArrowRight size={16} className={styles.cardArrow} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
