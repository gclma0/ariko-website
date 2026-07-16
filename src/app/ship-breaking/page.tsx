import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ScrollRevealWrapper from "@/components/ui/ScrollRevealWrapper";
import { Anchor, Shield, Leaf, Award, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ship Breaking",
  description:
    "ARIKO International operates Bangladesh's 4th largest ship breaking facility, established in 1981. Part of East Queen Group's proud industrial legacy.",
};

const HIGHLIGHTS = [
  { icon: Anchor, title: "Est. 1981", desc: "Over 40 years of ship breaking experience, making us one of the most seasoned yards in Bangladesh." },
  { icon: Award, title: "4th Largest", desc: "Ranked among the top 4 ship scrapping companies in Bangladesh by tonnage capacity." },
  { icon: Shield, title: "Safety First", desc: "Strict safety protocols and worker training programs to ensure zero-incident operations." },
  { icon: Leaf, title: "Eco Responsible", desc: "Compliant with Hong Kong Convention standards for environmentally sound ship recycling." },
];

export default function ShipBreakingPage() {
  return (
    <>
      <PageHero
        title="Ship Breaking Division"
        subtitle="Bangladesh's 4th largest ship scrapping operation — established 1981. Safety, integrity, and environmental responsibility."
        breadcrumb={[{ label: "Ship Breaking" }]}
        image="/hero-shipbreaking.jpg"
        tag="Est. 1981"
      />

      <ScrollRevealWrapper>
        <section className="section">
          <div className="container">
            {/* Main Content */}
            <div className={styles.introGrid}>
              <div className={`${styles.content} reveal-left`}>
                <div className="divider" />
                <p className={styles.eyebrow}>Our Ship Breaking Operations</p>
                <h2 className={styles.sectionTitle}>
                  Four Decades of{" "}
                  <span className="text-gradient">Expert Ship Recycling</span>
                </h2>
                <p className={styles.bodyText}>
                  East Queen Group began ship breaking operations in 1981, making it one of Bangladesh's oldest and most experienced ship recycling companies. Today, ARIKO International continues this proud tradition as the 4th largest ship scrapper in the country.
                </p>
                <p className={styles.bodyText}>
                  Our facility in Chattogram handles vessels of all types and sizes — from bulk carriers and tankers to container ships and offshore platforms. Every dismantling project is executed with rigorous safety standards and a commitment to minimizing environmental impact.
                </p>
                <p className={styles.bodyText}>
                  We recover a wide range of recyclable materials including steel plates, structural steel, machinery, pipes, cables, and non-ferrous metals. Our recovered steel feeds directly into Bangladesh's thriving rolling mill sector.
                </p>
                <Link href="/contact-us" className={styles.ctaBtn} id="shipbreaking-cta">
                  Enquire About Vessel Purchase <ArrowRight size={16} />
                </Link>
              </div>

              <div className={`${styles.imageWrap} reveal-right`}>
                <Image
                  src="/hero-shipbreaking.jpg"
                  alt="ARIKO International ship breaking yard"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.sideImage}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.badge}>
                    <span className={styles.badgeNum}>4th</span>
                    <span className={styles.badgeSub}>Largest in Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className={styles.highlightsGrid}>
              {HIGHLIGHTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className={`${styles.highlightCard} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className={styles.highlightIcon}><Icon size={24} /></div>
                    <h3 className={styles.highlightTitle}>{item.title}</h3>
                    <p className={styles.highlightDesc}>{item.desc}</p>
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
