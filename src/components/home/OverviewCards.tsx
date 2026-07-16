import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/company";
import styles from "./OverviewCards.module.css";

export default function OverviewCards() {
  return (
    <section className={`section ${styles.overviewSection}`} aria-labelledby="overview-heading">
      <div className="container">
        {/* Company Intro */}
        <div className={styles.introWrap}>
          <div className={`${styles.introText} reveal-left`}>
            <div className="divider" />
            <p className={styles.eyebrow}>About ARIKO International</p>
            <h2 id="overview-heading" className={styles.introTitle}>
              Exporters of Mill Scale &<br />
              <span className="text-gradient">Importers of Heavy Melting Scrap</span>
            </h2>
            <p className={styles.introDesc}>{COMPANY.groupHistory}</p>
            <Link href="/about-us" className={styles.learnMore} id="overview-learn-more">
              Our Full Story <ArrowRight size={16} />
            </Link>
          </div>

          <div className={`${styles.introImage} reveal-right`}>
            <Image
              src="/about-factory.jpg"
              alt="ARIKO International — East Queen Group industrial operations"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
            <div className={styles.imageBadge}>
              <span className={styles.badgeYear}>Est.</span>
              <span className={styles.badgeNum}>1968</span>
              <span className={styles.badgeSub}>Years of Trust</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className={styles.cardsGrid}>
          {[
            {
              title: "Welcome",
              body: `ARIKO International is a sister concern of EAST QUEEN GROUP, which is one of the oldest groups of Bangladesh and the 4th largest and oldest ship scrapers of the country. Established in 1968, the group has gone through many successes continuously.`,
              href: "/about-us",
              delay: 0,
            },
            {
              title: "Export",
              body: `We export mill scale, PET flakes, raw jute, jute made goods, finished leather etc through our company Ariko International, One World Trading and Syedpur Steels Limited. We are the 1st company in Bangladesh to start mill scale export from 2005.`,
              href: "/export",
              delay: 0.1,
            },
            {
              title: "Import",
              body: `We import car/auto accessories from Japan as a dealer of all types of HKS products in Bangladesh since 2004. We import car air filters, oil filters, exhaust pipes, performance/tuning parts from HKS, Japan.`,
              href: "/import",
              delay: 0.2,
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${card.delay}s` }}
            >
              <div className={styles.cardAccent} />
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
              <Link href={card.href} className={styles.cardLink} id={`overview-${card.title.toLowerCase()}`}>
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
