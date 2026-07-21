import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ScrollRevealWrapper from "@/components/ui/ScrollRevealWrapper";
import { COMPANY } from "@/data/company";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ARIKO International and East Queen Group — one of Bangladesh's oldest industrial conglomerates. 4th largest ship scraper, pioneer mill scale exporter.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A proud sister concern of East Queen Group — shaping Bangladesh's industrial landscape since 1968."
        breadcrumb={[{ label: "About Us" }]}
        image="/about-factory.jpg"
        tag="Est. 1968"
      />

      <ScrollRevealWrapper>
        <section className={`section ${styles.aboutSection}`}>
          <div className="container">

            {/* Welcome + Mission/Vision/Spirit */}
            <div className={styles.introGrid}>
              <div className={`${styles.introLeft} reveal-left`}>
                <div className="divider" />
                <p className={styles.eyebrow}>Welcome to ARIKO International</p>
                <p className={styles.bodyText}>{COMPANY.welcomeText}</p>
                <p className={styles.bodyText}>{COMPANY.welcomeText2}</p>
              </div>

              <div className={`${styles.introRight} reveal-right`}>
                <div className={styles.mvs}>
                  <div className={styles.mvsItem}>
                    <p className={styles.mvsLabel}>Our Mission</p>
                    <p className={styles.mvsText}>{COMPANY.mission}</p>
                  </div>
                  <div className={styles.mvsItem}>
                    <p className={styles.mvsLabel}>Our Vision</p>
                    <p className={styles.mvsText}>{COMPANY.vision}</p>
                  </div>
                  <div className={styles.mvsItem}>
                    <p className={styles.mvsLabel}>Our Spirit</p>
                    <p className={styles.mvsText}>{COMPANY.spirit}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Come Work With Us CTA */}
            <div className={`${styles.ctaBanner} reveal`}>
              <div className={styles.ctaBannerContent}>
                <h3 className={styles.ctaBannerTitle}>Come work with us</h3>
                <p className={styles.ctaBannerSub}>Help us grow for companies all over the world.</p>
              </div>
              <Link href="/contact-us" className={styles.ctaBannerBtn} id="about-contact-cta">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>

            {/* Company at a Glance */}
            <div className={`${styles.glanceSection} reveal`}>
              <div className="divider" />
              <p className={styles.eyebrow}>Company at a Glance</p>
              <h2 className={styles.sectionTitle}>
                East Queen <span className="text-gradient">Group Concerns</span>
              </h2>
              <p className={styles.bodyText}>
                EAST QUEEN GROUP is one of the oldest groups of Bangladesh and 4th largest and oldest ship scrapers of the country.
                Established in the year 1968, the group has gone through many successes continuously. Concerns of the groups are:
              </p>

              <div className={styles.concernsContainer}>
                <div className={styles.concernsColumn}>
                  <h3 className={styles.columnTitle}>Our Group Companies</h3>
                  <div className={styles.concernsList}>
                    {COMPANY.groupCompanies.map((company, i) => (
                      <div key={i} className={styles.concernItem}>
                        <span className={styles.concernNum}>{String(i + 1).padStart(2, '0')}</span>
                        <p className={styles.concernName}>{company}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.concernsColumn}>
                  <h3 className={styles.columnTitle}>Business Associate Companies</h3>
                  <div className={styles.concernsList}>
                    {COMPANY.associateCompanies.map((company, i) => (
                      <div key={i} className={styles.concernItem}>
                        <span className={styles.concernNum}>{String(i + 1).padStart(2, '0')}</span>
                        <div>
                          <p className={styles.concernName}>{company.name}</p>
                          <a href={company.url} target="_blank" rel="noopener noreferrer" className={styles.concernLink}>
                            {company.url.replace(/^https?:\/\/(www\.)?/, '')}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </ScrollRevealWrapper>
    </>
  );
}
