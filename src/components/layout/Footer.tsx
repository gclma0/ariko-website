"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpCircle, ChevronDown } from "lucide-react";

import { COMPANY } from "@/data/company";
import NewsletterForm from "./NewsletterForm";
import { NAV_ITEMS } from "@/data/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const exportNav = NAV_ITEMS.find((n) => n.label === "Export");
  const importNav = NAV_ITEMS.find((n) => n.label === "Import");

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    export: false,
    import: false,
    company: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className={styles.footer}>
      {/* Glow line */}
      <div className={styles.glowLine} />

      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Column - Always Visible */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.footerLogo}>
            <Image
              src="/logo.svg"
              alt="ARIKO International Logo"
              width={200}
              height={28}
              className={styles.footerLogoImage}
              unoptimized
            />
          </Link>

          <p className={styles.brandDesc}>
            A sister concern of East Queen Group — Bangladesh's most trusted name
            in mill scale export, ship breaking, and industrial trading since 1968.
          </p>

          <div className={styles.contactList}>
            <div className={styles.contactPerson}>
              <strong>{COMPANY.managingDirector.name}</strong>
              <span className={styles.contactPersonSub}> – {COMPANY.managingDirector.role}</span>
            </div>
            <a href={`tel:${COMPANY.managingDirector.phone}`} className={styles.contactItem}>
              <Phone size={13} />
              <span>{COMPANY.managingDirector.phone}</span>
            </a>
            {COMPANY.managingDirector.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className={styles.contactItem}>
                <Mail size={13} />
                <span>{email}</span>
              </a>
            ))}
            <div className={styles.contactItem}>
              <MapPin size={13} />
              <span>Dhaka • Chattogram • Dubai</span>
            </div>
          </div>
        </div>

        {/* Export Column (Accordion on Mobile) */}
        <div className={styles.linkCol}>
          <button
            className={styles.accordionHeader}
            onClick={() => toggleSection("export")}
            aria-expanded={openSections.export}
          >
            <h4 className={styles.colTitle}>Export</h4>
            <ChevronDown
              size={16}
              className={`${styles.accordionChevron} ${
                openSections.export ? styles.chevronRotated : ""
              }`}
            />
          </button>
          <div
            className={`${styles.accordionContent} ${
              openSections.export ? styles.accordionContentOpen : ""
            }`}
          >
            <ul className={styles.linkList}>
              {exportNav?.children?.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    <span className={styles.linkArrow}>→</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Import & Company Column (Two separate Accordions on Mobile) */}
        <div className={styles.linkCol}>
          {/* Import Accordion */}
          <div className={styles.accordionGroup}>
            <button
              className={styles.accordionHeader}
              onClick={() => toggleSection("import")}
              aria-expanded={openSections.import}
            >
              <h4 className={styles.colTitle}>Import</h4>
              <ChevronDown
                size={16}
                className={`${styles.accordionChevron} ${
                  openSections.import ? styles.chevronRotated : ""
                }`}
              />
            </button>
            <div
              className={`${styles.accordionContent} ${
                openSections.import ? styles.accordionContentOpen : ""
              }`}
            >
              <ul className={styles.linkList}>
                {importNav?.children?.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.footerLink}>
                      <span className={styles.linkArrow}>→</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Accordion */}
          <div className={`${styles.accordionGroup} ${styles.companyGroup}`}>
            <button
              className={styles.accordionHeader}
              onClick={() => toggleSection("company")}
              aria-expanded={openSections.company}
            >
              <h4 className={styles.colTitle}>Company</h4>
              <ChevronDown
                size={16}
                className={`${styles.accordionChevron} ${
                  openSections.company ? styles.chevronRotated : ""
                }`}
              />
            </button>
            <div
              className={`${styles.accordionContent} ${
                openSections.company ? styles.accordionContentOpen : ""
              }`}
            >
              <ul className={styles.linkList}>
                <li>
                  <Link href="/about-us" className={styles.footerLink}>
                    <span className={styles.linkArrow}>→</span>About Us
                  </Link>
                </li>
                <li>
                  <Link href="/ship-breaking" className={styles.footerLink}>
                    <span className={styles.linkArrow}>→</span>Ship Breaking
                  </Link>
                </li>
                <li>
                  <Link href="/solar-power" className={styles.footerLink}>
                    <span className={styles.linkArrow}>→</span>Solar Power
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className={styles.footerLink}>
                    <span className={styles.linkArrow}>→</span>Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Column - Always Visible */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Stay Updated</h4>
          <p className={styles.newsletterDesc}>
            Get the latest updates on commodity prices and trade opportunities.
          </p>
          <NewsletterForm />

          <div className={styles.certBadges}>
            <div className={styles.certBadge}>Est. 1968</div>
            <div className={styles.certBadge}>East Queen Group</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarInner}`}>
          <p className={styles.copyright}>
            © {currentYear} ARIKO International. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <span className={styles.bottomDivider}>|</span>
            <Link href="/terms-and-conditions" className={styles.bottomLink}>
              Terms & Conditions
            </Link>
          </div>
          <a href="#top" className={styles.backToTop} aria-label="Back to top">
            <ArrowUpCircle size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
