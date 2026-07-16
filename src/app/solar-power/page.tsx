import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ScrollRevealWrapper from "@/components/ui/ScrollRevealWrapper";
import { Sun, Zap, BarChart3, Globe2, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Solar Power",
  description:
    "ARIKO International's solar energy division delivers commercial and industrial solar power solutions across Bangladesh.",
};

const OFFERINGS = [
  { icon: Sun, title: "Rooftop Solar", desc: "Commercial and industrial rooftop solar installations from 50kW to 5MW+." },
  { icon: Zap, title: "Grid-Tied Systems", desc: "Net metering capable systems that feed excess power back to the national grid." },
  { icon: BarChart3, title: "Energy Auditing", desc: "Comprehensive energy audit services to identify savings opportunities before installation." },
  { icon: Globe2, title: "Off-Grid Solutions", desc: "Reliable off-grid solar systems for remote areas and industrial facilities without grid access." },
];

export default function SolarPowerPage() {
  return (
    <>
      <PageHero
        title="Solar Power Division"
        subtitle="Harnessing Bangladesh's abundant sunshine to power a sustainable industrial future."
        breadcrumb={[{ label: "Solar Power" }]}
        image="/hero-solar.jpg"
        tag="Clean Energy"
      />

      <ScrollRevealWrapper>
        <section className="section">
          <div className="container">
            <div className={styles.introGrid}>
              <div className={`${styles.content} reveal-left`}>
                <div className="divider" />
                <p className={styles.eyebrow}>Our Solar Division</p>
                <h2 className={styles.sectionTitle}>
                  Powering Bangladesh with{" "}
                  <span className="text-gradient">Clean Solar Energy</span>
                </h2>
                <p className={styles.bodyText}>
                  As part of East Queen Group's commitment to a sustainable future, ARIKO International has launched a dedicated solar power division focused on bringing affordable, reliable, and clean energy to Bangladesh's commercial and industrial sectors.
                </p>
                <p className={styles.bodyText}>
                  Bangladesh receives an average of 4.5–5.5 kWh/m²/day of solar radiation — one of the highest in South Asia. Our solar solutions are designed to maximize this natural resource while delivering significant cost savings to our clients.
                </p>
                <p className={styles.bodyText}>
                  From initial energy audit to system design, procurement, installation, and ongoing maintenance — we provide a full-spectrum solar solution under one roof.
                </p>
                <Link href="/contact-us" className={styles.ctaBtn} id="solar-cta">
                  Get a Free Solar Consultation <ArrowRight size={16} />
                </Link>
              </div>

              <div className={`${styles.imageWrap} reveal-right`}>
                <Image
                  src="/hero-solar.jpg"
                  alt="Solar panel installation by ARIKO International"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.sideImage}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.badge}>
                    <span className={styles.badgeLabel}>Avg. ROI</span>
                    <span className={styles.badgeNum}>5–7 yrs</span>
                    <span className={styles.badgeSub}>Payback Period</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Offerings */}
            <div className={`${styles.offeringsHeader} reveal`}>
              <h2 className={styles.sectionTitle}>
                Our Solar <span className="text-gradient">Offerings</span>
              </h2>
            </div>
            <div className={styles.offeringsGrid}>
              {OFFERINGS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className={`${styles.offeringCard} reveal`} style={{ transitionDelay: `${i * 0.2}s` }}>
                    <div className={styles.offeringIcon}><Icon size={28} /></div>
                    <h3 className={styles.offeringTitle}>{item.title}</h3>
                    <p className={styles.offeringDesc}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollRevealWrapper>
    </>
  );
}
