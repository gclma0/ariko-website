import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ARIKO International privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        breadcrumb={[{ label: "Privacy Policy" }]}
        image="/hero-port.jpg"
        tag="Legal"
      />

      <section className={`section ${styles.legalSection}`}>
        <div className="container">
          <div className={styles.legalContent}>
            <p className={styles.lastUpdated}>Last updated: January 1, 2025</p>

            <div className={styles.block}>
              <h2 className={styles.h2}>1. Introduction</h2>
              <p>ARIKO International (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website scrapbangla.com or contact us for business purposes.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>2. Information We Collect</h2>
              <p>We may collect information about you in the following ways:</p>
              <h3 className={styles.h3}>Personal Data</h3>
              <p>When you contact us through our website, we collect personally identifiable information such as your name, email address, phone number, company name, and any message content you provide voluntarily.</p>
              <h3 className={styles.h3}>Derivative Data</h3>
              <p>Our web server may automatically collect standard log information including your IP address, browser type, operating system, referring URLs, and pages visited. This data is used solely for website analytics and security purposes.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>3. Use of Your Information</h2>
              <p>Information we collect may be used to:</p>
              <ul className={styles.list}>
                <li>Respond to your trade inquiries and business communications</li>
                <li>Send you relevant commercial information with your consent</li>
                <li>Improve and optimize our website user experience</li>
                <li>Monitor and analyze usage for security and performance</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>4. Disclosure of Your Information</h2>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to external parties without your consent, except:</p>
              <ul className={styles.list}>
                <li>To trusted third-party service providers who assist in our business operations (such as email service providers), bound by confidentiality agreements</li>
                <li>When required by law or to protect our rights, property, or safety</li>
                <li>In connection with a business merger, acquisition, or asset sale</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>5. Data Security</h2>
              <p>We implement industry-standard security measures including HTTPS encryption, access controls, and secure data storage to protect your personal information. However, no electronic transmission over the internet can be guaranteed to be 100% secure.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>6. Third-Party Websites</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any external sites you visit.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to access, correct, or delete personal information we hold about you. To exercise these rights, please contact us at <a href="mailto:shahrear@scrapbangla.com" className={styles.link}>shahrear@scrapbangla.com</a>.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>8. Changes to This Policy</h2>
              <p>We reserve the right to update this Privacy Policy at any time. We will notify you of significant changes by updating the &quot;Last updated&quot; date at the top of this page. Your continued use of the website after changes constitutes acceptance of the updated policy.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.h2}>9. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <div className={styles.contactBlock}>
                <strong>ARIKO International</strong><br />
                East Queen Group, Dhaka, Bangladesh<br />
                Email: <a href="mailto:shahrear@scrapbangla.com" className={styles.link}>shahrear@scrapbangla.com</a><br />
                Phone: <a href="tel:+8801713042261" className={styles.link}>+880 1713-042261</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
