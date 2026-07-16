import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpCircle } from "lucide-react";

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M3 5h4.5L21 19h-4.5z" fill="currentColor"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
import { COMPANY } from "@/data/company";
import NewsletterForm from "./NewsletterForm";
import { NAV_ITEMS } from "@/data/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const exportNav = NAV_ITEMS.find((n) => n.label === "Export");
  const importNav = NAV_ITEMS.find((n) => n.label === "Import");

  return (
    <footer className={styles.footer}>
      {/* Glow line */}
      <div className={styles.glowLine} />

      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Column */}
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
            <a href={`tel:${COMPANY.phone}`} className={styles.contactItem}>
              <Phone size={14} />
              <span>{COMPANY.phone}</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className={styles.contactItem}>
              <Mail size={14} />
              <span>{COMPANY.email}</span>
            </a>
            <div className={styles.contactItem}>
              <MapPin size={14} />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href={COMPANY.socialMedia.facebook} aria-label="Facebook" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href={COMPANY.socialMedia.twitter} aria-label="Twitter" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href={COMPANY.socialMedia.linkedin} aria-label="LinkedIn" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        {/* Export Column */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Export</h4>
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

        {/* Import Column */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Import</h4>
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

          <h4 className={styles.colTitle} style={{ marginTop: "2rem" }}>Company</h4>
          <ul className={styles.linkList}>
            <li><Link href="/about-us" className={styles.footerLink}><span className={styles.linkArrow}>→</span>About Us</Link></li>
            <li><Link href="/ship-breaking" className={styles.footerLink}><span className={styles.linkArrow}>→</span>Ship Breaking</Link></li>
            <li><Link href="/solar-power" className={styles.footerLink}><span className={styles.linkArrow}>→</span>Solar Power</Link></li>
            <li><Link href="/contact-us" className={styles.footerLink}><span className={styles.linkArrow}>→</span>Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
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
            <Link href="/privacy-policy" className={styles.bottomLink}>Privacy Policy</Link>
            <span className={styles.bottomDivider}>|</span>
            <Link href="/terms-and-conditions" className={styles.bottomLink}>Terms & Conditions</Link>
          </div>
          <a href="#top" className={styles.backToTop} aria-label="Back to top">
            <ArrowUpCircle size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
